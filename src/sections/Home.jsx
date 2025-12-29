import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import { motion } from "framer-motion";
import { FaDiamond, FaArrowDownLong } from "react-icons/fa6";
import Globe from "../components/globe";

export default function Home() {

    const scrollIndicatorVariants = {
        animate: {
            y: [0, 4, 0],
            opacity: [0.7, 1, 0.7],
            transition: {
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
            },
        },
    };

    return (
        <SectionWrapper id="home">
            <div className="home-hero relative flex items-center">
                <div className="home-globe w-1/2 h-[400px]">
                    <Globe />
                </div>
                <div className="home-text-wrapper flex h-screen items-center">
                    <div className="home-text w-1/2 flex flex-col gap-[0.25rem]">
                        <p className="uppercase tracking-widest font-['poppins-regular'] text-[1.25rem] text-[var(--accent-color)]">Julien Hardy</p>
                        <h1>Développeur Web</h1>
                        <h2 className="subtitle">Full-Stack</h2>
                        <p className="home-stack font-['poppins-semibold'] flex gap-[0.25rem] items-center">
                            PHP <FaDiamond size={6} color="var(--accent-color)" /> React <FaDiamond size={6} color="var(--accent-color)" /> Symfony <FaDiamond size={6} color="var(--accent-color)" /> WordPress</p>
                    </div>
                </div>
                <div className="scroll-arrow absolute">
                    <motion.div className="flex items-center gap-2 opacity-70" variants={scrollIndicatorVariants} animate="animate">
                        <p className=" font-['poppins-semibold'] text-[0.75rem] flex gap-[0.25rem] items-center">Scrollez pour explorer<FaArrowDownLong size={12} color="var(--accent-color)" /></p>
                    </motion.div>
                </div>
            </div>
        </SectionWrapper>

    );
}