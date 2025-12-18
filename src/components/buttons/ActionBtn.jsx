export default function ActionBtn( { type = "button", onClick, label}) {

    return (

        <button type={type} onClick={onClick} className="action-btn action relative z-10">
            <span className="circle" aria-hidden="true">
                <span className="icon arrow"></span>
            </span>
            <span className="button-text">{label}</span>
        </button>

    );
}