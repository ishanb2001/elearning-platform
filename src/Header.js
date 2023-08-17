import React from 'react';
import './App.css';
import Button from './Button';
import Cards from './Cards';
import backgroundImage from './outerspace.png';
import Gradient from './gradient.png';

function ContentComponent() {
    return (
        <div className="content-container">
            <div className="text-button-container">
                <h1 className="header">BENIFITS</h1>
                <h1 style={{ fontSize: 60 }}>Comprehensive <span>Online Platform</span> For Learning</h1>
                
                <div style={{marginBottom: 40}}>
                    <Button variant="big-s" text="JOIN TODAY" link="/path2" />
                    
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
                <Cards 

                    bgColor="rgb(99, 91, 255)" 
                    textColor="white" 
                    fontSize="20px"
                >
                    <div className="button" style={{ fontWeight: 900, textAlign: 'left', color: 'white' }}>HEADER</div>
                    <h2 style={{ marginBottom: 0, marginTop: 100 }}>Easily Track Your Progress</h2>
                </Cards>
                <Cards 
                    backgroundImage={backgroundImage}
                    bgColor="black" 
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
