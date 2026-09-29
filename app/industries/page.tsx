import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "RDNSoft provides custom software, AI, data, integration and consulting solutions for manufacturing, technology, logistics, travel, security technologies and professional services.",
};

const industries = [
  {
    title: "Manufacturing",
    text: "Software for production monitoring, operational workflows, technical data, reporting and internal management processes.",
    capabilities: ["Production Monitoring", "Workflow Management", "Technical Dashboards", "Reporting & Analytics"],
  },
  {
    title: "Technology",
    text: "Custom platforms, APIs, system integrations and specialized software for technology-driven companies and product teams.",
    capabilities: ["Custom Platforms", "API Development", "System Integration", "Technical Architecture"],
  },
  {
    title: "Logistics",
    text: "Digital tools that improve visibility across operations, tracking, coordination, reporting and data exchange.",
    capabilities: ["Operational Tracking", "Process Automation", "Data Integration", "Management Dashboards"],
  },
  {
    title: "Travel & Tourism",
    text: "Reservation, operations and customer-facing software designed for agencies, mobility services and tourism businesses.",
    capabilities: ["Reservation Systems", "Operations Platforms", "Customer Workflows", "Service Integration"],
  },
  {
    title: "Security Technologies",
    text: "Software platforms, video analytics, data processing and integration solutions for technology-intensive operational environments.",
    capabilities: ["Video Analytics", "Data Processing", "System Integration", "Operational Software"],
  },
  {
    title: "Professional Services",
    text: "Custom business applications, reporting tools and workflow automation for service-oriented organizations.",
    capabilities: ["Business Applications", "Workflow Automation", "Reporting", "Internal Platforms"],
  },
];

const commonNeeds = [
  ["Disconnected Systems", "Connect applications, databases, devices and external platforms into a more consistent operational environment."],
  ["Manual Processes", "Replace repetitive tasks and spreadsheet-heavy workflows with purpose-built software and automation."],
  ["Limited Visibility", "Create dashboards and reporting tools that make operational data easier to understand and act on."],
  ["Specialized Requirements", "Build software around workflows that standard platforms do not support well."],
  ["Complex Technical Data", "Process, structure and visualize technical information for operational or engineering teams."],
  ["Scalability", "Prepare systems and workflows to support growth in users, data, services and operational complexity."],
];

export default function IndustriesPage() {
  return (
    <main>
      <section className="subhero">
        <div className="container subhero-grid">
          <div>
            <div className="eyebrow">INDUSTRIES</div>
            <h1 className="subhero-title">
              Technology adapted to
              <span> real operational environments.</span>
            </h1>
          </div>

          <div className="subhero-side">
            <p>
              Different industries have different workflows, systems and technical
              constraints. RDNSoft develops software and technology solutions around
              the operational reality of each environment.
            </p>
            <p>
              Our work combines custom software development, AI, data processing,
              system integration and technical consulting according to the needs of
              each project.
            </p>
            <a className="button primary" href="/contact">Discuss Your Industry</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-intro">
          <div>
            <div className="eyebrow">INDUSTRY-FOCUSED SOLUTIONS</div>
            <h2>Same core capabilities. Different operational priorities.</h2>
          </div>

          <div className="rich-copy">
            <p>
              A manufacturing company, a logistics operator and a travel business may
              all need software, integration and automation, but the way those systems
              need to work is very different.
            </p>
            <p>
              RDNSoft adapts the architecture, workflow and integration model to the
              environment instead of forcing every project into the same software
              pattern.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">INDUSTRIES WE SUPPORT</div>
              <h2>Software and technology for diverse operations.</h2>
            </div>
            <p>
              Our technical capabilities can be applied across multiple industries
              where custom workflows, system integration and reliable data are
              important.
            </p>
          </div>

          <div className="industry-card-grid">
            {industries.map((industry, index) => (
              <article className="industry-card" key={industry.title}>
                <span className="industry-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{industry.title}</h3>
                <p>{industry.text}</p>
                <div className="industry-tags">
                  {industry.capabilities.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container industry-dark-grid">
          <div>
            <div className="eyebrow light">COMMON CHALLENGES</div>
            <h2>Different sectors often face the same technology problems.</h2>
          </div>

          <div className="challenge-grid">
            {commonNeeds.map(([title, text]) => (
              <div key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">HOW WE ADAPT</div>
              <h2>Technology shaped around your operating model.</h2>
            </div>
            <p>
              We adapt the solution architecture based on users, processes, devices,
              existing systems, data sources and the level of operational complexity.
            </p>
          </div>

          <div className="adapt-grid">
            <div>
              <span>01</span>
              <h3>Understand the Environment</h3>
              <p>We learn how teams work, what systems they use and where the operational friction exists.</p>
            </div>
            <div>
              <span>02</span>
              <h3>Map the Requirements</h3>
              <p>We define the workflows, data flows, integrations and technical constraints that matter most.</p>
            </div>
            <div>
              <span>03</span>
              <h3>Design the Solution</h3>
              <p>We create the software and integration architecture around the real operating model.</p>
            </div>
            <div>
              <span>04</span>
              <h3>Deploy & Improve</h3>
              <p>We deploy the solution, observe its use and improve it as operational needs evolve.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="container capability-grid-outer">
          <div>
            <div className="eyebrow">CORE CAPABILITIES</div>
            <h2>What we bring to each industry.</h2>
          </div>

          <div className="capability-list">
            <div>
              <strong>Custom Software Development</strong>
              <span>Applications and internal platforms designed around specific workflows.</span>
            </div>
            <div>
              <strong>AI & Computer Vision</strong>
              <span>Visual analysis, detection, recognition and intelligent automation capabilities.</span>
            </div>
            <div>
              <strong>Data & Signal Technologies</strong>
              <span>Measurement, processing, synchronization, analysis and technical data visualization.</span>
            </div>
            <div>
              <strong>System Integration</strong>
              <span>Connections between software, databases, APIs, devices and external platforms.</span>
            </div>
            <div>
              <strong>Technology Consulting</strong>
              <span>Architecture, technical planning, requirements definition and implementation support.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <div className="eyebrow light">YOUR INDUSTRY, YOUR REQUIREMENTS</div>
            <h2>Need a solution designed around your operation?</h2>
          </div>
          <div>
            <p>
              Tell us how your organization works, where the current limitations are
              and what you want to improve. We can help define the right software and
              technology approach.
            </p>
            <a className="button white" href="/contact">Talk to RDNSoft</a>
          </div>
        </div>
      </section>

      <style>{`
        .subhero {
          padding: 130px 0 100px;
          background:
            radial-gradient(circle at 88% 22%, rgba(18,103,243,.11), transparent 28%),
            linear-gradient(180deg, #ffffff 0%, #f7f9fc 100%);
          border-bottom: 1px solid var(--line);
        }

        .subhero-grid {
          display: grid;
          grid-template-columns: 1.15fr .85fr;
          gap: 90px;
          align-items: end;
        }

        .subhero-title {
          max-width: 880px;
          font-size: clamp(54px, 6vw, 88px);
        }

        .subhero-title span {
          color: var(--blue);
        }

        .subhero-side {
          padding-bottom: 8px;
        }

        .subhero-side p {
          margin: 0 0 18px;
          color: var(--muted);
          line-height: 1.8;
          font-size: 17px;
        }

        .subhero-side .button {
          margin-top: 14px;
        }

        .split-intro {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 100px;
        }

        .split-intro h2,
        .industry-dark-grid h2,
        .capability-grid-outer h2 {
          margin: 0;
          font-size: clamp(38px, 4vw, 60px);
          line-height: 1.06;
          letter-spacing: -.045em;
        }

        .rich-copy p {
          margin: 0 0 22px;
          color: var(--muted);
          font-size: 18px;
          line-height: 1.85;
        }

        .industry-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .industry-card {
          min-height: 320px;
          padding: 30px;
          border: 1px solid var(--line);
          background: white;
        }

        .industry-number {
          display: block;
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 52px;
        }

        .industry-card h3 {
          margin: 0 0 16px;
          font-size: 26px;
          letter-spacing: -.03em;
        }

        .industry-card > p {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
          max-width: 560px;
        }

        .industry-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 28px;
        }

        .industry-tags span {
          border: 1px solid var(--line);
          background: #f9fbfd;
          padding: 8px 10px;
          border-radius: 999px;
          color: #475467;
          font-size: 12px;
          font-weight: 650;
        }

        .industry-dark-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 90px;
        }

        .challenge-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: #223047;
          border: 1px solid #223047;
        }

        .challenge-grid > div {
          background: var(--dark);
          padding: 26px;
          min-height: 175px;
        }

        .challenge-grid strong {
          display: block;
          font-size: 18px;
          margin-bottom: 12px;
        }

        .challenge-grid span {
          display: block;
          color: #9eabbd;
          font-size: 14px;
          line-height: 1.7;
        }

        .adapt-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .adapt-grid > div {
          min-height: 250px;
          padding: 26px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .adapt-grid span {
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
        }

        .adapt-grid h3 {
          margin: 62px 0 14px;
          font-size: 21px;
        }

        .adapt-grid p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 14px;
        }

        .capability-section {
          background: var(--bg);
        }

        .capability-grid-outer {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 100px;
        }

        .capability-list {
          border-top: 1px solid var(--line);
        }

        .capability-list > div {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 28px;
          padding: 25px 0;
          border-bottom: 1px solid var(--line);
        }

        .capability-list strong {
          font-size: 16px;
        }

        .capability-list span {
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .subhero-grid,
          .split-intro,
          .industry-dark-grid,
          .capability-grid-outer {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .adapt-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 680px) {
          .subhero {
            padding: 82px 0 70px;
          }

          .subhero-title {
            font-size: clamp(46px, 14vw, 64px);
          }

          .industry-card-grid,
          .challenge-grid,
          .adapt-grid {
            grid-template-columns: 1fr;
          }

          .industry-card {
            min-height: auto;
          }

          .capability-list > div {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  );
}
