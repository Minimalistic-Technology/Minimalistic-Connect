import React from 'react';
import Header from '../components/Header/page';
import Footer from '../components/Footer';
import Image from "next/image";
const audience = () => {
  return (
    
     <div className="bg-gray-900 text-gray-300">
        <Header/>
    <section className="bg-gray-900 text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-2">Audience-specific Pages</h2>
        <p className="text-gray-400">
          Tailored status information for each of your users
        </p>
      </div>

      {/* Top Row */}
      <div className="max-w-7xl mx-auto mt-16 grid md:grid-cols-2 gap-16 items-center px-4">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">The right view for the right customer</h3>
          <p>
            Status communication gets complicated when you have different customers
            using a variety of different services and hosted on different infrastructure.
            With Audience-specific pages comes the power to target updates only to those
            customers impacted by an incident. All without needing multiple status pages.
          </p>
          <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded font-medium text-sm">
            Get it free
          </button>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/audience-specific-illustration.svg"
            alt="Audience specific view"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Middle Row */}
      <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 gap-16 items-center px-4">
        <div className="flex justify-center">
          <Image
            src="/images/Meeples Mobile All@2x.svg" 
            alt="Access by user group"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Grant access based on users or groups</h3>
          <p>
            You may have VIP customers who need to see different sets of information,
            or individual employees who depend on a variety of third-party services
            and don’t need to know about the rest. Audience-specific pages let you
            configure access and permissions appropriately for your user-base.
          </p>
          <a href="#" className="text-blue-400 hover:underline text-sm font-medium">
            Learn more →
          </a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-20 grid md:grid-cols-2 gap-16 items-center px-4">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Priced for scale</h3>
          <p>
            Audience-specific pages have their own pricing model, separate from Public
            and Private Pages. Pricing starts at $300/month and each page comes with up
            to 10 groups and 500 users. To make sure you’re getting the most out of your
            status page, the incremental price decreases as you scale with groups and users.
          </p>
          <a href="#" className="text-blue-400 hover:underline text-sm font-medium">
            View pricing →
          </a>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/scale to meet your needs (1).svg"
            alt="Pricing for scale"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
            <div className="bg-gray-800 mt-24 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Create your status page today</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
          Get it free
        </button>
      </div>
    </section>
    < Footer />
    </div>
    
  );
};

export default audience;
