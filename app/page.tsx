
import Image from 'next/image';
import React from 'react';
import Header from './components/Header/page';
import Footer from './components/Footer';
import Pricing from './components/Pricing';

const HomePage = () => {
    
  return (
    <div>
      <Header />
      {/* Hero Section */}
      <section className="bg-gray-900 text-white mt-16 px-8 md:px-20 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Build trust with every <span className="text-blue-400">incident</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Easily communicate real-time status to your users, just like DigitalOcean and Dropbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 transition">
              Get it free
            </button>
            <button className="text-blue-400 font-medium hover:underline">
              ➜ See how
            </button>
          </div>
        </div>
      </section>  


      {/* Trusted By Section */}
      <section className="bg-gray-900 text-white py-20 px-6 md:px-20">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {/* DigitalOcean Card */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 w-full max-w-md">
            <Image
              src="/images/digitalocean-no-drop-shadow.png"
              alt="DigitalOcean status"
              width={600}
              height={400}
              className="rounded"
            />
            <p className="text-center mt-4 text-gray-400 font-semibold">DigitalOcean</p>
          </div>

          {/* Dropbox Card */}
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 w-full max-w-md">
            <Image
              src="/images/dropbox-nodropshadow.png"
              alt="Dropbox status"
              width={600}
              height={400}
              className="rounded"
            />
            <p className="text-center mt-4 text-gray-400 font-semibold">Dropbox</p>
          </div>
        </div>
      </section>

          <section className="bg-gray-900 text-white">
      {/* Top shadow line */}
      <div className="h-2 w-full shadow-md bg-gray-900" />

      <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 space-y-24">
        {/* Block 1 */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          {/* Text */}
          <div className="md:w-1/2">
            <h5 className="text-sm uppercase text-blue-300 font-semibold mb-2">
              Support & IT Teams
            </h5>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Eliminate duplicate support tickets & clunky email lists
            </h2>
            <p className="text-gray-300">
              Halt the flood of support requests during an incident with proactive customer communication. Manage subscribers
              directly in Statuspage and send consistent messages through the channels of your choice (email, text message,
              in-app message, etc.)
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="/images/Status Page Balloons@2x.png"
              alt="Support feature"
              width={500}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>

        {/* Block 2 */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="/images/components.png"
              alt="Service status"
              width={500}
              height={400}
              className="mx-auto"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <h5 className="text-sm uppercase text-blue-300 font-semibold mb-2">
              DevOps & IT Teams
            </h5>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Display the status of each part of your service
            </h2>
            <p className="text-gray-300">
              Control which components of your service you show on your page, and tap into 150+ third party components to display
              the status of mission-critical tools your service relies on like Stripe, Mailgun, Shopify, and PagerDuty.
            </p>
          </div>
        </div>
      </div>
    </section>
        <section className="bg-gray-900 text-gray-300">
      {/* Section 1 */}
      <div className="bg-gray-900 text-gray-300 shadow-lg lg:shadow-lg ">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">
              Statuspage is the communication piece of your incident management process
            </h2>
            <p className="text-gray-300 mb-4">
              Keep users in the loop from ‘investigating’ through ‘resolved’.
            </p>
            <p className="text-gray-300 mb-4">
              Statuspage integrates with your favorite monitoring, alerting, chat, and help desk tools for efficient response every time.
            </p>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Learn more about integrations and automation →
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/images/communication-tools.png"
              alt="Incident communication"
              width={400}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-gray-900 text-gray-300 shadow-lg lg:shadow-lg mt-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="lg:w-1/2">
            <h5 className="text-sm uppercase text-blue-500 font-semibold mb-2">
              Incident Response Teams
            </h5>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Level-up your incident communication
            </h2>
            <p className="text-gray-300">
              Take the hassle out of incident communication. Pre-written templates and tight integrations with the incident
              management tools you already rely on enable you to quickly get the word out to users.
            </p>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 flex justify-center">
            <Image
              src="/images/Status Page Light@2x.png"
              alt="Incident response graphic"
              width={450}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>

        <section className="bg-gray-900 text-gray-300">
      {/* Showcase reliability */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text */}
        <div className="lg:w-1/2">
          <h5 className="text-sm uppercase text-blue-500 font-semibold mb-2">Marketing & Sales Teams</h5>
          <h2 className="text-3xl font-bold mb-4">Showcase reliability</h2>
          <p className="text-gray-400">
            Turn your page into a sales and marketing tool with uptime Showcase, which lets you display historical uptime to current and prospective customers.
          </p>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/images/uptime.png"
            alt="Uptime chart"
            width={500}
            height={300}
            className="object-contain shadow-lg"
          />
        </div>
      </div>

      {/* Trusted by thousands */}
      <div className="bg-gray-900 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl md:text-2xl font-semibold mb-10">Trusted by thousands of companies</h2>

          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            {/* Video/quote block */}
            <div className="relative bg-gray-500 text-gray-900 p-6 rounded-lg shadow-lg w-full lg:w-[500px] text-left">
              <div className="mb-4">
                <Image src="/images/DigiOcean.png" alt="Customer" width={450} height={250} className="rounded" />
              </div>
              <p className="text-sm text-blue-600 font-semibold">DigitalOcean</p>
              <p className="text-base italic mt-1">"Proactive Statuspage notifications drive down ticket volume during an incident."</p>
              <p className="text-xs mt-2 text-gray-600">Zachary Bouzan-Koufidis, Director of Customer Support</p>
              <a href="https://www.youtube.com/watch?v=Zo068ILUO5s" className="text-blue-600 text-sm mt-2 inline-block">Watch the video →</a>
            </div>
          </div>

          {/* Logos */}
           <div className="mt-10 flex flex-wrap justify-center items-center gap-6 opacity-80">
              {[
                { src: '/images/squarespace-n700.svg', alt: 'Squarespace', width: 130, height: 50 },
                { src: '/images/newrelic-n700.svg', alt: 'New Relic', width: 130, height: 50 },
                { src: '/images/reddit-n700.svg', alt: 'Reddit', width: 130, height: 50 },
                { src: '/images/twilio-n700.svg', alt: 'Twilio', width: 130, height: 50 },
                { src: '/images/coinbase-n700.svg', alt: 'Coinbase', width: 130, height: 50 },
                { src: '/images/shopify-n700.svg', alt: 'Shopify', width: 130, height: 50 },
              ].map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width || 100}
                  height={logo.height || 40}
                  className="object-contain"
                />
              ))}
            </div>

        </div>
      </div>

      {/* Pricing */}
      <div className="bg-gray-900 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Pricing that scales with you as you grow</h2>
          <p className="text-gray-400 mb-10">No minimum contracts, no sign-up fees, no cancellation fees</p>

          {/* Tabs */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            {['Public page', 'Private page', 'Audience-specific page'].map((tab, idx) => (
              <div
                key={idx}
                className="border-b-2 border-gray-600 text-gray-400 px-4 py-2 cursor-pointer hover:text-white"
              >
                {tab}
              </div>
            ))}
          </div>

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
        </div>
      </div>
    </section>

    <Pricing />
    
      <Footer/>
    </div>
  );
};

export default HomePage;
