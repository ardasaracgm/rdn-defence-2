import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Integration",
  description:
    "RDNSoft integrates software, hardware, APIs, databases and external platforms into reliable connected systems.",
};

const integrations = [
  {
    title: "Software-to-Software Integration",
    text: "Connect internal applications and third-party platforms so data and workflows move consistently between systems.",
  },
  {
    title: "API Integration",
    text: "Design and implement secure APIs that enable controlled data exchange between applications, services and external platforms.",
  },
  {
    title: "Hardware & Device Integration",
    text: "Connect software with supported devices, cameras, sensors, controllers and other technical equipment.",
  },
  {
    title: "Database Integration",
    text: "Synchronize, migrate and exchange structured data across databases and operational software platforms.",
  },
  {
    title: "Cloud & On-Premise Connectivity",
    text: "Bridge cloud-based applications with local systems and create reliable hybrid software environments.",
  },
  {
    title: "Operational Dashboards",
    text: "Combine data from multiple systems into unified dashboards for monitoring, reporting and operational visibility.",
  },
];

const stages = [
  ["01", "System Mapping", "We identify the applications, devices, databases and external services that need to communicate."],
  ["02", "Interface Analysis", "We review available APIs, protocols, data formats and technical limitations."],
  ["03", "Integration Architecture", "We define how data should move, where logic should live and how failures should be handled."],
  ["04", "Development", "We build connectors, APIs, services and transformation layers required by the architecture."],
  ["05", "Testing", "We validate data exchange, edge cases, permissions, performance and error handling."],
  ["06", "Deployment & Monitoring", "We deploy the integration and support ongoing stability, logging and technical improvements."],
];

const principles = [
  ["Reliable Data Flow", "Information should move between systems predictably, accurately and with clear ownership."],
  ["Controlled Interfaces", "Integration points are designed with explicit rules, permissions and technical boundaries."],
  ["Fault Awareness", "Errors, timeouts and unavailable systems are handled with logging, recovery logic and visibility."],
  ["Future Flexibility", "The architecture is designed so additional systems and data sources can be added later."],
];

export default function SystemIntegrationPage() {
  return (
    <main>
      <section className="subhero">
        <div className="container subhero-grid">
          <div>
            <div className="eyebrow">SYSTEM INTEGRATION</div>
            <h1 className="subhero-title">
              Connect your systems.
              <span> Simplify your operations.</span>
            </h1>
          </div>

          <div className="subhero-side">
            <p>
              RDNSoft connects applications, hardware, databases, APIs and external
              services into reliable digital environments.
            </p>
            <p>
              We design integration architectures that reduce disconnected workflows,
              improve data consistency and make complex systems easier to operate.
            </p>
            <a className="button primary" href="/contact">Discuss Your Integration</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-intro">
          <div>
            <div className="eyebrow">CONNECTED SYSTEMS</div>
            <h2>Make separate technologies work as one system.</h2>
          </div>

          <div className="rich-copy">
            <p>
              Most organizations rely on multiple applications, databases, devices and
              external platforms. When these systems operate independently, teams often
              spend time moving data manually or maintaining duplicate workflows.
            </p>
            <p>
              RDNSoft designs and develops the integration layer that allows these
              systems to exchange information reliably and support a more connected
              operational environment.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">WHAT WE INTEGRATE</div>
              <h2>From applications and APIs to devices and databases.</h2>
            </div>
            <p>
              Integration scope can range from a focused connection between two
              applications to a larger architecture involving multiple systems and
              technical data sources.
            </p>
          </div>

          <div className="integration-card-grid">
            {integrations.map((item, index) => (
              <article className="integration-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container architecture-grid">
          <div>
            <div className="eyebrow light">INTEGRATION ARCHITECTURE</div>
            <h2>One connected operational layer.</h2>
            <p className="dark-copy">
              A good integration architecture separates applications from connection
              logic, making the overall environment easier to maintain and extend.
            </p>
          </div>

          <div className="architecture-map">
            <div className="source-row">
              <div>Business App</div>
              <div>Device / Sensor</div>
              <div>External Service</div>
            </div>

            <div className="connector-lines">
              <span />
              <span />
              <span />
            </div>

            <div className="hub">
              <small>RDNSOFT INTEGRATION LAYER</small>
              <strong>APIs · Services · Data Transformation · Business Logic</strong>
            </div>

            <div className="connector-lines bottom">
              <span />
              <span />
              <span />
            </div>

            <div className="source-row">
              <div>Database</div>
              <div>Dashboard</div>
              <div>Enterprise Platform</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow">INTEGRATION PROCESS</div>
              <h2>Structured from system mapping to production deployment.</h2>
            </div>
          </div>

          <div className="dev-process">
            {stages.map(([n, title, text]) => (
              <div className="dev-process-row" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section principles-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">OUR PRINCIPLES</div>
              <h2>Integration designed for reliability and control.</h2>
            </div>
            <p>
              Connected systems need more than a successful API call. They require
              clear ownership, resilience and visibility throughout the data flow.
            </p>
          </div>

          <div className="principle-grid">
            {principles.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section examples-section">
        <div className="container examples-grid">
          <div>
            <div className="eyebrow">COMMON SCENARIOS</div>
            <h2>Integration across real business environments.</h2>
          </div>

          <div className="example-list">
            <div>
              <strong>ERP / Business Platforms</strong>
              <span>Connect operational applications with enterprise software and business data sources.</span>
            </div>
            <div>
              <strong>CRM & Customer Systems</strong>
              <span>Synchronize customer, transaction and workflow data across multiple applications.</span>
            </div>
            <div>
              <strong>Device & Sensor Data</strong>
              <span>Bring supported device data into dashboards, databases and software workflows.</span>
            </div>
            <div>
              <strong>Reporting Systems</strong>
              <span>Aggregate data from multiple sources into unified reporting and management interfaces.</span>
            </div>
            <div>
              <strong>Third-Party Services</strong>
              <span>Integrate external providers, cloud services and partner platforms through controlled interfaces.</span>
            </div>
            <div>
              <strong>Legacy Applications</strong>
              <span>Bridge older systems with modern applications while preserving existing operational processes.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <div className="eyebrow light">CONNECT YOUR SYSTEMS</div>
            <h2>Need different platforms to work together?</h2>
          </div>
          <div>
            <p>
              Tell us which applications, devices or data sources need to communicate.
              We can help define the architecture and build a reliable integration
              between them.
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
        .architecture-grid h2,
        .examples-grid h2 {
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

        .integration-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .integration-card {
          padding: 30px;
          min-height: 270px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: white;
        }

        .integration-card > span {
          display: block;
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 58px;
        }

        .integration-card h3 {
          margin: 0 0 15px;
          font-size: 22px;
          letter-spacing: -.025em;
        }

        .integration-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .architecture-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 90px;
          align-items: center;
        }

        .dark-copy {
          color: #aab5c5;
          line-height: 1.8;
          font-size: 17px;
          margin: 24px 0 0;
        }

        .architecture-map {
          padding: 28px;
          border: 1px solid #223047;
          background: #0c1626;
        }

        .source-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .source-row > div {
          min-height: 72px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          border: 1px solid #26354b;
          color: #cbd5e1;
          font-size: 13px;
          padding: 12px;
        }

        .connector-lines {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
          height: 38px;
        }

        .connector-lines span {
          width: 1px;
          height: 100%;
          background: #38557c;
          margin: auto;
        }

        .hub {
          min-height: 118px;
          border: 1px solid #3977c9;
          background: linear-gradient(135deg, rgba(18,103,243,.22), rgba(18,103,243,.06));
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 24px;
        }

        .hub small {
          color: #76b8ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .12em;
          margin-bottom: 12px;
        }

        .hub strong {
          font-size: 18px;
          line-height: 1.5;
        }

        .dev-process {
          border-top: 1px solid var(--line);
        }

        .dev-process-row {
          display: grid;
          grid-template-columns: 90px .75fr 1.25fr;
          gap: 28px;
          align-items: center;
          min-height: 132px;
          border-bottom: 1px solid var(--line);
        }

        .dev-process-row > span {
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
        }

        .dev-process-row h3 {
          margin: 0;
          font-size: 23px;
          letter-spacing: -.025em;
        }

        .dev-process-row p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .principles-section {
          background: var(--bg);
        }

        .principle-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .principle-grid article {
          background: white;
          border: 1px solid var(--line);
          min-height: 230px;
          padding: 28px;
        }

        .principle-grid h3 {
          margin: 65px 0 14px;
          font-size: 20px;
        }

        .principle-grid p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 14px;
        }

        .examples-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 100px;
        }

        .example-list {
          border-top: 1px solid var(--line);
        }

        .example-list > div {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 28px;
          padding: 25px 0;
          border-bottom: 1px solid var(--line);
        }

        .example-list strong {
          font-size: 16px;
        }

        .example-list span {
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .subhero-grid,
          .split-intro,
          .architecture-grid,
          .examples-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .integration-card-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .principle-grid {
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

          .integration-card-grid,
          .principle-grid {
            grid-template-columns: 1fr;
          }

          .source-row {
            grid-template-columns: 1fr;
          }

          .connector-lines {
            display: none;
          }

          .hub {
            margin: 12px 0;
          }

          .dev-process-row {
            grid-template-columns: 42px 1fr;
            padding: 22px 0;
          }

          .dev-process-row p {
            grid-column: 2;
          }

          .example-list > div {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  );
}
