import Image from 'next/image';
import Link from 'next/link';

export default function IncidentHistory() {
  // Function to generate incidents grouped by month for the last 90 days
  const today = new Date('2025-05-22'); // Hardcoding for consistency; in production, use `new Date()`
  const incidentsByMonth: { [key: string]: any[] } = {};

  // Predefined incidents for specific dates
  type Incident = {
    description: string;
    resolutionMessage: string;
    timeRange: string;
  };

  const incidents: { [date: string]: Incident } = {
    '16 May 2025': {
      description: 'The Dash Confluence connector may be unavailable for some users.',
      resolutionMessage: 'This incident has been resolved.',
      timeRange: 'May 15, 16:35 - May 16, 19:15 UTC',
    },
    '14 May 2025': {
      description: 'Dropbox may be unavailable for some users.',
      resolutionMessage: 'This incident has been resolved.',
      timeRange: 'May 14, 18:24 - 19:24 UTC',
    },
    '5 May 2025': {
      description: 'Dash Search might not be working for some users.',
      resolutionMessage: 'This incident has been resolved.',
      timeRange: 'May 5, 21:38 - May 6, 03:40 UTC',
    },
    '17 Apr 2025': {
      description: 'Dropbox was not working as expected for some users',
      resolutionMessage: 'Retroactive update - Dropbox was not working as expected for some users. We quickly identified and fixed the problem.',
      timeRange: 'Apr 17, 17:21 - 17:21 UTC',
    },
    '10 Apr 2025': {
      description: 'Issue downloading single files on safari 18.4',
      resolutionMessage: 'This incident has been resolved.',
      timeRange: 'Apr 9, 19:58 - Apr 10, 07:53 UTC',
    },
    '4 Apr 2025': {
      description: 'Some Windows users may not be able to use the online-only functionality',
      resolutionMessage: 'This incident has been resolved.',
      timeRange: 'Mar 20, 20:35 - Apr 4, 16:22 UTC',
    },
    '27 Mar 2025': {
      description: '[Scheduled] Scheduled maintenance',
      resolutionMessage: 'The scheduled maintenance has been completed.',
      timeRange: 'Mar 27, 11:30 - 13:00 UTC',
    },
    '26 Mar 2025': {
      description: '[Scheduled] Scheduled maintenance',
      resolutionMessage: 'The scheduled maintenance has been completed.',
      timeRange: 'Mar 26, 00:00 - 01:00 UTC',
    },
  };

  // Group incidents by month
  Object.keys(incidents).forEach((dateStr) => {
    const date = new Date(dateStr);
    const monthYear = date.toLocaleDateString('en-GB', {
      month: 'short',
      year: 'numeric',
    });
    if (!incidentsByMonth[monthYear]) {
      incidentsByMonth[monthYear] = [];
    }
    incidentsByMonth[monthYear].push({
      date: dateStr,
      ...incidents[dateStr],
    });
  });

  // Sort months in descending order (May 2025, Apr 2025, Mar 2025)
  const sortedMonths = Object.keys(incidentsByMonth).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB.getTime() - dateA.getTime();
  });

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

      {/* Incident History Section */}
      <section className="flex flex-col items-center mt-8">
        <div className="bg-blue-600 w-full py-26 text-center mb-10">
          <h1 className="text-4xl font-bold text-white">Dropbox System Status</h1>
        </div>

        {/* Navigation Buttons (Incidents and Uptime) */}
        <div className="w-1/2 mt-8 flex space-x-4 justify-start">
          <Link href="/Incident">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Incidents
            </button>
          </Link>
          <Link href="/uptime">
            <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Uptime
            </button>
          </Link>
        </div>

        {/* Past Incidents Section */}
        <div className="w-1/2 mt-4">
          <h2 className="text-2xl font-bold text-white mb-4">Past Incidents (Last 90 Days)</h2>

          {sortedMonths.map((monthYear) => (
            <div key={monthYear} className="border-b border-gray-300 py-4">
              <p className="text-white font-semibold">{monthYear}</p>
              {incidentsByMonth[monthYear].map((incident: any, index: number) => (
                <div key={incident.date} className="mt-2">
                  <p className="text-yellow-400">{incident.description}</p>
                  <p className="text-white">{incident.resolutionMessage}</p>
                  <p className="text-gray-400">{incident.timeRange}</p>
                </div>
              ))}
              {/* Add "+ Show All 5 Incidents" link for May 2025 */}
              {monthYear === 'May 2025' && (
                <p className="text-blue-400 mt-2">
                  <Link href="#" className="hover:underline">
                    + Show All 5 Incidents
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Current Status Button */}
      <div className="flex justify-center mt-4">
        <Link href="/DropBoxStatus">
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
            Current Status
          </button>
        </Link>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 mt-12 py-8">
        <div className="w-full border-t border-gray-600 mb-8"></div>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            {/* Logo and Title */}
            <div className="mb-8">
              <div className="flex items-center mb-4">
                <Image
                  src="/images/Dropbox.svg"
                  alt="Dropbox Logo"
                  width={40}
                  height={40}
                  className="mr-2"
                />
                <span className="text-white text-xl font-semibold">Dropbox</span>
              </div>
            </div>

            {/* Product Links */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:underline">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline">
                    Pricing
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
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline">
                    Investor Relations
                  </a>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:underline">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:underline">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div className="mb-8">
              <h3 className="text-white font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.5c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 12.5h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-11h3v1.47c1.24-1.02 3.01-1.47 4.5-1.47 3.31 0 5.5 2.69 5.5 6v5.5z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-1 19h-3v-7c0-1.66-1.34-3-3-3s-3 1.34-3 3v7h-3v-14h3v1.54c1.24-1.02 3.01-1.54 4.5-1.54 3.31 0 5.5 2.69 5.5 6v8z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Links and Copyright */}
          <div className="flex justify-between items-center mt-8">
            <div className="space-x-4">
              <a href="#" className="text-gray-400 text-sm hover:underline">
                Privacy & terms
              </a>
              <a href="#" className="text-gray-400 text-sm hover:underline">
                Manage Cookies
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2025 Dropbox</p>
          </div>
        </div>
      </footer>
    </div>
  );
}