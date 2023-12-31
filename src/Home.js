import React, { useState } from 'react';
import './App.css';
import Logo from './Logo.png';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);  // State for dropdown

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>
                <img src={Logo} style={{ width: 210, paddingRight: 30 }} alt="Logo" />
                
                {/* Categories Button & Dropdown */}
                <div className="categories-container" 
                     onMouseEnter={() => setDropdownOpen(true)} 
                     onMouseLeave={() => setDropdownOpen(false)}>
                    <button className="menu-button">Categories</button>
                    <div className={`dropdown ${dropdownOpen ? 'open' : ''}`}>
                        <button className="menu-button">Option 1</button>
                        <button className="menu-button">Option 2</button>
                        <button className="menu-button">Option 3</button>
                    </div>
                </div>

                <div className="right-container">
                    <div className={`search-container ${searchOpen ? 'open' : ''}`}>
                        <input type="text" style={{ marginLeft: 40 }} placeholder="Search For a Course" className="search-input" />
                    </div>

                    <button className="search-toggle" onClick={() => setSearchOpen(!searchOpen)}>
                        🔍
                    </button>
                </div>

                <div className={`menu ${menuOpen ? 'open' : ''}`}>
                    <button className="menu-button">Home</button>
                    <button className="menu-button">About</button>
                    <button style={{marginRight: 30}} className="menu-button">Contact</button>
                    <button className="button-big-cta" style={{fontSize: '14px'}}>Sign Up</button>
                </div>
            </div>
        </nav>
    );
}

export default Home;
