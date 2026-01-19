// src/pages/CourseDetailPage.js
import React, { useState, useEffect } from 'react';
import { Clock, BookOpen, User } from 'lucide-react';
import NavBar from '../components/NavBar';

const CourseDetailPage = ({ selectedCourse, setSelectedCourse, setActiveTest, setTestAnswers, setTestResults, activeLesson, setActiveLesson }) => {
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(() => {
    // Check if user is enrolled when component mounts
    const enrolled = localStorage.getItem(`enrolled_${selectedCourse.id}`);
    setIsEnrolled(!!enrolled);
  }, [selectedCourse.id]);

  const handleEnroll = () => {
    localStorage.setItem(`enrolled_${selectedCourse.id}`, 'true');
    setIsEnrolled(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <button onClick={() => setSelectedCourse(null)} className="mb-6 text-indigo-600 hover:text-indigo-800 font-semibold">
          ← Back to Courses
        </button>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-64 object-cover" />
          <div className="p-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{selectedCourse.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{selectedCourse.description}</p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-indigo-50 p-4 rounded-lg">
                <Clock className="w-6 h-6 text-indigo-600 mb-2" />
                <p className="text-sm text-gray-600">Duration</p>
                <p className="font-semibold text-gray-800">{selectedCourse.duration}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <BookOpen className="w-6 h-6 text-purple-600 mb-2" />
                <p className="text-sm text-gray-600">Lessons</p>
                <p className="font-semibold text-gray-800">{selectedCourse.lessons} lessons</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg">
                <User className="w-6 h-6 text-pink-600 mb-2" />
                <p className="text-sm text-gray-600">Instructor</p>
                <p className="font-semibold text-gray-800">{selectedCourse.instructor}</p>
              </div>
            </div>

            {!isEnrolled ? (
              <button
                onClick={handleEnroll}
                className="mb-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Enroll in Course
              </button>
            ) : (
              <div className="mb-6 text-green-600 font-medium">
                ✓ Enrolled in this course
              </div>
            )}

            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Lessons</h2>
              <div className="space-y-4">
                {selectedCourse.lessonsList.map((lesson, idx) => (
                  <div key={lesson.id} className={`bg-gray-50 p-5 rounded-lg flex items-center justify-between hover-shadow transition cursor-pointer ${!isEnrolled ? 'opacity-50' : ''}`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-indigo-100 text-indigo-600 font-bold rounded-full w-10 h-10 flex items-center justify-center">{idx + 1}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{lesson.title}</h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                          <Clock className="w-4 h-4" />
                          <span>{lesson.duration}</span>
                        </div>
                      </div>
                    </div>
                    {!isEnrolled ? (
                      <span className="text-sm text-gray-500">🔒 Enroll to unlock</span>
                    ) : lesson.completed ? (
                      <CheckCircleIcon className="w-6 h-6 text-green-500" />
                    ) : (
                      <button onClick={(e) => { e.stopPropagation(); setActiveLesson(lesson); }} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition">Start Lesson</button>
                    )}
                  </div>
                ))}
              </div>
            </div>


            <div className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Tests</h2>
              <div className="space-y-4">
                {selectedCourse.tests.map(test => (
                  <div key={test.id} className="bg-gray-50 p-6 rounded-lg flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{test.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{test.duration}</span>
                        </span>
                        <span>{test.questions.length} questions</span>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setActiveTest(test);
                        setTestAnswers({});
                        setTestResults(null);
                      }}
                      className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition"
                    >
                      Start Test
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
