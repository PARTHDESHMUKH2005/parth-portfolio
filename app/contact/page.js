import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <>
      <header className="pagehead">
        <div className="wrap">
          <div className="eyebrow">Contact</div>
          <h1>
            Let&apos;s talk about
            <br />
            <em>where this fits.</em>
          </h1>
          <p>
            Looking for AI/ML engineering, risk modeling, and quantitative analyst roles — the
            kind of seat where these models would be production code, not a portfolio piece. Open
            to internships and full-time conversations across risk, credit, and applied AI.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:parthmd018@gmail.com">
              parthmd018@gmail.com
            </a>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/parth-mahesh-deshmukh-462821323/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            <a
              className="btn btn-ghost"
              href="https://github.com/PARTHDESHMUKH2005"
              target="_blank"
              rel="noopener"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <section>
        <div className="wrap">
          <Reveal>
            <div className="contact-grid">
              <div className="contact-cell">
                <div className="cat">Email</div>
                <a href="mailto:parthmd018@gmail.com">parthmd018@gmail.com</a>
                <div className="sub">Fastest way to reach me — usually reply within a day.</div>
              </div>
              <div className="contact-cell">
                <div className="cat">LinkedIn</div>
                <a href="https://www.linkedin.com/in/parth-mahesh-deshmukh-462821323/" target="_blank" rel="noopener">
                  linkedin.com/in/parth-mahesh-deshmukh-462821323
                </a>
                <div className="sub">Posts on risk systems, LLM infra, and fintech.</div>
              </div>
              <div className="contact-cell">
                <div className="cat">GitHub</div>
                <a href="https://github.com/PARTHDESHMUKH2005" target="_blank" rel="noopener">
                  github.com/PARTHDESHMUKH2005
                </a>
                <div className="sub">LiveRisk, CreditIQ, and SolarSense — code included.</div>
              </div>
              <div className="contact-cell">
                <div className="cat">LeetCode</div>
                <a
                  href="https://leetcode.com/PARTHDESHMUKH2005"
                  target="_blank"
                  rel="noopener"
                >
                  Profile
                </a>
                <div className="sub">DSA practice, ongoing.</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
