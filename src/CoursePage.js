import React from 'react';
import './App.css';
import CourseCard from './CourseCard';
import editImage from './video-editing.jpg';
import { Link } from 'react-router-dom';
import Home from './Home';
import CourseImage from './CourseImage';
import StudentOne from './student-one.jpg'
import Footer from './Footer';
import FilterSidebar from './FilterSidebar';

function CoursePage() {
  return (
    <>
      <Home />
      <CourseImage 
          text="All the latest and important information"
          bgColor="#635bff"
          bodyFontSize='80px'
          gradient="linear-gradient(135deg, #4135ef, #6535ef)"
          headerText='BLOG'
      />
      
      <div className="filter-wrapper" style={{paddingTop: 50, marginBottom: 100, borderRadius:30, backgroundColor: 'white', maxWidth: 1200, margin: 'auto'}}>
        
        <div className="button-container-filter" style={{ marginBottom: 20 }}>
            <button style={{marginRight: 20}} className="button-big">Category 1</button>
            <button style={{marginRight: 20}} className="button-big">Category 2</button>
            <button style={{marginRight: 20}} className="button-big">Category 3</button>
            <button style={{marginRight: 20}} className="button-big">Category 4</button>
            <button style={{marginRight: 20}} className="button-big">Category 5</button>
            <button style={{marginRight: 20}} className="button-big">Category 6</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <FilterSidebar />
          
          <div style={{ flex: 1, marginLeft: 20 }}>
            <div className="card-container-trending">
              <CourseCard title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={StudentOne} />
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
          </div>
        </div>

        <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
          <Link to="/CoursePage" className="button-big-s" style={{textDecoration: 'none'}}>
            View More Courses →
          </Link>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default CoursePage;
