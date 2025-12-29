// Composant SecondaryBtn
// Bouton secondaire menant vers un projet externe.

export default function SecondaryBtn({ to }) {

    return (

        <a href={to} className="secondary-btn learn-more relative z-10" target="_blank" rel="noopener noreferrer">
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">Voir le projet</span>
        </a>

    )
}