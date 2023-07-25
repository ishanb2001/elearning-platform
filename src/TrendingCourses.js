import React from 'react';
import './App.css';
import editImage from './video-editing.jpg';



const TrendingCourses = () => {
  return (
    <div class="trending-section" style={{backgroundColor: 'white',padding: 70, borderRadius:50 }}>
        <h1 className="header" style={{paddingBottom: 20, fontWeight:'600', fontSize: '20px', color:'#635bff' }}  >• What's Trending?</h1>
      <div className="header-container">
        <h1 className="header" style={{fontWeight:'500', fontSize: '50px'}}  >What's Trending?</h1>
        <button className="button-f2">View More Courses  →</button>
      </div>
      <p class="body" style={{color:'#425466', marginTop:30, marginBottom: 30, fontSize:18, lineHeight: 1.5}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

      <div className="card-container-trending">
        <div className="card">
        <img class="course-img" src={editImage}></img>
        <div style={{padding: '20px'}}>
        <h4 style={{fontSize: 30, fontWeight:500, margin:0, paddingBottom:30}}>Product Design</h4>

        <h5 style={{paddingTop: '10px', paddingBottom: '20px', fontWeight:500, color:'#635bff', margin:0, fontSize:20 }}>Text here →</h5>

        </div>
        </div>
        <div className="card">
        <img class="course-img" src={editImage}></img>
        <div style={{padding: '20px'}}>
        <h4 style={{fontWeight:500, margin:0, paddingBottom:30}}>Product Design</h4>
        
        <h5 style={{paddingTop: '10px', paddingBottom: '20px', fontWeight:500, color:'#635bff', margin:0, fontSize:20 }}>Text here →</h5>

        </div>
        </div>
        <div className="card">
        <img class="course-img" src={editImage}></img>
        <div style={{padding: '20px'}}>
        <h4 style={{fontWeight:500, margin:0, paddingBottom:30}}>Product Design</h4>
        
        <h5 style={{paddingTop: '10px', paddingBottom: '20px', fontWeight:500, color:'#635bff', margin:0, fontSize:20 }}>Text here →</h5>

        </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingCourses;
