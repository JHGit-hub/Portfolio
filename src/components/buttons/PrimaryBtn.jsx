export default function PrimaryBtn({to, label}) {

    return (
        // Composant pour un bouton principal avec un lien
        <a href={to} className="primary-btn">
            <span>{label}</span>
        </a>
    );
}