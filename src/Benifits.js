import React from 'react';
import './App.css';  // Assuming the CSS above is in App.css
import editImage from './video-editing.jpg';

const Benifits = () => {
  return (
    <div className="content-container">
    <div class="trending-section">

                <div style={{backgroundColor: 'rgb(99, 91, 255)'}} className="card1"><div class="button">Card 1</div>
                <h2 style={{fontWeight: 'lighter', paddingTop: 50, color:'white'}}>30k Students</h2>
                </div>
                <div style={{backgroundColor: 'black', color: 'white'}} className="card2"><div class="button2">Card 2</div>
                <h2 style={{fontWeight: 'lighter', paddingTop: 50}}>120+ Courses</h2></div>
                <div style={{backgroundColor: 'black', color: 'white'}} className="card2"><div class="button2">Card 2</div>
                <h2 style={{fontWeight: 'lighter', paddingTop: 50}}>120+ Courses</h2></div>
            </div>
      </div>
  );
};

export default Benifits;
