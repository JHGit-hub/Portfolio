import { useEffect, useState } from "react";

export default function useIsDesktop(breakpoint = 768) {
    const [isDesktop, setIsDesktop] = useState( window.innerWidth >= breakpoint );

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${breakpoint}px)`);

        const handleChange = (e) => {
            setIsDesktop(e.matches);
        };

        mediaQuery.addEventListener("change", handleChange);
        
        return () => mediaQuery.removeEventListener("change", handleChange);

    }, [breakpoint]);

    return isDesktop;
}
