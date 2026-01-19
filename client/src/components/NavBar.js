// src/components/NavBar.js
import React from 'react';
import { BookOpen, LogOut, User } from 'lucide-react';

const NavBar = ({ setCurrentPage, handleLogout, isLoggedIn, currentUser }) => (
  <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
    <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('courses')}>
        <BookOpen className="w-8 h-8" />
        <span className="text-2xl font-bold">LearnHub</span>
      </div>
      {isLoggedIn && (
        <div className="flex items-center space-x-6">
          <button onClick={() => setCurrentPage('about')} className="hover:text-indigo-200 transition">About</button>
          <button onClick={() => setCurrentPage('courses')} className="hover:text-indigo-200 transition">Courses</button>
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>{currentUser?.name}</span>
          </div>
          <button onClick={handleLogout} className="flex items-center space-x-1 bg-white text-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-50 transition">
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
      )}
    </div>
  </nav>
);

export default NavBar;
