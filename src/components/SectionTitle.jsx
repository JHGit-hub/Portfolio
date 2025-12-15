export default function SectionTitle({ number, title }) {

    return (
        // Composant pour le titre de section avec un numéro et un titre
        <div className="section-title-wrapper self-start">
            <h2 className="section-title-front">{title}</h2>
            <span className="section-title-back">{number}</span>
        </div>
    );
}