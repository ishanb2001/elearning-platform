import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from '@firebase/auth';
import { app } from './firebase'; 
import './App.css';
import Logo from './Logo.png';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';  

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

    const navigateToSignUp = () => {
        navigate('/signup');
    };

    const navigateToCart = () => {
        navigate('/cart');
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
    <button className="menu-button" onClick={navigateToCart}>Cart</button>
    
    {!currentUser && <button style={{backgroundColor: 'white', marginRight: 20, fontSize: '14px'}} onClick={navigateToSignUp} className="menu-button">Sign In</button>}

    {currentUser ? (
        <div className="user-menu">
            <span onClick={() => setUserDropdown(!userDropdown)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z"/></svg></span>
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
