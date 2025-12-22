import logo from '../assets/images/logo_JH_white.svg';
import PrimaryBtn from './buttons/PrimaryBtn.jsx';

export default function Logo() {

    return (
        <div className="header flex flex-row justify-between items-center m-[1rem]">
            <a href="#home" className=" flex fixed top-[0px] left-[0px] z-50" aria-label="Retour à l'accueil">
                <img src={logo} alt="Logo Julien Hardy" className="h-[4rem] w-[4rem] m-[1rem]" />
            </a>
            <div className=" flex fixed top-[0px] right-[0px] z-50 m-[1rem]">
                <PrimaryBtn to="#contact" label="Contact" />
            </div>
        </div>
    )
}