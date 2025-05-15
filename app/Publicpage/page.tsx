
import Image from 'next/image';
import React from 'react';
import Header from '../components/Header/page';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import IncidentSection from '../components/IncidentSection';

const HomePage = () => {
    
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="bg-gray-900 text-white mt-16 px-8 md:px-20 flex items-center justify-center">
        

          {/* Pricing Card */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-xl mx-auto">
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
