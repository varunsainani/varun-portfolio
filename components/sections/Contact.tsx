"use client";
import { useState } from "react";
import {
  CONTACT_METHODS,
  CONTACT_TYPE_OPTIONS,
  BUDGET_OPTIONS,
} from "@/lib/data";
import type { ContactMethod, SelectOption } from "@/types";

interface FormState {
  name: string;
  email: string;
  type: string;
  budget: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    type: "recruiter",
    budget: "na",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const set =
    (k: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >,
    ) =>
      setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Replace with your form handler e.g. Formspree:
    // await fetch("https://formspree.io/f/YOUR_ID", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify(form) });
    console.log("Form submitted:", form);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="reveal">
      <div className="section-header">
        <div className="section-num">06</div>
        <div>
          <div className="section-sub">Get in Touch</div>
          <div className="section-heading">
            Let&apos;s Work <em>Together</em>
          </div>
        </div>
      </div>
      <div className="contact-layout">
        <div className="contact-left">
          <h3 className="contact-heading">
            Recruiter
            <br />
            or Client?
            <br />
            <em>I&apos;m ready.</em>
          </h3>
          <p className="contact-desc">
            Whether you have an internship opportunity, a job opening, or a
            project that needs a reliable full-stack developer — send me a
            message. I respond within 24 hours.
          </p>
          <div className="contact-methods">
            {CONTACT_METHODS.map((m: ContactMethod) => (
              <div key={m.label} className="contact-method">
                <div className="contact-method-icon">{m.icon}</div>
                <div>
                  <div className="contact-method-label">{m.label}</div>
                  <a
                    href={m.href}
                    target={m.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="contact-method-val"
                  >
                    {m.display}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {submitted ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              padding: "80px 40px",
              border: "1px solid #e8e2dc",
              background: "#f7f4ef",
              minHeight: "400px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                background: "#f0fdf4",
                border: "1px solid #bbf7d0",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "24px",
                color: "#15803d",
                marginBottom: "24px",
              }}
            >
              ✓
            </div>
            <h4
              style={{
                fontFamily: "'Playfair Display',serif",
                fontSize: "28px",
                fontWeight: 700,
                color: "#1a1714",
                marginBottom: "12px",
              }}
            >
              Message Sent!
            </h4>
            <p
              style={{
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.8,
                color: "#7a6e66",
              }}
            >
              Thank you for reaching out. I&apos;ll get back to you within 24
              hours.
            </p>
          </div>
        ) : (
          <form className="form-editorial" onSubmit={handleSubmit} noValidate>
            <div className="form-row-2">
              <div className="form-field">
                <label htmlFor="f-name">Name</label>
                <input
                  id="f-name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={set("name")}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="f-email">Email</label>
                <input
                  id="f-email"
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={set("email")}
                  required
                />
              </div>
            </div>
            <div className="form-row-2">
              <div className="form-field">
                <label htmlFor="f-type">I am a</label>
                <select id="f-type" value={form.type} onChange={set("type")}>
                  {CONTACT_TYPE_OPTIONS.map((o: SelectOption) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="f-budget">Project Budget</label>
                <select
                  id="f-budget"
                  value={form.budget}
                  onChange={set("budget")}
                >
                  {BUDGET_OPTIONS.map((o: SelectOption) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-row-1">
              <div className="form-field">
                <label htmlFor="f-subject">Subject / Brief</label>
                <input
                  id="f-subject"
                  type="text"
                  placeholder="e.g. Internship at XYZ · Build a SaaS landing page"
                  value={form.subject}
                  onChange={set("subject")}
                />
              </div>
            </div>
            <div className="form-row-1">
              <div className="form-field">
                <label htmlFor="f-message">Message</label>
                <textarea
                  id="f-message"
                  placeholder="Tell me about the opportunity, project scope, timeline, or anything else..."
                  value={form.message}
                  onChange={set("message")}
                  required
                />
              </div>
            </div>
            <button type="submit" className="form-submit">
              Send Message →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
