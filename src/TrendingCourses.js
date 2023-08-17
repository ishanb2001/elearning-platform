import React from 'react';
import './App.css';
import CourseCard from './CourseCard';
import editImage from './video-editing.jpg';
import anotherImage from './outerspace.png'; // Let's say you have another image for demonstration purposes.

const TrendingCourses = () => {
  return (
    <div className="trending-section" style={{ textAlign: 'center', borderRadius: 20}}>
      <h1 className="header" style={{fontWeight: '600', fontSize: '18px', color: '#635bff' }}>TRENDING</h1>
      
      <div className="header-container">
        <h1 className="header" style={{paddingRight: 400,fontWeight: '900', fontSize: '30px', color: 'black' }}>Meet the crew of people who create with passion and love for modern trends.</h1>
      </div>

      

      <div className="card-container-trending">
        <CourseCard title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
        <CourseCard title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
        <CourseCard title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
      </div>

      <div className="card-container-trending">
        <CourseCard title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
        <CourseCard title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
        <CourseCard title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
      </div>

      <button className="button-big-s" style={{ marginTop: 50 }}>View More Courses →</button>
    </div>
  );
};

export default TrendingCourses;
