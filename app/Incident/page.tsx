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