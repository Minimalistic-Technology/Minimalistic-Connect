'use client';

import React from 'react';

const plans = [
  {
    name: 'Starter',
    price: '$79',
    features: [
      '5 team members',
      '50 authenticated subscribers',
      '5 metrics',
      'Email notifications',
      'Custom CSS',
      'incident templates',
      'Team member SSO (with Atlassian Guard)',
      'Email support',
      
    ],
  },
  {
    name: 'Growth',
    price: '$249',
    features: [
      '15 team members',
      '300 authenticated subscribers',
      '15 metrics',
      'Email/SMS/webhook notifications',
      'Custom CSS/HTML/JS',
      'incident templates',
      'Component subscriptions',
      'IP allowlisting',
      'Team member SSO (with Atlassian Guard)',
      'Email support',
    ],
  },
  {
    name: 'Corporate',
    price: '$599',
    features: [
      '35 team members',
      '1,000 authenticated subscribers',
      '35 metrics',
      'Email/SMS/webhook notifications',
      'Custom CSS/HTML/JS',
      'Incident templates',
      'Component subscriptions',
      'IP allowlisting',
      'Team member SSO (with Atlassian Guard)',
      'Yearly purchase orders and invoicing available (for eligible purchases)',
      'Email support',
      'Role-based access control',
    ],
  },
  {
    name: 'Enterprise',
    price: '$1,499',
    features: [
      '50 team members',
      '5,000 authenticated subscribers',
      '50 metrics',
      'Email/SMS/webhook notifications',
      'Custom CSS/HTML/JS',
      'Alerting integrations',
      'Incident templates',
      'Component subscriptions',
      'IP allowlisting',
      'Team member SSO (with Atlassian Guard)',
      'Yearly purchase orders and invoicing available',
      'Email support',
      'Role-based access control',
      'Account represntative support',
    ],
  },
];

const Private = () => {
  return (
    <div className="bg-gray-900 text-gray-300 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <p className="mt-1 text-gray-400">Communicate privately with your employees about issues with internal tools and services.</p>
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

export default Private;
