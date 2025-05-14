'use client';

import React from 'react';

const plans = [
  {
    name: 'Hobby',
    price: '$29',
    features: [
      '250 subscribers',
      '5 team members',
      '5 metrics',
      'Email notifications',
      'Slack notifications',
      'Microsoft Teams notifications',
      'Basic customization',
      'Custom domain',
      'Access to REST APIs',
    ],
  },
  {
    name: 'Startup',
    price: '$99',
    features: [
      '1,000 subscribers',
      '10 team members',
      '10 metrics',
      'Email/SMS/webhook notifications',
      'Slack notifications',
      'Microsoft Teams notifications',
      'Custom CSS',
      'Custom domain',
      'Access to REST APIs',
      'Team member SSO (with Atlassian Guard)',
    ],
  },
  {
    name: 'Business',
    price: '$399',
    features: [
      '5,000 subscribers',
      '25 team members',
      '25 metrics',
      'Email/SMS/webhook notifications',
      'Slack notifications',
      'Microsoft Teams notifications',
      'Custom CSS/HTML/JS',
      'Custom domain',
      'Access to REST APIs',
      'Team member SSO (with Atlassian Guard)',
      'Component subscriptions',
      'Role-based access control',
    ],
  },
  {
    name: 'Enterprise',
    price: '$1,499',
    features: [
      '25,000 subscribers',
      '50 team members',
      '50 metrics',
      'Email/SMS/webhook notifications',
      'Slack notifications',
      'Microsoft Teams notifications',
      'Custom CSS/HTML/JS',
      'Custom domain',
      'Access to REST APIs',
      'Team member SSO (with Atlassian Guard)',
      'Component subscriptions',
      'Verify purchase orders and invoicing available',
      'Role-based access control',
    ],
  },
];

const Pricing = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-bold">Pricing that scales with you as you grow.</h1>
        <p className="mt-2 text-gray-400">Create your page in minutes. Launch it when you're ready.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-gray-900 rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold mb-4">{plan.price} <span className="text-sm font-normal">/month</span></p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-6">
              Get started today
            </button>
            <ul className="text-sm space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-400">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
