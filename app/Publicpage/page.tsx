
import Image from 'next/image';
import Header from '../components/Header/page';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import IncidentSection from '../components/IncidentSection';
import React from 'react';

const HomePage = () => {

  const integrations = [
  { name: 'Opsgenie', icon: '🛡️' },
  { name: 'Slack', icon: '💬' },
  { name: 'Twitter', icon: '🐦' },
  { name: 'Zendesk', icon: '🛎️' },
  { name: 'Jira Service Management', icon: '⚡' },
  { name: 'PagerDuty', icon: '📟' },
  { name: 'Microsoft Teams', icon: '👥' },
  { name: 'Intercom', icon: '💬' },
];
    
  return (
    <div>
      <Header />

            <section className="text-center py-16 px-4 bg-gray-900">
        <h1 className="text-4xl font-bold mb-2">Public Pages</h1>
        <p className="text-lg mb-6 max-w-xl mx-auto">
          Effortlessly communicate with page viewers to build trust before, during, and after an incident.
        </p>
        <div className="space-x-4">
          <button className="bg-yellow-400 text-white px-5 py-2 rounded font-medium">Get it free</button>
          <button className="text-blue-600 underline">See it in action</button>
        </div>
        <div className="mt-10">
          <img src="/images/Dash.png" alt="Dashboard Illustration" className="mx-auto w-96" />
        </div>
      </section>
            {/* Introduction Section */}

            <section className="py-16 px-4 bg-gray-900 text-center">
        <div className="max-w-4xl mx-auto">
          <img src="/images/illus.png" alt="Statuspage Icon" className="mx-auto mb-4 w-16" />
          <h2 className="text-2xl font-semibold mb-2">Introduction to Statuspage</h2>
          <p className="mb-4">
            Learn incident communication best practices and tips, as well as which type of status page is right for you and how to use it effectively.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Watch our webinar</button>
        </div>
      </section>

            <section className="py-16 px-4 text-center">
        <h2 className="text-2xl font-semibold mb-12">Stats from teams using Statuspage</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <span className="text-blue-600 text-3xl">⚡</span>
            <h3 className="font-bold mt-2">Faster Incident Comms</h3>
            <p>Incident communications +50% faster than their previous method</p>
          </div>
          <div>
            <span className="text-blue-600 text-3xl">❓</span>
            <h3 className="font-bold mt-2">Fewer Questions</h3>
            <p>A 24% decrease in incident-related support tickets during downtime</p>
          </div>
          <div>
            <span className="text-blue-600 text-3xl">👍</span>
            <h3 className="font-bold mt-2">More Customer Trust</h3>
            <p>67% reported an increase in user trust</p>
          </div>
          <div>
            <span className="text-blue-600 text-3xl">⏱️</span>
            <h3 className="font-bold mt-2">Less Time Wasted</h3>
            <p>80% of support teams say they're more efficient during incidents</p>
          </div>
        </div>
      </section>

            <section className="py-16 px-4 bg-gray-900 text-center">
        <h2 className="text-xl font-semibold mb-6">Trusted by thousands of companies</h2>
        <div className="flex justify-center flex-wrap gap-8">
          {['New Relic', 'Twilio', 'Dropbox', 'GoToMeeting', 'DigitalOcean', 'Shopify'].map((company) => (
            <div key={company} className="text-gray-300 text-lg font-medium">
              {company}
            </div>
          ))}
        </div>
      </section>

      {/* Integration Section */}
    <section className="py-16 px-4 text-center bg-gray-900">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connect the tools you already love</h2>
      <p className="max-w-xl mx-auto text-gray-600 mb-10">
        Inform your customers even faster with our native integration suite. Connect your status
        page to the most popular communication, monitoring, and alerting tools, or use our <a className="underline text-blue-600" href="#">REST API</a>.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {integrations.map((tool) => (
          <div key={tool.name} className="bg-gray-600 p-6 rounded-lg shadow-sm flex flex-col items-center justify-center hover:shadow-md transition">
            <div className="text-3xl mb-2">{tool.icon}</div>
            <span className="text-sm font-medium text-gray-800">{tool.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <a href="#" className="text-blue-600 hover:underline text-sm font-medium">
          Visit our Marketplace →
        </a>
      </div>
    </section>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white mt-16 px-8 md:px-20 flex items-center justify-center">
        

          {/* Pricing Card */}
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
            <p className="text-lg font-bold mb-2">Free</p>
            <p className="text-sm mb-4 text-gray-400">
              Our free plan gives you access to 100 subscribers, 25 components, two team members, two metrics, email
              notifications, Slack notifications, Microsoft Teams notifications, and access to REST APIs.
            </p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Get started today
            </button>
          </div>
    </section>

    <Pricing />
    <IncidentSection/>
      <Footer/>
    </div>
  );
};

export default HomePage;
