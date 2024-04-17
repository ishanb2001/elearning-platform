import React, { useState } from 'react';
import Footer from "./Footer";
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword
} from '@firebase/auth';
import { app } from './firebase';
import { useNavigate, useLocation } from 'react-router-dom';  

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate(); 
    const location = useLocation();

    // Previous page path
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            console.log("User signed in: ", result.user);
            navigate(from); // Use this instead of `history.replace(from)`
        }).catch((error) => {
            console.error("Error signing in: ", error.code, error.message);
        });
    };

    const handleEmailSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User signed up: ", userCredential.user);
                navigate(from);
            })
            .catch((error) => {
                console.error("Error signing up: ", error.message);
            });
    };

    const handleEmailSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("User signed in: ", userCredential.user);
                navigate(from);
            })
            .catch((error) => {
                console.error("Error signing in: ", error.message);
            });
    };

    return (
        <div className="signin-container">
            <h2>Sign In</h2>
            
            <div>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                
                <button onClick={handleEmailSignUp}>Email Sign Up</button>
                
            </div>
            <Footer/>
        </div>
    );
}

export default SignUp;
