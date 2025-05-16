'use client';

import React from 'react';
import Header from '../components/Header/page';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Enterprise = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      <Header />

      {/* Section - Integration Toolset */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">
            Connect Statuspage with your incident management toolset for faster response.
          </h2>
          <p className="text-lg">
            Statuspage integrates with the top monitoring, alerting, and ChatOps tools to help keep customers in the loop during each phase of an incident.
          </p>
        </div>
        <div className="flex justify-center">
          <Image src="/images/toolset.png" alt="Toolset Logos" width={800} height={400} className="w-full max-w-4xl h-auto" />
        </div>
      </section>

      {/* Section - Integration Details */}
      <section className="py-16 px-4 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold mb-2">Monitoring tool integrations</h3>
              <p>
                Integrate Statuspage with <a href="#" className="text-blue-600 underline">DataDog</a>, <a href="#" className="text-blue-600 underline">New Relic</a>, <a href="#" className="text-blue-600 underline">Librato</a> or <a href="#" className="text-blue-600 underline">Pingdom</a> to update your page as soon as an issue is detected.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Alerting tool integrations</h3>
              <p>
                Integrate Statuspage with <a href="#" className="text-blue-600 underline">Opsgenie</a>, <a href="#" className="text-blue-600 underline">PagerDuty</a>, <a href="#" className="text-blue-600 underline">VictorOps</a>, or <a href="#" className="text-blue-600 underline">xMatters</a> to update status directly from your alerting app.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Automation via API or email</h3>
              <p>
                Use our <a href="#" className="text-blue-600 underline">REST API</a> to programmatically update your status page by writing your own integration, or <a href="#" className="text-blue-600 underline">automatically update</a> the status of components by triggering an email with a subject line containing the words “UP” or “DOWN”.
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Image src="/images/integration.png" alt="Integration Illustration" width={800} height={400} className="w-full h-auto" />
          </motion.div>
        </div>
      </section>

      {/* Section - Display status anywhere */}
      <section className="py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Display status directly in your website, app, or help center
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-6xl mx-auto mt-12">
          <div>
            <Image src="/images/status-display.png" alt="Status Embed" width={400} height={300} className="rounded-xl" />
          </div>
          <div className="text-left max-w-md">
            <h3 className="text-lg font-bold mb-2">Support tool integrations</h3>
            <p className="mb-4">
              Embed status where your customers are already heading for help—like <a href="#" className="text-blue-600 underline">Jira Service Management</a>, <a href="#" className="text-blue-600 underline">Zendesk</a>, and Intercom—to squash duplicate support tickets at the source.
            </p>
            <p>
              With <span className="text-blue-600">Status Embed</span>, you can display active incidents and scheduled maintenance in key places your customers most likely go to look for them. Choose custom styling and make the embedded widget match the rest of your brand.
            </p>
          </div>
        </div>
      </section>

      {/* Section - ChatOps integrations */}
      <section className="py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Connect Slack or Microsoft Teams to stay in sync during incident response
        </h2>
        <div className="flex justify-center mt-10">
          <Image src="/images/chatops.png" alt="ChatOps Integration" width={500} height={300} className="h-auto" />
        </div>
      </section>

      {/* Section - Uptime showcase */}
      <section className="py-16 text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Showcase your uptime</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12 mt-10">
          <div>
            <Image src="/images/uptime-metrics.png" alt="Uptime Metrics" width={500} height={300} className="rounded-xl" />
          </div>
          <div className="text-left max-w-md">
            <h3 className="text-lg font-bold mb-2">Display system metrics to build customer trust</h3>
            <p>
              Seeing is believing. Screen current and past uptime metrics to win trust and reduce pressure on teams. With public metrics visualization, you can show API response times or page load metrics right on your page. You can even create custom metrics through our API.
            </p>
          </div>
        </div>
      </section>

      {/* Section - Build your own tool */}
      <section className="py-10 bg-gray-800 text-center px-6">
        <h3 className="text-lg font-bold mb-2">Don’t see your tool of choice?</h3>
        <p>
          Create your own Statuspage integration using our powerful <span className="text-blue-600">API</span>.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-gray-300 rounded-md font-semibold hover:bg-blue-700 transition">Learn more</button>
      </section>
      
            <section className="py-16 px-4 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Best integration practices</h2>
        <p className="mb-10 text-gray-400 text-sm">Check out these resources to get the most out of your Statuspage integrations</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="bg-white text-gray-900 rounded shadow-md p-6 w-full md:w-1/4">
            <h3 className="font-semibold mb-2 text-left">Stop support tickets in their tracks with Jira Service Management and Statuspage</h3>
            <a href="#" className="text-blue-600 text-sm">Learn more →</a>
          </div>
          <div className="bg-white text-gray-900 rounded shadow-md p-6 w-full md:w-1/4">
            <h3 className="font-semibold mb-2 text-left">Integrate Zendesk and Statuspage to deliver great customer experiences</h3>
            <a href="#" className="text-blue-600 text-sm">Learn more →</a>
          </div>
          <div className="bg-white text-gray-900 rounded shadow-md p-6 w-full md:w-1/4">
            <h3 className="font-semibold mb-2 text-left">Atlassian Incident Handbook</h3>
            <a href="#" className="text-blue-600 text-sm">Learn more →</a>
          </div>
        </div>
      </section>

      {/* Section - CTA for Statuspage */}
      <section className="py-16 text-center">
        <h3 className="text-lg font-bold mb-4">Don’t have Statuspage yet?</h3>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md text-sm font-semibold hover:bg-blue-700 transition">Get it free</button>
      </section>
      <Footer />
    </div>
  );
};

export default Enterprise;
