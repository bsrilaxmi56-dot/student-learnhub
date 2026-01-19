// src/pages/CoursesPage.js
import React from 'react';
import CourseCard from '../components/CourseCard';

const CoursesPage = ({ NavBar, coursesData, setSelectedCourse, setCurrentPage, handleLogout, isLoggedIn, currentUser }) => (
  <div className="min-h-screen bg-gray-50">
    <NavBar {...{ setCurrentPage, handleLogout, isLoggedIn, currentUser }} />
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Available Courses</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coursesData.map(course => (
          <CourseCard key={course.id} course={course} onSelect={setSelectedCourse} />
        ))}
      </div>
    </div>
  </div>
);

export default CoursesPage;
