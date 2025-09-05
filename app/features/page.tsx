
"use client";

import React from "react";
import Header from "../components/Header/page";
import Footer from "../components/Footer";
import Pricing from "../components/Pricing";
import Image from "next/image";

const Features = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      <Header
        isLoggedIn={false}
        username=""
        email=""
        handleLogout={() => {}}
      />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
        <section className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Discover Statuspage
          </h1>
          <p className="text-gray-400 max-w-prose mx-auto text-sm sm:text-base lg:text-lg mb-6">
            Statuspage brings companies and customers together during downtime
            with best-in-class incident communication.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded text-sm sm:text-base">
              Get it free
            </button>
            <button className="border-b-2 border-orange-500 text-blue-400 hover:underline text-sm sm:text-base">
              Watch demo
            </button>
          </div>
        </section>

        {/* Feature 1 - Core Features */}
        <section className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-prose">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Core features
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Every Statuspage plan comes with industry-leading core
              functionality. Whether you need advanced status updates, scheduled
              maintenance, or powerful integrations, each status page can be
              launched straight out of the box.
            </p>
            <a
              href="#"
              className="text-blue-400 mt-2 inline-block hover:underline text-sm sm:text-base"
            >
              Read more →
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/core-features-3..png"
              alt="Core Features"
              width={500}
              height={300}
              className="rounded shadow-lg w-full max-w-full h-auto"
            />
          </div>
        </section>

        {/* Feature 2 - Notifications */}
        <section className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex justify-center order-2 md:order-1">
            <Image
              src="/images/notifications.png"
              alt="Notifications"
              width={500}
              height={300}
              className="rounded shadow-lg w-full max-w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2 max-w-prose">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Notifications
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Customers. Employees. End users. All of these groups (and more!)
              want to be notified when your service is down. Statuspage leverages
              dependable, redundant systems to make sure your audiences get the
              right message at the right time, every time.
            </p>
            <a
              href="#"
              className="text-blue-400 mt-2 inline-block hover:underline text-sm sm:text-base"
            >
              Read more →
            </a>
          </div>
        </section>

        {/* Feature 3 - Uptime and Performance */}
        <section className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-prose">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Uptime and performance
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-3">
              Every company experiences downtime. Use Statuspage during that
              downtime to build customer trust via transparent communication.
              Automatically display your historical uptime and real-time system
              data with our Uptime Showcase and Public Metrics.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline text-sm sm:text-base"
            >
              Read more →
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/uptime-performance.png"
              alt="Uptime and Performance"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full max-w-full h-auto"
            />
          </div>
        </section>

        {/* Feature 4 - Customization */}
        <section className="grid md:grid-cols-2 gap-12 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex justify-center">
            <Image
              src="/images/customization.png"
              alt="Customization"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full max-w-full h-auto"
            />
          </div>
          <div className="max-w-prose">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">
              Customization
            </h2>
            <p className="text-gray-400 text-sm sm:text-base mb-3">
              Your status page should reflect your brand. With page
              customization, you can modify everything from the page layout to
              notifications. Use a custom domain alongside custom HTML, CSS, and
              JavaScript to fully represent the experience your customers expect
              and love.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline text-sm sm:text-base"
            >
              Read more →
            </a>
          </div>
        </section>
      </main>

      {/* CTA Section - Full Width */}
      <section className="bg-blue-700 w-full text-center py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
            Transform your incident communication
          </h2>
          <button className="bg-white text-blue-700 font-medium px-4 sm:px-6 py-2 rounded hover:bg-gray-100 transition text-sm sm:text-base">
            Get it free
          </button>
        </div>
      </section>

      {/* Pricing and Footer */}
      <Pricing />
      <Footer />
    </div>
  );
};

export default Features;
