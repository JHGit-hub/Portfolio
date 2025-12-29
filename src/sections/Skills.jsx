// Section "Compétences" présentant les domaines techniques et les outils maîtrisés

import SectionWrapper from "../components/SectionWrapper";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { FaReact, FaSymfony, FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiSass, SiMiro } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {

    return (

        <SectionWrapper id="skills">

            {/* En-tête de la section */}
            <div className="section-title-container h-[140px] flex items-center pt-[3rem]">
                <SectionTitle number="02" title="Mes compétences"/>
            </div>

            {/* Présentation de la section */}
            <div className="skills-text flex flex-1 flex-col items-center gap-[2rem] justify-center">
                <p className="skills-paragraphs w-3/4">Malgré ma récente arrivée dans le développement web, j’ai rapidement acquis une solide maîtrise de plusieurs technologies grâce à ma capacité d’apprentissage et ma motivation. J’ai aujourd’hui un socle technique polyvalent qui couvre le front-end, le back-end, les frameworks modernes et les outils de conception.</p>

                {/* Grille de présentation des compétences */}
                <div className="skills-grid mt-64">

                    {/* Carte de compétence pour le développement Front-End */}
                    <SkillCard
                        title="Front-End"
                        icons={[{ 
                              Icon: FaHtml5, label: "HTML5" }, 
                            { Icon: FaCss3Alt, label: "CSS3" }, 
                            { Icon: FaJs, label: "JavaScript" }, 
                            { Icon: SiSass, label: "Sass" }
                        ]}
                    />

                    {/* Carte de compétence pour le développement Back-End */}
                    <SkillCard
                        title="Back-End"
                        icons={[{ 
                              Icon: FaPhp, label: "PHP" }, 
                            { Icon: SiMysql, label: "MySQL" }
                        ]}
                    />

                    {/* Carte de compétence pour les Frameworks */}
                    <SkillCard
                        title="Frameworks"
                        icons={[{ 
                              Icon: FaReact, label: "React" }, 
                            { Icon: FaSymfony, label: "Symfony" }, 
                            { Icon: SiTailwindcss, label: "Tailwind CSS" }, 
                            { Icon: FaWordpress, label: "WordPress" }
                        ]}
                    />

                    {/* Carte de compétence pour les Tools */}
                    <SkillCard
                        title="Tools"
                        icons={[{ 
                              Icon: FaFigma, label: "Figma" }, 
                            { Icon: SiMiro, label: "Miro" }, 
                            { Icon: VscVscode, label: "VS Code" }
                        ]}
                    />

                </div>
            </div>
        </SectionWrapper>
    )
}