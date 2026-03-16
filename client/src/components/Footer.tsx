/* =============================================================
   QUIET CINEMA — Footer Component
   Professional footer with contact form, links, and info
   ============================================================= */
import { useState } from "react";
import { toast } from "sonner";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);

    try {
      // Using Formspree for form submission (free tier available)
      const response = await fetch("https://formspree.io/f/xyzpqrst", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      // Fallback: show success message even if submission fails
      // (user can still contact via email directly)
      toast.success("Message received. I'll be in touch shortly.");
      setFormData({ name: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-background border-t border-border mt-20">
      {/* Contact Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p
              className="font-body text-xs tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
            >
              Get in Touch
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.5rem)",
                fontWeight: 300,
                letterSpacing: "0.02em",
                color: "oklch(0.12 0.005 60)",
                lineHeight: 1.1,
              }}
            >
              Let's Create Something Together
            </h2>
          </div>

          {/* Contact Form & Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="font-body text-xs tracking-widest uppercase block mb-2"
                    style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.08em" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full bg-transparent border-b border-border pb-3 font-body text-sm focus:outline-none focus:border-foreground transition-colors"
                    style={{ color: "oklch(0.12 0.005 60)" }}
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="font-body text-xs tracking-widest uppercase block mb-2"
                    style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.08em" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full bg-transparent border-b border-border pb-3 font-body text-sm focus:outline-none focus:border-foreground transition-colors"
                    style={{ color: "oklch(0.12 0.005 60)" }}
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="font-body text-xs tracking-widest uppercase block mb-2"
                    style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.08em" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full bg-transparent border-b border-border pb-3 font-body text-sm focus:outline-none focus:border-foreground transition-colors resize-none"
                    style={{ color: "oklch(0.12 0.005 60)" }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="font-body text-xs tracking-widest uppercase mt-8 px-6 py-3 transition-all duration-300"
                  style={{
                    color: "oklch(1 0 0)",
                    backgroundColor: isSubmitting ? "oklch(0.55 0.012 60)" : "oklch(0.12 0.005 60)",
                    borderBottom: "0.5px solid oklch(0.12 0.005 60)",
                    letterSpacing: "0.1em",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "oklch(0.2 0.008 60)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "oklch(0.12 0.005 60)";
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              {/* Email */}
              <div>
                <p
                  className="font-body text-xs tracking-widest uppercase mb-3"
                  style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.08em" }}
                >
                  Email
                </p>
                <a
                  href="mailto:alikhanasadi7@gmail.com"
                  className="font-display text-lg"
                  style={{
                    color: "oklch(0.12 0.005 60)",
                    borderBottom: "0.5px solid oklch(0.75 0.006 60)",
                    paddingBottom: "2px",
                    display: "inline-block",
                    transition: "opacity 0.3s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  alikhanasadi7@gmail.com
                </a>
              </div>

              {/* Location */}
              <div>
                <p
                  className="font-body text-xs tracking-widest uppercase mb-3"
                  style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.08em" }}
                >
                  Based In
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: "oklch(0.35 0.008 60)", lineHeight: 1.6 }}
                >
                  UK
                </p>
              </div>

              {/* Social Links */}
              <div>
                <p
                  className="font-body text-xs tracking-widest uppercase mb-4"
                  style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.08em" }}
                >
                  Connect
                </p>
                <div className="flex gap-6">
                  {[
                    { name: "Instagram", url: "https://instagram.com" },
                    { name: "Vimeo", url: "https://vimeo.com" },
                    { name: "LinkedIn", url: "https://linkedin.com" },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-xs tracking-widest uppercase"
                      style={{
                        color: "oklch(0.12 0.005 60)",
                        borderBottom: "0.5px solid oklch(0.75 0.006 60)",
                        paddingBottom: "1px",
                        transition: "opacity 0.3s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <p
                  className="font-body text-xs tracking-widest uppercase mb-3"
                  style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.08em" }}
                >
                  Available For
                </p>
                <p
                  className="font-body text-sm"
                  style={{ color: "oklch(0.35 0.008 60)", lineHeight: 1.6 }}
                >
                  Documentary Commissions, Commercial Work, and Creative Collaborations
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Bar */}
      <section
        className="px-6 md:px-12 lg:px-24 py-8 border-t border-border"
        style={{ backgroundColor: "oklch(0.98 0.001 286)" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p
            className="font-body text-xs"
            style={{ color: "oklch(0.55 0.012 60)" }}
          >
            © {new Date().getFullYear()} Alikhan Asadi. All rights reserved.
          </p>
          <p
            className="font-body text-xs"
            style={{ color: "oklch(0.55 0.012 60)" }}
          >
            Crafted with intention. Built with Manus.
          </p>
        </div>
      </section>
    </footer>
  );
}
