import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#8E3E63] to-[#D2649A] flex items-center justify-center overflow-hidden">
      <div className="text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Resume Builder</h1>
        <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
          Create a professional resume in minutes. Choose from multiple templates and download your resume as PDF.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          {token ? (
            <>
              <button
                onClick={() => navigate('/builder')}
                className="px-8 py-3 bg-white text-[#8E3E63] font-bold rounded-lg hover:bg-gray-100 transition"
              >
                Continue Building
              </button>
              <button
                onClick={() => {
                  localStorage.removeItem('token');
                  navigate('/login');
                }}
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#8E3E63] transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate('/login')}
                className="px-8 py-3 bg-white text-[#8E3E63] font-bold rounded-lg hover:bg-gray-100 transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/register')}
                className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-[#8E3E63] transition"
              >
                Sign Up
              </button>
            </>
          )}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-xl font-bold mb-2">Choose Templates</h3>
            <p>Select from professionally designed resume templates</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-bold mb-2">Fill Your Info</h3>
            <p>Enter your personal details, experience, and skills easily</p>
          </div>
          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-sm">
            <div className="text-4xl mb-4">⬇️</div>
            <h3 className="text-xl font-bold mb-2">Download PDF</h3>
            <p>Download your professional resume as a PDF file</p>
          </div>
        </div>
      </div>
    </div>
  );
}
