import Link from "next/link";
import Reveal from "./components/Reveal";

export default function Home() {
  return (
    <>
      <header className="hero" id="top">
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">AI/ML Engineer — Risk &amp; Quantitative Systems</div>
            <h1>
              Parth Deshmukh
              <br />
              <em>
                builds the models
                <br />
                that price the risk.
              </em>
            </h1>
            <p className="hero-sub">
              I build the systems that sit between raw data and a decision:{" "}
              <strong>
                credit models, portfolio risk engines, and the LLM infrastructure to run them in
                production.
              </strong>{" "}
              Currently shipping multi-LLM orchestration at an early-stage AI startup, and building
              the kind of risk &amp; credit tooling I&apos;d want to see inside a markets or risk
              function at a bank.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/projects">
                View the models
              </Link>
              <a className="btn btn-ghost" href="/Parth_Deshmukh_Resume.pdf" target="_blank" rel="noopener">
                Download résumé (PDF)
              </a>
            </div>
          </div>

          <div className="summary-card">
            <div className="head">
              <span className="label">Position Summary</span>
              <span className="val">ACTIVE</span>
            </div>
            <div className="summary-row">
              <span className="k">Role</span>
              <span className="v">AI/ML Engineer · Iris</span>
            </div>
            <div className="summary-row">
              <span className="k">Focus</span>
              <span className="v">LLM Orchestration, Risk Models</span>
            </div>
            <div className="summary-row">
              <span className="k">Education</span>
              <span className="v">B.E. CE, Thapar IET &apos;28</span>
            </div>
            <div className="summary-row">
              <span className="k">GPA</span>
              <span className="v gold">8.20 / 10.00</span>
            </div>
            <div className="summary-row">
              <span className="k">Core models</span>
              <span className="v">3 deployed</span>
            </div>
            <div className="summary-row">
              <span className="k">Target functions</span>
              <span className="v">Risk · Credit · Quant Eng</span>
            </div>
            <div className="summary-row">
              <span className="k">Location</span>
              <span className="v green">Bengaluru, IN</span>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="section-num">Why this page exists</span>
                <h2>One thesis, three proofs.</h2>
              </div>
              <div className="section-meta">
                Markets need pricing. Lenders need
                <br />
                scoring. Operators need forecasting.
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="cred-grid">
              <Link href="/experience" className="cred" style={{ cursor: "pointer" }}>
                <div className="y">01 — IN PRODUCTION</div>
                <div className="t">Experience at Iris</div>
                <div className="s">
                  Multi-LLM orchestration, agentic onboarding, and a billing-pipeline fix — live,
                  not simulated.
                </div>
              </Link>
              <Link href="/projects" className="cred" style={{ cursor: "pointer" }}>
                <div className="y">02 — THE MODELS</div>
                <div className="t">LiveRisk, CreditIQ, SolarSense</div>
                <div className="s">
                  Monte Carlo risk engines, a credit classifier at 0.825 AUC-ROC, and predictive
                  maintenance.
                </div>
              </Link>
              <Link href="/skills" className="cred" style={{ cursor: "pointer" }}>
                <div className="y">03 — THE STACK</div>
                <div className="t">Tools &amp; Credentials</div>
                <div className="s">
                  From Monte Carlo simulation to AWS deployment — plus McKinsey Forward and SEBI
                  certifications.
                </div>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
