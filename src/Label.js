import React, { useState } from 'react';

const Label = ({ title, description, image, buttonText, buttonBgColor, buttonTextColor }) => {
  const [hovered, setHovered] = useState(false);

  const LabelStyle = {
    backgroundColor: buttonBgColor || 'grey', // default to grey if no prop
    color: buttonTextColor || 'white',       // default to white if no prop
    padding: '5px 10px',
    border: 'none',
    borderRadius: '50px',
    cursor: 'pointer',
    marginBottom: '10px',  // Space between button and title
    fontSize: '0.8rem',
    fontWeight: 800
  };

  return (
    <button style={LabelStyle}>{buttonText || 'Click me'}</button>
  );
}

  export default Label;