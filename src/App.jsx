import './App.css';
import OverlaySideRight from "./components/OverlaySide";
import Footer from "./components/footer.jsx";
import Header from "./components/Header.jsx";
import Home from "./sections/Home.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from './sections/Contact.jsx';
import BackgroundOverlay from './components/BackgroundOverlay.jsx';
import useScrollSnap from './hooks/useScrollSnap.js';

export default function App() {

    const { activeIndex, navigateTo } = useScrollSnap("container");

    return (

        <div>
            <BackgroundOverlay />
            <Header onNavigate={navigateTo}/>
            <OverlaySideRight activeIndex={activeIndex} onNavigate={navigateTo}/>

            <main className="relative z-10">
                <div id="container">
                    <Home />
                    <About />
                    <Skills />
                    <Projects />
                    <Contact />
                </div>
            </main>

            <Footer />
        </div>

    );
}