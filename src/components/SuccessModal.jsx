import ActionBtn from "./buttons/ActionBtn";

export default function SuccessModal({ onClose }) {

    return (

        <div className="modal flex fixed justify-center items-center">
            <div className="modal-content flex flex-col items-center text-center rounded-[4px] p-[0.5rem] w-full">
                <p className="modal-title ">Merci pour votre message</p>
                <span className="modal-text" >
                    Votre message a bien été envoyé. 
                    Je vous répondrai dans les meilleurs délais.
                </span>
                <ActionBtn type="button" label="Accueil" onClick={onClose} />
            </div>
        </div>

    );
}