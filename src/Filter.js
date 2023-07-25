import React from 'react';
import './App.css';

const CourseCategories = () => {
  return (
    <>
      <h1 className="header" style={{paddingBottom: 20, fontWeight:'600', fontSize: '20px', color:'#635bff' }}  >• What's Trending?</h1>
      <h1 className="header" style={{fontWeight:'500', fontSize: '50px'}}>Courses Categories</h1>
      <p style={{color:'#425466', marginTop:30, marginBottom: 30,marginRight:400, fontSize:20, lineHeight: 1.5}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <hr className="line" />
      <div className="button-container-filter">
        <button style={{marginRight: 20}} className="button-f">Category 1</button>
        <button style={{marginRight: 20}} className="button-f">Category 2</button>
        <button style={{marginRight: 20}} className="button-f">Category 3</button>
        <button style={{marginRight: 20}} className="button-f">Category 4</button>
        <button style={{marginRight: 20}} className="button-f">Category 5</button>
        <button style={{marginRight: 20}} className="button-f">Category 6</button>
      </div>
    </>
  );
};

export default CourseCategories;
