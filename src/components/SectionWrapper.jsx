// Composant SectionWrapper
// Conteneur réutilisable permettant de structurer les sections de la page.

export default function SectionWrapper({ id, children, className = "" }) {

    return (

        <section id={id} className={`section-wrapper w-full min-h-screen flex ${className}`}>
            <div className="section-wrapper-content w-[80%] max-w-6xl mx-auto flex flex-col">
                {children}
            </div>
        </section>

    );
}