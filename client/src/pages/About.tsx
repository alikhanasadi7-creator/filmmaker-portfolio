/* =============================================================
   EDITORIAL MINIMAL — About Page
   Asymmetric layout with sage green accent, editorial serif,
   wide-spaced labels, B&W portrait
   ============================================================= */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ABOUT_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/SY7V5OoJepJFWouXljRbZx/sandbox/bN01zGEGcaAUax5YJBn29W-img-5_1771863596000_na1fn_YWJvdXQtcGhvdG8.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU1k3VjVPb0plcEpGV291WGxqUmJaeC9zYW5kYm94L2JOMDF6R0VHY2FBVWF4NVlKQm4yOVctaW1nLTVfMTc3MTg2MzU5NjAwMF9uYTFmbl9ZV0p2ZFhRdGNHaHZkRzguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=RA~tul-HJbcSbYDx4Jwz6Mp2kESAEOCJWXBS8ZHXXWrPtvfE8czWBIK7OBjT2FXQFl2bCIXO2pM-HY2o4iZmccKAoChoBUqBkZHFjYmQxl79qLwZKFwVBoGVP7V4ZQEhPgpYLcq5LAdUGCqcik-F-rfjHRDA7nfWc44f9kCNMpB9ZMWKmrTLGeH1KEp-tTXzjW9IU80o4fRhaEJBqjQewE5EomvOyw2Gs7k2i~6DJ-GY6nYmQpS1aHoAXx5j-J2yTZAtb4s2lX0DysL6PfB9tmbsSPRuS3rNMKulCzHxdhoFPwUc2DlG0umBqPkfNjbnjJcRvAcEsSxaYdqDuyt-wg__";

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
    document.querySelectorAll(".fade-in-text, .reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-36 pb-12 px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-8 lg:col-start-2">
            <p className="label-upper mb-4 animate-fade-up" style={{ color: "var(--sage-dark)" }}>
              About
            </p>
            <h1
              className="font-display animate-fade-up delay-100"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                fontWeight: 300,
                lineHeight: 1.1,
                color: "var(--charcoal)",
                letterSpacing: "-0.01em",
              }}
            >
              Ali Khan Asadi
            </h1>
          </div>
        </div>
        <div className="divider mt-10" />
      </section>

      {/* Bio + Portrait */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Portrait */}
          <div className="lg:col-span-5 lg:col-start-2 fade-in-text">
            <div className="relative">
              {/* Sage accent block */}
              <div
                className="absolute -top-5 -left-5 w-full h-full"
                style={{ backgroundColor: "var(--sage)", opacity: 0.12 }}
              />
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={ABOUT_IMAGE}
                  alt="Ali Khan Asadi"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(90%) contrast(1.05)" }}
                />
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="lg:col-span-5 lg:col-start-7 fade-in-text flex flex-col justify-center">
            {/* Opening quote */}
            <div
              className="font-display italic mb-8"
              style={{
                fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                fontWeight: 300,
                lineHeight: 1.5,
                color: "var(--charcoal)",
              }}
            >
              I make films about the spaces between words — the pauses, the silences, and the things people mean but don't say.
            </div>

            <div
              className="font-body space-y-4"
              style={{ fontSize: "0.8125rem", color: "oklch(0.4 0.008 60)", lineHeight: 1.8 }}
            >
              <p>
                Ali Khan Asadi is a UK-based documentary filmmaker and editor working across independent films, cultural projects, and commissioned work for charities, organisations, and creative collaborators.
              </p>
              <p>
                His practice moves between directing and editing, shaping stories with cinematic sensitivity and strong narrative structure. Ali works closely with charities, cultural institutions, artists, and organisations to create films that communicate meaningful stories and real-world impact.
              </p>
              <p>
                Alongside his own documentary work, he has collaborated on socially engaged productions such as Trees Project and Uncertain Futures, supported by Arts Council England and The National Lottery Fund, in partnership with cultural organisations in Manchester.
              </p>
              <p>
                His work has been recognised and presented internationally through documentary and cultural film platforms.
              </p>
              <p>
                Whether directing or editing, Ali focuses on crafting films that are thoughtful, visually compelling, and emotionally resonant, helping organisations and audiences connect through authentic storytelling.
              </p>
            </div>

            {/* Meta info */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="label-upper mb-2" style={{ color: "var(--sage-dark)" }}>
                  Based in
                </p>
                <p className="font-body text-sm" style={{ color: "var(--charcoal)" }}>
                  UK
                </p>
              </div>
              <div>
                <p className="label-upper mb-2" style={{ color: "var(--sage-dark)" }}>
                  Available for
                </p>
                <p className="font-body text-sm" style={{ color: "var(--charcoal)" }}>
                  Commissions & Collaborations
                </p>
              </div>
              <div className="col-span-2">
                <p className="label-upper mb-2" style={{ color: "var(--sage-dark)" }}>
                  Contact
                </p>
                <a
                  href="mailto:alikhanasadi7@gmail.com"
                  className="font-body text-sm relative group inline-block"
                  style={{ color: "var(--charcoal)" }}
                >
                  alikhanasadi7@gmail.com
                  <span className="absolute bottom-0 left-0 w-full h-px bg-current opacity-30 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
