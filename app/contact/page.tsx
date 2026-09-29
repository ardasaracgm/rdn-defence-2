import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact RDNSoft for custom software development, AI, data technologies, system integration and technology consulting projects.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="subhero">
        <div className="container subhero-grid">
          <div>
            <div className="eyebrow">CONTACT RDNSOFT</div>
            <h1 className="subhero-title">
              Let&apos;s discuss
              <span> your next project.</span>
            </h1>
          </div>

          <div className="subhero-side">
            <p>
              Tell us what you are trying to build, improve or integrate. We can help
              define the right technical approach and turn the requirement into a
              practical software solution.
            </p>
            <p>
              You can contact us directly by phone or email, or use the project inquiry
              form below.
            </p>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="eyebrow">CONTACT INFORMATION</div>
            <h2>RDNSoft</h2>

            <div className="info-list">
              <div>
                <strong>Company</strong>
                <span>
                  RDN Danışmanlık Yazılım Turizm Gıda Sanayi ve Dış Ticaret Limited
                  Şirketi
                </span>
              </div>

              <div>
                <strong>Address</strong>
                <span>
                  Kızılırmak Mah.<br />
                  Dumlupınar Bulvarı No:9A<br />
                  YDA Center D:158<br />
                  Çankaya / Ankara, Türkiye
                </span>
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

          <div className="contact-form-wrap">
            <div className="eyebrow">PROJECT INQUIRY</div>
            <h2>Tell us about your requirement.</h2>
            <p className="form-intro">
              Share a short overview of your project and we will get back to you with
              the next steps.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container contact-cards">
          <article>
            <span>01</span>
            <h3>Software Projects</h3>
            <p>
              Custom applications, internal platforms, enterprise systems and business
              automation.
            </p>
            <a href="/software-development">Software Development →</a>
          </article>

          <article>
            <span>02</span>
            <h3>AI & Visual Analysis</h3>
            <p>
              Video analytics, computer vision, detection, recognition and intelligent
              automation.
            </p>
            <a href="/ai-computer-vision">AI & Computer Vision →</a>
          </article>

          <article>
            <span>03</span>
            <h3>Technical Systems</h3>
            <p>
              Signal processing, data analysis, software integration and technical
              architecture.
            </p>
            <a href="/data-signal-technologies">Data & Signal Technologies →</a>
          </article>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container next-step-grid">
          <div>
            <div className="eyebrow light">WHAT HAPPENS NEXT</div>
            <h2>A simple start to a technical conversation.</h2>
          </div>

          <div className="next-step-list">
            <div>
              <span>01</span>
              <strong>Share the Requirement</strong>
              <p>Tell us the objective, current system and the problem you want to solve.</p>
            </div>
            <div>
              <span>02</span>
              <strong>Technical Review</strong>
              <p>We evaluate the software, data, integration and architecture requirements.</p>
            </div>
            <div>
              <span>03</span>
              <strong>Define the Approach</strong>
              <p>We outline a practical technical direction and the next steps for the project.</p>
            </div>
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
          max-width: 860px;
          font-size: clamp(54px, 6vw, 88px);
        }

        .subhero-title span {
          color: var(--blue);
        }

        .subhero-side p {
          margin: 0 0 18px;
          color: var(--muted);
          line-height: 1.8;
          font-size: 17px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 100px;
          align-items: start;
        }

        .contact-info h2,
        .contact-form-wrap h2,
        .next-step-grid h2 {
          margin: 0;
          font-size: clamp(38px, 4vw, 60px);
          line-height: 1.06;
          letter-spacing: -.045em;
        }

        .info-list {
          margin-top: 44px;
          border-top: 1px solid var(--line);
        }

        .info-list > div {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 24px;
          padding: 22px 0;
          border-bottom: 1px solid var(--line);
        }

        .info-list strong {
          font-size: 13px;
        }

        .info-list span,
        .info-list a {
          color: var(--muted);
          line-height: 1.65;
          font-size: 14px;
        }

        .info-list a:hover {
          color: var(--blue);
        }

        .contact-form-wrap {
          border: 1px solid var(--line);
          background: #fff;
          padding: 34px;
          box-shadow: 0 24px 70px rgba(17,35,67,.07);
        }

        .form-intro {
          margin: 20px 0 30px;
          color: var(--muted);
          line-height: 1.75;
        }

        .contact-form {
          display: grid;
          gap: 18px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .contact-form label {
          display: grid;
          gap: 8px;
        }

        .contact-form label > span {
          font-size: 12px;
          font-weight: 750;
          color: #344054;
        }

        .contact-form input,
        .contact-form select,
        .contact-form textarea {
          width: 100%;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #fff;
          color: var(--text);
          font: inherit;
          padding: 14px 15px;
          outline: none;
          transition: border-color .2s ease, box-shadow .2s ease;
        }

        .contact-form input,
        .contact-form select {
          min-height: 50px;
        }

        .contact-form textarea {
          resize: vertical;
        }

        .contact-form input:focus,
        .contact-form select:focus,
        .contact-form textarea:focus {
          border-color: var(--blue);
          box-shadow: 0 0 0 3px rgba(18,103,243,.08);
        }

        .form-note {
          margin: 4px 0 0;
          padding: 14px 16px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #f7f9fc;
          color: #344054;
          font-size: 14px;
          line-height: 1.7;
        }

        .form-note a {
          color: var(--blue);
          font-weight: 700;
        }

        .copy-link {
          border: 0;
          background: none;
          padding: 0;
          margin-left: 6px;
          color: var(--muted);
          font: inherit;
          font-size: 13px;
          text-decoration: underline;
          cursor: pointer;
        }

        .submit-button {
          border: 0;
          cursor: pointer;
          width: fit-content;
          margin-top: 4px;
        }

        .contact-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .contact-cards article {
          min-height: 235px;
          padding: 28px;
          background: white;
          border: 1px solid var(--line);
        }

        .contact-cards article > span {
          color: var(--blue);
          font-size: 12px;
          font-weight: 800;
        }

        .contact-cards h3 {
          margin: 52px 0 14px;
          font-size: 21px;
        }

        .contact-cards p {
          margin: 0 0 20px;
          color: var(--muted);
          line-height: 1.7;
          font-size: 14px;
        }

        .contact-cards a {
          color: var(--blue);
          font-size: 13px;
          font-weight: 750;
        }

        .next-step-grid {
          display: grid;
          grid-template-columns: .85fr 1.15fr;
          gap: 90px;
        }

        .next-step-list {
          border-top: 1px solid #26354b;
        }

        .next-step-list > div {
          display: grid;
          grid-template-columns: 50px .8fr 1.2fr;
          gap: 22px;
          align-items: start;
          padding: 24px 0;
          border-bottom: 1px solid #26354b;
        }

        .next-step-list span {
          color: #76b8ff;
          font-size: 11px;
          font-weight: 800;
        }

        .next-step-list strong {
          font-size: 16px;
        }

        .next-step-list p {
          margin: 0;
          color: #9eabbd;
          line-height: 1.65;
          font-size: 14px;
        }

        @media (max-width: 980px) {
          .subhero-grid,
          .contact-grid,
          .next-step-grid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .contact-cards {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 680px) {
          .subhero {
            padding: 82px 0 70px;
          }

          .subhero-title {
            font-size: clamp(46px, 14vw, 64px);
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .contact-form-wrap {
            padding: 24px;
          }

          .info-list > div {
            grid-template-columns: 1fr;
            gap: 8px;
          }

          .next-step-list > div {
            grid-template-columns: 38px 1fr;
          }

          .next-step-list p {
            grid-column: 2;
          }
        }
      `}</style>
    </main>
  );
}
