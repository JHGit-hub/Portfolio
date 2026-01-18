// Hook useScrollSnap
// Gère un scroll par sections avec effet de snap et navigation contrôlée.
// Version adaptative : permet le scroll dans les sections qui dépassent le viewport

import { useEffect, useRef, useState } from "react";

export default function useScrollSnap(containerId = "container") {

    // Index de la section actuellement active (exposé au composant)
    const [activeIndex, setActiveIndex] = useState(0);

    // Références internes pour le contrôle du scroll
    const currentIndex = useRef(0);
    const isScrolling = useRef(false);
    const sections = useRef([]);
    const lastScrollTime = useRef(0);

    // Délai de verrouillage entre deux scrolls successifs (en millisecondes)
    const scrollLockDelay = 800;

    useEffect(() => {

        // Désactivation du scroll snap sur mobile
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        // Récupération du conteneur et des sections
        const container = document.getElementById(containerId);
        if (!container) return;

        sections.current = Array.from(container.querySelectorAll("section"));

        // IMPORTANT : Activer le scroll sur le body
        document.body.style.overflowY = 'auto';
        document.documentElement.style.overflowY = 'auto';

        // Détecte quelle section est actuellement visible
        const updateActiveSection = () => {
            const scrollPos = window.scrollY + window.innerHeight / 3;
            
            sections.current.forEach((section, index) => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                    if (currentIndex.current !== index) {
                        currentIndex.current = index;
                        setActiveIndex(index);
                    }
                }
            });
        };

        // Gestion du scroll à la molette avec debounce
        const handleWheel = (e) => {
            const now = Date.now();
            
            // Bloquer si animation en cours ou trop rapide
            if (isScrolling.current || now - lastScrollTime.current < 100) {
                return;
            }

            const currentSection = sections.current[currentIndex.current];
            if (!currentSection) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const sectionRect = currentSection.getBoundingClientRect();
            const sectionHeight = currentSection.scrollHeight;
            const viewportHeight = window.innerHeight;

            // Section plus petite que viewport : snap classique
            if (sectionHeight <= viewportHeight + 50) {
                const isAtTop = sectionRect.top >= -10;
                const isAtBottom = sectionRect.bottom <= viewportHeight + 200;
                
                if ((direction > 0 && isAtTop) || (direction < 0 && isAtBottom)) {
                    e.preventDefault();
                    const nextIndex = currentIndex.current + direction;
                    if (nextIndex >= 0 && nextIndex < sections.current.length) {
                        navigateTo(nextIndex);
                    }
                }
            } 
            // Section plus grande : permettre scroll interne puis snap
            else {
                const isAtTop = sectionRect.top >= -10;
                const isAtBottom = sectionRect.bottom <= viewportHeight + 10;
                
                // Snap uniquement si on est aux extrémités de la section
                if ((direction > 0 && isAtBottom) || (direction < 0 && isAtTop)) {
                    e.preventDefault();
                    const nextIndex = currentIndex.current + direction;
                    if (nextIndex >= 0 && nextIndex < sections.current.length) {
                        navigateTo(nextIndex);
                    }
                }
                // Sinon laisser le scroll natif se faire
            }

            lastScrollTime.current = now;
        };

        // Écouter le scroll pour mettre à jour la section active
        window.addEventListener('scroll', updateActiveSection, { passive: true });
        window.addEventListener("wheel", handleWheel, { passive: false });

        // Init
        updateActiveSection();

        // Nettoyage
        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener("wheel", handleWheel);
        };
        
    }, [containerId]);

    // Navigation programmatique vers une section donnée
    const navigateTo = (index) => {

        // Vérification des bornes et de l'état de scroll
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

        // Déverrouillage après l'animation
        setTimeout(() => {
            isScrolling.current = false;
        }, scrollLockDelay);
        
    };

    return { activeIndex, navigateTo };

}