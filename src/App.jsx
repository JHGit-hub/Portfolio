import './App.css';
import OverlaySideRight from "./components/OverlaySide";
import Footer from "./components/footer.jsx";
import Header from "./components/Header.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";

export default function App() {

    return (

        <div>
            <About />
            <Skills />
            <Projects />
            <Header />
            <OverlaySideRight />
            <Footer />
        </div>

    );
}