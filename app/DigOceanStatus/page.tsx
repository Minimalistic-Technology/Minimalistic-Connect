"use client";
import React, { useState } from "react";
import Image from "next/image";

const services = [
  {
    name: "Global Services Status",
    features: [
      "API",
      "Billing",
      "Cloud Control Panel",
      "Cloud Firewall",
      "Community",
      "DNS",
      "Support Center",
      "Reserved IP",
      "WWW",
      "GenAI Platform",
    ],
  },
  {
    name: "Regional Services Status",
    features: [
      "App Platform",
      "Container Registry",
      "Droplets",
      "Event Processing",
      "Functions",
      "GPU Droplets",
      "Managed Databases",
      "Monitoring",
      "Networking",
      "Kubernetes",
      "Load Balancers",
      "Spaces",
      "Spaces CDN",
      "VPC",
      "Volumes",
    ],
  },
];

const DigitalOceanStatus = () => {
  interface LogoClickEvent extends React.MouseEvent<HTMLAnchorElement, MouseEvent> {}

  const handleLogoClick = (e: LogoClickEvent): void => {
    e.preventDefault(); // prevent navigation
  };

  // States to manage dropdown visibility for each component in Regional Services Status
  const [isAppPlatformDropdownOpen, setIsAppPlatformDropdownOpen] = useState(false);
  const [isContainerRegistryDropdownOpen, setIsContainerRegistryDropdownOpen] = useState(false);
  const [isDropletsDropdownOpen, setIsDropletsDropdownOpen] = useState(false);
  const [isEventProcessingDropdownOpen, setIsEventProcessingDropdownOpen] = useState(false);
  const [isFunctionsDropdownOpen, setIsFunctionsDropdownOpen] = useState(false);
  const [isGPUDropletsDropdownOpen, setIsGPUDropletsDropdownOpen] = useState(false);
  const [isManagedDatabasesDropdownOpen, setIsManagedDatabasesDropdownOpen] = useState(false);
  const [isMonitoringDropdownOpen, setIsMonitoringDropdownOpen] = useState(false);
  const [isNetworkingDropdownOpen, setIsNetworkingDropdownOpen] = useState(false);
  const [isKubernetesDropdownOpen, setIsKubernetesDropdownOpen] = useState(false);
  const [isLoadBalancersDropdownOpen, setIsLoadBalancersDropdownOpen] = useState(false);
  const [isSpacesDropdownOpen, setIsSpacesDropdownOpen] = useState(false);
  const [isSpacesCDNDropdownOpen, setIsSpacesCDNDropdownOpen] = useState(false);
  const [isVPCDropdownOpen, setIsVPCDropdownOpen] = useState(false);
  const [isVolumesDropdownOpen, setIsVolumesDropdownOpen] = useState(false);

  // List of locations for the App Platform dropdown
  const appPlatformLocations = [
    "Global", "Amsterdam", "Bangalore", "Frankfurt", "London", "New York", "San Francisco", "Singapore", "Sydney", "Toronto",
  ];

  // List of locations for the Container Registry dropdown
  const containerRegistryLocations = [
    "Global", "AMS3", "BLRI", "FRAI", "NYC3", "SF02", "SF03", "SGPI", "SYDI",
  ];

  const Droplets = [
    "Global", "AMS2", "AMS3", "BLR1", "FRA1", "LON1", "NYC1", "NYC2", "NYC3", "SFO1", "SFO2", "SFO3", "SGP1", "SYD1", "TOR1",
  ]; // Removed duplicate "SYD1"

  const EventProcessing = [
    "Global", "AMS2", "AMS3", "BLR1", "FRA1", "LON1", "NYC1", "NYC2", "NYC3", "SFO1", "SFO2", "SFO3", "SGP1", "SYD1", "TOR1",
  ];

  const Functions = [
    "Global", "AMS3", "BLR1", "FRA1", "LON1", "NYC1", "SFO3", "SGP1", "SYD1", "TOR1",
  ];

  const GPUDroplets = [
    "Global", "NYC1", "TOR1",
  ];

  // Added locations for Managed Databases (similar to other components)
  const ManagedDatabases = [
    "Global", "AMS3", "BLR1", "FRA1", "LON1", "NYC1", "NYC3", "SFO2", "SFO3", "SGP1", "SYD1", "TOR1",
  ];

  const Monitoring = [
    "Global", "AMS2", "AMS3", "BLR1", "FRA1", "LON1", "NYC1", "NYC2", "NYC3", "SGP1", "SFO1", "SFO2", "SFO3", "SYD1", "TOR1",
  ];

  const Networking = [
    "Global", "AMS2", "AMS3", "BLR1", "FRA1", "LON1", "NYC1", "NYC2", "NYC3", "SFO1", "SFO2", "SFO3", "SGP1", "SYD1", "TOR1",
  ];

  const Kubernetes = [
    "Global", "AMS3", "BLR1", "FRA1", "LON1", "NYC1", "NYC3", "SFO2", "SFO3", "SGP1", "SYD1", "TOR1",
  ];

  const LoadBalancers = [
    "Global", "AMS2", "AMS3", "BLR1", "FRA1", "LON1", "NYC1", "NYC2", "NYC3", "SFO1", "SFO2", "SFO3", "SGP1", "SYD1", "TOR1",
  ];

  const Spaces = [
    "Global", "AMS3", "FRA1", "NYC3", "SFO2", "SFO3", "SGP1", "SYD1", "BLR1",
  ];

  const VPC = [
    "Global", "AMS2", "AMS3", "BLR1", "FRA1", "LON1", "NYC1", "NYC2", "NYC3", "SFO1", "SFO2", "SFO3", "SGP1", "SYD1", "TOR1",
  ];

  const Volumes = [
    "Global", "AMS2", "AMS3", "BLR1", "FRA1", "LON1", "NYC1", "NYC2", "NYC3", "SFO1", "SFO2", "SFO3", "SGP1", "SYD1", "TOR1",
  ];

  const SpacesCDN = [
    "Global", "AMS3", "FRA1", "NYC3", "SFO3", "SGP1", "SYD1",
  ];

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 px-6 md:px-12">
        <div className="max-w-7xl px-29 mx-auto flex items-center justify-between flex-wrap gap-4">
          {/* Logo and Text */}
          <div className="text-2xl font-bold">
            <a
              href="/"
              onClick={handleLogoClick}
              className="text-white hover:text-blue-400 transition"
            >
              <Image
                src="/images/DigitalOceanStat.png"
                alt="DigitalOcean Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </a>
            <p className="text-sm mt-4">DigitalOcean Services Status</p>
          </div>

          {/* Buttons aligned bottom */}
          <div className="flex items-end gap-4 mt-auto">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-5 py-2 rounded-md font-semibold">
              Subscribe To Updates
            </button>
            <a
              href="https://x.com/dostatus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-400 hover:bg-sky-500 transition text-white px-5 py-2 rounded-md font-semibold flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M24 4.557a9.94 9.94 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0016.616 3c-2.737 0-4.955 2.218-4.955 4.955 0 .39.045.767.128 1.13C7.728 8.9 4.1 6.886 1.671 3.917a4.942 4.942 0 00-.669 2.49c0 1.717.873 3.23 2.2 4.117a4.904 4.904 0 01-2.245-.621v.062c0 2.4 1.708 4.404 3.977 4.86a4.935 4.935 0 01-2.24.085 4.937 4.937 0 004.604 3.419A9.867 9.867 0 010 19.54 13.94 13.94 0 007.548 22c9.057 0 14.01-7.507 14.01-14.01 0-.213-.005-.426-.014-.637A10.012 10.012 0 0024 4.557z" />
              </svg>
              @dostatus
            </a>
          </div>
        </div>
      </header>

      {/* Status Grid */}
      <main className="max-w-7xl px-29 mx-auto p-6 space-y-12">
        {services.map((service, index) => (
          <div key={index}>
            {/* Title with white color */}
            <h2 className="text-2xl font-bold text-white mb-4">
              {service.name}
            </h2>

            {/* Feature Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.features.map((feature, i) => {
                // Determine if the feature should be indented (after App Platform in Regional Services Status)
                const shouldIndent =
                  service.name === "Regional Services Status" &&
                  service.features.indexOf("App Platform") !== -1 &&
                  i > service.features.indexOf("App Platform");

                return (
                  <div
                    key={i}
                    className={`relative ${shouldIndent ? "ml-6" : ""}`} // Indent features after App Platform
                  >
                    <div className="border border-gray-300 rounded-md px-6 py-4 flex items-center justify-between shadow-sm bg-white">
                      <div className="flex items-center gap-2">
                        {/* Plus icon with click handler for all components */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="gray"
                          className="w-5 h-5 cursor-pointer"
                          onClick={() => {
                            if (feature === "App Platform") {
                              setIsAppPlatformDropdownOpen(!isAppPlatformDropdownOpen);
                            } else if (feature === "Container Registry") {
                              setIsContainerRegistryDropdownOpen(!isContainerRegistryDropdownOpen);
                            } else if (feature === "Droplets") {
                              setIsDropletsDropdownOpen(!isDropletsDropdownOpen);
                            } else if (feature === "Event Processing") {
                              setIsEventProcessingDropdownOpen(!isEventProcessingDropdownOpen);
                            } else if (feature === "Functions") {
                              setIsFunctionsDropdownOpen(!isFunctionsDropdownOpen);
                            } else if (feature === "GPU Droplets") {
                              setIsGPUDropletsDropdownOpen(!isGPUDropletsDropdownOpen);
                            } else if (feature === "Managed Databases") {
                              setIsManagedDatabasesDropdownOpen(!isManagedDatabasesDropdownOpen);
                            } else if (feature === "Monitoring") {
                              setIsMonitoringDropdownOpen(!isMonitoringDropdownOpen);
                            } else if (feature === "Networking") {
                              setIsNetworkingDropdownOpen(!isNetworkingDropdownOpen);
                            } else if (feature === "Kubernetes") {
                              setIsKubernetesDropdownOpen(!isKubernetesDropdownOpen);
                            } else if (feature === "Load Balancers") {
                              setIsLoadBalancersDropdownOpen(!isLoadBalancersDropdownOpen);
                            } else if (feature === "Spaces") {
                              setIsSpacesDropdownOpen(!isSpacesDropdownOpen);
                            } else if (feature === "Spaces CDN") {
                              setIsSpacesCDNDropdownOpen(!isSpacesCDNDropdownOpen);
                            } else if (feature === "VPC") {
                              setIsVPCDropdownOpen(!isVPCDropdownOpen);
                            } else if (feature === "Volumes") {
                              setIsVolumesDropdownOpen(!isVolumesDropdownOpen);
                            }
                          }}
                        >
                          <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM200 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/>
                        </svg>
                        <span className="text-lg font-medium text-gray-800">
                          {feature}
                        </span>
                      </div>
                      {/* Checkmark icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="green"
                        className="w-6 h-6"
                      >
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                      </svg>
                    </div>

                    {/* Dropdown menu for App Platform */}
                    {feature === "App Platform" && isAppPlatformDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {appPlatformLocations.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Container Registry */}
                    {feature === "Container Registry" && isContainerRegistryDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {containerRegistryLocations.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Droplets */}
                    {feature === "Droplets" && isDropletsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {Droplets.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Event Processing */}
                    {feature === "Event Processing" && isEventProcessingDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {EventProcessing.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Functions */}
                    {feature === "Functions" && isFunctionsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {Functions.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for GPU Droplets */}
                    {feature === "GPU Droplets" && isGPUDropletsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {GPUDroplets.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Managed Databases */}
                    {feature === "Managed Databases" && isManagedDatabasesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {ManagedDatabases.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Monitoring */}
                    {feature === "Monitoring" && isMonitoringDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {Monitoring.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Networking */}
                    {feature === "Networking" && isNetworkingDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {Networking.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Kubernetes */}
                    {feature === "Kubernetes" && isKubernetesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {Kubernetes.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Load Balancers */}
                    {feature === "Load Balancers" && isLoadBalancersDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {LoadBalancers.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Spaces */}
                    {feature === "Spaces" && isSpacesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {Spaces.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Spaces CDN */}
                    {feature === "Spaces CDN" && isSpacesCDNDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {SpacesCDN.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for VPC */}
                    {feature === "VPC" && isVPCDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {VPC.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Dropdown menu for Volumes */}
                    {feature === "Volumes" && isVolumesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        {Volumes.map((location, idx) => (
                          <div
                            key={idx}
                            className="px-6 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                          >
                            {location}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Add Status Indicators after Regional Services Status */}
            {service.name === "Regional Services Status" && (
              <div className="flex items-center gap-6 border-t border-b border-gray-300 px-29 py-4 mt-10">
                <div className="flex items-center gap-2 mt-5 mb-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="green"
                    className="w-6 h-6"
                  >
                    <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/>
                  </svg>
                  <span className="text-white">Operational</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="orange"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-white">Degraded Performance</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="orange"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-white">Partial Outage</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="red"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                  <span className="text-white">Major Outage</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="blue"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                    />
                  </svg>
                  <span className="text-white">Maintenance</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </main>

      {/* Footer with Show History and Powered by Atlassian Statuspage */}
      <footer className="max-w-7xl px-29 mx-auto p-6 flex justify-between items-center">
        <a
          href="#"
          className="text-blue-600 hover:text-blue-800 transition font-semibold"
        >
          Show History
        </a>
        <a
          href="https://www.atlassian.com/software/statuspage"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-800 transition font-semibold"
        >
          Powered by Atlassian Statuspage
        </a>
      </footer>
    </div>
  );
};

export default DigitalOceanStatus;