"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Eye, EyeOff } from 'lucide-react';

export default function PasswordPage() {
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || 'user@example.com';

  interface PasswordStrength {
    label: string;
    width: string;
    color: string;
  }

  const getPasswordStrength = (pwd: string): PasswordStrength => {
    if (pwd.length === 0) return { label: '', width: '0%', color: '' };

    let types = 0;
    if (/[a-z]/.test(pwd)) types++;
    if (/[A-Z]/.test(pwd)) types++;
    if (/[0-9]/.test(pwd)) types++;
    if (/[^a-zA-Z0-9]/.test(pwd)) types++;

    if (types === 1) {
      if (pwd.length >= 14) return { label: 'Good', width: '60%', color: 'bg-yellow-500' };
      else if (pwd.length >= 10) return { label: 'Poor', width: '40%', color: 'bg-orange-500' };
      else if (pwd.length >= 8) return { label: 'Very Poor', width: '20%', color: 'bg-red-500' };
    }

    if (types === 2 && pwd.length >= 8) return { label: 'Good', width: '60%', color: 'bg-yellow-500' };
    if (types === 3 && pwd.length >= 8) return { label: 'Strong', width: '80%', color: 'bg-blue-500' };
    if (types === 4 && pwd.length >= 8) return { label: 'Very Strong', width: '100%', color: 'bg-green-500' };

    return { label: 'Very Poor', width: '20%', color: 'bg-red-500' };
  };

  const passwordStrength = getPasswordStrength(password);

  const handleContinue = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }
    if (!fullName.trim()) {
      alert('Please enter your full name.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/v1/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: fullName, email, password }),
      });

      const data = await response.json();
      if (!response.ok) {
        alert(data.message || 'Signup failed. Please try again.');
        return;
      }

      localStorage.setItem('username', fullName);
      localStorage.setItem('email', email);
      alert('Account created successfully! Please log in.');
      router.push('/signin');
    } catch (error) {
      console.error('Signup error:', error);
      alert('An error occurred during signup. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F5F7] p-4">
      <div className="w-full max-w-[400px] p-4 sm:p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
          <div className="flex items-center">
            <img src="/images/logo.svg" alt="Atlassian Logo" className="w-8 h-8 mr-2" />
            <span className="text-[#0052CC] font-bold text-2xl sm:text-3xl">ATLASSIAN</span>
          </div>
        </div>

        <h2 className="text-center text-[#172B4D] text-lg sm:text-xl font-medium mb-2">
          Email address verified
        </h2>

        <p className="text-center text-[#5E6C84] text-sm sm:text-base mb-4">
          Finish setting up your account
        </p>

        <div className="mb-3">
          <label className="block text-[#172B4D] text-sm font-medium mb-1">Email address</label>
          <input
            type="text"
            value={email}
            disabled
            className="w-full py-2 px-4 border border-[#DEFE1E6] rounded-md text-[#172B4D] text-sm bg-gray-100"
          />
        </div>

        <div className="mb-3">
          <label className="block text-[#172B4D] text-sm font-medium mb-1">Full name</label>
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-4 py-2 border border-[#DEFE1E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-[#172B4D] text-sm"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="block text-[#172B4D] text-sm font-medium mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="w-full py-2 px-4 border border-[#DEFE1E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-[#172B4D] text-sm"
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

        {password && (
          <div className="mb-4">
            <label className="block text-[#172B4D] text-sm font-medium mb-1">Password strength:</label>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${passwordStrength.color}`}
                style={{ width: passwordStrength.width }}
              />
            </div>
            <p className="text-sm text-[#5E6C84] mt-1">{passwordStrength.label}</p>
          </div>
        )}

        <p className="text-center text-sm text-[#172B4D] mb-4">
          By signing up, I accept the Atlassian Cloud{' '}
          <a href="#" className="text-[#0052CC] underline hover:text-[#003087]">Terms of Service</a> and acknowledge the{' '}
          <a href="#" className="text-[#0052CC] underline hover:text-[#003087]">Privacy Policy</a>.
        </p>

        <button
          onClick={handleContinue}
          className="w-full bg-[#0052CC] text-white py-2 px-4 rounded font-medium text-sm sm:text-base hover:bg-[#003087] transition"
        >
          Continue
        </button>

        <div className="mt-6 text-center">
          <div className="flex justify-center mb-2">
            <img src="/images/logo.svg" alt="Atlassian Logo" className="w-6 h-6 mr-1" />
            <span className="text-[#0052CC] font-bold text-xl">ATLASSIAN</span>
          </div>
          <p className="text-xs text-[#5E6C84]">
            One account for Jira, Confluence, Trello and{' '}
            <a href="#" className="text-[#0052CC] underline hover:text-[#003087]">more</a>.
          </p>
          <p className="text-xs text-[#5E6C84] mt-2">
            Protected by reCAPTCHA and the Google{' '}
            <a href="#" className="text-[#0052CC] underline hover:text-[#003087]">Privacy Policy</a> and{' '}
            <a href="#" className="text-[#0052CC] underline hover:text-[#003087]">Terms of Service</a> apply.
          </p>
        </div>
      </div>
    </div>
  );
}