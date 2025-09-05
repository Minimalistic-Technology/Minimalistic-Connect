import Image from 'next/image';
import Link from 'next/link';
import Enterprise from './../Enterprise/page';

export default function Home() {
  // Function to calculate the date for each bar (90 days ago to today)
  interface GetDateForBar {
    (index: number): string;
  }

  const getDateForBar: GetDateForBar = (index) => {
    const today = new Date('2025-05-22'); // Hardcoding for consistency; in production, use `new Date()`
    const daysAgo = 89 - index; // Start from 90 days ago (index 0 = 90 days ago)
    const date = new Date(today);
    date.setDate(today.getDate() - daysAgo);
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  // Function to generate the last 15 days for Past Incidents
  const today = new Date('2025-05-22'); // Hardcoding for consistency; in production, use `new Date()`
  const pastIncidents = [];
  for (let i = 0; i < 15; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    const dateString = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
    pastIncidents.push({ date: dateString, rawDate: date });
  }

  // Predefined incidents for specific dates
  type Incident = {
    description: string;
    updates: { status: string; message: string; time: string; color: string }[];
  };

  const incidents: { [date: string]: Incident } = {
    '14 May 2025': {
      description: 'Dropbox may be unavailable for some users.',
      updates: [
        {
          status: 'Resolved',
          message: 'This incident has been resolved.',
          time: 'May 14, 19:24 UTC',
          color: 'text-green-400',
        },
        {
          status: 'Monitoring',
          message: 'A fix has been implemented and we are monitoring the results.',
          time: 'May 14, 18:49 UTC',
          color: 'text-blue-400',
        },
        {
          status: 'Update',
          message: 'We are continuing to investigate this issue.',
          time: 'May 14, 18:33 UTC',
          color: 'text-yellow-400',
        },
        {
          status: 'Investigating',
          message: 'We are currently investigating this issue.',
          time: 'May 14, 18:24 UTC',
          color: 'text-yellow-400',
        },
      ],
    },
    '16 May 2025': {
      description: 'The Dash Confluence connector may be unavailable for some users.',
      updates: [
        {
          status: 'Resolved',
          message: 'This incident has been resolved.',
          time: 'May 16, 19:15 UTC',
          color: 'text-green-400',
        },
        {
          status: 'Investigating',
          message: 'We are currently investigating this issue.',
          time: 'May 15, 16:35 UTC',
          color: 'text-yellow-400',
        },
      ],
    },
    '15 May 2025': {
      description: '',
      updates: [],
    },
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header Section */}
      <header className="flex flex-col items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center mb-6 mt-6">
          <Image
            src="/images/Dropbox.svg"
            alt="Dropbox Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-white text-xl font-semibold">Dropbox Status</span>
        </div>

        {/* Horizontal Line */}
        <div className="w-full border-b border-gray-200 mb-2"></div>

        {/* Navigation Links */}
        <nav className="flex items-center justify-center space-x-6 mt-4">
          <Link href="/status" className="text-white hover:underline">
            Status Page
          </Link>
          <Link href="/help" className="text-white hover:underline">
            Help Center
          </Link>
          <Link href="/community" className="text-white hover:underline">
            Community
          </Link>
          <Link href="/subscribe" className="text-white hover:underline ml-30">
            Subscribe to Updates
          </Link>
        </nav>
      </header>

      {/* System Status Section */}
      <section className="flex flex-col items-center mt-8">
        <div className="bg-blue-600 w-full py-26 text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Dropbox System Status</h1>
        </div>
        <div className="bg-green-700 w-1/2 p-8 py-3 text-left px-5 mt-4">
          <p className="text-lg font-semibold text-white">ALL SYSTEMS OPERATIONAL</p>
        </div>

        {/* Status List Section */}
        <div className="w-1/2 mt-8">
          <div className="flex justify-end mb-2">
            <p className="text-blue-400 text-sm">
              Uptime over the past 90 days.{' '}
              <Link href="/Incident" className="underline">
                View historical uptime.
              </Link>
            </p>
          </div>
          <div className="border border-gray-300 rounded-md">
            {/* Website */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
              <p className="text-white">Website</p>
              <p className="text-green-400">Operational</p>
            </div>
            {/* Desktop Application */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
              <p className="text-white">Desktop Application</p>
              <p className="text-green-400">Operational</p>
            </div>
            {/* Mobile Application */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
              <p className="text-white">Mobile Application</p>
              <p className="text-green-400">Operational</p>
            </div>
            {/* API */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
              <p className="text-white">API</p>
              <p className="text-green-400">Operational</p>
            </div>
            {/* Paper */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
              <p className="text-white">Paper</p>
              <p className="text-green-400">Operational</p>
            </div>
            {/* Passwords */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
              <p className="text-white">Passwords</p>
              <p className="text-green-400">Operational</p>
            </div>
            {/* Replay */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
              <p className="text-white">Replay</p>
              <p className="text-green-400">Operational</p>
            </div>
            {/* Dash */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
              <p className="text-white">Dash</p>
              <p className="text-green-400">Operational</p>
            </div>
            {/* Support Services */}
            <div className="flex items-center justify-between py-3 px-4 border-b border-gray-300">
              <p className="text-white">
                Support Services{' '}
                <span className="inline-block w-4 h-4 text-center text-gray-500 border border-gray-500 rounded-full text-xs">
                  ?
                </span>
              </p>
              <p className="text-green-400">Operational</p>
            </div>
            {/* DocSend and Uptime Bar in one cell */}
            <div className="py-3 px-4">
              <div className="flex items-center justify-between">
                <p className="text-white">DocSend</p>
                <p className="text-green-400">Operational</p>
              </div>
              {/* Uptime Bar */}
              <div className="mt-3">
                <div className="flex-1 flex items-center space-x-1">
                  {[...Array(90)].map((_, index) => (
                    <div
                      key={index}
                      className="relative w-1 h-4 bg-green-700 group"
                    >
                      {/* Tooltip */}
                      <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2 -top-10 left-1/2 transform -translate-x-1/2 w-max">
                        <p>{getDateForBar(index)}</p>
                        <p>No downtime recorded on this day.</p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Timeline Labels and Uptime in one line */}
                <div className="flex justify-between items-center mt-2 text-gray-400 text-sm">
                  <p>90 days ago</p>
                  <p className="text-white">100.0% Uptime</p>
                  <p>Today</p>
                </div>
              </div>
            </div>
          </div>

          {/* Past Incidents Section */}
          <div className="w-full mt-8">
            <h2 className="text-2xl font-bold text-white mb-4">Past Incidents</h2>

            {pastIncidents.map((incident, index) => (
              <div key={incident.date} className="border-b border-gray-300 py-4">
                <p className="text-white font-semibold">{incident.date}</p>
                {incidents[incident.date] ? (
                  <>
                    {incidents[incident.date].description && (
                      <p className="text-gray-400 mt-1">{incidents[incident.date].description}</p>
                    )}
                    {incidents[incident.date].updates.map((update, updateIndex) => (
                      <p key={updateIndex} className={`${update.color} mt-1`}>
                        <span className="font-semibold">{update.status}</span> - {update.message}
                        <span className="text-gray-400"> {update.time}</span>
                      </p>
                    ))}
                  </>
                ) : (
                  <p className="text-gray-400 mt-1">
                    {index === 0 ? 'No incidents reported today.' : 'No incidents reported.'}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-900 mt-12 py-8">
          <div className="w-full border-t border-gray-600 mb-8"></div>
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-between">
              

              {/* Product Links */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4">Dropbox</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Plus
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Business
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Enterprise
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Dash
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Plans
                    </a>
                  </li>
                </ul>
              </div>

                <div className="mb-8">
                <h3 className="text-white font-semibold mb-4">Using Dropbox</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Security
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Productivity
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Integrations
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>

              {/* Support Links */}
              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4">Downloads</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Desktop App
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Mobile apps
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:underline">
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