import { TIMELINE_ITEMS } from "@/lib/data";
import type { TimelineItem } from "@/types";

export default function Experience() {
  return (
    <section id="experience" className="reveal">
      <div className="section-header">
        <div className="section-num">03</div>
        <div>
          <div className="section-sub">Journey</div>
          <div className="section-heading">
            Experience &amp; <em>Education</em>
          </div>
        </div>
      </div>

      <div className="timeline-legend">
        <div className="legend-item">
          <div
            className="legend-dot active"
            style={{ background: "#15803d" }}
          />
          Currently Active
        </div>
        <div className="legend-item">
          <div className="legend-dot exp" />
          Work Experience
        </div>
        <div className="legend-item">
          <div className="legend-dot edu" />
          Education
        </div>
      </div>

      <div className="timeline">
        {TIMELINE_ITEMS.map((item: TimelineItem, i: number) => (
          <div
            key={item.id}
            className={`timeline-item reveal${i > 0 ? ` reveal-d${i}` : ""}`}
          >
            <div
              className={`timeline-dot ${item.isActive ? "active" : item.type === "education" ? "edu" : "exp"}`}
            />
            <div
              className={`timeline-card${item.isActive ? " active-card" : ""}`}
            >
              <div className="timeline-card-top">
                <div className="timeline-org">{item.organisation}</div>
                <div className="timeline-date">{item.date}</div>
              </div>
              <div className="timeline-role">
                {item.role}
                {item.isActive && (
                  <span className="type-badge current-badge">
                    {item.type === "education" ? "In Progress" : "Active"}
                  </span>
                )}
                <span
                  className={`type-badge ${
                    item.type === "education"
                      ? "edu-badge"
                      : item.subType === "internship"
                        ? "internship-badge"
                        : item.subType === "freelance"
                          ? "freelance-badge"
                          : "exp-badge"
                  }`}
                >
                  {item.type === "education"
                    ? "Education"
                    : item.subType === "internship"
                      ? "Internship"
                      : item.subType === "freelance"
                        ? "Freelance"
                        : "Work"}
                </span>
              </div>
              <p className="timeline-desc">{item.description}</p>
              {item.progress && (
                <div className="timeline-progress">
                  <span className="progress-label">{item.progress.label}</span>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{ width: `${item.progress.percentage}%` }}
                    />
                  </div>
                  <span className="progress-pct">{item.progress.display}</span>
                </div>
              )}
              <div className="timeline-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="timeline-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
