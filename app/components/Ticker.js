const ITEMS = [
  <>
    <b>LIVERISK</b> 10,000-path Monte Carlo · 95% VaR / CVaR <span className="pipe">|</span>
  </>,
  <>
    <b>CREDITIQ</b> AUC-ROC <span className="up">0.825</span> <span className="pipe">|</span>
  </>,
  <>
    <b>IRIS LLM ROUTER</b> onboarding latency <span className="down">-70%</span>{" "}
    <span className="pipe">|</span>
  </>,
  <>
    <b>SOLARSENSE</b> maintenance cost <span className="down">-35%</span> · output{" "}
    <span className="up">+8%</span> <span className="pipe">|</span>
  </>,
  <>
    <b>BILLING FIX</b> ledger error resolved <span className="up">&lt;24h</span>{" "}
    <span className="pipe">|</span>
  </>,
  <>
    <b>FINBERT</b> sentiment accuracy <span className="up">87%</span> <span className="pipe">|</span>
  </>,
  <>
    THAPAR IOET <span className="pipe">·</span> CGPA <b>8.14 / 10</b> <span className="pipe">|</span>
  </>,
];

export default function Ticker() {
  return (
    <div className="ticker-bar" aria-hidden="true">
      <div className="ticker-track">
        {ITEMS.map((item, i) => (
          <span key={`a-${i}`}>{item}</span>
        ))}
        {ITEMS.map((item, i) => (
          <span key={`b-${i}`}>{item}</span>
        ))}
      </div>
    </div>
  );
}
