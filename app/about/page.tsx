import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about RDNSoft, a software development and technology consulting company focused on custom software, AI, data technologies and system integration.",
};

const values = [
  {
    title: "Clarity",
    text: "We aim to make complex technical requirements easier to understand, structure and implement.",
  },
  {
    title: "Practicality",
    text: "We focus on solutions that are useful in real operations, not technology for its own sake.",
  },
  {
    title: "Flexibility",
    text: "We adapt architecture, workflows and delivery models to the needs of each project.",
  },
  {
    title: "Long-Term Thinking",
    text: "We design systems with maintainability, integration and future growth in mind.",
  },
];

const capabilities = [
  ["Custom Software Development", "Web applications, enterprise platforms, internal tools and business software."],
  ["AI & Computer Vision", "Video analytics, image processing, object detection and intelligent automation."],
  ["Data & Signal Technologies", "Signal measurement, analysis, synchronization and technical data processing software."],
  ["System Integration", "Connections between software, hardware, APIs, databases and external systems."],
  ["Technology Consulting", "Architecture, technical planning, requirements definition and implementation support."],
];

export default function AboutPage() {
  return (
    <main>
      <section className="subhero">
        <div className="container subhero-grid">
          <div>
            <div className="eyebrow">ABOUT RDNSOFT</div>
            <h1 className="subhero-title">
              Software, systems and consulting
              <span> built around real needs.</span>
            </h1>
          </div>

          <div className="subhero-side">
            <p>
              RDNSoft is a technology company focused on custom software development,
              artificial intelligence, data technologies, system integration and
              technical consulting.
            </p>
            <p>
              We work on projects where standard software is not enough and where
              technical requirements need to be translated into practical, reliable
              digital solutions.
            </p>
            <a className="button primary" href="/contact">Talk to RDNSoft</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-intro">
          <div>
            <div className="eyebrow">WHO WE ARE</div>
            <h2>A technology partner for complex software requirements.</h2>
          </div>

          <div className="rich-copy">
            <p>
              RDNSoft develops software solutions for organizations that need more than
              a standard application or off-the-shelf product.
            </p>
            <p>
              Our work combines software engineering, system architecture, data
              processing and technical consulting to create solutions that fit real
              operational environments.
            </p>
            <p>
              We approach each project by first understanding the business and
              technical context, then designing the software and integration model
              around that reality.
            </p>
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">OUR CAPABILITIES</div>
              <h2>One team across software, data and integration.</h2>
            </div>
            <p>
              Our capabilities are designed to work together, making it easier to build
              complete solutions instead of isolated software components.
            </p>
          </div>

          <div className="capability-list">
            {capabilities.map(([title, text], index) => (
              <div className="capability-row" key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container mission-grid">
          <div>
            <div className="eyebrow light">OUR APPROACH</div>
            <h2>Understand first. Build second.</h2>
          </div>

          <div className="mission-copy">
            <p>
              Technology projects work better when architecture follows the real
              requirement. We start by understanding processes, systems, users and
              constraints before deciding how the solution should be built.
            </p>

            <div className="mission-points">
              <div>
                <strong>Business Context</strong>
                <span>We understand the operational objective before discussing technology choices.</span>
              </div>
              <div>
                <strong>Technical Structure</strong>
                <span>We define a clear architecture for software, data and integrations.</span>
              </div>
              <div>
                <strong>Implementation Focus</strong>
                <span>We prioritize practical delivery and maintainable software over unnecessary complexity.</span>
              </div>
              <div>
                <strong>Continuous Improvement</strong>
                <span>We support solutions as requirements, users and technical environments evolve.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">OUR VALUES</div>
              <h2>How we approach technology projects.</h2>
            </div>
            <p>
              Our working principles are simple: reduce ambiguity, solve the real
              problem and build systems that remain useful over time.
            </p>
          </div>

          <div className="value-grid">
            {values.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section company-section">
        <div className="container company-grid">
          <div>
            <div className="eyebrow">COMPANY INFORMATION</div>
            <h2>RDNSoft</h2>
          </div>

          <div className="company-info">
            <div>
              <strong>Legal Name</strong>
              <span>RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited Şirketi</span>
            </div>
            <div>
              <strong>Head Office</strong>
              <span>Kızılırmak Mah. Dumlupınar Bulvarı No:9A, YDA Center D:158, Çankaya / Ankara, Türkiye</span>
            </div>
            <div>
              <strong>Phone</strong>
              <a href="tel:+905364461135">+90 536 446 11 35</a>
            </div>
            <div>
              <strong>Email</strong>
              <a href="mailto:info@rdnsoft.com">info@rdnsoft.com</a>
            </div>
            <div>
              <strong>Website</strong>
              <a href="https://www.rdnsoft.com">www.rdnsoft.com</a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <div className="eyebrow light">WORK WITH RDNSOFT</div>
            <h2>Have a software or technology requirement?</h2>
          </div>
          <div>
            <p>
              Tell us what you are trying to build, improve or connect. We can help
              define the right technical approach and turn the requirement into a
              working solution.
            </p>
            <a className="button white" href="/contact">Contact RDNSoft</a>
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
          max-width: 900px;
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
        .mission-grid h2,
        .company-grid h2 {
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

        .capability-list {
          border-top: 1px solid var(--line);
        }

        .capability-row {
          display: grid;
          grid-template-columns: 90px .85fr 1.15fr;
          gap: 28px;
          align-items: center;
          min-height: 132px;
          border-bottom: 1px solid var(--line);
        }

        .capability-row > span {
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
        }

        .capability-row h3 {
          margin: 0;
          font-size: 22px;
          letter-spacing: -.025em;
        }

        .capability-row p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
        }

        .mission-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 90px;
        }

        .mission-copy > p {
          margin: 0;
          color: #aab5c5;
          line-height: 1.8;
          font-size: 17px;
        }

        .mission-points {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          margin-top: 42px;
          border: 1px solid #223047;
          background: #223047;
        }

        .mission-points > div {
          background: var(--dark);
          padding: 26px;
          min-height: 160px;
        }

        .mission-points strong {
          display: block;
          font-size: 18px;
          margin-bottom: 12px;
        }

        .mission-points span {
          display: block;
          color: #9eabbd;
          line-height: 1.65;
          font-size: 14px;
        }

        .value-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--line);
          border-left: 1px solid var(--line);
        }

        .value-grid article {
          min-height: 250px;
          padding: 28px;
          border-right: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .value-grid article > span {
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
        }

        .value-grid h3 {
          margin: 68px 0 14px;
          font-size: 21px;
        }

        .value-grid p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 14px;
        }

        .company-section {
          background: var(--bg);
        }

        .company-grid {
          display: grid;
          grid-template-columns: .8fr 1.2fr;
          gap: 100px;
        }

        .company-info {
          border-top: 1px solid var(--line);
        }

        .company-info > div {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 28px;
          padding: 24px 0;
          border-bottom: 1px solid var(--line);
        }

        .company-info strong {
          font-size: 14px;
        }

        .company-info span,
        .company-info a {
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        .company-info a:hover {
          color: var(--blue);
        }

        @media (max-width: 980px) {
          .subhero-grid,
          .split-intro,
          .mission-grid,
          .company-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .value-grid {
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

          .capability-row {
            grid-template-columns: 42px 1fr;
            padding: 22px 0;
          }

          .capability-row p {
            grid-column: 2;
          }

          .mission-points,
          .value-grid {
            grid-template-columns: 1fr;
          }

          .company-info > div {
            grid-template-columns: 1fr;
            gap: 8px;
          }
        }
      `}</style>
    </main>
  );
}
