// Composant BackgroundOverlay
// Arrière-plan global fixe avec image et couche d’assombrissement.
// Utilisé pour unifier l’identité visuelle sur l’ensemble du site

import BackgroundLogo from '../assets/images/background.jpg';
export default function BackgroundOverlay() {


    return (

        <div className="background-overlay fixed z-0 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundLogo})` }}>
            <div className="absolute inset-0 bg-[#212529]/90" />
        </div>

    );
}