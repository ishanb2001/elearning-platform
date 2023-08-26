import React, { useEffect, useRef } from 'react';

function FadeInWrapper({ children }) {
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.classList.add("fadeIn");
        }
    }, []);

    return <div ref={ref}>{children}</div>;
}

export default FadeInWrapper;