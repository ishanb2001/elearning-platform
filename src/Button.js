// Button.js
import React from 'react';
import './App.css';

function Button({ text, variant, link, style }) {
    let className = 'button';

    if (variant === 'big') {
        className = 'button-big';
    } else if (variant === 'big-s') {
        className = 'button-big-s';
    }

    return (
        <a href={link} className={className} style={style}>
            {text}
        </a>
    );
}

export default Button;
