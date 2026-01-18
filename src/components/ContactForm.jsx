// Composant ContactForm
// Formulaire de contact permettant la saisie et l’envoi d’un message utilisateur.

import ActionBtn from "./buttons/ActionBtn";

export default function ContactForm({ onSubmit }) {

    return (

        <form onSubmit={onSubmit} className="contact-form w-full flex flex-col gap-[1rem] p-[0.5rem]">

            {/* Champ de saisie de l’adresse email */}
            <div className="contact-form-group flex flex-col gap-[1rem]">
                <label
                    htmlFor="email"
                    className="contact-form-label uppercase font-['poppins-semibold'] text-[1rem] text-[var(--accent-color)]"
                >
                    Adresse email de l'expéditeur
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="exemple@email.com"
                    className="contact-form-input w-full rounded-[0.25rem] border border-gray-300 p-[0.5rem] font-['poppins-regular'] text-[1rem]
                 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] radius"
                />
            </div>

            {/* Champ de saisie du message */}
            <div className="contact-form-group flex flex-col gap-[1rem]">
                <label
                    htmlFor="message"
                    className="contact-form-label uppercase font-['poppins-semibold'] text-[1rem] text-[var(--accent-color)]"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Votre message..."
                    className="contact-form-input w-full rounded-[0.25rem] border border-gray-300 p-[0.5rem] font-['poppins-regular'] text-[1rem] resize-none
                 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                />
            </div>

            {/* Action de soumission du formulaire */}
            <div className="contact-form-submit pb-[2rem]">
                <ActionBtn type="submit" label="envoyer" />
            </div>

        </form>
        
    );
}