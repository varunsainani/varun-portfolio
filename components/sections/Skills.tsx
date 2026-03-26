import { SKILL_GROUPS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="reveal">
      <div className="section-header">
        <div className="section-num">05</div>
        <div>
          <div className="section-sub">Technologies</div>
          <div className="section-heading">
            Tech <em>Stack</em>
          </div>
        </div>
      </div>
      <div className="skills-wrapper">
        {SKILL_GROUPS.map((group, i) => (
          <div
            key={group.heading}
            className={`skill-group reveal reveal-d${i + 1}`}
          >
            <div className="skill-group-head">{group.heading}</div>
            <div className="skill-tags">
              {group.skills.map((skill) => (
                <span key={skill} className="s-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
