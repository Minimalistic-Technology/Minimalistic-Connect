
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./components/Header/page"; // Updated import path
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Private from "./components/Private";
import AudienceSpecificPage from "./components/AudienceSpecificPage";

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Public page");
  const router = useRouter();

  // State for user data
  const [username, setUsername] = useState("User");
  const [email, setEmail] = useState("user@example.com");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Load user data from localStorage on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedToken = localStorage.getItem("accessToken");

    if (storedUsername && storedEmail && storedToken) {
      setUsername(storedUsername);
      setEmail(storedEmail);
      setIsLoggedIn(true);
    }
  }, []);

  const openVideo = () => setIsVideoOpen(true);
  const closeVideo = () => setIsVideoOpen(false);

  const handleViewStatuspage = () => {
    router.push("/DigOceanStatus");
  };

  const handleViewStatuspage1 = () => {
    router.push("/DropBoxStatus");
  };

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/v1/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      if (response.ok) {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("username");
        localStorage.removeItem("email");

        setIsLoggedIn(false);
        setUsername("User");
        setEmail("user@example.com");
        alert("Logged out successfully!");
        router.push("/");
      } else {
        const data = await response.json();
        alert(data.error || "Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred during logout. Please try again.");
    }
  };

  return (
    <div>
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 px-4">
          <div className="relative bg-gray-900 rounded-lg p-4 w-full max-w-3xl">
            <button
              onClick={closeVideo}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              ×
            </button>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Zo068ILUO5s?autoplay=1"
                title="DigitalOcean Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <Header
        isLoggedIn={isLoggedIn}
        username={username}
        email={email}
        handleLogout={handleLogout}
      />

      <section className="bg-gray-900 text-white py-12 px-4 sm:px-8 md:px-20 flex items-center justify-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Build trust with every <span className="text-blue-400">incident</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-8">
            Easily communicate real-time status to your users, just like DigitalOcean and Dropbox.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold hover:bg-blue-600 transition">
              Get it free
            </button>
            <button className="text-blue-400 font-medium group">
              <span className="inline-flex items-center group-hover:underline">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="group-hover:fill-blue-500"
                    style={{
                      width: "1em",
                      height: "1em",
                      marginRight: "0.5em",
                      verticalAlign: "middle",
                      fill: "#165DFB",
                    }}
                  >
                    <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c-7.6 4.2-12.3 12.3-12.3 20.9l0 176c0 8.7 4.7 16.7 12.3 20.9s16.8 4.1 24.3-.5l144-88c7.1-4.4 11.5-12.1 11.5-20.5s-4.4-16.1-11.5-20.5l-144-88c-7.4-4.5-16.7-4.7-24.3-.5z" />
                  </svg>
                </span>
                <span className="group-hover:text-blue-500">See how</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12 px-4 sm:px-6 md:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10 justify-items-center">
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 w-full max-w-md relative group">
            <div className="relative">
              <Image
                src="/images/digitalocean-no-drop-shadow.png"
                alt="DigitalOcean status"
                width={600}
                height={400}
                className="rounded w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: "#f7f7f2" }}
              >
                <button
                  onClick={handleViewStatuspage}
                  className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold cursor-pointer">
                  View statuspage
                </button>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-400 font-semibold text-sm sm:text-base">DigitalOcean</p>
          </div>
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg p-4 w-full max-w-md relative group">
            <div className="relative">
              <Image
                src="/images/dropbox-nodropshadow.png"
                alt="Dropbox status"
                width={600}
                height={400}
                className="rounded w-full h-auto object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ backgroundColor: "#f7f7f2" }}
              >
                <button
                  onClick={handleViewStatuspage1}
                  className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold cursor-pointer">
                  View statuspage
                </button>
              </div>
            </div>
            <p className="text-center mt-4 text-gray-400 font-semibold text-sm sm:text-base">Dropbox</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white">
        <div className="h-2 w-full shadow-md bg-gray-900" />
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:px-12 space-y-16 sm:space-y-24">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 sm:gap-12">
            <div className="md:w-1/2">
              <h5 className="text-xs sm:text-sm uppercase text-blue-300 font-semibold mb-2">
                Support & IT Teams
              </h5>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Eliminate duplicate support tickets & clunky email lists
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Halt the flood of support requests during an incident with proactive customer communication. Manage subscribers
                directly in Statuspage and send consistent messages through the channels of your choice (email, text message,
                in-app message, etc.)
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/Status Page Balloons@2x.png"
                alt="Support feature"
                width={500}
                height={400}
                className="mx-auto w-full h-auto object-contain"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
            <div className="md:w-1/2">
              <Image
                src="/images/components.png"
                alt="Service status"
                width={600}
                height={400}
                className="mx-auto w-full h-auto object-contain"
              />
            </div>
            <div className="md:w-1/2">
              <h5 className="text-xs sm:text-sm uppercase text-blue-300 font-semibold mb-2">
                DevOps & IT Teams
              </h5>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Display the status of each part of your service
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Control which components of your service you show on your page, and tap into 150+ third party components to display
                the status of mission-critical tools your service relies on like Stripe, Mailgun
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100">
        <div className="bg-gray-900 text-gray-300 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                  Statuspage is the communication piece of your incident management process
                </h2>
                <p className="text-gray-300 mb-4 text-sm sm:text-base">
                  Keep users in the loop from ‘investigating’ through ‘resolved’.
                </p>
                <p className="text-gray-300 mb-4 sm:text-base">
                  Statuspage integrates with your favorite monitoring, alerting, chat, and help desk tools for efficient response every time.
                </p>
                <a href="#" className="text-blue-600 font-medium hover:underline text-sm sm:text-base">
                  Learn more about integrations and automation →
                </a>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <Image
                  src="/images/communication-tools.png"
                  alt="Incident communication"
                  width={400}
                  height={300}
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-900 text-gray-300 shadow-lg mt-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 sm:gap-12">
            <div className="lg:w-1/2">
              <h5 className="text-xs sm:text-sm uppercase text-blue-500 font-semibold mb-2">
                Incident Response Teams
              </h5>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                Level-up your incident communication
              </h2>
              <p className="text-gray-300 text-sm sm:text-base">
                Take the hassle out of incident communication. Pre-written templates and tight integrations with the incident
                management tools you already rely on enable you to quickly get the word out to users.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <Image
                src="/images/Status Page Light@2x.png"
                alt="Incident response graphic"
                width={450}
                height={300}
                className="object-contain w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 flex flex-col lg:flex-row items-center gap-8 sm:gap-10">
          <div className="lg:w-full">
            <Image
              src="/images/uptime.png"
              alt="Uptime chart"
              width="500"
              height={300}
              className="object-contain w-full h-auto shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h5 className="text-xs sm:text-sm uppercase text-blue-500 font-semibold mb-2">
              Marketing & Sales Teams
            </h5>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Showcase reliability</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Turn your page into a sales and marketing tool with uptime Showcase, which lets you display historical uptime to current and prospective customers.
            </p>
          </div>
        </div>
        <div className="bg-gray-900 py-12 px-4 sm:px-6 md:px-12">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-8 sm:mb-8">Trusted by thousands of companies</h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8">
              <div className="relative bg-gray-500 text-gray-900 p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-4xl min-h-[400px] sm:min-h-[500px] flex flex-col md:flex-row items-center gap-4 sm:mt-6">
                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                  <Image
                    src="/images/DigiOcean.png"
                    alt="Customer"
                    width={450}
                    height={250}
                    className="rounded w-full h-auto object-cover cursor-pointer"
                    onClick={openVideo}
                  />
                </div>
                <div className="w-full md:w-1/2 text-left">
                  <p className="text-sm text-blue-600 font-semibold">DigitalOcean</p>
                  <p className="text-sm sm:text-base italic mt-1">"Proactive Statuspage notifications drive down ticket volume during an incident."</p>
                  <p className="text-xs mt-2 text-gray-600">Zachary Bouzan-Kaufmann, Director of Customer Support</p>
                  <button
                    onClick={openVideo}
                    className="text-blue-600 text-sm mt-2 inline-block hover:underline"
                  >
                    Watch the video →
                    </button>
                </div>
              </div>
            </div>
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center items-center gap-4 sm:gap-6 opacity-80">
            {[
              { src: "/images/squarespace-n700.png", alt: "Squarespace", width: 139.95, height: 20.27 },
              { src: "/images/newrelic-n700.png", alt: "New Relic", width: 124.1, height: 44 },
              { src: "/images/reddit-n700.png", alt: "Reddit", width: 90, height: 35 },
              { src: "/images/twilio-n700.png", alt: "Twilio", width: 73.8, height: 33 },
              { src: "/images/coinbase-n700.png", alt: "Coinbase", width: 83.48, height: 27 },
              { src: "/images/shopify-n700.png", alt: "Shopify", width: 82.43, height: 35 },
            ].map((logo, index) => (
              <div key={index}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain w-auto h-6 sm:h-8"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>
            ))}
          </div>
        </div>
      <div className="bg-gray-900 py-12 px-4 sm:px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Pricing that scales with you as you grow</h1>
          <p className="text-gray-400 mb-8 sm:mb-12 text-sm sm:text-lg mt-4">No minimum contracts, no sign-up fees, no cancellation fees</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6 sm:mb-8">
            {["Public page", "Private page", "Audience-specific page"].map((tab, idx) => (
              <div
                key={idx}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-medium cursor-pointer transition-colors ${
                  activeTab === tab
                    ? "bg-blue-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
          {activeTab === "Public page" && (
            <div>
              <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg max-w-5xl mx-auto mb-6 sm:mb-8">
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <p className="text-base sm:text-lg font-bold text-white whitespace-nowrap">Free</p>
                  <p className="text-sm sm:text-base text-gray-400 flex-1">
                    Our free plan gives you access to 100 subscribers, 25 components, two team members, two metrics, email notifications, Slack notifications, Microsoft Teams notifications, and access to REST APIs.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-2 rounded hover:bg-blue-700 transition whitespace-nowrap">
                    Get started today
                  </button>
                </div>
              </div>
              <Pricing />
            </div>
          )}
          {activeTab === "Private page" && <Private />}
          {activeTab === "Audience-specific page" && <AudienceSpecificPage />}
        </div>
      </div>

      <Footer />
    </div>
    </section>
    </div>
  );
}
