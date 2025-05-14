import React from 'react';
import Header from '../components/Header/page';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import Image from 'next/image';

const pricing = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      <Header />
      <Pricing />

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Pricing FAQ for Public Pages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-gray-300">
          <div>
            <h3 className="font-semibold text-lg mb-2">Is there a core feature set included in all plans?</h3>
            <p>
              Our core feature includes Incidents, Components, Scheduled Maintenances, Incident Templates,
              Page Analytics, Component Groups, Basic Customization, REST API access, Third Party Components,
              Automation Integrations, Chat Integrations, Status Embed, Activity Log, Twitter Integration. 
              More info can be found in our <a href="#" className="text-blue-400 underline">knowledge base</a>.
            </p>
            <h3 className="font-semibold text-lg mt-6 mb-2">What are Team Members?</h3>
            <p>Team members can log in and perform admin actions on your status page like updating incidents or components.</p>
            <h3 className="font-semibold text-lg mt-6 mb-2">Does SSL cost extra?</h3>
            <p>No. SSL comes for free on all plans!</p>
            <h3 className="font-semibold text-lg mt-6 mb-2">Do you offer yearly credit card billing?</h3>
            <p>
              We do, but setup is manual and requires a signed order form. For yearly plan signup, 
              <a href="#" className="text-blue-400 underline"> contact our support team</a>.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Is there an additional charge for SSO with Atlassian Guard?</h3>
            <p>
              No. SSO with Atlassian Guard is included in Startup, Business, and Enterprise plans at no additional charge.
            </p>
            <h3 className="font-semibold text-lg mt-6 mb-2">Is there extra cost for notifications?</h3>
            <p>
              No, all plans come with unlimited notifications. Plan level affects notification type 
              (Email, SMS, Webhook).
            </p>
            <h3 className="font-semibold text-lg mt-6 mb-2">Can I have customized status pages for each of my customers?</h3>
            <p>
              Yes. Audience-specific page types allow you to show custom statuses per customer group.
              Learn more in <a href="#" className="text-blue-400 underline">Audience-specific</a> pricing and docs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-800 text-center py-12">
        <h2 className="text-2xl font-semibold mb-4">Create your status page today</h2>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold w-full max-w-xs mx-auto">
          Get it free
        </button>
      </section>

      <Footer />
    </div>
  );
};

export default pricing;
