import SectionWrapper from "../components/SectionWrapper";
import SectionTitle from "../components/SectionTitle";
import SkillCard from "../components/SkillCard";
import { FaReact, FaSymfony, FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiSass, SiMiro } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills() {

    return (
        // Section des compétences utilisant le composant SectionWrapper pour un style cohérent
        <SectionWrapper id="skills">
            <div className="flex flex-col justify-center items-center gap-[2rem]">
                <SectionTitle number="02" title="Skills" />
                <p className="w-3/4">Malgré ma récente arrivée dans le développement web, j’ai rapidement acquis une solide maîtrise de plusieurs technologies grâce à ma capacité d’apprentissage et ma motivation. J’ai aujourd’hui un socle technique polyvalent qui couvre le front-end, le back-end, les frameworks modernes et les outils de conception.</p>

                {/* Grille centrée : 1 colonne sur mobile, 2 colonnes dès sm (>=640px) */}
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