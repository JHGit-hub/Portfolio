import React from "react";
import banner_v2 from '../assets/images/banner_v2.png';
import SectionWrapper from "../components/SectionWrapper";

export default function About() {

    return (
        // Section À propos utilisant le composant SectionWrapper
        <SectionWrapper id="about">
            <div className="flex justify-center items-center gap-[4rem]">
                <div className="flex-1 min-w-[300px]">
                    <h1>Bonjour, je suis Julien<span className="font-bold text-[3rem] block uppercase">Développeur Web FullStack</span></h1>
                    <div className="text-lg leading-relaxed space-y-4">
                        <p >Après plus de vingt ans d’expérience dans le secteur de l’optique, j’ai choisi de me reconvertir vers un domaine qui me passionne depuis toujours : le développement web.</p>
                        <p>Curieux, persévérant et motivé, j’ai validé une certification de Développeur Web Fullstack et acquis une solide maîtrise des technologies modernes telles que React.js, Symfony et WordPress.</p>
                        <p>Au-delà de la technique, je suis un vrai passionné de culture geek : fan de Batman et de LEGO, amateur de rock et d’électro, et grand admirateur de films comme Matrix, Retour vers le Futur et Le Seigneur des Anneaux. Supporter inconditionnel des équipes de France, surtout dans les sports collectifs, j’aborde chaque projet avec la même énergie et le même engagement. Cette reconversion me permet aujourd’hui d’allier technicité, créativité et plaisir d’apprendre au quotidien.</p>
                    </div>
                </div>
                <div className="flex-1 max-w-[650px] shrink-0">
                    <img src={banner_v2} alt="Banner Julien Hardy Développeur Web FullStack" className="rounded-lg shadow-lg w-full h-auto" />
                </div>
            </div> 
        </SectionWrapper>

    );
}