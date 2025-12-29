// Composant FooterNavMobile
// Navigation mobile fixe offrant un accès rapide aux sections principales.

export default function FooterNavMobile() {

    return (

        <nav className="footer-nav-mobile fixed bottom-[0px] left-[0px] w-full z-60" aria-label="Navigation mobile principale">

            {/* Liens de navigation vers les sections */}
            <ul className="flex justify-around items-center h-[56px]">
                <li><a href="#about" title="Aller à la section À propos de moi">À propos</a></li>
                <li><a href="#skills" title="Aller à la section Mes compétences">Compétences</a></li>
                <li><a href="#projects" title="Aller à la section Mes projets">Projets</a></li>
            </ul>

        </nav>
        
    );
}
