import React from 'react';
import './App.css';

function Home() {
    return (
        <nav className="navbar">
            <img alt="Logo" className="logo" />
            <div className="search-container">
                <input type="text" placeholder="Search.." className="search-input" />
            </div>
            <div>
                <button className="menu-button">Home</button>
                <button className="menu-button">About</button>
                <button className="menu-button">Contact</button>
            </div>
        </nav>
    );
}

export default Home;
