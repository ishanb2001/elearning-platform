import React from 'react';

function Card({ bgColor, textColor, fontSize, children }) {
    return (
        <div style={{ backgroundColor: bgColor, color: textColor, fontSize: fontSize }} className="card">
            {children}
        </div>
    );
}

export default Card;
