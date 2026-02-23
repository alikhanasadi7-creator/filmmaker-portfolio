/* =============================================================
   QUIET CINEMA — Home Page
   Layout: Nav → Identity Statement → Full-width Hero → Featured Work → Footer
   ============================================================= */
import { useEffect, useRef } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const HERO_IMAGE = "https://private-us-east-1.manuscdn.com/sessionFile/SY7V5OoJepJFWouXljRbZx/sandbox/bN01zGEGcaAUax5YJBn29W-img-1_1771863592000_na1fn_aGVyby1tYWlu.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU1k3VjVPb0plcEpGV291WGxqUmJaeC9zYW5kYm94L2JOMDF6R0VHY2FBVWF4NVlKQm4yOVctaW1nLTFfMTc3MTg2MzU5MjAwMF9uYTFmbl9hR1Z5YnkxdFlXbHUuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=KiUxiwL19Rhuovah8NguKijF6UEh17QJsOrKAV49TpoV2SKOpgdy7K-wxGufvKoqPs1cIZx0FiBpilomM1Id5KDMKpP7RovMr4Vx48FLMdE8RN7VlVYIYeo9at0OOHxnrKh6KwRPa-~yF5A8ZRjJ3VO~e6B3903DtXTdD-idoTkl0w5GJiC~T~QMVcMAlVLs4J8UPqJmuOwRYb0l5wDYCa9XUBvZHM4okI14WmmEHc0~IB~kv8u5m2b4bMaQHkI4eU8FN0YOffHatibhlPO91dzWRHCEO-jzNc5WS9lMd~2vvz8WiWbskYFO0A0WfeAbJNH37pDjGEf7KQiK~qw~aw__";

const PROJECT_1 = "https://private-us-east-1.manuscdn.com/sessionFile/SY7V5OoJepJFWouXljRbZx/sandbox/bN01zGEGcaAUax5YJBn29W-img-2_1771863596000_na1fn_cHJvamVjdC0x.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU1k3VjVPb0plcEpGV291WGxqUmJaeC9zYW5kYm94L2JOMDF6R0VHY2FBVWF4NVlKQm4yOVctaW1nLTJfMTc3MTg2MzU5NjAwMF9uYTFmbl9jSEp2YW1WamRDMHguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Qscn~~2wqMBlxX3mDr~MfFpvf68hs-SCkXcB-7iXKB-WJi8Zty-x0nH~Lb1JGWMif5olAeE4HJrS6Sl9zubd07aWiuPxFMOEm85ovocccouFDK6I0R4-Xgcy4hSljuPl2qzxiDU1cRheefFCT3IaIpcJqm650Cz6Drppoo~zkWoMsGDPVOvLcQNMoQun7IJiZ-Hvdc7xjLla~tr2hhwJl6aG~97CblCXelWM-Y4nd8zv5-7d7tbmtEqnnRs~D94wgehGsQAyZxPlbV4Nx8N9Vo2Y5N23u4DkMlnPMYk48QbIKgu-I3L1n7O1tB4r7kviKwxqzsPXuw~AftYsc4ohHw__";

const PROJECT_2 = "https://private-us-east-1.manuscdn.com/sessionFile/SY7V5OoJepJFWouXljRbZx/sandbox/bN01zGEGcaAUax5YJBn29W-img-3_1771863594000_na1fn_cHJvamVjdC0y.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU1k3VjVPb0plcEpGV291WGxqUmJaeC9zYW5kYm94L2JOMDF6R0VHY2FBVWF4NVlKQm4yOVctaW1nLTNfMTc3MTg2MzU5NDAwMF9uYTFmbl9jSEp2YW1WamRDMHkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hcgskKu8gtBRm6WByp~g0dne61Opo35eH8kk76rkgzgYR3-W4vaHPQRefJ-Q21f41PGQf4rFqxCWQ2f9SmfumnsQP-rvvrN2mp85IMsXWU-l6vGt-m3KTLSPKuSLy8pZmfeSs41FoVbdhoyheCTXJ2fz~Hqg6jmIWgMiLyxSkOhGb1h7-2fpX5xrAJPdA1bzTxMBXMykxLI8Cs8koD90Cd~v1R10p~8P~PF0Qs8E1MXWks87im~YSiWkHq-QvGT4Fdp9MrP1Mep5rstt1FnlcbRkzqBStuhcIIZ36BHIXW6evipkGPuFJvDHwxd0IGbpVfa1V5WbByr~~w-3eN4uIA__";

const featuredProjects = [
  {
    id: 1,
    title: "Echoes of Dust",
    category: "Documentary Feature",
    year: "2024",
    image: PROJECT_1,
  },
  {
    id: 2,
    title: "The River Speaks",
    category: "Short Documentary",
    year: "2024",
    image: PROJECT_2,
  },
];

export default function Home() {
  const identityRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Identity Statement */}
      <section className="pt-40 pb-16 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl">
          <p
            className="font-body text-xs tracking-widest uppercase mb-8 animate-fade-up"
            style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
          >
            Documentary Filmmaker & Video Editor
          </p>
          <h1
            className="font-display animate-fade-up delay-100"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5.5rem)",
              fontWeight: 300,
              lineHeight: 1.1,
              letterSpacing: "0.02em",
              color: "oklch(0.12 0.005 60)",
            }}
          >
            Documentary Filmmaker
            <br />
            <em style={{ fontStyle: "italic" }}>& Video Editor</em>
            <br />
            based in London
          </h1>
          <div
            className="mt-10 animate-fade-up delay-200"
            style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
          >
            <Link href="/work">
              <span
                className="font-body text-sm tracking-widest uppercase"
                style={{
                  color: "oklch(0.12 0.005 60)",
                  letterSpacing: "0.1em",
                  borderBottom: "0.5px solid oklch(0.12 0.005 60)",
                  paddingBottom: "2px",
                  transition: "opacity 0.3s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.5")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                View Work
              </span>
            </Link>
            <span style={{ color: "oklch(0.75 0.006 60)", fontSize: "0.75rem" }}>↓</span>
          </div>
        </div>
      </section>

      {/* Full-width Hero Image */}
      <section className="w-full overflow-hidden" style={{ height: "clamp(50vh, 70vw, 90vh)" }}>
        <div className="w-full h-full overflow-hidden">
          <img
            src={HERO_IMAGE}
            alt="Cinematic documentary still — lone figure overlooking misty English countryside at golden hour"
            className="hero-image w-full h-full object-cover"
            style={{ objectPosition: "center 30%" }}
          />
        </div>
        <div
          className="w-full flex justify-between items-center px-6 md:px-12 lg:px-24 mt-4"
          style={{ color: "oklch(0.65 0.008 60)" }}
        >
          <span className="font-body text-xs tracking-widest uppercase" style={{ letterSpacing: "0.1em" }}>
            Showreel 2024
          </span>
          <span className="font-body text-xs" style={{ letterSpacing: "0.04em" }}>
            London, UK
          </span>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="mt-28 px-6 md:px-12 lg:px-24" ref={featuredRef}>
        <div className="flex items-end justify-between mb-12">
          <div className="reveal">
            <p
              className="font-body text-xs tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
            >
              Selected Work
            </p>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                fontWeight: 300,
                letterSpacing: "0.02em",
                color: "oklch(0.12 0.005 60)",
              }}
            >
              Recent Projects
            </h2>
          </div>
          <Link href="/work">
            <span
              className="hidden md:block font-body text-xs tracking-widest uppercase reveal"
              style={{
                color: "oklch(0.55 0.012 60)",
                letterSpacing: "0.1em",
                borderBottom: "0.5px solid oklch(0.75 0.006 60)",
                paddingBottom: "2px",
              }}
            >
              All Projects →
            </span>
          </Link>
        </div>

        {/* Asymmetric 2-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {featuredProjects.map((project, i) => (
            <div
              key={project.id}
              className={`reveal project-card ${i === 0 ? "md:col-span-7" : "md:col-span-5"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <Link href="/work">
                <div>
                  <div
                    className="overflow-hidden"
                    style={{ aspectRatio: i === 0 ? "16/10" : "4/5" }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  <div className="mt-4 flex items-start justify-between">
                    <div>
                      <h3
                        className="font-display"
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 300,
                          letterSpacing: "0.02em",
                          color: "oklch(0.12 0.005 60)",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="font-body text-xs mt-1 tracking-wider uppercase"
                        style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.08em" }}
                      >
                        {project.category}
                      </p>
                    </div>
                    <span
                      className="font-body text-xs"
                      style={{ color: "oklch(0.65 0.008 60)", marginTop: "2px" }}
                    >
                      {project.year}
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link href="/work">
            <span
              className="font-body text-xs tracking-widest uppercase"
              style={{
                color: "oklch(0.55 0.012 60)",
                letterSpacing: "0.1em",
                borderBottom: "0.5px solid oklch(0.75 0.006 60)",
                paddingBottom: "2px",
              }}
            >
              All Projects →
            </span>
          </Link>
        </div>
      </section>

      {/* Quote / Statement */}
      <section className="mt-32 px-6 md:px-12 lg:px-24 pb-8">
        <div className="max-w-3xl reveal">
          <div className="divider mb-12" />
          <blockquote
            className="font-display"
            style={{
              fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 1.5,
              letterSpacing: "0.02em",
              color: "oklch(0.12 0.005 60)",
            }}
          >
            "Every frame is a question. Every cut is an answer."
          </blockquote>
          <div className="divider mt-12" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
