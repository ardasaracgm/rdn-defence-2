const services = [
  {
    number: "01",
    title: "Custom Software Development",
    text: "Web applications, enterprise platforms and digital tools designed around your workflows, operational requirements and long-term objectives.",
    href: "/software-development",
  },
  {
    number: "02",
    title: "AI & Computer Vision",
    text: "Intelligent applications for video analytics, object detection, image processing, recognition and AI-powered automation.",
    href: "/ai-computer-vision",
  },
  {
    number: "03",
    title: "Data & Signal Technologies",
    text: "Specialized software for signal measurement, analysis, synchronization, technical monitoring and complex data processing.",
    href: "/data-signal-technologies",
  },
  {
    number: "04",
    title: "System Integration",
    text: "Reliable connections between software, hardware, APIs, databases, devices and third-party platforms.",
    href: "/system-integration",
  },
  {
    number: "05",
    title: "Technology Consulting",
    text: "Technical guidance from requirements and architecture through development, integration, deployment and optimization.",
    href: "/technology-consulting",
  },
];

const capabilities = [
  "Web Applications",
  "Enterprise Software",
  "Artificial Intelligence",
  "Computer Vision",
  "Data Analytics",
  "Signal Processing",
  "API Development",
  "Automation",
];

const industries = [
  ["Manufacturing", "Production monitoring, workflow management, reporting and industrial software."],
  ["Technology", "Custom applications, platforms, integrations and specialized software development."],
  ["Logistics", "Tracking, operational management, data integration and process automation."],
  ["Travel & Tourism", "Reservation systems, operational platforms and digital service solutions."],
  ["Security Technologies", "Software platforms, video analytics, data processing and system integration."],
  ["Professional Services", "Custom business applications, reporting platforms and workflow automation."],
];

export default function HomePage() {
  return (
    <main>
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">SOFTWARE · AI · INTEGRATION · CONSULTING</div>
            <h1>
              Custom Software.
              <br />
              Intelligent Systems.
              <br />
              <span>Practical Solutions.</span>
            </h1>
            <p className="hero-lead">
              RDNSoft develops tailored software solutions, intelligent applications and
              technology systems designed around real business needs.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#services">Explore Our Services</a>
              <a className="button secondary" href="/contact">Talk to Us</a>
            </div>
          </div>

          <div className="hero-panel" aria-hidden="true">
            <div className="grid-mark" />
            <div className="code-card">
              <div className="code-top">
                <span />
                <span />
                <span />
              </div>
              <div className="code-line w90" />
              <div className="code-line w70" />
              <div className="code-line w82" />
              <div className="code-line w55" />
              <div className="metric-row">
                <div><strong>AI</strong><small>Intelligence</small></div>
                <div><strong>API</strong><small>Integration</small></div>
                <div><strong>DATA</strong><small>Analytics</small></div>
              </div>
            </div>
            <div className="signal-card">
              {[44, 72, 36, 83, 55, 91, 64, 77, 48, 88, 59, 73].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">WHAT WE DO</div>
              <h2>Technology built around your requirements.</h2>
            </div>
            <p>
              We combine software engineering, artificial intelligence and technical
              consulting to solve complex operational and business challenges.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <a className="service-row" href={service.href} key={service.title}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container split">
          <div>
            <div className="eyebrow light">OUR APPROACH</div>
            <h2>Built around the way your organization works.</h2>
          </div>
          <div className="approach-copy">
            <p>
              Off-the-shelf software does not always match real operational needs.
              RDNSoft focuses on understanding your processes first, then designing the
              technology around them.
            </p>
            <div className="approach-grid">
              <div><strong>Tailored Architecture</strong><span>Designed for your technical, operational and security requirements.</span></div>
              <div><strong>Scalable Development</strong><span>Built to evolve as your organization, users and data grow.</span></div>
              <div><strong>Integration Focused</strong><span>Connect applications, databases, devices and external platforms.</span></div>
              <div><strong>Long-Term Support</strong><span>Maintenance, optimization and continued technical development.</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading compact">
            <div>
              <div className="eyebrow">PROCESS</div>
              <h2>From idea to deployment.</h2>
            </div>
          </div>

          <div className="process-grid">
            {[
              ["01", "Analysis", "We define objectives, technical requirements and existing infrastructure."],
              ["02", "Architecture", "We establish the software architecture, data structure and integration model."],
              ["03", "Development", "We build reliable, usable and maintainable software."],
              ["04", "Testing & Integration", "We test the solution and connect relevant systems, APIs and data sources."],
              ["05", "Deployment & Support", "We deploy, optimize and support the solution as requirements evolve."],
            ].map(([n, t, d]) => (
              <div className="process-card" key={n}>
                <span>{n}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">CAPABILITIES</div>
              <h2>One technology partner. Multiple capabilities.</h2>
            </div>
            <p>
              Modern applications need to communicate with databases, APIs, cloud
              services, sensors, cameras, devices and existing enterprise systems.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => <div key={item}>{item}</div>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div>
              <div className="eyebrow">INDUSTRIES</div>
              <h2>Software for real-world operations.</h2>
            </div>
            <p>
              Our solutions can be adapted to organizations operating across different
              industries and technical environments.
            </p>
          </div>

          <div className="industry-grid">
            {industries.map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-grid">
          <div>
            <div className="eyebrow light">START A PROJECT</div>
            <h2>Technology that works for your business.</h2>
          </div>
          <div>
            <p>
              Whether you need a new software platform, an intelligent application,
              integration with existing systems or technical consulting, talk to us
              about your objectives and technical needs.
            </p>
            <a className="button white" href="/contact">Start a Project</a>
          </div>
        </div>
      </section>
    </main>
  );
}
