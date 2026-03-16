/* =============================================================
   QUIET CINEMA — Work Page
   Layout: Nav → Page Header → Filter → Portfolio Grid → Footer
   ============================================================= */
import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";


const PROJECT_1 = "https://private-us-east-1.manuscdn.com/sessionFile/SY7V5OoJepJFWouXljRbZx/sandbox/bN01zGEGcaAUax5YJBn29W-img-2_1771863596000_na1fn_cHJvamVjdC0x.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU1k3VjVPb0plcEpGV291WGxqUmJaeC9zYW5kYm94L2JOMDF6R0VHY2FBVWF4NVlKQm4yOVctaW1nLTJfMTc3MTg2MzU5NjAwMF9uYTFmbl9jSEp2YW1WamRDMHguanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Qscn~~2wqMBlxX3mDr~MfFpvf68hs-SCkXcB-7iXKB-WJi8Zty-x0nH~Lb1JGWMif5olAeE4HJrS6Sl9zubd07aWiuPxFMOEm85ovocccouFDK6I0R4-Xgcy4hSljuPl2qzxiDU1cRheefFCT3IaIpcJqm650Cz6Drppoo~zkWoMsGDPVOvLcQNMoQun7IJiZ-Hvdc7xjLla~tr2hhwJl6aG~97CblCXelWM-Y4nd8zv5-7d7tbmtEqnnRs~D94wgehGsQAyZxPlbV4Nx8N9Vo2Y5N23u4DkMlnPMYk48QbIKgu-I3L1n7O1tB4r7kviKwxqzsPXuw~AftYsc4ohHw__";
const PROJECT_2 = "https://private-us-east-1.manuscdn.com/sessionFile/SY7V5OoJepJFWouXljRbZx/sandbox/bN01zGEGcaAUax5YJBn29W-img-3_1771863594000_na1fn_cHJvamVjdC0y.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU1k3VjVPb0plcEpGV291WGxqUmJaeC9zYW5kYm94L2JOMDF6R0VHY2FBVWF4NVlKQm4yOVctaW1nLTNfMTc3MTg2MzU5NDAwMF9uYTFmbl9jSEp2YW1WamRDMHkuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=hcgskKu8gtBRm6WByp~g0dne61Opo35eH8kk76rkgzgYR3-W4vaHPQRefJ-Q21f41PGQf4rFqxCWQ2f9SmfumnsQP-rvvrN2mp85IMsXWU-l6vGt-m3KTLSPKuSLy8pZmfeSs41FoVbdhoyheCTXJ2fz~Hqg6jmIWgMiLyxSkOhGb1h7-2fpX5xrAJPdA1bzTxMBXMykxLI8Cs8koD90Cd~v1R10p~8P~PF0Qs8E1MXWks87im~YSiWkHq-QvGT4Fdp9MrP1Mep5rstt1FnlcbRkzqBStuhcIIZ36BHIXW6evipkGPuFJvDHwxd0IGbpVfa1V5WbByr~~w-3eN4uIA__";
const PROJECT_3 = "https://private-us-east-1.manuscdn.com/sessionFile/SY7V5OoJepJFWouXljRbZx/sandbox/bN01zGEGcaAUax5YJBn29W-img-4_1771863596000_na1fn_cHJvamVjdC0z.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvU1k3VjVPb0plcEpGV291WGxqUmJaeC9zYW5kYm94L2JOMDF6R0VHY2FBVWF4NVlKQm4yOVctaW1nLTRfMTc3MTg2MzU5NjAwMF9uYTFmbl9jSEp2YW1WamRDMHouanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=fbxClxKY43hvkXQR7Xz8-~aX3fc8oD8HhTmt2vd2aAsvNMYx8YPshKvRFgK7U~zodAnrlCQ6t-dVLHKgvKMH52nXmobpHmnaW7LSCMyEzQ3gD2306vtpkCzzWG9SxaEadgx5OTJ~5PI-7yUgTpuoLHXhjn43gsUKnvhyFTYAQhf7zkAvO3jXIxzRmCJAsab3Y8L2BJtB1IKd-nttj8M6URiWDx3OymuwKGheLsE2ob92FmeneKPmGcmYQ-0lFw8sq2p6LgejXrIcw-BtgYAZcIpOvxwQsqnh0khz1OuVP6vfpiMzn7CqJZRZgILkUi6raVksreR8lDLwPYnQIARj9A__";

// Use Unsplash for additional portfolio images
const UNSPLASH_4 = "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&q=80";
const UNSPLASH_5 = "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1200&q=80";
const UNSPLASH_6 = "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&q=80";

// YouTube video thumbnails (extracted from video IDs)
const YOUTUBE_THUMBNAIL_1 = "https://img.youtube.com/vi/lm95sT7fyhQ/maxresdefault.jpg";
const YOUTUBE_THUMBNAIL_2 = "https://img.youtube.com/vi/JTl4IpGNyCw/maxresdefault.jpg";
const YOUTUBE_THUMBNAIL_3 = "https://img.youtube.com/vi/Up9qPBxeyHk/maxresdefault.jpg";

const projects = [
  {
    id: 1,
    title: "Uncertain Futures",
    category: "Documentary | Social Impact & Research",
    year: "2024",
    duration: "Full Length",
    description: "A collaborative art and research project amplifying women's lived experiences and collective dialogue. I worked as cinematographer and editor, creating a film that communicates the project's social impact and research engagement.",
    image: YOUTUBE_THUMBNAIL_1,
    tag: "film",
    videoId: "lm95sT7fyhQ",
    isEmbedded: true,
  },
  {
    id: 2,
    title: "TREES",
    category: "Impact Film | Immersive Installation",
    year: "2024",
    duration: "Full Length",
    description: "An engaging documentation of an immersive environmental installation exploring the hidden communication systems of trees. The film captures the intersection of art, science, and technology to communicate themes of connection, sustainability, and collective responsibility.",
    image: YOUTUBE_THUMBNAIL_2,
    tag: "film",
    videoId: "JTl4IpGNyCw",
    isEmbedded: true,
  },
  {
    id: 3,
    title: "GRF – Back to School Campaign",
    category: "Impact Animation | Global Education",
    year: "2025",
    duration: "Full Length",
    description: "An animated campaign film promoting access to education for displaced and vulnerable children. Through cinematic storytelling and carefully crafted sound design, the film communicates hope, resilience, and the transformative power of learning.",
    image: YOUTUBE_THUMBNAIL_3,
    tag: "film",
    videoId: "Up9qPBxeyHk",
    isEmbedded: true,
  },
];

const filters = ["All", "Film", "Documentary", "Animation"];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

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

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tag === activeFilter.toLowerCase());

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Header */}
      <section className="pt-40 pb-12 px-6 md:px-12 lg:px-24">
        <p
          className="font-body text-xs tracking-widest uppercase mb-4 animate-fade-up"
          style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.12em" }}
        >
          Portfolio
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
          Selected Work
        </h1>
      </section>



      {/* Portfolio Grid */}
      <section className="px-6 md:px-12 lg:px-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              className="reveal project-card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="overflow-hidden relative" style={{ aspectRatio: "4/3" }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                {project.videoId && (
                  <button
                    onClick={() => setSelectedVideo(project.videoId)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-colors"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors" style={{boxShadow: "0 4px 16px rgba(0,0,0,0.3)"}}>
                      <svg className="w-6 h-6 text-red-600 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </button>
                )}
              </div>

              <div className="mt-5">
                <div className="flex items-start justify-between mb-1">
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 300,
                      letterSpacing: "0.02em",
                      color: "oklch(0.12 0.005 60)",
                    }}
                  >
                    {project.title}
                  </h2>
                  <span
                    className="font-body text-xs"
                    style={{ color: "oklch(0.65 0.008 60)", marginTop: "3px", flexShrink: 0 }}
                  >
                    {project.year}
                  </span>
                </div>
                <p
                  className="font-body text-xs tracking-wider uppercase mb-3"
                  style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.08em" }}
                >
                  {project.category} · {project.duration}
                </p>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: "oklch(0.45 0.010 60)" }}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              style={{ fontSize: "2rem", lineHeight: 1 }}
            >
              ×
            </button>
            <div style={{ aspectRatio: "16/9" }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?si=ps3oxTRHKrwla9Zx&autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ borderRadius: "4px" }}
              />
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
