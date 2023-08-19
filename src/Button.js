import React from 'react';
import { Link } from 'react-router-dom';

function Button({ backgroundColor, text, link, variant, ...props }) {
  let className = 'button';

  if (variant === 'big') {
      className = 'button-big';
  } else if (variant === 'big-s') {
      className = 'button-big-s';
  }

  return (
    <Link to={link}>
      <button className={className} {...props}>
        {text}
      </button>
    </Link>
  );
}

export default Button;
