import React, { useState } from 'react';

const CourseCard = ({ 
    title, 
    description, 
    image, 
    buttonText, 
    buttonBgColor, 
    buttonTextColor,
    cardWidth = '350px'  // Default width if not provided
}) => {
  const [hovered, setHovered] = useState(false); 

  const buttonStyle = {
    backgroundColor: buttonBgColor || 'grey', // default to grey if no prop
    color: buttonTextColor || 'white',       // default to white if no prop
    padding: '5px 10px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    marginBottom: '10px',  // Space between button and title
    fontSize: '0.8rem'
  };

  const cardStyle = {
    width: cardWidth
  };

  return (
    <div
       className={`course ${hovered ? 'hovered' : ''}`} 
       onMouseEnter={() => setHovered(true)} 
       onMouseLeave={() => setHovered(false)}
       style={cardStyle}  // Apply the card width
    >
      <img className="course-img" src={image} alt={title} />
      <div className="content" style={{marginBottom: 0}}>
        <button style={buttonStyle}>{buttonText || 'Click me'}</button>
        <h4 className="course-title" style={{marginBottom: 0, paddingBottom: 0, fontWeight: 900, marginTop: 10}}>{title}</h4>
        <p className="body">{description}</p>
        <h5 className="course-link">Text here →</h5>
      </div>
    </div>
  );
};

export default CourseCard;
