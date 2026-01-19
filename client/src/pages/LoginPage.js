// src/pages/LoginPage.js
import React from 'react';
import { BookOpen } from 'lucide-react';

const LoginPage = ({ loginEmail, loginPassword, setLoginEmail, setLoginPassword, handleLogin, setCurrentPage }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
      <div className="text-center mb-8">
        <BookOpen className="w-16 h-16 text-indigo-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-800">Welcome to LearnHub</h2>
        <p className="text-gray-600 mt-2">Sign in to continue learning</p>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-2 font-medium">Password</label>
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <button onClick={handleLogin} className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition">
          Sign In
        </button>
      </div>
      <div className="mt-6 text-center">
        <p className="text-gray-600">
          Don’t have an account?{' '}
          <button onClick={() => setCurrentPage('signup')} className="text-indigo-600 font-semibold hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  </div>
);

export default LoginPage;
