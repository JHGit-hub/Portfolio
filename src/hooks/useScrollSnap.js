import { useEffect, useRef, useState } from "react";

export default function useScrollSnap(containerId = "container") {

    const [activeIndex, setActiveIndex] = useState(0);

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

            navigateTo(
                wheelDelta.current > 0
                    ? currentIndex.current + 1
                    : currentIndex.current - 1
            );

            wheelDelta.current = 0;
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
        
    }, [containerId]);

    const navigateTo = (index) => {
        if (index < 0 || index >= sections.current.length) return;
        if (isScrolling.current) return;

        isScrolling.current = true;
        currentIndex.current = index;
        setActiveIndex(index);

        sections.current[index].scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        setTimeout(() => {
            isScrolling.current = false;
        }, scrollLockDelay);
    };

    return { activeIndex, navigateTo };

}
