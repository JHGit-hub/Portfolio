// Hook useScrollSnap
// Gère un scroll par sections avec effet de snap et navigation contrôlée.

import { useEffect, useRef, useState } from "react";

export default function useScrollSnap(containerId = "container") {

    // Index de la section actuellement active (exposé au composant)
    const [activeIndex, setActiveIndex] = useState(0);

    // Références internes pour le contrôle du scroll
    const currentIndex = useRef(0);
    const isScrolling = useRef(false);
    const sections = useRef([]);

    // Délai de verrouillage entre deux scrolls successifs (en millisecondes )
    const scrollLockDelay = 350;

    // Accumulation du scroll pour éviter les déclenchements trop sensibles
    const wheelDelta = useRef(0);
    const SCROLL_THRESHOLD = 40;

    useEffect(() => {

        // Désactivation du scroll snap sur mobile
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        // Récupération du conteneur et des sections
        const container = document.getElementById(containerId);
        if (!container) return;

        sections.current = Array.from(container.querySelectorAll("section"));

        // Gestion du scroll à la molette
        const handleWheel = (e) => {

            e.preventDefault();

            // Blocage si une animation est déjà en cours
            if (isScrolling.current) return;

            // Accumulation du delta de scroll
            wheelDelta.current += e.deltaY;

            // Seuil minimum avant déclenchement
            if (Math.abs(wheelDelta.current) < SCROLL_THRESHOLD) return;

            // Calcul de la section cible selon le sens du scroll
            const nextIndex = wheelDelta.current > 0 ? currentIndex.current + 1 : currentIndex.current - 1;

            navigateTo(nextIndex);

            // Réinitialisation du delta
            wheelDelta.current = 0;

        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        // Nettoyage de l’écouteur
        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
        
    }, [containerId]);

    // Navigation programmatique vers une section donnée
    const navigateTo = (index) => {

        // Vérification des bornes et de l’état de scroll
        if (index < 0 || index >= sections.current.length) return;
        if (isScrolling.current) return;

        isScrolling.current = true;
        currentIndex.current = index;
        setActiveIndex(index);

        // Scroll fluide vers la section ciblée
        sections.current[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        // Déverrouillage après l’animation
        setTimeout(() => {
            isScrolling.current = false;
        }, scrollLockDelay);
        
    };

    return { activeIndex, navigateTo };

}
