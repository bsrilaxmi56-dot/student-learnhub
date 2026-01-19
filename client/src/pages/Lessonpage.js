import React, { useState } from 'react';
import { Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import NavBar from '../components/NavBar';

const LessonPage = ({ activeLesson, setActiveLesson }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (!activeLesson) return null;

  const hasSlides = activeLesson.slides && activeLesson.slides.length > 0;
  const totalSlides = hasSlides ? activeLesson.slides.length : 0;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <button onClick={() => setActiveLesson(null)} className="mb-6 text-indigo-600 font-semibold">
          ← Back to Course
        </button>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{activeLesson.title}</h1>
          <div className="flex items-center text-gray-600 mb-6">
            <Clock className="w-5 h-5 mr-2" /> {activeLesson.duration}
          </div>

          {hasSlides ? (
  <div className="w-full flex flex-col items-center text-center">
    {/* Slide container */}
    <div className="w-full flex justify-center mb-8">
      <img
        src={activeLesson.slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="rounded-lg shadow-lg max-w-3xl w-full object-contain"
      />
    </div>

    {/* Navigation block */}
    <div className="w-full flex flex-col items-center mt-6">
      <div className="flex justify-center gap-6">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="px-6 py-3 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 transition"
        >
          ← Previous
        </button>
        <p className="text-gray-700 font-medium mb-3">
        Slide {currentSlide + 1} of {totalSlides}
      </p>
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="px-6 py-3 bg-gray-200 rounded-lg font-semibold hover:bg-gray-300 disabled:opacity-50 transition"
        >
          Next →
        </button>
      </div>
    </div>
  </div>
) : (
  <div className="bg-indigo-50 p-6 rounded-lg text-gray-700 leading-relaxed">
    {activeLesson.content}
  </div>
)}
        </div>
      </div>
    </div>
  );
};

export default LessonPage;
