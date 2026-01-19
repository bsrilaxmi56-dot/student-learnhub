// src/components/CourseCard.js
import React from 'react';
import { Clock, BookOpen, User } from 'lucide-react';

const CourseCard = ({ course, onSelect }) => (
  <div
    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition cursor-pointer"
    onClick={() => onSelect(course)}
  >
    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center space-x-2">
          <BookOpen className="w-4 h-4" />
          <span>{course.lessons} lessons</span>
        </div>
        <div className="flex items-center space-x-2">
          <User className="w-4 h-4" />
          <span>{course.enrolled} students enrolled</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t">
        <p className="text-sm text-gray-600">
          Instructor: <span className="font-semibold">{course.instructor}</span>
        </p>
      </div>
      <button className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition">
        View Course
      </button>
    </div>
  </div>
);

export default CourseCard;
