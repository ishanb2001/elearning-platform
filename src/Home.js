import React, { useState } from 'react';
import './App.css';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false); // Add this line

    return (
        <nav className="navbar">
    <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
    </button>
    <img alt="Logo" className="logo" />
    <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <button className="menu-button">Home</button>
        <button className="menu-button">About</button>
        <button className="menu-button">Contact</button>
    </div>
    <div className="right-container">
        <div className={`search-container ${searchOpen ? 'open' : ''}`}>
            <input type="text" placeholder="Search.." className="search-input" />
        </div>
        <button className="search-toggle" onClick={() => setSearchOpen(!searchOpen)}>
            🔍
        </button>
    </div>
</nav>
    );
}

export default Home;
