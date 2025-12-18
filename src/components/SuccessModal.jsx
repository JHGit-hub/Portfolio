import ActionBtn from "./buttons/ActionBtn";

export default function SuccessModal({ onClose }) {

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(4px)'
        }}>

            <div style={{
                backgroundColor: 'var(--dark-color)',
                borderRadius: '4px',
                padding: '0.5rem',
                maxWidth: '500px',
                width: '100%',
                textAlign: 'center',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
            }}>

                <h2 style={{
                    fontSize: '1.25rem',
                    fontFamily: 'poppins-semibold',
                    color: 'var(--accent-color)',
                    marginBottom: '1rem'
                }}>
                    Merci pour votre message
                </h2>

                <p style={{
                    fontSize: '1rem',
                    color: 'var(--light-color)',
                    fontFamily: 'poppins-regular',
                    marginBottom:  '1.5rem'
                }}>
                    Votre message a bien été envoyé. 
                    Je vous répondrai dans les meilleurs délais.
                </p>

                <ActionBtn type="button" label="Retour à l'accueil" onClick={onClose} />

            </div>
        </div>
    );
}