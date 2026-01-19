// src/App.js
import React, { useState } from 'react';
import './App.css';
import { coursesData } from './data/courses';
import NavBar from './components/NavBar';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import CourseDetailPage from './pages/CourseDetailPage';
import TestPage from './pages/TestPage';
import LessonPage from './pages/Lessonpage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);
  const [activeTest, setActiveTest] = useState(null);
  const [testAnswers, setTestAnswers] = useState({});
  const [testResults, setTestResults] = useState(null);

  const [loginEmail, setLoginEmail] = useState('demo@student.com');
  const [loginPassword, setLoginPassword] = useState('demo123');
  const [signupName, setSignupName] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');


  // Handlers
  const handleSignup = async () => {
  const res = await fetch("http://localhost:5000/api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: signupName,
      email: signupEmail,
      password: signupPassword,
    }),
  });

    const data = await res.json();
    if (!res.ok) return alert(data.message);
    alert("Signup successful! Please login now.");
    setCurrentPage("login")
};

const handleLogin = async () => {
  const res = await fetch("http://localhost:5000/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: loginEmail,
      password: loginPassword,
    }),
  });

    const data = await res.json();
    if (!res.ok) return alert(data.message);
    setCurrentUser(data.user);
    setIsLoggedIn(true);
    setCurrentPage("courses");
};


  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentPage('login');
    setSelectedCourse(null);
    setActiveTest(null);
    setTestAnswers({});
    setTestResults(null);
  };

  const handleTestSubmit = () => {
    let score = 0;
    const total = activeTest.questions.length;
    activeTest.questions.forEach(q => {
      if (testAnswers[q.id] === q.correct) score++;
    });
    setTestResults({
      score,
      total,
      percentage: ((score / total) * 100).toFixed(1)
    });
  };

  if (!isLoggedIn)
    return currentPage === 'signup' ? (
      <SignupPage
        {...{ signupName, signupEmail, signupPassword, setSignupName, setSignupEmail, setSignupPassword, handleSignup, setCurrentPage }}
      />
    ) : (
      <LoginPage
        {...{ loginEmail, loginPassword, setLoginEmail, setLoginPassword, handleLogin, setCurrentPage }}
      />
    );

  if (activeTest)
    return <TestPage {...{ activeTest, testAnswers, setTestAnswers, handleTestSubmit, testResults, setTestResults, setActiveTest }} />;
  if (activeLesson)
    return <LessonPage {...{ activeLesson, setActiveLesson }} />;
  if (selectedCourse)
    return <CourseDetailPage {...{ selectedCourse, setSelectedCourse, setActiveTest, setTestAnswers, setTestResults, activeLesson, setActiveLesson }} />;

  if (currentPage === 'about')
    return <AboutPage NavBar={NavBar} {...{ setCurrentPage, handleLogout, isLoggedIn, currentUser }} />;

  return (
    <CoursesPage
      NavBar={NavBar}
      {...{ coursesData, setSelectedCourse, setCurrentPage, handleLogout, isLoggedIn, currentUser }}
    />
  );
}

export default App;
