import React from 'react';
import './App.css';
import Button from './Button';
import Cards from './Cards';
import backgroundImage from './woman-smiling.png';
import Gradient from './gradient.png';

function ContentComponent() {
    return (
        <div className="content-container" style={{marginTop: 100,}}>
            <div className="text-button-container">
                <h1 className="header">BENIFITS</h1>
                <h1 style={{ fontSize: 65, marginTop: 0, letterSpacing: '-0.05em' }}>Comprehensive <span>Online Platform</span> For Learning</h1>
                
                <div style={{marginBottom: 40, marginTop: 0}}>
                    <button className="button-big-cta">Join The Community</button>
                    
                </div> 

                <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'flex-start', 
                    width: '80%'
                }}>
                    <h1 style={{ fontSize: 30, marginRight: '20px' }}>500K USERS</h1>
                    <div style={{ 
                        flex: 1, 
                        height: '2px', 
                        backgroundColor: 'black'
                    }}></div>
                </div>
                <p className="body" style={{paddingRight: 100, textAlign: 'left'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            </div>
            
            <div className="card-container">
                <Cards index={0}
                    backgroundImage={backgroundImage}
                    bgColor="#ec6a41" 
                    textColor="white" 
                    fontSize="20px"
                >
                    <div className="button" style={{ fontWeight: 900, textAlign: 'left', color: 'white' }}>HEADER</div>
                    <h2 style={{ marginBottom: 0, marginTop: 100 }}>Easily Track Your Progress</h2>
                </Cards>
                <Cards index={1}
                    bgColor="rgb(109, 55, 255)" 
                    textColor="white" 
                    fontSize="20px"
                >
                    <div className="button2" style={{ fontWeight: 900,textAlign: 'left', color: 'white' }}>HEADER</div>
                    <h2 style={{ marginBottom: 0, marginTop: 100 }}>120+ Courses</h2>
                </Cards>
            </div>
        </div>
    );
}

export default ContentComponent;
