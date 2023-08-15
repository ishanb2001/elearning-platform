import React from 'react';
import './App.css';

const CourseCategories = () => {
  return (
    <>
    <div class="filter-wrapper" style={{backgroundColor: 'white', borderRadius:50 }}>
    <h1 className="header" style={{paddingBottom: 20, fontWeight:'600', fontSize: '18px', color:'#635bff' }}  >• Benifits</h1>
      <h1 className="header" style={{fontWeight:'900', fontSize: '50px'}}>Courses Categories</h1>
      <p class="body" style={{fontWeight: 600, color:'#425466', marginTop:30, marginBottom: 30, fontSize:15, lineHeight: 1.5}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      <hr className="line" />
      <div className="button-container-filter">
        <button style={{marginRight: 20}} className="button-big">Category 1</button>
        <button style={{marginRight: 20}} className="button-big">Category 2</button>
        <button style={{marginRight: 20}} className="button-big">Category 3</button>
        <button style={{marginRight: 20}} className="button-big">Category 4</button>
        <button style={{marginRight: 20}} className="button-big">Category 5</button>
        <button style={{marginRight: 20}} className="button-big">Category 6</button>
      </div>
      </div>
    </>
  );
};

export default CourseCategories;
