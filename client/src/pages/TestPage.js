// src/pages/TestPage.js
import React from 'react';
import { Award } from 'lucide-react';
import NavBar from '../components/NavBar';

const TestPage = ({ activeTest, testAnswers, setTestAnswers, handleTestSubmit, testResults, setTestResults, setActiveTest }) => {
  if (testResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <NavBar />
        <div className="max-w-3xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <Award className="w-24 h-24 text-indigo-600 mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Test Completed!</h1>
            <div className="bg-indigo-50 p-8 rounded-xl mb-6">
              <p className="text-6xl font-bold text-indigo-600 mb-2">{testResults.percentage}%</p>
              <p className="text-xl text-gray-700">
                You scored {testResults.score} out of {testResults.total}
              </p>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => {
                  setActiveTest(null);
                  setTestResults(null);
                  setTestAnswers({});
                }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition"
              >
                Back to Course
              </button>
              <button
                onClick={() => {
                  setTestAnswers({});
                  setTestResults(null);
                }}
                className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Retake Test
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{activeTest.title}</h1>
            <p className="text-gray-600">Answer all questions and submit when ready</p>
          </div>
          <div className="space-y-8">
            {activeTest.questions.map((q, idx) => (
              <div key={q.id} className="border-b pb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {idx + 1}. {q.question}
                </h3>
                <div className="space-y-3">
                  {q.options.map((option, optIdx) => (
                    <label
                      key={optIdx}
                      className="flex items-center space-x-3 p-4 rounded-lg border-2 cursor-pointer hover:bg-indigo-50 transition"
                      style={{
                        borderColor: testAnswers[q.id] === optIdx ? '#4f46e5' : '#e5e7eb',
                        backgroundColor: testAnswers[q.id] === optIdx ? '#eef2ff' : 'white'
                      }}
                    >
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        checked={testAnswers[q.id] === optIdx}
                        onChange={() => setTestAnswers({ ...testAnswers, [q.id]: optIdx })}
                        className="w-5 h-5 text-indigo-600"
                      />
                      <span className="text-gray-800">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between">
            <button
              onClick={() => {
                setActiveTest(null);
                setTestAnswers({});
              }}
              className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
            >
              Cancel
            </button>
            <button
              onClick={handleTestSubmit}
              disabled={Object.keys(testAnswers).length !== activeTest.questions.length}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition disabled:opacity-50"
            >
              Submit Test
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
