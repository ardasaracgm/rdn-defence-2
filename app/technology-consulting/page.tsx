import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technology Consulting",
  description:
    "RDNSoft provides technology consulting for software architecture, system design, integration planning, digital transformation and technical project delivery.",
};

const services = [
  {
    title: "Technology Strategy",
    text: "Define practical technology priorities, architecture decisions and implementation roadmaps aligned with business objectives.",
  },
  {
    title: "Software Architecture Consulting",
    text: "Evaluate application structure, data models, integration patterns and scalability requirements before or during development.",
  },
  {
    title: "System Design",
    text: "Design complete technical solutions involving software, APIs, databases, devices and infrastructure components.",
  },
  {
    title: "Integration Planning",
    text: "Plan how existing and new systems should communicate, including interfaces, responsibilities, data ownership and migration needs.",
  },
  {
    title: "Digital Process Improvement",
    text: "Identify where software, automation and better data flow can reduce manual work and improve operational control.",
  },
  {
    title: "Technical Project Support",
    text: "Support internal teams with requirements, vendor coordination, technical review and implementation oversight.",
  },
];

const stages = [
  ["01", "Understand the Objective", "We clarify the business goal, operational challenge and expected project outcome."],
  ["02", "Assess the Current State", "We review existing software, systems, workflows, data sources and technical constraints."],
  ["03", "Define the Target Architecture", "We design the proposed technology model, responsibilities, interfaces and implementation priorities."],
  ["04", "Create the Roadmap", "We structure the project into realistic phases, dependencies and decision points."],
  ["05", "Support Delivery", "We assist with technical review, implementation decisions, integration and quality control."],
  ["06", "Improve Over Time", "We revisit the architecture as the organization, systems and requirements evolve."],
];

const focusAreas = [
  ["Architecture Review", "Independent review of software and system architecture before major implementation decisions."],
  ["Vendor & Solution Evaluation", "Technical comparison of proposed platforms, suppliers and implementation approaches."],
  ["Requirements Definition", "Translate business objectives into clear technical requirements and project scope."],
  ["Technology Selection", "Select appropriate tools, platforms and architecture patterns without unnecessary complexity."],
  ["Migration Planning", "Plan transitions from legacy systems to modern software environments with controlled operational risk."],
  ["Technical Documentation", "Create structured technical requirements, architecture documents and implementation guidance."],
];

export default function TechnologyConsultingPage() {
  return (
    <main>
      <section className="subhero">
        <div className="container subhero-grid">
          <div>
            <div className="eyebrow">TECHNOLOGY CONSULTING</div>
            <h1 className="subhero-title">
              Make better
              <span> technology decisions.</span>
            </h1>
          </div>

          <div className="subhero-side">
            <p>
              RDNSoft provides technical consulting for organizations planning new
              software, modernizing existing systems or integrating multiple
              technologies into a single operational environment.
            </p>
            <p>
              We help turn business requirements into clear technical architecture,
              realistic implementation plans and manageable project decisions.
            </p>
            <a className="button primary" href="/contact">Discuss Your Project</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-intro">
          <div>
            <div className="eyebrow">PRACTICAL CONSULTING</div>
            <h2>Technical guidance focused on implementation.</h2>
          </div>

          <div className="rich-copy">
            <p>
              Technology consulting should create clarity, not more complexity. Our
              approach focuses on understanding the real operational requirement first
              and then defining a technical path that can actually be implemented.
            </p>
            <p>
              RDNSoft can support a project before development begins, during an active
              implementation or when an existing system needs to be reviewed and
              improved.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">CONSULTING SERVICES</div>
              <h2>From strategy to technical delivery.</h2>
            </div>
            <p>
              Engagements can focus on one specific technical question or cover the
              complete planning and implementation lifecycle of a larger technology
              project.
            </p>
          </div>

          <div className="service-card-grid">
            {services.map((item, index) => (
              <article className="service-card" key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container consulting-grid">
          <div>
            <div className="eyebrow light">HOW WE THINK</div>
            <h2>Business requirements first. Technology second.</h2>
          </div>

          <div className="consulting-copy">
            <p>
              The most advanced technology is not always the right technology. Good
              technical decisions consider business goals, operational reality,
              maintainability, integration needs, cost and future growth together.
            </p>

            <div className="decision-grid">
              <div><strong>Useful</strong><span>Does the solution solve the actual operational problem?</span></div>
              <div><strong>Maintainable</strong><span>Can the system be supported and improved over time?</span></div>
              <div><strong>Integrable</strong><span>Can it work with the organization's existing technology environment?</span></div>
              <div><strong>Scalable</strong><span>Can the architecture grow with users, data and future requirements?</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow">CONSULTING PROCESS</div>
              <h2>Structured from assessment to implementation.</h2>
            </div>
          </div>

          <div className="consulting-process">
            {stages.map(([n, title, text]) => (
              <div className="consulting-process-row" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section focus-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">FOCUS AREAS</div>
              <h2>Support where technical decisions matter most.</h2>
            </div>
            <p>
              We can work alongside management teams, internal IT teams, software
              developers and external suppliers depending on the needs of the project.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section engagement-section">
        <div className="container engagement-grid">
          <div>
            <div className="eyebrow">ENGAGEMENT MODELS</div>
            <h2>Flexible support for different project stages.</h2>
          </div>

          <div className="engagement-list">
            <div>
              <strong>Project-Based Consulting</strong>
              <span>Focused consulting for a defined system, software project or implementation requirement.</span>
            </div>
            <div>
              <strong>Architecture Review</strong>
              <span>Independent review of an existing or proposed technical architecture.</span>
            </div>
            <div>
              <strong>Pre-Project Planning</strong>
              <span>Requirements, architecture and roadmap definition before development or procurement begins.</span>
            </div>
            <div>
              <strong>Implementation Support</strong>
              <span>Ongoing technical guidance during software development, integration or system deployment.</span>
            </div>
            <div>
              <strong>Technical Advisory</strong>
              <span>Periodic support for organizations that need experienced technical input without a full-time internal role.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <div className="eyebrow light">TECHNICAL ADVISORY</div>
            <h2>Planning a software or technology project?</h2>
          </div>
          <div>
            <p>
              Tell us the objective, the current environment and the challenge you are
              trying to solve. We can help define a practical technical path forward.
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
        .consulting-grid h2,
        .engagement-grid h2 {
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

        .service-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .service-card {
          padding: 30px;
          min-height: 270px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: white;
        }

        .service-card > span {
          display: block;
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
          margin-bottom: 58px;
        }

        .service-card h3 {
          margin: 0 0 15px;
          font-size: 22px;
          letter-spacing: -.025em;
        }

        .service-card p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .consulting-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 90px;
        }

        .consulting-copy > p {
          margin: 0;
          color: #aab5c5;
          line-height: 1.8;
          font-size: 17px;
        }

        .decision-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          margin-top: 42px;
          border: 1px solid #223047;
          background: #223047;
        }

        .decision-grid > div {
          background: var(--dark);
          padding: 26px;
          min-height: 155px;
        }

        .decision-grid strong {
          display: block;
          margin-bottom: 12px;
          font-size: 18px;
        }

        .decision-grid span {
          display: block;
          color: #9eabbd;
          line-height: 1.65;
          font-size: 14px;
        }

        .consulting-process {
          border-top: 1px solid var(--line);
        }

        .consulting-process-row {
          display: grid;
          grid-template-columns: 90px .75fr 1.25fr;
          gap: 28px;
          align-items: center;
          min-height: 132px;
          border-bottom: 1px solid var(--line);
        }

        .consulting-process-row > span {
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
        }

        .consulting-process-row h3 {
          margin: 0;
          font-size: 23px;
          letter-spacing: -.025em;
        }

        .consulting-process-row p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .focus-section {
          background: var(--bg);
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .focus-grid article {
          min-height: 205px;
          padding: 30px;
          border: 1px solid var(--line);
          background: white;
        }

        .focus-grid h3 {
          margin: 0 0 16px;
          font-size: 21px;
        }

        .focus-grid p {
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
        }

        .engagement-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 100px;
        }

        .engagement-list {
          border-top: 1px solid var(--line);
        }

        .engagement-list > div {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 28px;
          padding: 25px 0;
          border-bottom: 1px solid var(--line);
        }

        .engagement-list strong {
          font-size: 16px;
        }

        .engagement-list span {
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .subhero-grid,
          .split-intro,
          .consulting-grid,
          .engagement-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .service-card-grid,
          .focus-grid {
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

          .service-card-grid,
          .focus-grid,
          .decision-grid {
            grid-template-columns: 1fr;
          }

          .consulting-process-row {
            grid-template-columns: 42px 1fr;
            padding: 22px 0;
          }

          .consulting-process-row p {
            grid-column: 2;
          }

          .engagement-list > div {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  );
}
