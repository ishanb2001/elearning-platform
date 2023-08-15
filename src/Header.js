import React from 'react';
import './App.css';
import Button from './Button';
import Cards from './Cards';

function ContentComponent() {
    return (
        <div className="content-container">
            <div className="text-button-container">
                <h1 className="header">BENIFITS</h1>
                <h1>Comprehensive <span>Online Platform</span> For Learning</h1>
                <p className="body">Lorem Ipsum is simply dummy text...</p>
                <Button variant="big" text="Button 1" link="/path1" />
                <Button variant="big-s" text="Button 2" link="/path2" />
            </div>
            
            <div className="card-container">
                <Cards bgColor="rgb(99, 91, 255)" textColor="white" fontSize={"20px"}>
                    <div className="button">Card 1</div>
                    <h2>30k Students</h2>
                </Cards>
                <Cards bgColor="black" textColor="white" fontSize={"20px"}>
                    <div className="button2">Card 2</div>
                    <h2>120+ Courses</h2>
                </Cards>
            </div>
        </div>
    );
}

export default ContentComponent;
