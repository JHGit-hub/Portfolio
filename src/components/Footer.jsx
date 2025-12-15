import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";
import { FaCircleArrowUp } from "react-icons/fa6";

export default function Footer() {

    return (
        // Composant pour le pied de page avec des liens vers les réseaux sociaux et les informations de copyright
        <footer className="footer w-full flex flex-row justify-between items-center fixed bottom-[0px] z-50 px-[1rem]">
            <div className="social-media-links flex self-start items-center gap-[1rem] ml-[1rem]">
                <a href="https://github.com/JHGit-hub" target="_blank" rel="noopener noreferrer">
                    <FaGithub size={24} />
                </a>
                <a href="https://www.linkedin.com/in/julien-hardy-3b4b621b2/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size={24} />
                </a>
                <a href="mailto:jhardy.webdev@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope size={24} />
                </a>
            </div>
            <div className="text-center py-6 text-sm">
                <p>© {new Date().getFullYear()} Julien Hardy — Créé avec React & Tailwind CSS</p>
            </div>
            <div className="mr-[1rem] items-start mr-[1rem]">
                <a href="#backtotop" title="Retour en haut de page">
                    <FaCircleArrowUp size={24} />
                </a>
            </div>
        </footer>
    );
}
