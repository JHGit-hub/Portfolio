// Section "À propos" présentant le profil et le parcours professionnel
 
import React from "react";
import banner_v2 from '../assets/images/banner_v2.png';
import SectionTitle from "../components/SectionTitle";
import SectionWrapper from "../components/SectionWrapper";
import DownloadBtn from "../components/buttons/downloadBtn";

export default function About() {

    return (

        <SectionWrapper id="about">

            {/* En-tête de la section */}
            <div className="section-title-container h-[140px] flex items-center pt-[3rem]">
                <SectionTitle number="01" title="À propos de moi"/>
            </div>

            {/* Contenu principal */}
            <div className="about-container flex flex-1 flex-col items-center gap-[2rem] justify-center">
                <h3 className="about-title self-start normal-case">Bonjour, je suis Julien</h3>
                <div className="about-content flex flex-row gap-[4rem] items-stretch">

                    {/* Bloc texte : présentation et parcours */}
                    <div className="about-text flex flex-col flex-1 min-w-[300px] gap-[1rem] justify-between">

                        <p className="about-subtitle font-['poppins-semibold'] text-[3rem] block uppercase">Développeur Web FullStack</p>
                        <div className="about-paragraphs flex flex-col gap-[1rem] text-lg leading-relaxed space-y-4 w-3/4">
                            <p>Après plus de vingt ans d’expérience dans le secteur de l’optique, dont quinze ans en tant que manager, j’ai choisi de me reconvertir vers le développement web. Cette expérience m’a permis d’acquérir rigueur, sens de l’organisation et gestion de projets, des compétences que je mets aujourd’hui au service de solutions digitales efficaces.</p>
                            <p>Certifié Développeur Web Fullstack, je maîtrise des technologies modernes telles que React.js, Symfony et WordPress, avec une approche orientée qualité, performance et expérience utilisateur.</p>
                        </div>

                        {/* Appel à l’action : téléchargement du CV */}
                        <div className="about-cta mt-[2rem] flex flex-row items-center gap-[1.5rem]">
                            <p>Mon CV est consultable ici</p>
                            <DownloadBtn URLfile="/documents/CV_JH.pdf"/>
                        </div>
                        
                    </div>

                    {/* Illustration visuelle du profil */}
                    <div className="about-image flex-1 max-w-[650px] shrink-0 rounded-[4px] shadow-[0_8px_30px_0_hsla(180,5%,96%,0.3)] overflow-hidden aspect-[16/9]">
                        <img src={banner_v2} alt="Banner Julien Hardy Développeur Web FullStack" className="w-full h-full object-cover" />
                    </div>

                </div>

            </div>

        </SectionWrapper>

    );
    
}