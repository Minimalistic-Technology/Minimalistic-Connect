import React from 'react';
import Header from '../components/Header/page';
import Footer from '../components/Footer';
import Image from "next/image";

const pvt = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      <Header />
          <section className="bg-gray-900 text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-2">Private Pages</h2>
        <p className="text-lg mb-20">Status and IT communication for your employees</p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div className="text-left">
            <h3 className="text-xl font-semibold mb-4">For Internal eyes only</h3>
            <p className="mb-4">
              IT communication through mass emails no longer cuts it when you're
              running services for hundreds or thousands of employees. Give
              employees one source of truth and let them opt into relevant
              notifications. Hook your private page up to SSO, automate away with
              your monitoring tools, and never reply to a “what’s the status”
              email again.
            </p>
            <a href="#" className="text-blue-400 hover:underline text-sm font-medium">
              Learn more →
            </a>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/images/private-pages.png" // Make sure this file exists in your public/images folder
              alt="Private Pages Status"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>

         <section className="bg-gray-900 text-gray-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

        {/* Row 1 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <Image
              src="/images/feature1.png" // Replace with actual file
              alt="Status Update"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Right Text */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Say goodbye to duplicate IT tickets</h3>
            <p className="mb-4">
              Our Jira Service Management integration lets you display real-time status
              information at the top of your service desk portal. Affected employees will
              know you are already on top of resolving the issue before filing a ticket.
            </p>
            <a href="#" className="text-blue-400 hover:underline text-sm font-medium">
              Learn more →
            </a>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Text */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Keeping your company informed</h3>
            <p className="mb-4">
              Pipe status updates into Slack to keep engineering, IT and Ops teams on the
              same page as they work to resolve the incident at hand. Integrate your page
              with tools like VictorOps, PagerDuty, OpsGenie, and xMatters to automate your
              IT communication.
            </p>
            <a href="#" className="text-blue-400 hover:underline text-sm font-medium">
              Learn more →
            </a>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <Image
              src="/images/feature2.png" // Replace with actual file
              alt="Website Updates"
              width={500}
              height={350}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-800 mt-24 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">Create your status page today</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
          Get it free
        </button>
      </div>
    </section>

      <Footer/>
      </div>
  )
}

export default pvt;