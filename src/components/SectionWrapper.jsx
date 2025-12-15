export default function SectionWrapper({ id, children, className = "" }) {

    return (
        // Composant reutilisable pour envelopper les sections avec un style cohérent
        <section id={id} className={`min-h-screen flex items-center justify-center ${className}`}>
            <div className="w-[80%] max-w-6xl mx-auto">
                {children}
            </div>
        </section>

    );
}