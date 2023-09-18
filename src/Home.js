import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from '@firebase/auth';
import { app } from './firebase'; 
import './App.css';
import Logo from './Logo.png';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';  // Note the addition of useEffect

const auth = getAuth(app);

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [userDropdown, setUserDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user);
            } else {
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    const navigateToSignIn = () => {
        navigate('/signin');
    };

    const handleSignOut = () => {
        signOut(auth)
            .then(() => setCurrentUser(null))
            .catch((error) => console.error("Error signing out: ", error));
    };

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            navigate(`/coursepage?search=${searchTerm}`);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-content">
                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
                <img src={Logo} style={{ width: 210, paddingRight: 30 }} alt="Logo" />

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
                        <input 
                            type="text" 
                            style={{ marginLeft: 40 }} 
                            placeholder="Search For a Course" 
                            className="search-input"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)} 
                            onKeyPress={handleSearch}
                        />
                    </div>

                    <button 
                        className="search-toggle" 
                        onClick={() => navigate(`/coursepage?search=${searchTerm}`)}>
                        🔍
                    </button>

                    <button className="search-toggle" onClick={() => setSearchOpen(!searchOpen)}>🔍</button>
                </div>

                <div className={`menu ${menuOpen ? 'open' : ''}`}>
                    <button className="menu-button">Home</button>
                    <button className="menu-button">About</button>
                    <button style={{marginRight: 30}} className="menu-button">Contact</button>

                    {currentUser ? (
                        <div className="user-menu">
                            <span onClick={() => setUserDropdown(!userDropdown)}>Hello, {currentUser.displayName}</span>
                            {userDropdown && (
                                <div className="user-dropdown">
                                    <button onClick={() => navigate('/my-portal')}>My Portal</button>
                                    <button onClick={handleSignOut}>Sign Out</button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <button className="button-big-cta" style={{fontSize: '14px'}} onClick={navigateToSignIn}>Sign Up</button>


                    )}
                </div>
            </div>
        </nav>
    );
}

export default Home;
