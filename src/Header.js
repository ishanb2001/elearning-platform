import React from 'react';
import './App.css';

function ContentComponent() {
    return (
        <div className="content-container">
            <div className="text-button-container">
                <h1 style={{marginBottom:0}}>Comprehensive <span style={{color: 'rgb(99, 91, 255)'}}>Online Platform</span> For Learning</h1>
                <p class="body" style={{color:'#425466', marginTop:30, marginBottom: 30, fontSize:18, lineHeight: 1.5}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="button-container">
                    <button className="button-f" style={{backgroundColor: 'black', color: 'white'}}>Button 1</button>
                    <button className="button-f" style={{border: 0, backgroundColor: '#F2F4FB', color: 'black'}}>Button 2</button>
                </div>
            </div>
            <div className="card-container">
                <div style={{backgroundColor: 'rgb(99, 91, 255)'}} className="card1"><div class="button">Card 1</div>
                <h2 style={{fontWeight: 'lighter', paddingTop: 50, color:'white'}}>30k Students</h2>
                </div>
                <div style={{backgroundColor: 'black', color: 'white'}} className="card2"><div class="button2">Card 2</div>
                <h2 style={{fontWeight: 'lighter', paddingTop: 50}}>120+ Courses</h2></div>
            </div>
        </div>
    );
}

export default ContentComponent;
