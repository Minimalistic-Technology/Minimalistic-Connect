"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoalIcon, Apple, Slack, Mail } from 'lucide-react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const router = useRouter();

  interface HandleSubmitEvent extends React.FormEvent<HTMLButtonElement> {}

  const handleSubmit = (e: HandleSubmitEvent): void => {
    e.preventDefault();

    // Validation: Ensure email is a Gmail address
    if (!email || !email.includes("@") || !email.toLowerCase().endsWith("@gmail.com")) {
      alert("Please enter a valid Gmail address (e.g., example@gmail.com).");
      return;
    }

    // Validation: Ensure terms are accepted
    if (!acceptTerms) {
      alert('Please accept the terms of service and privacy policy.');
      return;
    }

    // Navigate to OTP page with email as query parameter
    router.push(`/otp?email=${encodeURIComponent(email)}`);
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

        <h2 className="text-center text-[#172B4D] text-lg sm:text-xl font-medium mb-6">
          Sign up to continue
        </h2>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-3 py-2 border border-[#DFE1E6] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0052CC] text-[#172B4D] text-sm sm:text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Terms Checkbox */}
        <div className="mb-6 flex items-center">
          <input
            type="checkbox"
            id="accept-terms"
            className="h-4 w-4 text-[#0052CC] border-[#DFE1E6] rounded focus:ring-[#0052CC]"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="accept-terms" className="ml-2 text-sm text-[#172B4D]">
            By signing up, I accept the Atlassian Cloud{' '}
            <a href="#" className="Texas-[#0052CC] underline hover:text-[#003087]">
              Terms of Service
            </a>{' '}
            and acknowledge the{' '}
            <a href="#" className="text-[#0052CC] underline hover:text-[#003087]">
              Privacy Policy
            </a>.
          </label>
        </div>

        {/* Sign Up Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-[#0052CC] text-white py-2 px-4 rounded-md font-medium text-sm sm:text-base hover:bg-[#003087] transition"
        >
          Sign up
        </button>

        {/* Divider */}
        <div className="my-6 text-center text-[#5E6C84] text-sm sm:text-base">
          Or continue with:
        </div>

        {/* SSO Buttons */}
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

        {/* Log In Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#5E6C84]">
            Already have an Atlassian account?{' '}
            <a href="/signin" className="text-[#0052CC] underline hover:text-[#003087]">
              Log in
            </a>
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