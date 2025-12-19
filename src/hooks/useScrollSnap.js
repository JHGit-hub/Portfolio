import { useEffect, useRef } from "react";

export default function useScrollSnap(containerId = "container") {
    
    const currentIndex = useRef(0);
    const isScrolling = useRef(false);
    const sections = useRef([]);

    useEffect(() => {
        const container = document.getElementById(containerId);
        if (!container) return;

        sections.current = Array.from(container.querySelectorAll("section"));

        const handleWheel = (e) => {
            if (isScrolling.current) return;

            isScrolling.current = true;

            if (e.deltaY > 0 && currentIndex.current < sections.current.length - 1) {
                currentIndex.current += 1;
            } else if (e.deltaY < 0 && currentIndex.current > 0) {
                currentIndex.current -= 1;
            }

            sections.current[currentIndex.current].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            setTimeout(() => {
                isScrolling.current = false;
            }, 900);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [containerId]);
}
