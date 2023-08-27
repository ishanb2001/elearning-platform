import React from 'react';
import './App.css';
import Button from './Button';
import Cards from './Cards';
import backgroundImage from './outerspace.png';
import Gradient from './gradient.png';
import StudentOne from './student.jpg';
import LightG from './light-gradient.jpg';
import Label from './Label';
import videoFile from './video.mp4';


function CardComponent() {
    return (
        <div className="content-container2">
            
            <div className="card-container2">
                <Cards index={0} 
                    backgroundImage={Gradient}
                    borderStyle="#333"
                    bgColor="#6d37ff" 
                    textColor="white" 
                    fontSize="30px"
                >
                    <div className="button" style={{ padding: 10, textAlign: 'center', borderRadius:100, marginRight: 500, backgroundColor: 'white', fontWeight: 600, color: 'black', fontSize: 25 }}>▶︎</div>
                    <h2 style={{ fontWeight: 600, marginBottom: 0, marginTop: 350 }}>Introduction to Corporate Finance</h2>
                </Cards>

                <div className="column-layout"> 
                  <Cards index={1}
                      borderStyle="0px solid black"
                      bgColor="#44d375" 
                      textColor="white" 
                      fontSize="25px"
                  >
                      <Label buttonBgColor="rgba(255, 255, 255, 0.1)" buttonText="EXPLORE NOW" />
                      <h2 style={{ fontWeight: 600, marginBottom: 0, marginTop: 100 }}>120+ Courses</h2>
                  </Cards>

                  <Cards index={2}
                      bgColor="#6d37ff"
                      borderStyle="0px solid black"
                      textColor="white" 
                      fontSize="25px"
                  >
                      <Label buttonBgColor="rgba(255, 255, 255, 0.1)" buttonText="EXPLORE NOW"/>
                      <h2 style={{ fontWeight: 600, marginBottom: 0, marginTop: 100 }}>Join Our Community</h2>
                  </Cards>
                </div>
            </div>
        </div>
    );
}


export default CardComponent;
