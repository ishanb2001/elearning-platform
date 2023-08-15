// CourseCard.js
import React from 'react';

const CourseCard = ({ title, description, image }) => {
  return (
    <div className="card">
      <img className="course-img" src={image} alt={title} />
      <div style={{ padding: '20px', textAlign: 'left' }}>
        <h4 style={{ fontSize: 30, fontWeight: 600, margin: 0, paddingBottom: 30 }}>{title}</h4>
        <h5 style={{ paddingTop: '10px', paddingBottom: '20px', fontWeight: 600, color: '#635bff', margin: 0, fontSize: 20 }}>{description} →</h5>
      </div>
    </div>
  );
};

export default CourseCard;
