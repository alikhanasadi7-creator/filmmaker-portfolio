/* =============================================================
   QUIET CINEMA — Project Carousel Component
   Full-width cinematic slider with minimal navigation
   One large project visible at a time
   Smooth fade/slide transitions with arrow controls
   ============================================================= */
import { useEffect, useRef, useState } from "react";
import EmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectSlide {
  id: number;
  title: string;
  category: string;
  year: string;
  description: string;
  image: string;
  videoUrl?: string; // Optional Vimeo embed URL
}

interface ProjectCarouselProps {
  projects: ProjectSlide[];
}

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [emblaApi, setEmblaApi] = useState<any>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const emblaRef = useRef(null);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedIndex());
  };

  const onInit = (api: any) => {
    setEmblaApi(api);
    setScrollSnaps(api.scrollSnapList());
    onSelect();
  };

  useEffect(() => {
    if (!emblaApi) return;

    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", updateButtons);
    emblaApi.on("select", updateButtons);

    updateButtons();

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi]);

  return (
    <div className="w-full">
      {/* Carousel Container */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex" style={{ backfaceVisibility: "hidden" }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-[0_0_100%] min-w-0 relative"
              style={{ height: "clamp(50vh, 70vw, 90vh)" }}
            >
              {/* Background Image or Video */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                {project.videoUrl ? (
                  <iframe
                    src={project.videoUrl}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    style={{ objectFit: "cover" }}
                  />
                ) : (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {/* Content Overlay - Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent p-8 md:p-12 lg:p-16">
                <div className="max-w-2xl">
                  <p
                    className="font-body text-xs tracking-widest uppercase mb-3"
                    style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em" }}
                  >
                    {project.category} · {project.year}
                  </p>
                  <h2
                    className="font-display"
                    style={{
                      fontSize: "clamp(1.8rem, 4vw, 3.5rem)",
                      fontWeight: 300,
                      letterSpacing: "0.02em",
                      color: "white",
                      lineHeight: 1.1,
                      marginBottom: "0.75rem",
                    }}
                  >
                    {project.title}
                  </h2>
                  <p
                    className="font-body text-sm md:text-base leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.85)", maxWidth: "600px" }}
                  >
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6 md:py-8">
        {/* Slide Counter */}
        <div
          className="font-body text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.55 0.012 60)", letterSpacing: "0.1em" }}
        >
          <span style={{ color: "oklch(0.12 0.005 60)", fontWeight: 500 }}>
            {String(selectedIndex + 1).padStart(2, "0")}
          </span>
          <span style={{ color: "oklch(0.75 0.006 60)" }}> / </span>
          <span>{String(projects.length).padStart(2, "0")}</span>
        </div>

        {/* Arrow Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="p-2 transition-all duration-300"
            style={{
              color: canScrollPrev ? "oklch(0.12 0.005 60)" : "oklch(0.75 0.006 60)",
              cursor: canScrollPrev ? "pointer" : "not-allowed",
              opacity: canScrollPrev ? 1 : 0.5,
            }}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} strokeWidth={1.5} />
          </button>
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="p-2 transition-all duration-300"
            style={{
              color: canScrollNext ? "oklch(0.12 0.005 60)" : "oklch(0.75 0.006 60)",
              cursor: canScrollNext ? "pointer" : "not-allowed",
              opacity: canScrollNext ? 1 : 0.5,
            }}
            aria-label="Next slide"
          >
            <ChevronRight size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="transition-all duration-300"
              style={{
                width: index === selectedIndex ? "24px" : "6px",
                height: "2px",
                background: index === selectedIndex ? "oklch(0.12 0.005 60)" : "oklch(0.75 0.006 60)",
                border: "none",
                cursor: "pointer",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
