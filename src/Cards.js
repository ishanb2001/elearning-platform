import React, { useState, useEffect } from 'react';
import './App.css';  // Make sure your CSS with the above styles is here

function Card({ index = 0, bgColor, borderStyle, textColor, fontSize, backgroundImage, children }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    const cardStyle = {
        padding: 30,
        borderRadius: 20,
        backgroundColor: bgColor,
        color: textColor,
        fontSize: fontSize,
        border: borderStyle,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        animationDelay: `${index * 0.5}s` // each card waits an additional 0.5s before starting its animation
    };

    return (
        <div style={cardStyle} className={`card ${isLoaded ? 'fade-in' : ''}`}>
            {children}
        </div>
    );
}

export default Card;
