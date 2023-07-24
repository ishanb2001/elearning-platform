import React from 'react';
import './App.css';

function ContentComponent() {
    return (
        <div className="content-container">
            <div className="text-button-container">
                <h1>Comprehensive<br/>Online Platform<br/>For Learning</h1>
                <p>This is some smaller paragraph text.</p>
                <div className="button-container">
                    <button className="menu-button">Button 1</button>
                    <button className="menu-button">Button 2</button>
                </div>
            </div>
            <div className="card-container">
                <div className="card1">Card 1</div>
                <div className="card2">Card 2</div>
            </div>
        </div>
    );
}

export default ContentComponent;
