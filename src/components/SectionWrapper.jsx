export default function SectionWrapper({ id, children, className = "" }) {

    return (
        // Composant reutilisable pour envelopper les sections avec un style cohérent
        <section id={id} className={`w-full h-screen flex ${className}`}>
            <div className="section-wrapper w-[80%] max-w-6xl mx-auto flex flex-col">
                {children}
            </div>
        </section>

    );
}