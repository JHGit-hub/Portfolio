// Section "Contact" avec formulaire, informations de contact et modale de confirmation

import React from "react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import SectionWrapper from "../components/SectionWrapper";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";
import SuccessModal from "../components/SuccessModal";

export default function Contact() {

    // États liés à l’envoi du formulaire et à l’affichage de la modale
    const [showModal, setShowModal] = useState(false);
    const [isSending, setIsSending] = useState(false);

    // Gestion de l’envoi du formulaire via Formspree
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSending) return;

        setIsSending(true);

        const form = e.target;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xbdrrvde", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setShowModal(true);
                form.reset();
            } else {
                alert("Une erreur est survenue. Merci de réessayer.");
            }
        } catch (error) {
            console.error("Formspree error:", error);
            alert("Erreur réseau. Merci de réessayer.");
        }
    };

    // Fermeture de la modale et retour à la section d’accueil
    const handleRedirect = () => {
        setShowModal(false);
        document.getElementById("home")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const modalRoot = document.getElementById("modal-root");

    return (

        <div>

            <SectionWrapper id="contact">

                {/* En-tête de la section */}
                <div className="section-contact section-title-container h-[140px] flex items-center pt-[3rem]">
                    <SectionTitle number="04" title="Contact" />
                </div>

                {/* Contenu principal */}
                <div className="contact-container flex flex-1 flex-col items-center gap-[2rem] justify-center">
                    <div className="contact-content flex flex-row gap-[4rem] items-stretch">

                        {/* Informations de contact */}
                        <div className="contact-infos flex flex-col flex-1 min-w-[300px] gap-[1rem] justify-between">

                            <div className="contact-text flex flex-col gap-[1rem] text-lg leading-relaxed space-y-4 w-3/4">
                                <p>Vous avez un projet web ou besoin d’un accompagnement technique ?</p>
                                <p>Vous souhaitez échanger à propos d’un poste, d’une mission ou d’un projet web ?</p>
                                <p>Ce formulaire est à votre disposition pour toute prise de contact. Je reste disponible pour discuter de vos besoins et vous apporter une réponse rapide et adaptée.</p>
                            </div>

                            {/* Contact téléphonique */}
                            <div className="contact-phone flex flex-row items-center gap-[1rem] self-center">
                                <p>Appelez-moi</p>
                                <a href="tel:+33633093294" aria-label="Appeler par téléphone" className="flex gap-[0.5rem] items-center">
                                    <FaPhone size={20} color="var(--accent-color)" />
                                    <span className="font-['poppins-regular'] text-[1.5rem] text-[var(--accent-color)]">06.33.09.32.94.</span>
                                </a>
                            </div>

                            {/* Contact par email */}
                            <div className="contact-mail flex flex-row items-center gap-[1rem] self-center">
                                <p>Écrivez-moi</p>
                                <a href="mailto:contact@julien-hardy.fr" className="flex gap-[0.5rem] items-center" aria-label="Envoyer un mail">
                                    <FaEnvelope size={20} color="var(--accent-color)" />
                                    <span className="font-['poppins-regular'] text-[1.5rem] text-[var(--accent-color)]">contact@julien-hardy.fr</span>
                                </a>
                            </div>

                        </div>

                        {/* Formulaire de contact */}
                        <div className="contact-form-wrapper flex-1 max-w-[650px] shrink-0 rounded-[0.25rem] shadow-[0_8px_30px_0_hsla(180,5%,96%,0.3)] overflow-hidden aspect-[16/9]">
                            <ContactForm onSubmit={handleSubmit} />
                        </div>

                    </div>
                </div>

            </SectionWrapper>

            {/* Modale de confirmation après envoi du formulaire */}
            {showModal && modalRoot && createPortal(<SuccessModal onClose={handleRedirect} />, modalRoot)}

        </div>

    );
    
}