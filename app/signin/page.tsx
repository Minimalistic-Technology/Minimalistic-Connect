"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Eye, EyeOff, GoalIcon, Apple, Slack, Mail } from 'lucide-react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  interface LoginResponse {
    accessToken: string;
    error?: string;
    [key: string]: any;
  }

  interface LoginEvent extends React.MouseEvent<HTMLButtonElement, MouseEvent> {}

  const handleSubmit = async (e: LoginEvent): Promise<void> => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }

    try {
      // Login request
      const loginResponse = await fetch('http://localhost:5000/api/v1/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const loginData: LoginResponse = await loginResponse.json();
      if (!loginResponse.ok) {
        alert(loginData.error || 'Login failed. Please try again.');
        return;
      }

      // Store access token
      localStorage.setItem('accessToken', loginData.accessToken);

      // Fetch user details (assuming a new endpoint or database query is needed)
      // Since your backend doesn't return username/email in login, assume a new endpoint
      const userResponse = await fetch('http://localhost:5000/api/v1/me', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${loginData.accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      const userData = await userResponse.json();
      if (!userResponse.ok) {
        alert(userData.error || 'Failed to fetch user details.');
        return;
      }

      // Store user details in localStorage
      localStorage.setItem('username', userData.username);
      localStorage.setItem('email', userData.email);

      alert('Login successful!');
      router.push(`/?username=${encodeURIComponent(userData.username)}&email=${encodeURIComponent(userData.email)}`);
    } catch (error) {
      console.error('Login error:', error);
      alert('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F5F7] p-4">
      <div className="w-full max-w-[400px] p-6 sm:p-8 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <div className="mr-2">
              <img src="/images/logo.svg" alt="Atlassian Logo" className="w-8 h-8" />
            </div>
            <div className="text-[#0052CC] font-bold text-2xl sm:text-3xl">ATLASSIAN</div>
          </div>
        </div>

        <h2 className="text-center text-[#172B4D] text-lg sm:text-xl font-medium mb-6">
          Log in to continue
        </h2>

        <div className="mb-4">
          <label className="block text-[#172B4D] text-sm font-medium mb-1">Email address</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-[#DFE1E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-[#172B4D] text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6 relative">
          <label className="block text-[#172B4D] text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-[#DFE1E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-[#172B4D] text-sm sm:text-base"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#5E6C84] hover:text-[#172B4D]"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-[#0052CC] text-white py-2 px-4 rounded-md font-medium text-sm sm:text-base hover:bg-[#003087] transition"
        >
          Log in
        </button>

        <div className="my-6 text-center text-[#5E6C84] text-sm sm:text-base">
          Or continue with:
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full flex items-center justify-center py-2 px-4 border border-[#DFE1E6] rounded-md bg-white text-[#172B4D] text-sm sm:text-base hover:bg-[#FAFBFC] transition">
            <GoalIcon className="w-5 h-5 mr-2" />
            Google
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 border border-[#DFE1E6] rounded-md bg-white text-[#172B4D] text-sm sm:text-base hover:bg-[#FAFBFC] transition">
            <Mail className="w-5 h-5 mr-2" />
            Microsoft
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 border border-[#DFE1E6] rounded-md bg-white text-[#172B4D] text-sm sm:text-base hover:bg-[#FAFBFC] transition">
            <Apple className="w-5 h-5 mr-2" />
            Apple
          </button>
          <button className="w-full flex items-center justify-center py-2 px-4 border border-[#DFE1E6] rounded-md bg-white text-[#172B4D] text-sm sm:text-base hover:bg-[#FAFBFC] transition">
            <Slack className="w-5 h-5 mr-2" />
            Slack
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-[#5E6C84]">
            Don’t have an Atlassian account?{' '}
            <a href="/signup" className="text-[#0052CC] underline hover:text-[#003087]">
              Sign up
            </a>
          </p>
        </div>

        <div className="mt-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="flex items-center">
              <div className="mr-2">
                <img src="/images/logo.svg" alt="Atlassian Logo" className="w-8 h-8" />
              </div>
              <div className="text-[#0052CC] font-bold text-2xl sm:text-3xl">ATLASSIAN</div>
            </div>
          </div>
          <p className="text-xs text-[#5E6C84]">
            One account for Jira, Confluence, Trello and{' '}
            <a href="#" className="text-[#0052CC] underline hover:text-[#003087]">
              more
            </a>.
          </p>
          <p className="text-xs text-[#5E6C84] mt-2">
            This site is protected by reCAPTCHA and the Google{' '}
            <a href="#" className="text-[#0052CC] underline hover:text-[#003087]">
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="#" className="text-[#0052CC] underline hover:text-[#003087]">
              Terms of Service
            </a>{' '}
            apply.
          </p>
        </div>
      </div>
    </div>
  );
}