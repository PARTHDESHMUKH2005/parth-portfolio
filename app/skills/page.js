import Reveal from "../components/Reveal";

export default function Skills() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <div className="eyebrow">Stack &amp; Credentials</div>
          <h1>
            What&apos;s under
            <br />
            <em>the hood.</em>
          </h1>
          <p>
            Modeling, infrastructure, and the languages that connect the two — plus the formal
            credentials behind them.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="section-num">Stack</span>
                <h2>Tools of the trade.</h2>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="skill-grid">
              <div className="skill-cell">
                <div className="cat">ML / AI &amp; LLMs</div>
                <div className="items">
                  Scikit-learn, TensorFlow, XGBoost, GradientBoosting, SHAP, LangChain, LangGraph,
                  HuggingFace, RAG, LLaMA 3.3, FinBERT, LiteLLM
                </div>
              </div>
              <div className="skill-cell">
                <div className="cat">Quantitative Methods</div>
                <div className="items">
                  Monte Carlo Simulation, VaR &amp; CVaR, Statistical Inference, Probability
                  Theory, Time-Series Forecasting
                </div>
              </div>
              <div className="skill-cell">
                <div className="cat">Data &amp; Analytics</div>
                <div className="items">
                  Python (Pandas, NumPy, Matplotlib, Seaborn), SQL, Statistical Analysis, EDA,
                  PostHog
                </div>
              </div>
              <div className="skill-cell">
                <div className="cat">Databases &amp; APIs</div>
                <div className="items">MySQL, ChromaDB, FastAPI, Flask, REST APIs</div>
              </div>
              <div className="skill-cell">
                <div className="cat">Cloud &amp; DevOps</div>
                <div className="items">
                  AWS (EC2, S3, Lambda), Docker, Linux, Git, GitHub Actions, Supabase, n8n
                </div>
              </div>
              <div className="skill-cell">
                <div className="cat">Languages</div>
                <div className="items">Python, SQL, JavaScript, TypeScript, C++, GoLang</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div>
                <span className="section-num">Credentials</span>
                <h2>Education &amp; certifications.</h2>
              </div>
              <div className="section-meta">
                Thapar Institute of Engineering &amp; Technology
                <br />
                B.E. Computer Engineering · 2024 – 2028
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="cred-grid">
              <div className="cred">
                <div className="y">FEB 2026</div>
                <div className="t">AI for Sustainability Hackathon — Finalist</div>
                <div className="s">Canadian University Dubai</div>
              </div>
              <div className="cred">
                <div className="y">DEC 2025</div>
                <div className="t">McKinsey Forward</div>
                <div className="s">Problem-Solving &amp; Leadership Program</div>
              </div>
              <div className="cred">
                <div className="y">AUG 2025</div>
                <div className="t">Generative AI with LLMs</div>
                <div className="s">DeepLearning.AI / Coursera</div>
              </div>
              <div className="cred">
                <div className="y">2025</div>
                <div className="t">Investment Banking Job Simulation</div>
                <div className="s">Forage</div>
              </div>
              <div className="cred">
                <div className="y">2025</div>
                <div className="t">SEBI Investor Awareness Test</div>
                <div className="s">Securities &amp; Exchange Board of India</div>
              </div>
              <div className="cred">
                <div className="y">2024 — 2028</div>
                <div className="t">B.E. Computer Engineering, CGPA 8.20</div>
                <div className="s">Thapar Institute of Engineering &amp; Technology</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
