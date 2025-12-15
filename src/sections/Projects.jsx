import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { FaReact, FaSymfony, FaWordpress, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiSass, SiMiro, SiJson } from "react-icons/si";
import CutiePandaStart from '../assets/images/project-cutie-panda/cutie-panda-start-2.jpg';
import CutiePandaGaming from '../assets/images/project-cutie-panda/cutie-panda-gaming.png';
import EmptyFridgeTitle from '../assets/images/project-empty-fridge/empty-fridge-title-2.jpg';
import EmptyFridgeIngredient from '../assets/images/project-empty-fridge/empty-fridge-ingredient.png';
import CinemaTitle from '../assets/images/project-cinema/cinema-title-2.jpg';
import CinemaReservation from '../assets/images/project-cinema/cinema-reservation.png';
import HotelTitle from '../assets/images/project-hotel/hotel-title-2.jpg';
import HotelBooking from '../assets/images/project-hotel/hotel-booking.png';
import BolonewsTitle from '../assets/images/project-bolonews/bolonews-title-2.jpg';
import BolonewsArticle from '../assets/images/project-bolonews/bolonews-article.png';
import FlourTitle from '../assets/images/project-flour/flour-title-2.jpg';
import FlourList from '../assets/images/project-flour/flour-list.png';

export default function Projects() {

    return (

        <SectionWrapper id="projects" className="projects-section">
            <div className="flex flex-col justify-center items-center gap-[2rem]">
                <SectionTitle number="03" title="Projects" />
                <p className="w-3/4">Mes projets reflètent ma progression, ma capacité d’apprentissage et ma rigueur dans la conception d’applications web. Ils témoignent de ma volonté constante d’évoluer et de créer des solutions fiables et bien structurées.</p>

                <div className="projects-grid mt-64 w-full h-[670px] p-[2rem]">

                    {/* Carte du projet Cutie Panda*/}
                    <ProjectCard
                        title="Cutie Panda"
                        description="Application React de gestion de personnage."
                        imageSrcFront={CutiePandaStart}
                        imageSrcBack={CutiePandaGaming}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: FaReact, label: "React.js" }
                        ]}
                        projectLink=""
                    />

                    {/* Carte du projet Empty Fridge*/}
                    <ProjectCard
                        title="Empty Fridge"
                        description="Application React de suggestion de recettes selon les ingrédients disponibles"
                        imageSrcFront={EmptyFridgeTitle}
                        imageSrcBack={EmptyFridgeIngredient}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: FaReact, label: "React.js" },
                        { Icon: SiJson, label: "Json" }
                        ]}
                        projectLink=""
                    />

                    {/* Carte du projet Borne Cinéma*/}
                    <ProjectCard
                        title="Borne Cinéma"
                        description="Application web simulant une borne interactive de cinéma, du choix du film au ticket final."
                        imageSrcFront={CinemaTitle}
                        imageSrcBack={CinemaReservation}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: FaJs, label: "JavaScript" },
                        { Icon: SiSass, label: "Sass" }
                        ]}
                        projectLink="https://jhgit-hub.github.io/Examen-FrontEnd-Pathe/"
                    />

                    {/* Carte du projet Hotel*/}
                    <ProjectCard
                        title="Hotel 4 Éléments"
                        description="Application web d’un groupe hôtelier avec page dédiée, formulaire de réservation et animations JavaScript."
                        imageSrcFront={HotelTitle}
                        imageSrcBack={HotelBooking}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: FaJs, label: "JavaScript" },
                        { Icon: SiSass, label: "Sass" }
                        ]}
                        projectLink="https://jhgit-hub.github.io/Hotel-4-elements/"
                    />

                    {/* Carte du projet Bolonews*/}
                    <ProjectCard
                        title="Bolonews"
                        description="Application permettant de créer, publier et administrer des articles, avec gestion des droits utilisateurs."
                        imageSrcFront={BolonewsTitle}
                        imageSrcBack={BolonewsArticle}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: SiMysql, label: "MySQL" },
                        { Icon: FaSymfony, label: "Symfony" }
                        ]}
                        projectLink=""
                    />

                    {/* Carte du projet Farine et Potiron*/}
                    <ProjectCard
                        title="Farine et Potiron"
                        description="Site communautaire dédié aux recettes, avec gestion des utilisateurs, interactions et recherche avancée."
                        imageSrcFront={FlourTitle}
                        imageSrcBack={FlourList}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: FaJs, label: "JavaScript" },
                        { Icon: FaPhp, label: "PHP" },
                        { Icon: SiMysql, label: "MySQL" }
                        ]}
                        projectLink=""
                    />

                </div>
            </div>
        </SectionWrapper>

    );

}