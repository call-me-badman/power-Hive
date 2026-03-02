import { Link } from "react-router-dom";
import "./styles/home.css";

const LandingPage = () => {
  return (
    <div className="lp">

      {/* ── MAIN CONTENT ── */}
      <main className="lp-main">

        {/* ── HERO ── */}
        <section className="lp-hero">
          <div className="lp-hero-inner">
            <span className="lp-badge">⚡ PowerHive</span>
            <h1 className="lp-hero-title">
              Smart Electricity <br />
              <span className="lp-accent">Monitoring & Control</span>
            </h1>
            <p className="lp-hero-sub">
              Monitor, control, and optimize electricity usage in real-time.
              Built for institutions, companies, and smart cities.
            </p>
            <div className="lp-hero-actions">
              <Link to="/login" className="lp-btn lp-btn-primary">Get Started</Link>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="lp-features">
          <div className="lp-container">
            <p className="lp-section-label">WHY POWERHIVE</p>
            <h2 className="lp-section-title">Everything you need to manage your grid</h2>
            <div className="lp-feature-grid">
              {[
                { icon: "⚡", title: "Real-Time Monitoring", desc: "Track voltage, current, and power factor across all meters instantly." },
                { icon: "🎛️", title: "Remote Control", desc: "Toggle circuits and set load limits from anywhere, no site visit needed." },
                { icon: "🔔", title: "Smart Alerts", desc: "Get notified by SMS or email the moment anomalies are detected." },
                { icon: "📊", title: "Usage Analytics", desc: "Understand consumption trends and identify waste across zones." },
              ].map((f) => (
                <div className="lp-feature-card" key={f.title}>
                  <div className="lp-feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── HOW IT WORKS ── */}
        <section className="lp-how">
          <div className="lp-container">
            <p className="lp-section-label">HOW IT WORKS</p>
            <h2 className="lp-section-title">Up and running in three steps</h2>
            <div className="lp-steps">
              {[
                { n: "1", title: "Connect Your Meters", desc: "Install our gateway or integrate via Modbus, MQTT, or REST API." },
                { n: "2", title: "Configure Your Dashboard", desc: "Map meters to zones, set alert thresholds, and invite your team." },
                { n: "3", title: "Monitor & Act", desc: "View live data, receive alerts, and control loads remotely." },
              ].map((s) => (
                <div className="lp-step" key={s.n}>
                  <div className="lp-step-num">{s.n}</div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* ── FOOTER ── */}
        <footer className="lp-footer">
          <span className="lp-footer-logo">⚡ PowerHive</span>
          <span>© 2025 PowerHive. All rights reserved.</span>
        </footer>
      </main>
    </div>
  );
};
export default LandingPage;