import ActionBtn from "./buttons/ActionBtn";

export default function ContactForm({ onSubmit }) {

    return (

        <form 
            onSubmit={onSubmit} 
            className="w-full flex flex-col gap-[1rem] p-[0.5rem]"
        >

            {/* Email */}
            <div className="flex flex-col gap-[1rem]">
                <label
                    htmlFor="email"
                    className="uppercase font-['poppins-semibold'] text-[1rem] text-[var(--accent-color)]"
                >
                    Adresse email de l'expéditeur
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="exemple@email.com"
                    className="w-full rounded-[0.25rem] border border-gray-300 p-[0.5rem] font-['poppins-regular'] text-[1rem]
                 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)] radius"
                />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-[1rem]">
                <label
                    htmlFor="message"
                    className="uppercase font-['poppins-semibold'] text-[1rem] text-[var(--accent-color)]"
                >
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Votre message..."
                    className="w-full rounded-[0.25rem] border border-gray-300 p-[0.5rem] font-['poppins-regular'] text-[1rem] resize-none
                 focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
                />
            </div>

            {/* Bouton */}
            <ActionBtn type="submit" label="envoyer" />

        </form>


    );
}