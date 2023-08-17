import React from 'react';
import './App.css';
import CourseCard from './CourseCard';
import editImage from './video-editing.jpg';
import anotherImage from './outerspace.png'; // Let's say you have another image for demonstration purposes.

const CourseCategories = () => {
  return (
    <>
    <div class="filter-wrapper" style={{borderRadius:30, backgroundColor: 'white', padding: 60 }}>
    <h1 className="header" style={{fontWeight:'600', color:'#635bff' }}  >WHATS TRENDING?</h1>
      <h1>Expand Yourself In Data Analytics</h1>


      <div className="button-container-filter">
        <button style={{marginRight: 20}} className="button-big">Category 1</button>
        <button style={{marginRight: 20}} className="button-big">Category 2</button>
        <button style={{marginRight: 20}} className="button-big">Category 3</button>
        <button style={{marginRight: 20}} className="button-big">Category 4</button>
        <button style={{marginRight: 20}} className="button-big">Category 5</button>
        <button style={{marginRight: 20}} className="button-big">Category 6</button>
      </div>
      <div className="card-container-trending">
        <CourseCard title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
        <CourseCard title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
        <CourseCard title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
      </div>
      <button className="button-big-s">View More Courses →</button>
      </div>
    </>
  );
};

export default CourseCategories;
