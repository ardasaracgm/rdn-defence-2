export default function NotFound() {
  return (
    <main className="section">
      <div className="container" style={{ paddingTop: "80px", paddingBottom: "120px" }}>
        <div className="eyebrow">404</div>
        <h1 style={{ fontSize: "clamp(48px, 7vw, 88px)", marginBottom: "24px" }}>
          Page not found.
        </h1>
        <p style={{ color: "var(--muted)", fontSize: "18px", lineHeight: 1.8, maxWidth: "680px" }}>
          The page you are looking for does not exist or may have been moved.
        </p>
        <a className="button primary" href="/" style={{ marginTop: "28px" }}>
          Return Home
        </a>
      </div>
    </main>
  );
}
