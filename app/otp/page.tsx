"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function OtpPage() {
  const [otp, setOtp] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email') || 'user@example.com';

  interface HandleVerifyEvent extends React.MouseEvent<HTMLButtonElement> {}

  const handleVerify = (e: HandleVerifyEvent) => {
    e.preventDefault();
    if (otp.length !== 6 || !/^\d+$/.test(otp)) {
      alert('Please enter a valid 6-digit OTP.');
      return;
    }
    // Navigate to password setup page with email as query parameter
    router.push(`/password?email=${encodeURIComponent(email)}`);
  };

  const handleResendCode = () => {
    console.log('Resending OTP to:', email);
    alert(`A new OTP has been sent to ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F4F5F7] p-4">
      <div className="w-full max-w-[400px] p-6 sm:p-8 bg-white rounded-lg shadow-lg">
        {/* Atlassian Logo */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center">
            <div className="mr-2">
              <img src="/images/logo.svg" alt="Atlassian Logo" className="w-8 h-8" />
            </div>
            <div className="text-[#0052CC] font-bold text-2xl sm:text-3xl">ATLASSIAN</div>
          </div>
        </div>

        <h2 className="text-center text-[#172B4D] text-lg sm:text-xl font-medium mb-4">
          Confirm your email address
        </h2>

        <p className="text-center text-[#5E6C84] text-sm sm:text-base mb-6">
          Enter the 6-digit code we sent to{' '}
          <span className="text-[#172B4D] font-medium">{email}</span>
        </p>

        {/* OTP Input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter 6-digit code"
            maxLength={6}
            className="w-full px-3 py-2 border border-[#DFE1E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-[#172B4D] text-sm sm:text-base text-center"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>

        {/* Verify Button */}
        <button
          onClick={handleVerify}
          className="w-full bg-[#0052CC] text-white py-2 px-4 rounded-md font-medium text-sm sm:text-base hover:bg-[#003087] transition"
        >
          Verify
        </button>

        {/* Resend Code Link */}
        <div className="mt-4 text-center">
          <p className="text-sm text-[#5E6C84]">
            Didn’t receive a code?{' '}
            <button
              onClick={handleResendCode}
              className="text-[#0052CC] underline hover:text-[#003087]"
            >
              Resend code
            </button>
          </p>
        </div>

        {/* Footer */}
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