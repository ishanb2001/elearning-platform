import React from 'react';

function Card({ bgColor, borderStyle, textColor, fontSize, backgroundImage, children }) {
    const cardStyle = {
        padding: 30,
        borderRadius: 20,
        backgroundColor: bgColor,
        color: textColor,
        fontSize: fontSize,
        border: borderStyle, // Updated
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    return (
        <div style={cardStyle} className="card">
            {children}
        </div>
    );
}

export default Card;
