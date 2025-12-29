// Composant TechnoUsed
// Affiche la liste des technologies associées à un projet.

export default function TechnoUsed({ icons }) {

    return (

        <div className="techno-icons flex flex-row gap-[1rem] relative z-10">

            {/* Parcours de la liste des technologies */}
            {icons.map(({ Icon, label }, i) => (
                <div key={i} className="item-techno flex flex-col items-center justify-center gap-[0.5rem]" aria-label={label}>

                    {/* Rendu de l'icone associée à la technologie */}
                    <Icon size={30} color="var(--dark-color)" title={label} />

                    {/* Libellé de la technologie */}
                    <span className="text-[var(--dark-color)] text-[10px]">{label}</span>

                </div>

            ))}

        </div>

    )
    
}