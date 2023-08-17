import React, { useState } from 'react';

const CourseCard = ({ title, description, image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
       className={`course ${hovered ? 'hovered' : ''}`} 
        onMouseEnter={() => setHovered(true)} 
        onMouseLeave={() => setHovered(false)}

    >
      <img className="course-img" src={image} alt={title} />
      <div className="content" style={{marginBottom: 0}}>
        <h4 class="course-title" style={{marginBottom: 0, paddingBottom: 0}}>{title}</h4>
        <p className="body">{description}</p>
        <h5 className="course-link">Text here →</h5>
      </div>
    </div>
  );
};

export default CourseCard;
