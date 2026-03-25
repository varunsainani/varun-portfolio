import { SERVICES, PROCESS_STEPS } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="reveal">
      <div className="section-header">
        <div className="section-num">02</div>
        <div>
          <div className="section-sub">What I Offer</div>
          <div className="section-heading">
            Services &amp; <em>Expertise</em>
          </div>
        </div>
      </div>

      <div className="services-top">
        {SERVICES.map((s, i) => (
          <div key={s.name} className={`service-card reveal reveal-d${i + 1}`}>
            <span className="service-icon">{s.icon}</span>
            <div className="service-name">{s.name}</div>
            <p className="service-desc">{s.description}</p>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "64px" }}>
        <p className="process-header">How I Work</p>
        <div className="process-strip">
          {PROCESS_STEPS.map((step, i) => (
            <div
              key={step.number}
              className={`process-step reveal reveal-d${i + 1}`}
            >
              <div className="process-num">{step.number}</div>
              <div className="process-title">{step.title}</div>
              <p className="process-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
