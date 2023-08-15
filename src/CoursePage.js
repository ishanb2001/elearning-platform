import React from 'react';
import './App.css';
import CourseCard from './CourseCard';
import editImage from './video-editing.jpg';
import anotherImage from './outerspace.png'; // Let's say you have another image for demonstration purposes.

const NewPage = () => {
  return <div className="trending-section" style={{ textAlign: 'center', borderRadius: 20, padding: 60 }}>
  <h1 className="header" style={{ textAlign: 'center', paddingBottom: 20, fontWeight: '600', fontSize: '18px', color: '#635bff' }}>TRENDING</h1>
  
  <div className="header-container">
    <h1 className="header" style={{ paddingBottom: 20, paddingLeft: 100, paddingRight: 100, textAlign: 'center', fontWeight: '900', fontSize: '40px', color: 'black' }}>Meet the crew of people who create with passion and love for modern trends.</h1>
  </div>

  <div className="card-container-trending">
    <CourseCard title="Product Design" description="Text here" image={editImage} />
    <CourseCard title="Computer Science" description="Text here" image={editImage} />
    <CourseCard title="Product Design" description="Text here" image={editImage} />
  </div>

  <button className="button-big-s" style={{ marginTop: 50 }}>View More Courses →</button>
</div>;
};

export default NewPage;
