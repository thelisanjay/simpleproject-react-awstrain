import React, { useState, useEffect } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = () => {
  const text = "WELCOME TO AWS TRAINING sanjayRockstar ,mcnddfdsvsdfskvff sdkjnvijcnvkjdnnd";
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">
        {displayText.split('').map((char, index) => (
          <span key={index} className="animated-letter">
            {char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default WelcomeScreen;

