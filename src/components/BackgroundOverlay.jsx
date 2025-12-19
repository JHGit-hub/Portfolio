import BackgroundLogo from '../assets/images/background.jpg';
export default function BackgroundOverlay() {


    return (

        <div className="background-overlay fixed z-0 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(${BackgroundLogo})` }}>
            <div className="absolute inset-0 bg-[#212529]/90" />
        </div>

    );
}