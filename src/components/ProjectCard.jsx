// Composant ProjectCard
// Carte interactive présentant un projet avec effet de flip au survol.
// Affiche un visuel, une description, les technologies utilisées et un lien externe.

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState } from "react";
import TechnoUsed from "./TechnoUsed";
import SecondaryBtn from "./buttons/SecondaryBtn.jsx";

export default function ProjectCard({ title, description, imageSrcFront, imageSrcBack, projectLink, technos }) {

    // État contrôlant l’animation de retournement de la carte
    const [isFlipped, setIsFlipped] = useState(false);

    return (

        <div className="project-card-container flex flex-col items-center gap-[1rem]">

            {/* Carte interactive avec animation de retournement */}
            <motion.div className="project-card" onHoverStart={() => setIsFlipped(true)} onHoverEnd={() => setIsFlipped(false)}>

                <motion.div className="project-card-inner"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.65, 0, 0.076, 1]}}
                    style={{ transformStyle: "preserve-3d" }}>
                        
                    {/* Face avant : visuel et titre du projet */}
                    <div className="project-card-front flex justify-center bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${imageSrcFront})`, backfaceVisibility: "hidden" }}>

                        <div className="front-card-title relative">
                            <div className="project-card-wrapper relative">
                                <h3 className="project-title text-[var(--light-color)] z-10 relative">
                                    {title}
                                </h3>
                                <div className="blur-bg" />
                            </div>
                        </div>

                    </div>

                    {/* Face arrière : description et technologies */}
                    <div className="project-card-back flex justify-center bg-[var(--light-color)] bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${imageSrcBack})`, backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>

                        <div className="project-card relative flex flex-col justify-center items-center gap-[1rem] p-[1rem]">
                            <p className="techno-description text-[var(--dark-color)] relative z-10">
                                {description}
                            </p>
                            <TechnoUsed icons={technos} />
                            <div className="blur-bg-back" />
                        </div>

                    </div>

                </motion.div>

            </motion.div>

            {/* Action secondaire menant au projet */}
            <SecondaryBtn to={projectLink} />

        </div>
        
    );

}