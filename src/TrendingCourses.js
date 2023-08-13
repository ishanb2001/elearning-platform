import React from 'react';
import './App.css';
import editImage from './video-editing.jpg';



const TrendingCourses = () => {
  return (
    <div class="trending-section" style={{textAlign: 'center', borderRadius:20, paddingTop: 60, paddingLeft: 60, paddingRight: 60, paddingBottom: 60}}>
        <h1 className="header" style={{textAlign: 'center',paddingBottom: 20, fontWeight:'600', fontSize: '18px', color:'#635bff' }}  >TRENDING</h1>
      <div className="header-container">
        <h1 className="header" style={{paddingBottom: 20, paddingLeft: 100, paddingRight: 100, textAlign: 'center', fontWeight:'600', fontSize: '40px', color: 'black'}}  >Meet the crew of people who create with passion and love for modern trends.</h1>
      </div>

      <div className="card-container-trending">
        <div className="card">
        <img class="course-img" src={editImage}></img>
        <div style={{padding: '20px', textAlign: 'left'}}>
        <h4 style={{fontSize: 30, fontWeight:600, margin:0, paddingBottom:30}}>Product Design</h4>

        <h5 style={{paddingTop: '10px', paddingBottom: '20px', fontWeight:600, color:'#635bff', margin:0, fontSize:20 }}>Text here →</h5>

        </div>
        </div>
        <div className="card">
        <img class="course-img" src={editImage}></img>
        <div style={{padding: '20px', textAlign: 'left'}}>
        <h4 style={{fontWeight:600, margin:0, paddingBottom:30}}>Computer Science</h4>
        
        <h5 style={{paddingTop: '10px', paddingBottom: '20px', fontWeight:600, color:'#635bff', margin:0, fontSize:20 }}>Text here →</h5>

        </div>
        </div>
        <div className="card">
        <img class="course-img" src={editImage}></img>
        <div style={{padding: '20px', textAlign: 'left'}}>
        <h4 style={{fontWeight:600, margin:0, paddingBottom:30}}>Product Design</h4>
        
        <h5 style={{paddingTop: '10px', paddingBottom: '20px', fontWeight:600, color:'#635bff', margin:0, fontSize:20 }}>Text here →</h5>

        </div>
        </div>
      </div>
      <button className="button-big-s" style={{marginTop: 50}}>View More Courses →</button>
    </div>
  );
};

export default TrendingCourses;
