import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-full mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column */}
        <div>
          <Image src="/logo-atlassian.png" alt="Logo" width={32} height={32} />
          <ul className="mt-6 space-y-2 text-sm font-medium">
            <li>Company</li>
            <li>Careers</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>Investor Relations</li>
            <li>Atlassian Foundation</li>
            <li>Contact us</li>
          </ul>
        </div>

        {/* Center Columns */}
        <div className="flex gap-12">
          {/* Products */}
          <div>
            <h4 className="text-xs font-bold mb-4">PRODUCTS</h4>
            <ul className="space-y-2 text-sm">
              <li>Rovo</li>
              <li>Jira</li>
              <li>Jira Align</li>
              <li>Jira Service Management</li>
              <li>Confluence</li>
              <li>Trello</li>
              <li>Bitbucket</li>
              <li className="mt-2 text-blue-600">See all products →</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold mb-4">RESOURCES</h4>
            <ul className="space-y-2 text-sm">
              <li>Technical support</li>
              <li>Purchasing & licensing</li>
              <li>Atlassian Community</li>
              <li>Knowledge base</li>
              <li>Marketplace</li>
              <li>My account</li>
              <li className="mt-2 text-blue-600">Create support ticket →</li>
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h4 className="text-xs font-bold mb-4">LEARN</h4>
            <ul className="space-y-2 text-sm">
              <li>Partners</li>
              <li>Training & certification</li>
              <li>Documentation</li>
              <li>Developer resources</li>
              <li>Enterprise services</li>
              <li className="mt-2 text-blue-600">See all resources →</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 mt-16 pt-6 text-sm text-center text-gray-500 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p>Copyright © 2025 Minimilistic Connect</p>
        <div className="flex items-center gap-6 mt-4 md:mt-0">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Impressum</a>
          <div className="flex items-center gap-1">
            🌐 <span>English</span> ▼
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
