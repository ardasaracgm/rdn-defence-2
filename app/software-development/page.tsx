import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development",
  description:
    "Custom software development services by RDNSoft, including web applications, enterprise platforms, internal tools, API development and business process automation.",
};

const solutions = [
  {
    title: "Custom Web Applications",
    text: "Secure, responsive and scalable web applications tailored to your business processes, users and operational requirements.",
  },
  {
    title: "Enterprise Software",
    text: "Internal platforms and business systems designed to streamline workflows, centralize information and improve operational visibility.",
  },
  {
    title: "Management Platforms",
    text: "Purpose-built dashboards and management tools for operations, reporting, approvals, workflows and business-critical processes.",
  },
  {
    title: "API Development",
    text: "Secure and maintainable APIs that connect applications, databases, external services and business systems.",
  },
  {
    title: "System Modernization",
    text: "Modernization of legacy systems, interfaces and workflows without losing the operational knowledge already embedded in your processes.",
  },
  {
    title: "Business Automation",
    text: "Software solutions that reduce repetitive manual work, improve consistency and create more efficient operational workflows.",
  },
];

const process = [
  ["01", "Discovery", "We analyze your current processes, users, systems, constraints and project objectives."],
  ["02", "Architecture", "We define the software architecture, data structure, integrations and technical roadmap."],
  ["03", "Interface & Workflow", "We design the user experience around real operational tasks and decision flows."],
  ["04", "Development", "We build the application using maintainable, scalable and modern software practices."],
  ["05", "Testing", "We validate functionality, performance, usability and integration behavior before deployment."],
  ["06", "Deployment & Evolution", "We deploy the solution and continue improving it as your requirements evolve."],
];

const principles = [
  ["Business First", "Technology choices are driven by your operational requirements, not by unnecessary complexity."],
  ["Scalable by Design", "The architecture is prepared to support growth in users, transactions, data and functionality."],
  ["Integration Ready", "Applications are designed to communicate with your existing systems and external services."],
  ["Maintainable Code", "We prioritize clear architecture and maintainable development for long-term sustainability."],
];

export default function SoftwareDevelopmentPage() {
  return (
    <main>
      <section className="subhero">
        <div className="container subhero-grid">
          <div>
            <div className="eyebrow">SOFTWARE DEVELOPMENT</div>
            <h1 className="subhero-title">
              Software designed around
              <span> how your business works.</span>
            </h1>
          </div>

          <div className="subhero-side">
            <p>
              RDNSoft develops custom software applications, internal platforms and
              digital systems designed around specific operational and business
              requirements.
            </p>
            <p>
              We focus on building software that fits your processes, integrates with
              your existing systems and remains flexible as your organization evolves.
            </p>
            <a className="button primary" href="/contact">Discuss Your Project</a>
          </div>
        </div>
      </section>

      <section className="section software-intro">
        <div className="container split-intro">
          <div>
            <div className="eyebrow">CUSTOM SOFTWARE</div>
            <h2>When standard software is not enough.</h2>
          </div>

          <div className="rich-copy">
            <p>
              Off-the-shelf platforms are useful when business requirements are
              standard. But many organizations operate with unique workflows,
              integrations, approval structures and technical constraints.
            </p>
            <p>
              In these cases, custom software provides a better fit. RDNSoft develops
              applications around the way your teams actually work, helping reduce
              unnecessary manual processes while improving visibility, consistency and
              control.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">WHAT WE BUILD</div>
              <h2>Software for real operational needs.</h2>
            </div>
            <p>
              From focused internal tools to larger enterprise platforms, we develop
              software that supports day-to-day operations and long-term growth.
            </p>
          </div>

          <div className="solution-grid">
            {solutions.map((item, index) => (
              <article className="solution-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="section-heading software-dark-heading">
            <div>
              <div className="eyebrow light">OUR DEVELOPMENT PRINCIPLES</div>
              <h2>Built for use, integration and growth.</h2>
            </div>
            <p>
              Good software is not only about features. It needs to remain reliable,
              understandable and adaptable throughout its lifecycle.
            </p>
          </div>

          <div className="principle-grid">
            {principles.map(([title, text]) => (
              <div key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow">DEVELOPMENT PROCESS</div>
              <h2>Structured from requirement to deployment.</h2>
            </div>
          </div>

          <div className="dev-process">
            {process.map(([n, title, text]) => (
              <div className="dev-process-row" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tech-section">
        <div className="container tech-grid">
          <div>
            <div className="eyebrow">TECHNICAL CAPABILITIES</div>
            <h2>Modern software, without unnecessary complexity.</h2>
          </div>

          <div className="tech-list">
            <div>
              <strong>Web Platforms</strong>
              <span>Responsive browser-based applications and management systems.</span>
            </div>
            <div>
              <strong>Backend Systems</strong>
              <span>Business logic, data processing and service-oriented application layers.</span>
            </div>
            <div>
              <strong>Database Architecture</strong>
              <span>Structured data models designed for performance, security and maintainability.</span>
            </div>
            <div>
              <strong>API Integration</strong>
              <span>Connections between internal applications, third-party services and external platforms.</span>
            </div>
            <div>
              <strong>Cloud Deployment</strong>
              <span>Flexible application deployment for modern cloud-based environments.</span>
            </div>
            <div>
              <strong>Reporting & Dashboards</strong>
              <span>Operational dashboards, reporting tools and data visualization interfaces.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <div className="eyebrow light">START A SOFTWARE PROJECT</div>
            <h2>Have a process that needs a better software solution?</h2>
          </div>
          <div>
            <p>
              Tell us what you need to improve, automate or connect. We can help define
              the right software architecture and turn the requirement into a working
              solution.
            </p>
            <a className="button white" href="/contact">Discuss Your Project</a>
          </div>
        </div>
      </section>

      <style>{`
        .subhero {
          padding: 130px 0 100px;
          background:
            radial-gradient(circle at 90% 20%, rgba(18,103,243,.10), transparent 26%),
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
          max-width: 850px;
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
        .tech-grid h2 {
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

        .solution-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .solution-card {
          padding: 30px;
          min-height: 270px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: white;
        }

        .solution-card > span {
          display: block;
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 58px;
        }

        .solution-card h3 {
          margin: 0 0 15px;
          font-size: 22px;
          letter-spacing: -.025em;
        }

        .solution-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .software-dark-heading p {
          color: #aab5c5;
        }

        .principle-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #26354b;
          border-left: 1px solid #26354b;
        }

        .principle-grid > div {
          min-height: 240px;
          padding: 28px;
          border-right: 1px solid #26354b;
          border-bottom: 1px solid #26354b;
        }

        .principle-grid h3 {
          margin: 75px 0 15px;
          font-size: 21px;
        }

        .principle-grid p {
          margin: 0;
          color: #9eabbd;
          line-height: 1.7;
          font-size: 14px;
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

        .tech-section {
          background: #f7f9fc;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 100px;
        }

        .tech-list {
          border-top: 1px solid var(--line);
        }

        .tech-list > div {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 28px;
          padding: 25px 0;
          border-bottom: 1px solid var(--line);
        }

        .tech-list strong {
          font-size: 16px;
        }

        .tech-list span {
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .subhero-grid,
          .split-intro,
          .tech-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .solution-grid {
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

          .solution-grid,
          .principle-grid {
            grid-template-columns: 1fr;
          }

          .dev-process-row {
            grid-template-columns: 42px 1fr;
            padding: 22px 0;
          }

          .dev-process-row p {
            grid-column: 2;
          }

          .tech-list > div {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  );
}
