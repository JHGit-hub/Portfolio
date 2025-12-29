// Composant OverlaySideRight
// Navigation latérale fixe permettant de parcourir les sections par index.
// L’indicateur visuel se déplace en fonction de la section active.

import { Fa0, Fa1, Fa2, Fa3, Fa4 } from "react-icons/fa6";

export default function OverlaySideRight({ activeIndex, onNavigate }) {

    return (

        <div className="overlay-side h-[90lvh] flex flex-col justify-center items-center fixed right-[0px] top-[0px] z-50 px-[1rem] py-[1rem]">

            {/* Navigation verticale par sections */}
            <nav className="self-end mr-[1rem]">
                <ul className="relative flex flex-col gap-[0.75rem]">

                    {/* Indicateur de section active */}
                    <span className="overlay-indicator absolute left-[-10px] top-[0px]"
                        style={{ transform: `translateY(${activeIndex * 30}px)` }}
                    />
                    
                    {/* Boutons de navigation vers les différentes sections */}
                    <li><button title="Accueil" className="cursor-pointer" onClick={() => onNavigate(0)}><Fa0 size={14} color={"var(--light-color)"}/></button></li>
                    <li><button title="À propos" className="cursor-pointer" onClick={() => onNavigate(1)}><Fa1 size={14} color={"var(--light-color)"}/></button></li>
                    <li><button title="Compétences" className="cursor-pointer" onClick={() => onNavigate(2)}><Fa2 size={14} color={"var(--light-color)"}/></button></li>
                    <li><button title="Projets" className="cursor-pointer" onClick={() => onNavigate(3)}><Fa3 size={14} color={"var(--light-color)"}/></button></li>
                    <li><button title="Contact" className="cursor-pointer" onClick={() => onNavigate(4)}><Fa4 size={14} color={"var(--light-color)"}/></button></li>
                
                </ul>
            </nav>

        </div>

    );
    
}