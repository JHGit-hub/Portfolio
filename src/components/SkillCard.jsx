import { motion } from 'framer-motion';

export default function SkillCard({ title, icons }) {

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

    const titleAnim = {
        hover: {
            opacity: 0.2,
            transition: { duration: 0.3 }
        }
    };

    const iconsAnim = {
        hover: {
            scale: 1.05,
            transition: { duration: 0.3 }
        }
    };

    return (
        <motion.div
            className="skill-card"
            initial="initial"
            whileHover="hover"
        >

            <motion.h3 className="skill-title" variants={titleAnim}>
                {title}
            </motion.h3>

            {/* Coins — on les laisse FIXES */}
            <div className="corner top-left"></div>
            <div className="corner bottom-right"></div>

            {/* TOP */}
            <motion.div className="line top-line" variants={topLineAnim}></motion.div>

            {/* BOTTOM — part DU COIN DROITE */}
            <motion.div className="line bottom-line" variants={bottomLineAnim}></motion.div>

            {/* RIGHT */}
            <motion.div className="line right-line" variants={rightLineAnim}></motion.div>

            {/* LEFT */}
            <motion.div className="line left-line" variants={leftLineAnim}></motion.div>

            {/* Icônes */}
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
