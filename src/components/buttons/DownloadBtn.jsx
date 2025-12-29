// Composant DownloadBtn
// Bouton de téléchargement animé avec effet de transition au survol.

import { FaDownload } from "react-icons/fa"; 
import { motion } from "framer-motion"; 

// Animation de l’icône principale au survol
const iconVariants = { 
    initial: { y: -20, opacity: 0 }, 
    hover: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
};

// Animation de l’icône initiale (disparition progressive)
const iconInit = {
    initial: { opacity: 1, color: "var(--light-color)" },
    hover: { opacity: 0, color: "var(--accent-color)", transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
};

export default function DownloadBtn({ URLfile }) { 
    
    return (
    
        <motion.a href={URLfile} download className="Download-Btn" initial="initial" whileHover="hover">

            {/* Icône animée affichée au survol */}
            <motion.div variants={iconVariants}> 
                <FaDownload className="svgIcon z-10" /> 
            </motion.div>

            {/* Icône initiale visible avant interaction */}
            <motion.div variants={iconInit} className="divSvgIconInit z-0">
                <FaDownload className="svgIconInit" />
            </motion.div>

            {/* Éléments décoratifs */}
            <span className="icon2"></span>
            <span className="tooltip">Download</span>

        </motion.a>
        
    );
    
}