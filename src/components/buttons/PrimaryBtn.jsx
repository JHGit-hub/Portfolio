// Composant PrimaryBtn
// Bouton principal réutilisable pouvant agir comme lien ou comme action.

export default function PrimaryBtn({onClick, label, to}) {

    // Rendu sous forme de lien si une destination est fournie
    if (to) {
        return (
            <a href={to} className="primary-btn">
                <span>{label}</span>
            </a>
        );
    }
    
    return (
        // Composant pour un bouton principal avec un lien
        <button className="primary-btn cursor-pointer " onClick={onClick} title={label}>
            <span>{label}</span>
        </button>
    );
}