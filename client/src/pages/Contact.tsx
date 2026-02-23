/* =============================================================
   QUIET CINEMA — Contact Page
   Layout: Nav → Header → Contact Info + Form → Footer
   ============================================================= */
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSending(true);
    // Simulate send
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    toast.success("Message sent. I'll be in touch shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactDetails = [
    { label: "Email", value: "alex@alexmorganfilm.com", href: "mailto:alex@alexmorganfilm.com" },
    { label: "Based in", value: "London, United Kingdom", href: null },
    { label: "Representation", value: "Available for commissions", href: null },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-40 pb-12 px-6 md:px-12 lg:px-24">
        <p
          className="font-body text-xs tracking-widest uppercase mb-4 animate-fade-up"
          style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
        >
          Get in Touch
        </p>
        <h1
          className="font-display animate-fade-up delay-100"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 300,
            letterSpacing: "0.02em",
            color: "oklch(0.12 0.005 60)",
            lineHeight: 1.1,
          }}
        >
          Let's Talk
        </h1>
      </section>

      {/* Content */}
      <section className="px-6 md:px-12 lg:px-24 mt-4">
        <div className="divider mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-20">
          {/* Left: Contact Info */}
          <div className="md:col-span-4 reveal">
            <p
              className="font-display mb-8"
              style={{
                fontSize: "1.2rem",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.6,
                letterSpacing: "0.02em",
                color: "oklch(0.12 0.005 60)",
              }}
            >
              Whether you have a project in mind, a story to tell, or simply want to connect — I'd love to hear from you.
            </p>

            <div className="space-y-6 mt-10">
              {contactDetails.map((detail) => (
                <div key={detail.label}>
                  <p
                    className="font-body text-xs tracking-widest uppercase mb-1"
                    style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
                  >
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      className="font-body text-sm"
                      style={{
                        color: "oklch(0.12 0.005 60)",
                        borderBottom: "0.5px solid oklch(0.75 0.006 60)",
                        paddingBottom: "1px",
                        transition: "opacity 0.3s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm" style={{ color: "oklch(0.12 0.005 60)" }}>
                      {detail.value}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p
                className="font-body text-xs tracking-widest uppercase mb-4"
                style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
              >
                Follow
              </p>
              <div className="flex flex-col gap-2">
                {["Vimeo", "Instagram", "LinkedIn"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="font-body text-sm"
                    style={{
                      color: "oklch(0.45 0.010 60)",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.12 0.005 60)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.45 0.010 60)")}
                    onClick={(e) => { e.preventDefault(); toast.info(`${platform} link coming soon.`); }}
                  >
                    {platform} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="md:col-span-8 reveal" style={{ transitionDelay: "0.15s" }}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label
                    className="font-body text-xs tracking-widest uppercase block mb-2"
                    style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label
                    className="font-body text-xs tracking-widest uppercase block mb-2"
                    style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  className="font-body text-xs tracking-widest uppercase block mb-2"
                  style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="form-input"
                />
              </div>

              <div>
                <label
                  className="font-body text-xs tracking-widest uppercase block mb-2"
                  style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
                >
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  rows={6}
                  className="form-input resize-none"
                  required
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={sending}
                  className="font-body text-xs tracking-widest uppercase"
                  style={{
                    letterSpacing: "0.12em",
                    color: "oklch(0.99 0.003 80)",
                    backgroundColor: sending ? "oklch(0.55 0.012 60)" : "oklch(0.12 0.005 60)",
                    padding: "0.875rem 2.5rem",
                    border: "none",
                    transition: "background-color 0.3s, opacity 0.3s",
                    cursor: sending ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending) e.currentTarget.style.backgroundColor = "oklch(0.25 0.006 60)";
                  }}
                  onMouseLeave={(e) => {
                    if (!sending) e.currentTarget.style.backgroundColor = "oklch(0.12 0.005 60)";
                  }}
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="divider mt-20" />
      </section>

      <Footer />
    </div>
  );
}
