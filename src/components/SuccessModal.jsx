// Composant SuccessModal
// Modale de confirmation affichée après l’envoi du formulaire de contact.

import ActionBtn from "./buttons/ActionBtn";

export default function SuccessModal({ onClose }) {

    return (

        <div className="modal flex fixed justify-center items-center">
            <div className="modal-content flex flex-col items-center text-center rounded-[4px] p-[0.5rem] w-full">

                {/* Titre de confirmation */}
                <p className="modal-title ">Merci pour votre message</p>

                {/* Texte de confirmation d'envoi */}
                <span className="modal-text" >
                    Votre message a bien été envoyé. 
                    Je vous répondrai dans les meilleurs délais.
                </span>

                {/* Intégration du bouton d'action de fermeture de la modale */}
                <ActionBtn type="button" label="Accueil" onClick={onClose} />
                
            </div>
        </div>

    );
}