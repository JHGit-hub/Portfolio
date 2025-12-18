import React from "react";
import SectionWrapper from "../components/SectionWrapper";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { FaReact, FaSymfony, FaHtml5, FaCss3Alt, FaJs, FaPhp, } from "react-icons/fa";
import { SiMysql, SiSass, SiJson } from "react-icons/si";
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
import { FaGithub } from "react-icons/fa6";

export default function Projects() {

    return (

        <SectionWrapper id="projects">
            <div className="h-[140px] flex items-center pt-[1rem]">
                <SectionTitle number="03" title="Projects" />
            </div>
            <div className="flex flex-1 flex-col items-center gap-[1rem] justify-center">
                <div className="w-3/4 flex flex-col gap-[0.5rem]">
                    <p>Mes projets reflètent ma progression, ma capacité d’apprentissage et ma rigueur dans la conception d’applications web. Ils témoignent de ma volonté constante d’évoluer et de créer des solutions fiables et bien structurées.</p>
                    <div className="flex flex-row gap-[1rem] items-center">
                        <p>Vous pouvez consulter l’ensemble de mes projets et de mes dépôts sur mon profil GitHub</p>
                        <a href="https://github.com/JHGit-hub" target="_blank" rel="noopener noreferrer" aria-label="Voir mon profil GitHub">
                            <FaGithub size={20} color="var(--accent-color)"/>
                        </a>
                    </div>
                </div>
                

                <div className="projects-grid mt-64 w-full h-[670px] p-[2rem]">

                    {/* Carte du projet Cutie Panda*/}
                    <ProjectCard
                        title="Cutie Panda"
                        description="Application React de gestion de personnage, conçue pour un affichage mobile."
                        imageSrcFront={CutiePandaStart}
                        imageSrcBack={CutiePandaGaming}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: FaReact, label: "React.js" }
                        ]}
                        projectLink="https://cutie-panda.julien-hardy.fr/"
                    />

                    {/* Carte du projet Empty Fridge*/}
                    <ProjectCard
                        title="Empty Fridge"
                        description="Application React de suggestion de recettes selon les ingrédients disponibles, conçue pour un affichage mobile"
                        imageSrcFront={EmptyFridgeTitle}
                        imageSrcBack={EmptyFridgeIngredient}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: FaReact, label: "React.js" },
                        { Icon: SiJson, label: "Json" }
                        ]}
                        projectLink="https://emptyfridge.julien-hardy.fr/"
                    />

                    {/* Carte du projet Borne Cinéma*/}
                    <ProjectCard
                        title="Borne Cinéma"
                        description="Application web simulant une borne interactive de cinéma, du choix du film au ticket final,  conçue pour un affichage desktop et tablette en mode paysage."
                        imageSrcFront={CinemaTitle}
                        imageSrcBack={CinemaReservation}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: FaJs, label: "JavaScript" },
                        { Icon: SiSass, label: "Sass" }
                        ]}
                        projectLink="https://cinema.julien-hardy.fr/"
                    />

                    {/* Carte du projet Hotel*/}
                    <ProjectCard
                        title="Hotel 4 Éléments"
                        description="Application web d’un groupe hôtelier avec page dédiée, formulaire de réservation et animations JavaScript, responsive desktop et mobile."
                        imageSrcFront={HotelTitle}
                        imageSrcBack={HotelBooking}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: FaJs, label: "JavaScript" },
                        { Icon: SiSass, label: "Sass" }
                        ]}
                        projectLink="https://hotel4elements.julien-hardy.fr/"
                    />

                    {/* Carte du projet Bolonews*/}
                    <ProjectCard
                        title="Bolonews"
                        description="Application permettant de créer, publier et administrer des articles, avec gestion des droits utilisateurs, conçue pour un affichage desktop."
                        imageSrcFront={BolonewsTitle}
                        imageSrcBack={BolonewsArticle}
                        technos={[{
                            Icon: FaHtml5, label: "HTML5"
                        },
                        { Icon: FaCss3Alt, label: "CSS3" },
                        { Icon: SiMysql, label: "MySQL" },
                        { Icon: FaSymfony, label: "Symfony" }
                        ]}
                        projectLink="https://bolonews.julien-hardy.fr/"
                    />

                    {/* Carte du projet Farine et Potiron*/}
                    <ProjectCard
                        title="Farine et Potiron"
                        description="Site communautaire dédié aux recettes, avec gestion des utilisateurs, interactions et recherche avancée, conçue pour un affichage desktop."
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
                        projectLink="https://flour.julien-hardy.fr/"
                    />

                </div>
            </div>
        </SectionWrapper>

    );

}