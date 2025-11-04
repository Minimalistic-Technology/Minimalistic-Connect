
import Button from "@/components/Button";
import Card from "@/components/Card";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import AnimatedFAQ from "@/components/AnimatedFAQ";

const features = [
  { 
    t: "Real-time uptime and latency", 
    d: "Track response times and availability across regions with beautiful visualizations.",
    icon: "⚡" 
  },
  { 
    t: "Errors and status codes, simplified", 
    d: "Pinpoint failures with aggregated status views and instant notifications.", 
    icon: "🎯"
  },
  { 
    t: "Visual heatmaps and trends", 
    d: "Spot patterns quickly with intuitive charts and predictive analytics.", 
    icon: "📈"
  },
];

const pricing = [
  { 
    name: "Free demo", 
    price: "$0", 
    period: "forever",
    features: ["Basic monitoring", "5 endpoints", "12-hour retention"],
    cta: "Try the demo" 
  },
  { 
    name: "Pro", 
    price: "$29", 
    period: "per month",
    features: ["Advanced monitoring", "Unlimited endpoints", "30-day retention", "Email alerts"],
    cta: "Start Pro",
    highlight: true
  },
  { 
    name: "Enterprise", 
    price: "Custom", 
    period: "per month",
    features: ["Everything in Pro", "Custom retention", "SLA guarantee", "Dedicated support"],
    cta: "Contact sales" 
  },
];

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
      {/* Hero */}
      <Reveal>
        <section className="pt-14 md:pt-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-gradientFrom to-brand-gradientTo opacity-10 rounded-3xl" />
          <div className="relative max-w-3xl">
              <div className="type-eyebrow">Minimalistic Connect</div>
              <h1 className="type-h1 mt-3 bg-clip-text text-transparent bg-gradient-to-r from-brand-gradientFrom to-brand-gradientTo">
                Connect and monitor with elegant simplicity
              </h1>
              <p className="type-body-lg mt-4 text-text-secondary">
                Experience streamlined monitoring with our minimalist approach to insights.
              </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button>Start Free Scan</Button>
              <Button variant="secondary">See sample report</Button>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="col-span-1 sm:col-span-2 lg:col-span-3 rounded-2xl p-8 bg-gradient-to-r from-brand-gradientFrom to-brand-gradientTo text-white">
              <p className="type-body-lg">“Trusted by teams who care about performance.”</p>
              <div className="mt-4 flex flex-wrap gap-6 opacity-95" aria-label="Trusted logos">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-8 w-28 rounded-md bg-white/20" aria-hidden />
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Features */}
      <section id="features" className="py-20">
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to understand reliability"
          subtitle="Clear metrics and helpful visuals out of the box"
        />
        <Reveal stagger delay={0.1}>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <Card key={f.t} className="p-6 group">
                <div className="text-4xl mb-4 transform transition-transform group-hover:scale-110">{f.icon}</div>
                <h3 className="type-h3 bg-clip-text text-transparent bg-gradient-to-r from-brand-gradientFrom to-brand-gradientTo">
                  {f.t}
                </h3>
                <p className="type-body mt-2 text-text-secondary">{f.d}</p>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      {/* How it works */}
      <Reveal delay={0.2}>
        <section id="how" className="py-16">
          <SectionHeading eyebrow="How it works" title="From URL to insights in minutes" />
          <ol className="mt-10 grid gap-6 sm:grid-cols-3 list-decimal list-inside">
            {[
              { t: "Add your URL or API", d: "Point us at your site or endpoint." },
              { t: "We run checks and analyze", d: "Uptime, latency, status codes, and more." },
              { t: "Review the report and metrics", d: "Share and iterate with your team." },
            ].map((s, i) => (
              <li key={i} className="card p-6">
                <h3 className="type-h3">{s.t}</h3>
                <p className="type-body mt-2 text-text-secondary">{s.d}</p>
              </li>
            ))}
          </ol>
        </section>
      </Reveal>

      {/* Pricing */}
      <section id="pricing" className="py-16">
        <SectionHeading eyebrow="Pricing" title="Simple, transparent plans" />
        <Reveal stagger delay={0.2}>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricing.map((p) => (
              <Card 
                key={p.name} 
                className={`flex flex-col p-6 ${p.highlight ? 'ring-2 ring-brand-primary ring-offset-4 ring-offset-bg scale-105' : ''}`}
              >
                <h3 className="type-h3">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="type-h2">{p.price}</span>
                  <span className="type-caption">{p.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {p.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="type-body">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6" />
                <Button 
                  className={`mt-auto ${p.highlight ? '' : 'variant-secondary'}`}
                  variant={p.highlight ? 'primary' : 'secondary'}
                >
                  {p.cta}
                </Button>
              </Card>
            ))}
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16">
        <SectionHeading eyebrow="FAQ" title="Questions, answered" />
        <Reveal stagger delay={0.2}>
          <div className="mt-10 grid gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <AnimatedFAQ
                key={i}
                question={`Placeholder question #${i + 1}`}
                answer="Placeholder answer with helpful details."
              />
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
