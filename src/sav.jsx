import ActionBtn from "./buttons/ActionBtn";

export default function SuccessModal({ onClose }) {

    return (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center
                    bg-black/60 backdrop-blur-sm">

            <div className="bg-[var(--dark-color)] rounded-[4px] p-[0.5rem] max-w-md w-full text-center
                      shadow-xl animate-fadeIn">

                <h2 className="text-[1.25rem] font-['poppins-semibold'] text-[var(--accent-color)] mb-4">
                    Merci pour votre message
                </h2>

                <p className="text-[1rem] text-[var(--light-color)] font-['poppins-regular'] mb-6">
                    Votre message a bien été envoyé.
                    Je vous répondrai dans les meilleurs délais.
                </p>

                <ActionBtn type="button" label="Retour à l'accueil" onClick={onClose} />

            </div>
        </div>
    );
}