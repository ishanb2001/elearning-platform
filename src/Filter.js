import React from 'react';
import './App.css';

const CourseCategories = () => {
  return (
    <>
      <h1 className="header">Courses Categories</h1>
      <hr className="line" />
      <div className="button-container-filter">
        <button className="button-f">Category 1</button>
        <button className="button-f">Category 2</button>
        <button className="button-f">Category 3</button>
        <button className="button-f">Category 4</button>
        <button className="button-f">Category 5</button>
        <button className="button-f">Category 6</button>
      </div>
    </>
  );
};

export default CourseCategories;
