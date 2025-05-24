"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Enterprise from './../Enterprise/page';

export default function Uptime() {
  // Today's date
  const today = new Date("2025-05-22"); // Hardcoding for consistency; in production, use `new Date()`

  // State to manage the current 3-month period
  const [currentPeriod, setCurrentPeriod] = useState(0); // 0 for current period (Mar-May 2025), -1 for previous period (Dec 2024-Feb 2025)

  // Generate the last 90 days for the contribution graph
  interface Day {
    date: string;
    rawDate: Date;
  }

  interface MonthDay extends Day {
    inRange: boolean;
  }

  const days: Day[] = [];
  for (let i = 0; i < 90; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    days.push({ date: dateString, rawDate: date });
  }

  // Predefined incidents for specific dates (reused from IncidentHistory page)
  const incidents: { [date: string]: any } = {
    "16 May 2025": {
      description:
        "The Dash Confluence connector may be unavailable for some users.",
      resolutionMessage: "This incident has been resolved.",
      timeRange: "May 15, 16:35 - May 16, 19:15 UTC",
    },
    "14 May 2025": {
      description: "Dropbox may be unavailable for some users.",
      resolutionMessage: "This incident has been resolved.",
      timeRange: "May 14, 18:24 - 19:24 UTC",
    },
    "5 May 2025": {
      description: "Dash Search might not be working for some users.",
      resolutionMessage: "This incident has been resolved.",
      timeRange: "May 5, 21:38 - May 6, 03:40 UTC",
    },
    "17 Apr 2025": {
      description: "Dropbox was not working as expected for some users",
      resolutionMessage:
        "Retroactive update - Dropbox was not working as expected for some users. We quickly identified and fixed the problem.",
      timeRange: "Apr 17, 17:21 - 17:21 UTC",
    },
    "10 Apr 2025": {
      description: "Issue downloading single files on safari 18.4",
      resolutionMessage: "This incident has been resolved.",
      timeRange: "Apr 9, 19:58 - Apr 10, 07:53 UTC",
    },
    "4 Apr 2025": {
      description:
        "Some Windows users may not be able to use the online-only functionality",
      resolutionMessage: "This incident has been resolved.",
      timeRange: "Mar 20, 20:35 - Apr 4, 16:22 UTC",
    },
    "27 Mar 2025": {
      description: "[Scheduled] Scheduled maintenance",
      resolutionMessage: "The scheduled maintenance has been completed.",
      timeRange: "Mar 27, 11:30 - 13:00 UTC",
    },
    "26 Mar 2025": {
      description: "[Scheduled] Scheduled maintenance",
      resolutionMessage: "The scheduled maintenance has been completed.",
      timeRange: "Mar 26, 00:00 - 01:00 UTC",
    },
  };

  // Function to determine if a day has an incident
  const hasIncidentOnDay = (dateString: string) => {
    return !!incidents[dateString];
  };

  // Define the periods (3-month chunks)
  const periods = [
    // Current period: Mar 2025 - May 2025
    { start: new Date("2025-03-01"), end: new Date("2025-05-22") },
    // Previous period: Dec 2024 - Feb 2025
    { start: new Date("2024-12-01"), end: new Date("2025-02-28") },
  ];

  // Get the current period's date range
  const periodStart = periods[currentPeriod].start;
  const periodEnd = periods[currentPeriod].end;

  // Generate days for the current period
  const periodDays: Day[] = [];
  for (
    let d = new Date(periodStart);
    d <= periodEnd;
    d.setDate(d.getDate() + 1)
  ) {
    const dateString = d.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    periodDays.push({ date: dateString, rawDate: new Date(d) });
  }

  // Group days by month
  const daysByMonth: { [key: string]: Day[] } = {};
  periodDays.forEach((day) => {
    const monthYear = day.rawDate.toLocaleDateString("en-GB", {
      month: "short",
      year: "numeric",
    });
    if (!daysByMonth[monthYear]) {
      daysByMonth[monthYear] = [];
    }
    daysByMonth[monthYear].push(day);
  });

  // Sort months in ascending order for display
  const sortedMonths = Object.keys(daysByMonth).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateA.getTime() - dateB.getTime();
  });

  // Generate contribution graph data for each month
  const monthGrids: {
    [key: string]: { grid: (MonthDay | null)[][]; monthLabels: string[] };
  } = {};
  sortedMonths.forEach((monthYear) => {
    const monthDays = daysByMonth[monthYear];
    const monthStart = new Date(monthYear);
    monthStart.setDate(1);
    const monthEnd = new Date(monthStart);
    monthEnd.setMonth(monthEnd.getMonth() + 1);
    monthEnd.setDate(0); // Last day of the month

    // Calculate the number of weeks in the month, ensuring the grid starts from the first day of the month
    const firstDayOfMonth = (monthStart.getDay() + 6) % 7; // Adjust to make Monday = 0, Sunday = 6
    const totalDaysInMonth = monthEnd.getDate();
    const weeksCount = Math.ceil((totalDaysInMonth + firstDayOfMonth) / 7);

    // Create a 2D array for the grid (7 rows x weeksCount columns)
    const grid: (MonthDay | null)[][] = Array(7)
      .fill(null)
      .map(() => Array(weeksCount).fill(null));

    // Fill the grid with days
    monthDays.forEach((day) => {
      const dayOfMonth = day.rawDate.getDate(); // 1-based day of the month
      const dayOfWeek = (day.rawDate.getDay() + 6) % 7; // Adjust to make Monday = 0, Sunday = 6
      const dayPosition = dayOfMonth - 1 + firstDayOfMonth; // Position in the grid accounting for the first day's offset
      const weekIndex = Math.floor(dayPosition / 7);
      const dayIndexInWeek = dayPosition % 7;

      grid[dayIndexInWeek][weekIndex] = {
        date: day.date,
        rawDate: day.rawDate,
        inRange: days.some((d) => d.date === day.date), // Check if the day is within the 90-day range
      };
    });

    // Generate month labels (simplified to empty for now)
    const monthLabels: string[] = Array(weeksCount).fill("");

    monthGrids[monthYear] = { grid, monthLabels };
  });

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <header className="flex flex-col items-center px-4 sm:px-6 md:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center mb-4 sm:mb-6 mt-4 sm:mt-6">
          <Image
            src="/images/Dropbox.svg"
            alt="Dropbox Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-white text-lg sm:text-xl font-semibold">
            Dropbox Status
          </span>
        </div>

        {/* Horizontal Line */}
        <div className="w-full border-b border-gray-200 mb-2"></div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 mt-4">
          <Link href="/status" className="text-white hover:underline text-sm sm:text-base">
            Status Page
          </Link>
          <Link href="/help" className="text-white hover:underline text-sm sm:text-base">
            Help Center
          </Link>
          <Link href="/community" className="text-white hover:underline text-sm sm:text-base">
            Community
          </Link>
          <Link href="/subscribe" className="text-white hover:underline text-sm sm:text-base">
            Subscribe to Updates
          </Link>
        </nav>
      </header>

      {/* Uptime Section */}
      <section className="flex flex-col items-center mt-6 sm:mt-8">
        <div className="bg-blue-600 w-full py-16 sm:py-20 md:py-26 text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Dropbox System Status
          </h1>
        </div>

        <div className="w-full max-w-5xl px-4 sm:px-6 md:px-8 mt-6 sm:mt-8">
          {/* Navigation Arrows */}
          <div className="flex justify-between items-center my-4 sm:my-6">
            <button
              onClick={() => setCurrentPeriod(currentPeriod - 1)}
              disabled={currentPeriod === -1}
              className={`p-2 ${
                currentPeriod === -1
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:text-gray-300"
              }`}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="text-white text-sm sm:text-base">
              {periodStart.toLocaleDateString("en-GB", {
                month: "short",
                year: "numeric",
              })}{" "}
              -{" "}
              {periodEnd.toLocaleDateString("en-GB", {
                month: "short",
                year: "numeric",
              })}
            </span>
            <button
              onClick={() => setCurrentPeriod(currentPeriod + 1)}
              disabled={currentPeriod === 0}
              className={`p-2 ${
                currentPeriod === 0
                  ? "text-gray-500 cursor-not-allowed"
                  : "text-white hover:text-gray-300"
              }`}
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Contribution Graphs by Month - Displayed Horizontally */}
          <div className="flex flex-row space-x-4 sm:space-x-6 overflow-x-auto px-4 sm:px-8 md:px-20">
            {sortedMonths.map((monthYear) => {
              const { grid, monthLabels } = monthGrids[monthYear];
              return (
                <div key={monthYear} className="flex-shrink-0">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 text-center">
                    {monthYear}
                  </h3>
                  {/* Month Contribution Graph */}
                  <div className="flex">
                    {/* Day of Week Labels (Empty in original code) */}
                    <div className="flex items-center flex-col mr-2">
                      {[""].map(
                        (label, index) => (
                          <div key={index} className="h-3 sm:h-4 flex items-center">
                            <p className="text-gray-400 text-[10px] sm:text-xs">{label}</p>
                          </div>
                        )
                      )}
                    </div>
                    {/* Contribution Squares */}
                    <div className="flex">
                      {grid[0].map((_, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col">
                          {grid.map((row, dayIndex) => {
                            const day = row[weekIndex];
                            return (
                              <div
                                key={dayIndex}
                                className={`relative w-3 h-3 sm:w-4 sm:h-4 m-0.5 sm:m-1 ${
                                  !day || !day.inRange
                                    ? "bg-gray-600" // Days outside the range or empty
                                    : hasIncidentOnDay(day.date)
                                    ? "bg-yellow-400" // Days with incidents
                                    : "bg-green-700" // Operational days
                                } group`}
                              >
                                {/* Tooltip */}
                                {day && (
                                  <div className="absolute hidden group-hover:block bg-gray-800 text-white text-[10px] sm:text-xs rounded py-1 px-2 -top-10 sm:-top-12 left-1/2 transform -translate-x-1/2 w-max z-10">
                                    <p>{day.date}</p>
                                    <p>
                                      {!day.inRange
                                        ? "Outside of 90-day range."
                                        : hasIncidentOnDay(day.date)
                                        ? "Incident occurred on this day."
                                        : "System operational on this day."}
                                    </p>
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Current Status Button */}
          <div className="mt-4 sm:mt-6 text-center">
            <Link href="/DropBoxStatus">
              <button className="text-white cursor-pointer py-2 px-4 sm:px-6 rounded text-sm sm:text-base hover:underline">
                — Current Status
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 mt-8 sm:mt-12 py-6 sm:py-8">
        <div className="w-full border-t border-gray-600 mb-6 sm:mb-8"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
            {/* Dropbox Links */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Dropbox</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Plus
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Business
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Enterprise
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Dash
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Plans
                  </a>
                </li>
              </ul>
            </div>

            {/* Using Dropbox Links */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Using Dropbox</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Productivity
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            {/* Downloads Links */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Downloads</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Desktop app
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Mobile apps
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="mb-6 sm:mb-8">
              <h3 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline text-sm sm:text-base">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}