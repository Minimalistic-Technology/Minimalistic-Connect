
import Image from 'next/image';

const IncidentSection = () => {
  return (

    <section className="relative bg-blue-700 text-white py-16 px-6">
      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-12 w-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,120 900,0 1200,120 L1200,0 L0,0 Z"
            className="fill-gray-900"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Left Image */}
        <div className="flex-shrink-0">
          <Image
            src="/images/Status Page Balloons@2x.png"
            alt="Incident Illustration"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>

        {/* Right Text Content */}
        <div className="max-w-xl space-y-10">
          {/* Block 1 */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">💬</span>
              <h2 className="text-lg font-semibold">What is incident communication?</h2>
            </div>
            <p className="text-sm opacity-90">
              Incident communication is the process of alerting users that a service is experiencing some type of outage
              or degraded performance. This is especially important for web and software services, where 24/7 availability
              is expected. Since downtime is inevitable, check out our comprehensive guide to incident communication best
              practices.
            </p>
            <a href="#" className="block mt-2 text-sm font-semibold underline">Learn more →</a>
          </div>

          {/* Block 2 */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">📖</span>
              <h2 className="text-lg font-semibold">Incident Management Handbook</h2>
            </div>
            <p className="text-sm opacity-90">
              Interested in learning what happens when an Atlassian service goes down? We've created the Incident
              Management Handbook to summarize our incident management process and pass on our experiences. These are the
              lessons we've learned responding to incidents for more than a decade. While it's based on our unique
              experiences, the practices and theories can be adapted to suit the needs of your own team.
            </p>
            <a href="#" className="block mt-2 text-sm font-semibold underline">Learn more →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncidentSection;
