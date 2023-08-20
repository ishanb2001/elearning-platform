import React, { useState } from 'react';
import './App.css';
import CourseCard from './CourseCard';
import editImage from './video-editing.jpg';
import { Link } from 'react-router-dom';
import Home from './Home';
import CourseImage from './CourseImage';
import StudentOne from './student-one.jpg';
import Footer from './Footer';
import FilterSidebar from './FilterSidebar';

function CoursePage() {
  const [currentColor, setCurrentColor] = useState(""); // Manage which color course cards to show

  const handleButtonClick = (color) => {
    setCurrentColor(color);
  };

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
        <button style={{marginRight: 20}} className="button-big" onClick={() => handleButtonClick("all")}>All</button>
            <button style={{marginRight: 20}} className="button-big" onClick={() => handleButtonClick("red")}>Red</button>
            <button style={{marginRight: 20}} className="button-big" onClick={() => handleButtonClick("blue")}>Blue</button>
            <button style={{marginRight: 20}} className="button-big" onClick={() => handleButtonClick("green")}>Green</button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <FilterSidebar />
          
          <div style={{ flex: 1, marginLeft: 20 }}>
            {currentColor === "blue" && (
              <div>
            <div className="card-container-trending">
              <CourseCard cardWidth="300px" buttonText="Intermediate" buttonBgColor="#ec6a41" buttonTextColor="#ffffff" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard cardWidth="300px" buttonText="Advanced" buttonBgColor="#44d375" buttonTextColor="#ffffff" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={StudentOne} />
              <CourseCard cardWidth="300px" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            </div>
            <div className="card-container-trending">
            <CourseCard cardWidth="300px" buttonText="Intermediate" buttonBgColor="#ec6a41" buttonTextColor="#ffffff" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            <CourseCard cardWidth="300px" buttonText="Advanced" buttonBgColor="#44d375" buttonTextColor="#ffffff" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={StudentOne} />
            <CourseCard cardWidth="300px" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
          </div>
          </div>
            )}

            {currentColor === "red" && (
            <div>
            <div className="card-container-trending">
              <CourseCard cardWidth="300px" buttonText="Beginner" buttonBgColor="#6d37ff" buttonTextColor="#ffffff" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard cardWidth="300px" buttonText="Advanced" buttonBgColor="#44d375" buttonTextColor="#ffffff"title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard cardWidth="300px" buttonText="Intermediate" buttonBgColor="#ec6a41" buttonTextColor="#ffffff" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            </div>
            <div className="card-container-trending">
            <CourseCard cardWidth="300px" buttonText="Beginner" buttonBgColor="#6d37ff" buttonTextColor="#ffffff" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            <CourseCard cardWidth="300px" buttonText="Advanced" buttonBgColor="#44d375" buttonTextColor="#ffffff"title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            <CourseCard cardWidth="300px" buttonText="Intermediate" buttonBgColor="#ec6a41" buttonTextColor="#ffffff" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
          </div>
          <div className="card-container-trending">
            <CourseCard cardWidth="300px" buttonText="Beginner" buttonBgColor="#6d37ff" buttonTextColor="#ffffff" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            <CourseCard cardWidth="300px" buttonText="Advanced" buttonBgColor="#44d375" buttonTextColor="#ffffff"title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />

          </div>
          </div>
            )}

            {currentColor === "green" && (
            <div className="card-container-trending">
              <CourseCard cardWidth="300px" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard cardWidth="300px" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard cardWidth="300px" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            </div>
            )}

{currentColor === "all" && (
            <div>
            <div className="card-container-trending">
              <CourseCard cardWidth="300px" buttonText="Intermediate" buttonBgColor="#ec6a41" buttonTextColor="#ffffff" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard cardWidth="300px" buttonText="Advanced" buttonBgColor="#44d375" buttonTextColor="#ffffff" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={StudentOne} />
              <CourseCard cardWidth="300px" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            </div>
            <div className="card-container-trending">
            <CourseCard cardWidth="300px" buttonText="Intermediate" buttonBgColor="#ec6a41" buttonTextColor="#ffffff" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            <CourseCard cardWidth="300px" buttonText="Advanced" buttonBgColor="#44d375" buttonTextColor="#ffffff" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={StudentOne} />
            <CourseCard cardWidth="300px" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
          </div>
            <div className="card-container-trending">
              <CourseCard cardWidth="300px" buttonText="Beginner" buttonBgColor="#6d37ff" buttonTextColor="#ffffff" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard cardWidth="300px" buttonText="Advanced" buttonBgColor="#44d375" buttonTextColor="#ffffff"title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard cardWidth="300px" buttonText="Intermediate" buttonBgColor="#ec6a41" buttonTextColor="#ffffff" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            </div>
            <div className="card-container-trending">
            <CourseCard cardWidth="300px" buttonText="Beginner" buttonBgColor="#6d37ff" buttonTextColor="#ffffff" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            <CourseCard cardWidth="300px" buttonText="Advanced" buttonBgColor="#44d375" buttonTextColor="#ffffff"title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            <CourseCard cardWidth="300px" buttonText="Intermediate" buttonBgColor="#ec6a41" buttonTextColor="#ffffff" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
          </div>
          <div className="card-container-trending">
            <CourseCard cardWidth="300px" buttonText="Beginner" buttonBgColor="#6d37ff" buttonTextColor="#ffffff" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            <CourseCard cardWidth="300px" buttonText="Advanced" buttonBgColor="#44d375" buttonTextColor="#ffffff"title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            <CourseCard cardWidth="300px" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
          </div>
          <div className="card-container-trending">
              <CourseCard cardWidth="300px" title="Product Design" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard cardWidth="300px" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
              <CourseCard cardWidth="300px" title="Computer Science" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image={editImage} />
            </div>

          </div>
            )}

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
