
"use client";

import React from "react";
import Header from "../components/Header/page";
import Footer from "../components/Footer";
import Image from "next/image";

const audience = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      <Header
        isLoggedIn={false}
        username=""
        email=""
        handleLogout={() => {}}
      />
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 py-12 sm:py-16">
        <section className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-2">
            Audience-specific Pages
          </h2>
          <p className="text-gray-400 max-w-prose mx-auto text-sm sm:text-base lg:text-lg">
            Tailored status information for each of your users
          </p>
        </section>

        {/* Top Row */}
        <section className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 max-w-prose">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              The right view for the right customer
            </h3>
            <p className="text-sm sm:text-base">
              Status communication gets complicated when you have different
              customers using a variety of different services and hosted on
              different infrastructure. With Audience-specific pages comes the
              power to target updates only to those customers impacted by an
              incident. All without needing multiple status pages.
            </p>
            <button className="mt-2 bg-yellow-400 hover:bg-yellow-500 text-black px-4 sm:px-6 py-2 rounded font-medium text-sm sm:text-base">
              Get it free
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/audience-specific-illustration.svg"
              alt="Audience specific view"
              width={500}
              height={400}
              className="rounded-lg shadow-lg w-full max-w-full h-auto"
            />
          </div>
        </section>

        {/* Middle Row */}
        <section className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="flex justify-center order-2 md:order-1">
            <Image
              src="/images/Meeples Mobile All@2x.svg"
              alt="Access by user group"
              width={400}
              height={300}
              className="rounded-lg shadow-lg w-full max-w-full h-auto"
            />
          </div>
          <div className="order-1 md:order-2 space-y-4 max-w-prose">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Grant access based on users or groups
            </h3>
            <p className="text-sm sm:text-base">
              You may have VIP customers who need to see different sets of
              information, or individual employees who depend on a variety of
              third-party services and don’t need to know about the rest.
              Audience-specific pages let you configure access and permissions
              appropriately for your user-base.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline text-sm sm:text-base font-medium"
            >
              Learn more →
            </a>
          </div>
        </section>

        {/* Bottom Row */}
        <section className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="space-y-4 max-w-prose">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
              Priced for scale
            </h3>
            <p className="text-sm sm:text-base">
              Audience-specific pages have their own pricing model, separate from
              Public and Private Pages. Pricing starts at $300/month and each page
              comes with up to 10 groups and 500 users. To make sure you’re
              getting the most out of your status page, the incremental price
              decreases as you scale with groups and users.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:underline text-sm sm:text-base font-medium"
            >
              View pricing →
            </a>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/scale to meet your needs (1).svg"
              alt="Pricing for scale"
              width={400}
              height={300}
              className="rounded-lg shadow-lg w-full max-w-full h-auto"
            />
          </div>
        </section>

        <div className="bg-gray-800 mt-12 sm:mt-16 lg:mt-24 py-8 sm:py-12 text-center">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-white">
            Create your status page today
          </h2>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 rounded-lg text-sm sm:text-base font-medium transition">
            Get it free
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};


export default audience;
