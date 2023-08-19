import React from 'react';
import './App.css';
import CourseCard from './CourseCard';
import editImage from './video-editing.jpg';
import outerspaceImage from './outerspace.png'; // Just added this for demonstration purposes.
import { Link } from 'react-router-dom';
import Home from './Home';
import CourseImage from './CourseImage';


function CoursePage() {
  return (
    <>
    <Home />
    <CourseImage 
            text="All the latest and
            important information"
            bgColor="#635bff"
            bodyFontSize='70px'
        />
    <div className="filter-wrapper" style={{ marginTop: 100, marginBottom: 100, borderRadius:30, backgroundColor: 'white', maxWidth: 1200, margin: 'auto'}}>
      


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

      <div className="card-container-trending">
        <CourseCard title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
        <CourseCard title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
        <CourseCard title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
      </div>

      <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
        <Link to="/CoursePage" className="button-big-s" style={{textDecoration: 'none'}}>
        View More Courses →
      </Link>
      </div>
    </div>
    </>
  );
};


export default CoursePage;
