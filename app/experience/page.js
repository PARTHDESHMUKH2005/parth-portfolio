import Reveal from "../components/Reveal";

export default function Experience() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <div className="eyebrow">Experience</div>
          <h1>
            On the ground,
            <br />
            <em>in production.</em>
          </h1>
          <p>
            Not a sandbox project — live systems, real users, real billing pipelines on the line.
          </p>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal>
            <div className="role" style={{ borderTop: "1px solid var(--line)" }}>
              <div className="role-meta">
                <div className="company">Iris</div>
                <div className="title">AI/ML Engineering Intern</div>
                <div className="dates">MAR 2026 — PRESENT</div>
              </div>
              <div className="role-body">
                <ul>
                  <li>
                    Designed and deployed an LLM-powered agentic template generation pipeline with
                    automated reasoning loops and memoised workflow decomposition, cutting project
                    setup latency by <span className="metric">70%</span> and eliminating manual
                    configuration for <span className="metric">100%</span> of new user onboarding
                    flows.
                  </li>
                  <li>
                    Built a <b>multi-LLM orchestration layer</b> routing across Claude, GPT-4, and
                    Gemini with capability-based dispatch, dynamic context management, and
                    intelligent load balancing — serving real production traffic.
                  </li>
                  <li>
                    Traced a critical billing infrastructure bug through payment-flow logs back to
                    an off-by-one error in the credits ledger; patched and regression-tested,
                    restoring the full monetisation pipeline within{" "}
                    <span className="metric">24 hours</span>.
                  </li>
                </ul>
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
                <span className="section-num">Context</span>
                <h2>What Iris is.</h2>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="role" style={{ borderTop: "1px solid var(--line)" }}>
              <div className="role-meta">
                <div className="company">About</div>
                <div className="dates">EARLY-STAGE AI STARTUP</div>
              </div>
              <div className="role-body">
                <ul>
                  <li>
                    Iris is a WhatsApp-native AI product — orchestration, onboarding, and billing
                    all run in production with real users on the other end.
                  </li>
                  <li>
                    Working at this stage means owning a system end-to-end: design the
                    architecture, ship it, then debug it when something breaks in prod at 2am.
                  </li>
                  <li>
                    That ownership is the throughline across the LLM router, the onboarding
                    pipeline, and the ledger fix below.
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
