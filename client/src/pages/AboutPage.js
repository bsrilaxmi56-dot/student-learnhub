// src/pages/AboutPage.js
import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';

const AboutPage = ({ NavBar, setCurrentPage, handleLogout, isLoggedIn, currentUser }) => (
  <div className="min-h-screen bg-gray-50">
    <NavBar {...{ setCurrentPage, handleLogout, isLoggedIn, currentUser }} />
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About LearnHub</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 mb-4">
            LearnHub is an online learning platform designed to empower students with accessible, high-quality education.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We believe education should be accessible, engaging, and effective for everyone.
          </p>
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <BookOpen className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert-Led Courses</h3>
              <p className="text-gray-700">Learn from industry professionals</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <Award className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Tests</h3>
              <p className="text-gray-700">Assess your skills with quizzes</p>
            </div>
            <div className="bg-pink-50 p-6 rounded-lg">
              <CheckCircle className="w-12 h-12 text-pink-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Track Progress</h3>
              <p className="text-gray-700">Monitor your learning journey</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
