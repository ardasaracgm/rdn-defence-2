import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI & Computer Vision",
  description:
    "AI and computer vision solutions by RDNSoft, including video analytics, object detection, image processing, recognition systems and intelligent automation.",
};

const solutions = [
  {
    title: "Video Analytics",
    text: "Software that analyzes live or recorded video streams to identify relevant events, patterns and operational activity.",
  },
  {
    title: "Object Detection",
    text: "Detection and classification of people, vehicles, equipment and other defined objects within images or video.",
  },
  {
    title: "Image Processing",
    text: "Image enhancement, filtering, transformation, comparison and extraction of useful visual information.",
  },
  {
    title: "Recognition Systems",
    text: "Recognition workflows for faces, visual identities, patterns and defined objects according to project requirements.",
  },
  {
    title: "Event Detection",
    text: "Automated detection of configured situations and visual events to support alerts, monitoring and operational workflows.",
  },
  {
    title: "AI-Powered Automation",
    text: "Intelligent software modules that reduce repetitive analysis and help teams process large volumes of visual data.",
  },
];

const workflow = [
  ["01", "Define the Objective", "We identify what needs to be detected, classified, measured or recognized."],
  ["02", "Evaluate the Data", "We review available image, video and metadata sources and assess their technical quality."],
  ["03", "Design the Pipeline", "We define the processing flow, model architecture, rules and integration requirements."],
  ["04", "Develop & Train", "We develop the software components and configure or train models for the use case."],
  ["05", "Validate", "We test performance against representative scenarios and real operational conditions."],
  ["06", "Integrate & Deploy", "We connect the solution to cameras, software platforms, APIs and reporting systems."],
];

const useCases = [
  ["Operational Monitoring", "Analyze visual feeds and surface events that require human attention."],
  ["Process Observation", "Track visual stages of a workflow and identify deviations or predefined conditions."],
  ["Access & Identity Workflows", "Support identity-related processes with visual recognition technologies where appropriate."],
  ["Asset & Object Tracking", "Detect and follow configured objects across images, video or defined camera environments."],
  ["Quality Inspection", "Use visual analysis to identify predefined characteristics, defects or production conditions."],
  ["Data Enrichment", "Convert visual information into structured data that can be used by other business systems."],
];

export default function AIComputerVisionPage() {
  return (
    <main>
      <section className="subhero ai-subhero">
        <div className="container subhero-grid">
          <div>
            <div className="eyebrow">AI & COMPUTER VISION</div>
            <h1 className="subhero-title">
              Turn visual data into
              <span> useful information.</span>
            </h1>
          </div>

          <div className="subhero-side">
            <p>
              RDNSoft develops artificial intelligence and computer vision applications
              that help organizations analyze images, video and visual events more
              efficiently.
            </p>
            <p>
              Our solutions combine software engineering, visual processing and
              intelligent analysis with the systems already used in your operation.
            </p>
            <a className="button primary" href="/contact">Discuss Your Project</a>
          </div>
        </div>
      </section>

      <section className="section ai-intro">
        <div className="container split-intro">
          <div>
            <div className="eyebrow">VISUAL INTELLIGENCE</div>
            <h2>From cameras to structured data.</h2>
          </div>

          <div className="rich-copy">
            <p>
              Cameras generate large amounts of visual information, but most of that
              information is difficult to process manually at scale.
            </p>
            <p>
              Computer vision software can automatically identify relevant objects,
              events and visual patterns, then convert them into structured information
              that can be used by operators, dashboards and other software systems.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">WHAT WE DEVELOP</div>
              <h2>Intelligent visual analysis for real operations.</h2>
            </div>
            <p>
              Each solution is designed around the required camera environment,
              processing workflow, integration model and operational objective.
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
        <div className="container ai-architecture">
          <div className="architecture-copy">
            <div className="eyebrow light">SYSTEM ARCHITECTURE</div>
            <h2>Designed to integrate with your environment.</h2>
            <p>
              AI applications rarely operate alone. They usually need to work with
              cameras, video streams, databases, APIs, dashboards and existing business
              platforms.
            </p>
            <p>
              RDNSoft designs the complete software flow so visual intelligence can
              become part of a larger operational system.
            </p>
          </div>

          <div className="architecture-flow">
            <div><span>01</span><strong>Camera / Video Source</strong></div>
            <i>↓</i>
            <div><span>02</span><strong>Visual Processing</strong></div>
            <i>↓</i>
            <div><span>03</span><strong>AI Analysis</strong></div>
            <i>↓</i>
            <div><span>04</span><strong>Rules & Events</strong></div>
            <i>↓</i>
            <div><span>05</span><strong>API / Dashboard / Platform</strong></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow">DEVELOPMENT WORKFLOW</div>
              <h2>From use case to deployed intelligence.</h2>
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

      <section className="section usecase-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">USE CASES</div>
              <h2>Where computer vision can create value.</h2>
            </div>
            <p>
              The same core technologies can support very different operational needs
              depending on the data source, environment and integration requirements.
            </p>
          </div>

          <div className="usecase-grid">
            {useCases.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section technical-section">
        <div className="container technical-grid">
          <div>
            <div className="eyebrow">TECHNICAL CAPABILITIES</div>
            <h2>Built for modern visual data pipelines.</h2>
          </div>

          <div className="technical-list">
            <div>
              <strong>Live Video Processing</strong>
              <span>Analysis of live video feeds based on project performance requirements.</span>
            </div>
            <div>
              <strong>Recorded Video Analysis</strong>
              <span>Processing and analysis of stored video content for defined visual events.</span>
            </div>
            <div>
              <strong>Image Classification</strong>
              <span>Classification of visual inputs according to configured categories and models.</span>
            </div>
            <div>
              <strong>Detection & Tracking</strong>
              <span>Detection and tracking of defined objects across frames and camera environments.</span>
            </div>
            <div>
              <strong>Event Generation</strong>
              <span>Conversion of visual conditions into structured events, notifications and software actions.</span>
            </div>
            <div>
              <strong>API Integration</strong>
              <span>Exchange of AI-generated data with dashboards, databases and third-party platforms.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <div className="eyebrow light">BUILD WITH AI</div>
            <h2>Have an image or video analysis requirement?</h2>
          </div>
          <div>
            <p>
              Tell us what you want to detect, analyze or automate. We can help define
              the right software architecture and integration approach for your use case.
            </p>
            <a className="button white" href="/contact">Talk to RDNSoft</a>
          </div>
        </div>
      </section>

      <style>{`
        .subhero {
          padding: 130px 0 100px;
          background:
            radial-gradient(circle at 88% 22%, rgba(18,103,243,.12), transparent 28%),
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
        .architecture-copy h2,
        .technical-grid h2 {
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

        .ai-architecture {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 100px;
          align-items: center;
        }

        .architecture-copy p {
          color: #aab5c5;
          line-height: 1.8;
          font-size: 17px;
          margin: 24px 0 0;
        }

        .architecture-flow {
          border: 1px solid #223047;
          background: #0c1626;
          padding: 28px;
        }

        .architecture-flow > div {
          min-height: 72px;
          border: 1px solid #26354b;
          padding: 0 20px;
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .architecture-flow span {
          color: #76b8ff;
          font-size: 11px;
          font-weight: 800;
        }

        .architecture-flow strong {
          font-size: 15px;
        }

        .architecture-flow i {
          display: block;
          text-align: center;
          color: #4f78aa;
          font-style: normal;
          padding: 7px 0;
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

        .usecase-section {
          background: var(--bg);
        }

        .usecase-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .usecase-grid article {
          min-height: 205px;
          padding: 30px;
          border: 1px solid var(--line);
          background: white;
        }

        .usecase-grid h3 {
          margin: 0 0 16px;
          font-size: 21px;
        }

        .usecase-grid p {
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
        }

        .technical-section {
          background: #ffffff;
        }

        .technical-grid {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 100px;
        }

        .technical-list {
          border-top: 1px solid var(--line);
        }

        .technical-list > div {
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          gap: 28px;
          padding: 25px 0;
          border-bottom: 1px solid var(--line);
        }

        .technical-list strong {
          font-size: 16px;
        }

        .technical-list span {
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .subhero-grid,
          .split-intro,
          .ai-architecture,
          .technical-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .solution-grid,
          .usecase-grid {
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
          .usecase-grid {
            grid-template-columns: 1fr;
          }

          .dev-process-row {
            grid-template-columns: 42px 1fr;
            padding: 22px 0;
          }

          .dev-process-row p {
            grid-column: 2;
          }

          .technical-list > div {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  );
}
