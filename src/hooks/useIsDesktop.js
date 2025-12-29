// Hook useIsDesktop
// Détecte si l’affichage correspond à un contexte desktop selon un breakpoint donné

import { useEffect, useState } from "react";

export default function useIsDesktop(breakpoint = 768) {

    // État indiquant si la largeur de l’écran dépasse le breakpoint ( ici 768px )
    const [isDesktop, setIsDesktop] = useState( window.innerWidth >= breakpoint );

    useEffect(() => {

        // Media query basée sur le breakpoint fourni
        const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

        // Mise à jour de l’état lors du changement de taille d’écran
        const handleChange = (e) => {
            setIsDesktop(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        
        // Nettoyage de l’écouteur lors du démontage
        return () => mediaQuery.removeEventListener("change", handleChange);

    }, [breakpoint]);

    return isDesktop;
    
}
