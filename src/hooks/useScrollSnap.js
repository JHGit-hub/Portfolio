import { useEffect, useRef } from "react";

export default function useScrollSnap(containerId = "container") {

    const currentIndex = useRef(0);
    const isScrolling = useRef(false);
    const sections = useRef([]);
    const scrollLockDelay = 900;

    const wheelDelta = useRef(0);
    const SCROLL_THRESHOLD = 40;

    useEffect(() => {
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        const container = document.getElementById(containerId);
        if (!container) return;

        sections.current = Array.from(container.querySelectorAll("section"));

        const handleWheel = (e) => {
            e.preventDefault();

            if (isScrolling.current) return;

            wheelDelta.current += e.deltaY;

            if (Math.abs(wheelDelta.current) < SCROLL_THRESHOLD) return;

            isScrolling.current = true;

            if (
                wheelDelta.current > 0 &&
                currentIndex.current < sections.current.length - 1
            ) {
                currentIndex.current += 1;
            } else if (
                wheelDelta.current < 0 &&
                currentIndex.current > 0
            ) {
                currentIndex.current -= 1;
            }

            sections.current[currentIndex.current].scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

            wheelDelta.current = 0;

            setTimeout(() => {
                isScrolling.current = false;
            }, scrollLockDelay);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
        
    }, [containerId]);
}
