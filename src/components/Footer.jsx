// Composant Footer
// Affiche les liens sociaux, les mentions légales et un accès rapide au haut de page.

import { FaGithub, FaLinkedin, FaEnvelope, FaCircleArrowUp, FaRegCopyright  } from "react-icons/fa6";

export default function Footer() {

    return (

        <footer className="footer w-full flex flex-row justify-between items-center fixed bottom-[0px] z-50 px-[1rem]">

            {/* Liens vers les réseaux sociaux */}
            <div className="social-media-links flex self-start items-center gap-[1rem] ml-[1rem]">
                <a href="https://github.com/JHGit-hub" title="lien vers ma page GitHub" aria-label="Voir le profil GitHub de Julien Hardy" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} color="var(--accent-color)"/>
                </a>
                <a href="https://www.linkedin.com/in/julien-hardy-3b4b621b2/" title="lien vers ma page LinkedIn" aria-label="Voir le profil LinkedIn de Julien Hardy" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} color="var(--accent-color)"/>
                </a>
                <a href="mailto:contact@julien-hardy.fr" title="Envoyez-moi un mail" aria-label="Envoyer un email à Julien Hardy">
                    <FaEnvelope size={24} color="var(--accent-color)"/>
                </a>
            </div>

            {/* Mentions et copyright */}
            <div className="footer-text text-center py-6 text-sm">
                <p className="flex items-center gap-[0.25rem]"><FaRegCopyright size={13} color="var(--accent-color)"/> {new Date().getFullYear()} Julien Hardy — Créé avec React & Tailwind CSS</p>
            </div>

            {/* Bouton de retour en haut de page */}
            <div className="footer-top mr-[1rem] items-start mr-[1rem]">
                <a href="#home" title="Revenir en haut de page" aria-label="Revenir en haut de la page">
                    <FaCircleArrowUp size={24} color="var(--accent-color)"/>
                </a>
            </div>

        </footer>
        
    );
}
