// Composant SkillCard
// Carte interactive présentant un domaine de compétences avec animations au survol.

import { motion } from 'framer-motion';

export default function SkillCard({ title, icons }) {

    // Animations des lignes de bordure (apparition progressive)
    const topLineAnim = {
        initial: { width: 0 },
        hover: {
            width: "100%",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const bottomLineAnim = {
        initial: { width: 0 },
        hover: {
            width: "100%",
            transition: {
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const rightLineAnim = {
        initial: { height: 0 },
        hover: {
            height: "100%",
            transition: {
                delay: 0.4,
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    const leftLineAnim = {
        initial: { height: 0 },
        hover: {
            height: "100%",
            transition: {
                delay: 0.4,
                duration: 0.4,
                ease: "easeInOut"
            }
        }
    };

    // Animation du titre lors du survol
    const titleAnim = {
        hover: {
            opacity: 0.2,
            transition: { duration: 0.3 }
        }
    };

    // Animation du bloc d’icônes lors du survol
    const iconsAnim = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    return (

        <motion.div className="skill-card" initial="initial" whileHover="hover">

            {/* Titre du domaine de compétences */}
            <motion.h3 className="skill-title" variants={titleAnim}>
                {title}
            </motion.h3>

            {/* Coins décoratifs fixes */}
            <div className="corner top-left"></div>
            <div className="corner bottom-right"></div>

            {/* Bordures animées */}
            <motion.div className="line top-line" variants={topLineAnim}></motion.div>
            <motion.div className="line bottom-line" variants={bottomLineAnim}></motion.div>
            <motion.div className="line right-line" variants={rightLineAnim}></motion.div>
            <motion.div className="line left-line" variants={leftLineAnim}></motion.div>

            {/* Icônes des technologies associées */}
            <motion.div className="icons" variants={iconsAnim}>
                {icons.map(({ Icon, label }, i) => (
                    <div key={i} className="item" aria-label={label}>
                        <Icon size={65} color="#F5F6F6" title={label} />
                        <span>{label}</span>
                    </div>
                ))}
            </motion.div>
            
        </motion.div>
    );
}
