'use client';

import React from 'react';
import Image from "next/image";

const plans = [
  {
    name: 'Starting at',
    price: '$300',
    features: [
      'Team members starting at 25',
      'Groups starting at 10',
      'Users starting at 500',
      'Metrics starting at 30',
      'Email/SMS/webhook notifications',
      'Custom CSS/HTML/JS',
      'Manage API',
      'Team member SSO (with Atlassian Guard)',
      'Component subscriptions',
    ],
  },
];

const AudienceSpecificPage = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-8 px-4">
      {/* Main Section: Grid layout for left pricing card and right image with text */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Side: Pricing Card Section */}
          <div className="bg-gray-900 rounded-lg shadow-md p-6">
            {/* Div wrapping "Starting at $300 /month" and "Get started today" with increased height */}
            <div className="bg-gray-800 rounded-lg p-4 mb-4 py-8">
              <h2 className="text-xl font-semibold mb-2">{plans[0].name}</h2>
              <p className="text-3xl font-bold mb-4 inline-block">{plans[0].price} <span className="text-sm font-normal">/month</span></p>
              <div className="mt-4">
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" style={{ width: 'fit-content' }}>
                  Get started today
                </button>
              </div>
            </div>
            {/* Feature list starting immediately after the new div */}
            <ul className="text-sm space-y-2">
              {plans[0].features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-400">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <a href="#" className="text-blue-400 hover:underline text-sm font-medium mt-4 inline-block">
              Learn more about Audience-specific pages →
            </a>
          </div>

          {/* Right Side: Image with Text Above, reduced height and added background */}
          <div className="flex flex-col items-center bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">Different views for different sets of users</h3>
            <div className="flex justify-center">
              <Image
                src="/images/AudienceSpecificPage.svg"
                alt="Different views for different sets of users"
                width={200}
                height={150}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudienceSpecificPage;