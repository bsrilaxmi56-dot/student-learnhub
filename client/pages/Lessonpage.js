import React, { useState } from 'react';

const LessonSlider = ({ lessons }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < lessons.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="lesson-slider">
      <div className="lesson-content">
        {/* Display current lesson */}
        <h2>{lessons[currentIndex].title}</h2>
        <p>{lessons[currentIndex].content}</p>
      </div>
      {/* Move navigation buttons below the slide */}
      <div className="lesson-navigation" style={{ marginTop: '20px', textAlign: 'center' }}>
        <button onClick={handlePrev} disabled={currentIndex === 0}>Previous</button>
        <button onClick={handleNext} disabled={currentIndex === lessons.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default LessonSlider;