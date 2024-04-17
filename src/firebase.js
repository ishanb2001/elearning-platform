// Import necessary services
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZR2VixYhewHuJ62y_V0gd3p4q0_-oxpc",
  authDomain: "coursecraft-b24ca.firebaseapp.com",
  projectId: "coursecraft-b24ca",
  storageBucket: "coursecraft-b24ca.appspot.com",
  messagingSenderId: "565703538227",
  appId: "1:565703538227:web:67bb797dfb2c734d269546",
  measurementId: "G-JMHLHNGWTN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // This will get the auth instance tied to your app

export { app, analytics, auth };  // Exporting the necessary instances
