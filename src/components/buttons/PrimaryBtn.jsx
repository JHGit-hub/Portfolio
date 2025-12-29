export default function PrimaryBtn({onClick, label, to}) {

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