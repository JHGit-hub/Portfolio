export default function SectionWrapper({ id, children, className = "" }) {

    return (
        // Composant reutilisable pour envelopper les sections avec un style cohérent
        <section id={id} className={`h-screen flex overflow-y-aut ${className}`}>
            <div className="w-[80%] max-w-6xl mx-auto flex flex-col">
                {children}
            </div>
        </section>

    );
}