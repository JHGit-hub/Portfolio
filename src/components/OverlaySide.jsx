import { Fa0 } from "react-icons/fa6";
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { Fa4 } from "react-icons/fa6";





export default function OverlaySideRight() {


  return (
    // Composant pour l'overlay latéral droit avec navigation et bouton de contact
    <div className="h-[90lvh] flex flex-col justify-center items-center fixed right-[0px] top-[0] z-50 px-[1rem] py-[1rem]">

        <nav className="self-end mr-[1rem]">
            <ul>
                <li><a href="#home" title="Home"><Fa0 size={14}/></a></li>
                <li><a href="#about" title="About Me"><Fa1 size={14}/></a></li>
                <li><a href="#skills" title="Skills"><Fa2 size={14}/></a></li>
                <li><a href="#projects" title="Projets"><Fa3 size={14}/></a></li>
                <li><a href="#contact" title="Contact"><Fa4 size={14}/></a></li>
            </ul>
        </nav>

    </div>
  );
}