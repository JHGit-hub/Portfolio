// Composant réutilisable d’affichage du titre des sections

export default function SectionTitle({ number, title }) {

    return (

        <div className="section-title-wrapper self-start">
            <h2 className="section-title-front">{title}</h2>
            <span className="section-title-back">{number}</span>
        </div>
    );
}