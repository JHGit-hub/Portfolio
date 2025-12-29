// Composant App
// Point d’entrée de l’application, responsable de l’orchestration globale
// (navigation, sections, layout et comportements transverses).

import './App.css';
import OverlaySideRight from "./components/OverlaySide";
import Footer from "./components/footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from './sections/Contact.jsx';
import FooterNavMobile from './components/FooterNavMobil.jsx';
import BackgroundOverlay from './components/BackgroundOverlay.jsx';
import useScrollSnap from './hooks/useScrollSnap.js';

export default function App() {

    // Gestion du scroll snap et de la navigation par sections
    const { activeIndex, navigateTo } = useScrollSnap("container");

    return (

        <div>

            {/* Éléments globaux : arrière-plan, header et navigation latérale */}
            <BackgroundOverlay />
            <Header onNavigate={navigateTo}/>
            <OverlaySideRight activeIndex={activeIndex} onNavigate={navigateTo}/>

            {/* Sections principales de l’application */}
            <main className="relative z-10">
                <div id="container">
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
            </main>

            {/* Navigations secondaires et pied de page */}
            <FooterNavMobile />
            <Footer />
        </div>

    );
}