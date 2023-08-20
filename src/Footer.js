import React from 'react';
import './App';

function Footer() {
  return (
    <footer className="footer" style={{backgroundColor:"#13161e", color: "white"}}>
      <div className="footer-container">
        <div className="footer-section">
          <h5>Company</h5>
          <ul>
            <li><a style={{color: "white"}} href="#">About</a></li>
            <li><a style={{color: "white"}} href="#">Jobs</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h5>Products</h5>
          <ul>
            <li><a style={{color: "white"}} href="#">Billing</a></li>
            <li><a style={{color: "white"}} href="#">Connect</a></li>
          </ul>
        </div>
        

        <div className="footer-section">
          <h5>Resources</h5>
          <ul>
            <li><a style={{color: "white"}} href="#">Documentation</a></li>
            <li><a style={{color: "white"}} href="#">API reference</a></li>
          </ul>
        </div>

        // Social Media Icons or any other information can go here
      </div>
    </footer>
  );
}

export default Footer;

