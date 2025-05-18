"use client"

import { useState } from 'react';
import { Info, ExternalLink } from 'lucide-react';

export default function AtlassianLoginPage() {
  const [email, setEmail] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', { email, rememberMe });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/bg.avif')" }}>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        {/* Atlassian Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className="mr-2">
                <img src="/images/logo.svg" alt="Atlassian Logo" className="w-8 h-8" />
            </div>
            <div className="text-blue-600 font-bold text-3xl">ATLASSIAN</div>
          </div>
        </div>

        <h2 className="text-center text-gray-800 text-lg font-medium mb-6">Log in to continue</h2>

        <div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 text-gray-700 py-2 border border-gray-300 rounded-md"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="remember-me"
              className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember-me" className="ml-2 text-sm text-gray-700">Remember me</label>
            <div className="ml-1">
              <Info size={16} className="text-blue-600 bg-blue-100 rounded-full" />
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Continue
          </button>
        </div>

        {/* Can't log in? and Create account links */}
        <div className="mt-6 flex justify-center text-sm">
          <a href="#" className="text-blue-600 hover:text-blue-800">Can't log in?</a>
          <span className="mx-2 text-gray-500">•</span>
          <a href="#" className="text-blue-600 hover:text-blue-800">Create an account</a>
        </div>

        <hr className="my-6 border-gray-200" />

        {/* Footer */}
        <div className="text-center">
           <div className="flex justify-center mb-8">
                <div className="flex items-center">
                    <div className="mr-2">
                        <img src="/images/logo.svg" alt="Atlassian Logo" className="w-8 h-8" />
                    </div>
                    <div className="text-blue-600 font-bold text-3xl">ATLASSIAN</div>
                </div>
           </div>
          <p className="text-xs text-gray-600">
            One account for Jira, Confluence, Trello and <a href="#" className="text-blue-600 hover:text-blue-800">more</a> <ExternalLink size={12} className="inline" />
          </p>
          
          <div className="flex justify-center space-x-3 mt-2 text-xs">
            <a href="#" className="text-blue-600 hover:underline flex items-center">
              Privacy Policy <ExternalLink size={12} className="ml-1" />
            </a>
            <a href="#" className="text-blue-600 hover:underline flex items-center">
              User Notice <ExternalLink size={12} className="ml-1" />
            </a>
          </div>
          
          <p className="text-xs text-gray-600 mt-2">
            This site is protected by reCAPTCHA and the Google <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> <ExternalLink size={12} className="inline" /> and <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> <ExternalLink size={12} className="inline" /> apply.
          </p>
        </div>
      </div>
    </div>
  );
}