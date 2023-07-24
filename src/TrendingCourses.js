import React from 'react';
import './App.css';

const TrendingCourses = () => {
  return (
    <div>
      <div className="header-container">
        <h1 className="header">What's Trending</h1>
        <button className="view-more-button">View More Courses</button>
      </div>

      <div className="card-container">
        <div className="card">Course 1</div>
        <div className="card">Course 2</div>
        <div className="card">Course 3</div>
      </div>
    </div>
  );
};

export default TrendingCourses;
