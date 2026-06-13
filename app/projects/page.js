import Reveal from "../components/Reveal";

export default function Projects() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <div className="eyebrow">Models</div>
          <h1>
            Three systems,
            <br />
            <em>one thesis.</em>
          </h1>
          <p>
            Markets need pricing. Lenders need scoring. Operators need forecasting. Built all
            three — each one shipped, not just notebooked.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <div className="sheets">
            {/* LIVERISK */}
            <Reveal>
              <article className="sheet">
                <div className="sheet-head">
                  <div>
                    <span className="sheet-id">FILE 01 / DEC 2025 – JAN 2026</span>
                    <div className="sheet-title">LiveRisk — Portfolio Risk Intelligence</div>
                  </div>
                  <span className="sheet-tag">Market Risk</span>
                </div>
                <div className="sheet-body">
                  <div className="sheet-desc">
                    <ul>
                      <li>
                        Engineered a <b>Monte Carlo risk engine</b> simulating 10,000 correlated
                        geometric Brownian motion paths via Cholesky decomposition, computing 95%
                        VaR and CVaR with FinBERT sentiment-adjusted multipliers across 12 years of
                        market data.
                      </li>
                      <li>
                        Shipped as a full-stack platform (FastAPI + Next.js) with five historical
                        stress-test scenarios — 2008 crash, COVID, rate shock, dot-com, and the WSB
                        short-squeeze — plus a 60-day LSTM portfolio forecast.
                      </li>
                      <li>
                        Built to answer the question every risk desk asks:{" "}
                        <b>&quot;what happens to this book if the world breaks again?&quot;</b>
                      </li>
                    </ul>
                  </div>
                  <div className="sheet-stats">
                    <div className="stat">
                      <div className="num">10,000</div>
                      <div className="lbl">Simulated GBM Paths</div>
                    </div>
                    <div className="stat">
                      <div className="num gold">5</div>
                      <div className="lbl">Historical Stress Scenarios</div>
                    </div>
                    <div className="stat">
                      <div className="num">60-day</div>
                      <div className="lbl">LSTM Forecast Horizon</div>
                    </div>
                  </div>
                </div>
                <div className="sheet-stack">
                  <span className="pill">Python</span>
                  <span className="pill">FastAPI</span>
                  <span className="pill">Next.js</span>
                  <span className="pill">FinBERT</span>
                  <span className="pill">LSTM</span>
                  <span className="pill">Monte Carlo / Cholesky</span>
                  <span className="pill">VaR / CVaR</span>
                </div>
              </article>
            </Reveal>

            {/* CREDITIQ */}
            <Reveal>
              <article className="sheet">
                <div className="sheet-head">
                  <div>
                    <span className="sheet-id">FILE 02 / JAN – MAR 2026</span>
                    <div className="sheet-title">CreditIQ — AI Financial Intelligence Platform</div>
                  </div>
                  <span className="sheet-tag">Credit Risk</span>
                </div>
                <div className="sheet-body">
                  <div className="sheet-desc">
                    <ul>
                      <li>
                        Built a <b>5-layer deep neural network</b> credit classifier trained on
                        10,000 records across 14 features, reaching 82.5% AUC-ROC, with SHAP
                        explainability layered in for ECOA regulatory compliance and model
                        interpretability.
                      </li>
                      <li>
                        Engineered a FinBERT NLP sentiment pipeline scoring live financial news at
                        87% accuracy, with a ChromaDB vector store and RAG layer for real-time
                        market intelligence retrieval and report generation.
                      </li>
                      <li>
                        Developed a GradientBoosting <b>IPO return predictor</b> across nine
                        signals — burn multiple, NRR, P/S ratio — fed by a live yfinance pipeline,
                        surfacing high-return patterns from historical IPO data.
                      </li>
                    </ul>
                  </div>
                  <div className="sheet-stats">
                    <div className="stat">
                      <div className="num">0.825</div>
                      <div className="lbl">AUC-ROC, Credit Classifier</div>
                    </div>
                    <div className="stat">
                      <div className="num gold">87%</div>
                      <div className="lbl">Sentiment Pipeline Accuracy</div>
                    </div>
                    <div className="stat">
                      <div className="num">14 / 9</div>
                      <div className="lbl">Credit Features / IPO Signals</div>
                    </div>
                  </div>
                </div>
                <div className="sheet-stack">
                  <span className="pill">TensorFlow</span>
                  <span className="pill">SHAP</span>
                  <span className="pill">FinBERT</span>
                  <span className="pill">ChromaDB / RAG</span>
                  <span className="pill">GradientBoosting</span>
                  <span className="pill">yfinance</span>
                </div>
              </article>
            </Reveal>

            {/* SOLARSENSE */}
            <Reveal>
              <article className="sheet">
                <div className="sheet-head">
                  <div>
                    <span className="sheet-id">FILE 03 / JAN – FEB 2026</span>
                    <div className="sheet-title">SolarSense — Predictive Maintenance Platform</div>
                  </div>
                  <span className="sheet-tag">Operational Risk · Finalist</span>
                </div>
                <div className="sheet-body">
                  <div className="sheet-desc">
                    <ul>
                      <li>
                        Ran exploratory data analysis across 50+ operational parameters to detect
                        degradation patterns, then deployed an <b>XGBoost fault-prediction model</b>{" "}
                        with SHAP explainability to surface root-cause insights for maintenance
                        teams.
                      </li>
                      <li>
                        Translated model output into recommendations that cut maintenance costs by
                        35% and lifted energy output by 8% — the kind of operating-leverage number
                        that gets a model funded.
                      </li>
                      <li>
                        Presented findings at the <b>AI for Sustainability Hackathon 2026</b>{" "}
                        (Canadian University Dubai) — Finalist.
                      </li>
                    </ul>
                  </div>
                  <div className="sheet-stats">
                    <div className="stat">
                      <div className="num">-35%</div>
                      <div className="lbl">Maintenance Cost</div>
                    </div>
                    <div className="stat">
                      <div className="num gold">+8%</div>
                      <div className="lbl">Energy Output</div>
                    </div>
                    <div className="stat">
                      <div className="num">50+</div>
                      <div className="lbl">Parameters Analysed</div>
                    </div>
                  </div>
                </div>
                <div className="sheet-stack">
                  <span className="pill">XGBoost</span>
                  <span className="pill">SHAP</span>
                  <span className="pill">EDA</span>
                  <span className="pill">Python</span>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
