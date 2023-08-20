import React, { useState } from 'react';
import './App.css';
import Logo from './Logo.png';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <img src={Logo} style={{ width: 40 }} alt="Logo" />
                
                <div className="right-container">
                    <div className={`search-container ${searchOpen ? 'open' : ''}`}>
                        <input type="text" style={{ marginLeft: 40, backgroundColor: '#f2f4fc' }} placeholder="Search For a Course" className="search-input" />
                    </div>
                    <button className="search-toggle" onClick={() => setSearchOpen(!searchOpen)}>
                        🔍
                    </button>
                </div>

                <div className={`menu ${menuOpen ? 'open' : ''}`}>
                    <button className="menu-button">Home</button>
                    <button className="menu-button">About</button>
                    <button className="menu-button">Contact</button>
                    <button className="button-big-cta">Sign Up</button>
                </div>
            </div>
        </nav>
    );
}

export default Home;
