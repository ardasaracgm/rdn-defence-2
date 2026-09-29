import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data & Signal Technologies",
  description:
    "RDNSoft develops software for signal measurement, analysis, synchronization, technical monitoring and complex data processing.",
};

const solutions = [
  {
    title: "Signal Measurement Software",
    text: "Applications for collecting, displaying and managing measurement data from signal sources and connected technical systems.",
  },
  {
    title: "Signal Analysis",
    text: "Software workflows for examining signal behavior, identifying patterns and transforming raw measurements into usable technical information.",
  },
  {
    title: "Signal Synchronization",
    text: "Software designed to coordinate timing, sequence and data alignment across multiple signal sources and connected systems.",
  },
  {
    title: "Technical Monitoring",
    text: "Monitoring platforms that visualize system status, measurements, events and operational data through clear dashboards and interfaces.",
  },
  {
    title: "Data Processing",
    text: "Custom software for filtering, transforming, comparing, aggregating and structuring complex technical datasets.",
  },
  {
    title: "Reporting & Visualization",
    text: "Dashboards, charts and reporting tools that make technical data easier to understand, compare and act on.",
  },
];

const workflow = [
  ["01", "Data Source Analysis", "We identify signal sources, available interfaces, sampling requirements and data structures."],
  ["02", "Measurement Model", "We define what needs to be captured, calculated, synchronized and retained."],
  ["03", "Processing Architecture", "We design the software flow for acquisition, processing, storage and visualization."],
  ["04", "Development", "We build the required services, interfaces, dashboards and processing modules."],
  ["05", "Validation", "We verify the software against representative technical data and operational scenarios."],
  ["06", "Integration", "We connect the solution to devices, APIs, databases and related software systems."],
];

const capabilities = [
  ["Data Acquisition", "Collect measurement and technical data from defined software or hardware interfaces."],
  ["Time-Based Processing", "Process and align datasets according to timestamps, sequence and synchronization requirements."],
  ["Filtering & Transformation", "Clean, transform and structure raw data for further analysis or application use."],
  ["Comparative Analysis", "Compare measurements, periods, sources or datasets through configurable software workflows."],
  ["Event & Threshold Logic", "Generate software events and actions from predefined data conditions and thresholds."],
  ["Historical Analysis", "Store and retrieve historical technical data for comparison, diagnostics and reporting."],
];

export default function DataSignalTechnologiesPage() {
  return (
    <main>
      <section className="subhero data-subhero">
        <div className="container subhero-grid">
          <div>
            <div className="eyebrow">DATA & SIGNAL TECHNOLOGIES</div>
            <h1 className="subhero-title">
              Make complex technical data
              <span> easier to understand.</span>
            </h1>
          </div>

          <div className="subhero-side">
            <p>
              RDNSoft develops specialized software for signal measurement, signal
              analysis, synchronization and technical data processing.
            </p>
            <p>
              Our solutions are designed to transform complex measurement streams into
              structured information that can be monitored, compared, analyzed and
              integrated with other systems.
            </p>
            <a className="button primary" href="/contact">Discuss Your Requirement</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-intro">
          <div>
            <div className="eyebrow">TECHNICAL DATA SOFTWARE</div>
            <h2>From raw measurements to usable information.</h2>
          </div>

          <div className="rich-copy">
            <p>
              Technical systems often generate large volumes of measurement and signal
              data that are difficult to interpret without purpose-built software.
            </p>
            <p>
              RDNSoft develops software that collects, processes, synchronizes and
              visualizes this data so operators and technical teams can work with a
              clearer, more structured view of system behavior.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">WHAT WE DEVELOP</div>
              <h2>Software for measurement, analysis and synchronization.</h2>
            </div>
            <p>
              Each solution is designed around the technical characteristics of the
              source data, the required processing logic and the systems that need to
              consume the result.
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
        <div className="container data-flow-grid">
          <div>
            <div className="eyebrow light">DATA FLOW</div>
            <h2>Designed as a complete processing pipeline.</h2>
            <p className="dark-copy">
              Signal and measurement applications are most useful when acquisition,
              processing, storage, analysis and visualization work together as one
              consistent software architecture.
            </p>
          </div>

          <div className="pipeline">
            <div><span>01</span><strong>Signal / Data Source</strong></div>
            <i>→</i>
            <div><span>02</span><strong>Acquisition</strong></div>
            <i>→</i>
            <div><span>03</span><strong>Processing</strong></div>
            <i>→</i>
            <div><span>04</span><strong>Analysis</strong></div>
            <i>→</i>
            <div><span>05</span><strong>Dashboard / API / Storage</strong></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow">DEVELOPMENT WORKFLOW</div>
              <h2>Structured around the data and the technical objective.</h2>
            </div>
          </div>

          <div className="dev-process">
            {workflow.map(([n, title, text]) => (
              <div className="dev-process-row" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section capability-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">CAPABILITIES</div>
              <h2>Flexible software for technical data workflows.</h2>
            </div>
            <p>
              The software layer can be adapted to different data sources, processing
              rules, monitoring environments and reporting requirements.
            </p>
          </div>

          <div className="capability-card-grid">
            {capabilities.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section integration-section">
        <div className="container integration-grid">
          <div>
            <div className="eyebrow">INTEGRATION</div>
            <h2>Connect technical data with the rest of your software environment.</h2>
          </div>

          <div className="integration-list">
            <div>
              <strong>Hardware Interfaces</strong>
              <span>Connect software to supported measurement devices, controllers and technical systems.</span>
            </div>
            <div>
              <strong>Databases</strong>
              <span>Store structured technical data for historical review, reporting and further processing.</span>
            </div>
            <div>
              <strong>APIs</strong>
              <span>Exchange processed measurements and events with internal or third-party applications.</span>
            </div>
            <div>
              <strong>Dashboards</strong>
              <span>Present technical information through clear operational and engineering interfaces.</span>
            </div>
            <div>
              <strong>Automation Logic</strong>
              <span>Use measurements, thresholds and events to trigger software workflows or notifications.</span>
            </div>
            <div>
              <strong>Export & Reporting</strong>
              <span>Generate structured outputs for technical review, management reporting or downstream systems.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <div className="eyebrow light">TECHNICAL SOFTWARE</div>
            <h2>Need software for signal or measurement data?</h2>
          </div>
          <div>
            <p>
              Tell us what you need to measure, synchronize, analyze or visualize. We
              can help design the software architecture and build the processing flow
              around your technical requirements.
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
        .data-flow-grid h2,
        .integration-grid h2 {
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

        .data-flow-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 90px;
          align-items: center;
        }

        .dark-copy {
          color: #aab5c5;
          line-height: 1.8;
          font-size: 17px;
          margin: 24px 0 0;
        }

        .pipeline {
          display: grid;
          grid-template-columns: 1fr auto 1fr auto 1fr;
          gap: 10px;
          align-items: center;
        }

        .pipeline > div {
          min-height: 118px;
          border: 1px solid #26354b;
          background: #0c1626;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .pipeline span {
          color: #76b8ff;
          font-size: 11px;
          font-weight: 800;
        }

        .pipeline strong {
          font-size: 14px;
          line-height: 1.4;
        }

        .pipeline i {
          color: #4f78aa;
          font-style: normal;
          font-size: 18px;
        }

        .pipeline > div:last-child {
          grid-column: 5;
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

        .capability-section {
          background: var(--bg);
        }

        .capability-card-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .capability-card-grid article {
          min-height: 205px;
          padding: 30px;
          border: 1px solid var(--line);
          background: white;
        }

        .capability-card-grid h3 {
          margin: 0 0 16px;
          font-size: 21px;
        }

        .capability-card-grid p {
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
        }

        .integration-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 100px;
        }

        .integration-list {
          border-top: 1px solid var(--line);
        }

        .integration-list > div {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 28px;
          padding: 25px 0;
          border-bottom: 1px solid var(--line);
        }

        .integration-list strong {
          font-size: 16px;
        }

        .integration-list span {
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .subhero-grid,
          .split-intro,
          .data-flow-grid,
          .integration-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .solution-grid,
          .capability-card-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .pipeline {
            grid-template-columns: 1fr;
          }

          .pipeline > div,
          .pipeline > div:last-child {
            grid-column: auto;
          }

          .pipeline i {
            text-align: center;
            transform: rotate(90deg);
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
          .capability-card-grid {
            grid-template-columns: 1fr;
          }

          .dev-process-row {
            grid-template-columns: 42px 1fr;
            padding: 22px 0;
          }

          .dev-process-row p {
            grid-column: 2;
          }

          .integration-list > div {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  );
}
