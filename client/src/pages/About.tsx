/* =============================================================
   QUIET CINEMA — About Page
   Layout: Nav → Portrait + Bio → Skills → Awards → Footer
   ============================================================= */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";


const ABOUT_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/SY7V5OoJepJFWouXljRbZx/sandbox/bN01zGEGcaAUax5YJBn29W-img-5_1771863596000_na1fn_YWJvdXQtcGhvdG8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU1k3VjVPb0plcEpGV291WGxqUmJaeC9zYW5kYm94L2JOMDF6R0VHY2FBVWF4NVlKQm4yOVctaW1nLTVfMTc3MTg2MzU5NjAwMF9uYTFmbl9ZV0p2ZFhRdGNHaHZkRzguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RA~tul-HJbcSbYDx4Jwz6Mp2kESAEOCJWXBS8ZHXXWrPtvfE8czWBIK7OBjT2FXQFl2bCIXO2pM-HY2o4iZmccKAoChoBUqBkZHFjYmQxl79qLwZKFwVBoGVP7V4ZQEhPgpYLcq5LAdUGCqcik-F-rfjHRDA7nfWc44f9kCNMpB9ZMWKmrTLGeH1KEp-tTXzjW9IU80o4fRhaEJBqjQewE5EomvOyw2Gs7k2i~6DJ-GY6nYmQpS1aHoAXx5j-J2yTZAtb4s2lX0DysL6PfB9tmbsSPRuS3rNMKulCzHxdhoFPwUc2DlG0umBqPkfNjbnjJcRvAcEsSxaYdqDuyt-wg__";

const skills = [
  { category: "Direction", items: ["Documentary Direction", "Observational Cinema", "Interview Technique", "Visual Storytelling"] },
  { category: "Camera", items: ["Sony FX9 / FX6", "ARRI Amira", "Canon C70", "Handheld & Gimbal"] },
  { category: "Post Production", items: ["DaVinci Resolve", "Adobe Premiere Pro", "Final Cut Pro", "Colour Grading"] },
  { category: "Audio", items: ["Location Sound", "Dialogue Editing", "Sound Design", "Music Supervision"] },
];

const awards = [
  { year: "2024", title: "Best Documentary Short", festival: "Sheffield Doc/Fest" },
  { year: "2023", title: "Jury Prize — Documentary", festival: "BFI London Film Festival" },
  { year: "2023", title: "Best Cinematography", festival: "Raindance Film Festival" },
  { year: "2022", title: "Official Selection", festival: "IDFA Amsterdam" },
];

export default function About() {
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-40 pb-12 px-6 md:px-12 lg:px-24">
        <p
          className="font-body text-xs tracking-widest uppercase mb-4 animate-fade-up"
          style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
        >
          About
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
          Alex Morgan
        </h1>
      </section>

      {/* Bio + Portrait */}
      <section className="px-6 md:px-12 lg:px-24 mt-8">
        <div className="divider mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Portrait */}
          <div className="md:col-span-4 reveal">
            <div
              className="overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <img
                src={ABOUT_IMAGE}
                alt="Alex Morgan — Documentary Filmmaker operating a cinema camera in the mountains"
                className="w-full h-full object-cover"
              />
            </div>
            <p
              className="font-body text-xs mt-3 tracking-wider uppercase"
              style={{ color: "oklch(0.65 0.008 60)", letterSpacing: "0.08em" }}
            >
              On location — Scottish Highlands, 2024
            </p>
          </div>

          {/* Bio Text */}
          <div className="md:col-span-8 reveal" style={{ transitionDelay: "0.15s" }}>
            <div
              className="font-display mb-8"
              style={{
                fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.5,
                letterSpacing: "0.02em",
                color: "oklch(0.12 0.005 60)",
              }}
            >
              I make films about the spaces between words — the pauses, the silences, the things people mean but don't say.
            </div>

            <div
              className="font-body leading-relaxed space-y-5"
              style={{ fontSize: "0.9375rem", color: "oklch(0.35 0.008 60)", lineHeight: 1.8 }}
            >
              <p>
                Alex Morgan is a documentary filmmaker and video editor based in London. Over the past decade, she has directed and edited films that have screened at BAFTA-qualifying festivals across Europe and North America, including Sheffield Doc/Fest, BFI London Film Festival, and IDFA Amsterdam.
              </p>
              <p>
                Her work is rooted in the observational tradition — long periods of access, a minimal crew, and a deep commitment to the integrity of her subjects. She is drawn to stories that exist at the margins: communities under pressure, individuals navigating systems that were never designed for them, and the quiet resilience of ordinary lives.
              </p>
              <p>
                Before moving into documentary, Alex trained as a photojournalist and spent three years working in conflict zones for international news organisations. That experience — learning to be present without imposing, to witness without exploiting — remains the foundation of her filmmaking practice.
              </p>
              <p>
                She is currently in post-production on <em>The Weight of Water</em>, a feature documentary about the communities living along the Thames estuary as sea levels rise.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-6">
              <div>
                <p
                  className="font-body text-xs tracking-widest uppercase mb-1"
                  style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
                >
                  Based in
                </p>
                <p className="font-body text-sm" style={{ color: "oklch(0.12 0.005 60)" }}>
                  London, United Kingdom
                </p>
              </div>
              <div>
                <p
                  className="font-body text-xs tracking-widest uppercase mb-1"
                  style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
                >
                  Available for
                </p>
                <p className="font-body text-sm" style={{ color: "oklch(0.12 0.005 60)" }}>
                  Commissions & Collaborations
                </p>
              </div>
              <div>
                <p
                  className="font-body text-xs tracking-widest uppercase mb-1"
                  style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
                >
                  Contact
                </p>
                <a
                  href="mailto:alex@alexmorganfilm.com"
                  className="font-body text-sm"
                  style={{
                    color: "oklch(0.12 0.005 60)",
                    borderBottom: "0.5px solid oklch(0.75 0.006 60)",
                    paddingBottom: "1px",
                  }}
                >
                  alex@alexmorganfilm.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="divider mt-16" />
      </section>

      {/* Skills */}
      <section className="px-6 md:px-12 lg:px-24 mt-16">
        <p
          className="font-body text-xs tracking-widest uppercase mb-10 reveal"
          style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
        >
          Capabilities
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div key={skill.category} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <p
                className="font-body text-xs tracking-widest uppercase mb-4"
                style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
              >
                {skill.category}
              </p>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li
                    key={item}
                    className="font-body text-sm"
                    style={{ color: "oklch(0.35 0.008 60)", lineHeight: 1.6 }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="divider mt-16" />
      </section>

      {/* Awards */}
      <section className="px-6 md:px-12 lg:px-24 mt-16">
        <p
          className="font-body text-xs tracking-widest uppercase mb-10 reveal"
          style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
        >
          Recognition
        </p>
        <div className="space-y-0">
          {awards.map((award, i) => (
            <div
              key={i}
              className="reveal flex items-start justify-between py-5 border-b border-border"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="flex items-start gap-8">
                <span
                  className="font-body text-xs"
                  style={{ color: "oklch(0.65 0.008 60)", minWidth: "3rem" }}
                >
                  {award.year}
                </span>
                <div>
                  <p
                    className="font-display"
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 300,
                      letterSpacing: "0.02em",
                      color: "oklch(0.12 0.005 60)",
                    }}
                  >
                    {award.title}
                  </p>
                  <p
                    className="font-body text-xs mt-0.5 tracking-wider"
                    style={{ color: "oklch(0.55 0.012 60)" }}
                  >
                    {award.festival}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
