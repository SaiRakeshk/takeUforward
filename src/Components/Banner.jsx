import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Banner.css';

const Banner = ({ content, timer, link, onHide }) => {
  const [countdown, setCountdown] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prevCountdown => {
        if (prevCountdown <= 1) {
          clearInterval(interval);
          onHide(); // Hide banner when countdown ends
          return 0;
        }
        return prevCountdown - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, onHide]);

  return (
    <div className="banner">
      <p>{content}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Learn More</a>
      <p>Time remaining: {countdown}s</p>
    </div>
  );
};

Banner.propTypes = {
  content: PropTypes.string.isRequired,
  timer: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
};

export default Banner;
