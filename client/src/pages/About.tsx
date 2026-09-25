/* =============================================================
   EDITORIAL MINIMAL — About Page
   Asymmetric layout with sage green accent, editorial serif,
   wide-spaced labels, B&W portrait
   ============================================================= */
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

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
              Ali Asadi
            </h1>
          </div>
        </div>
        <div className="divider mt-10" />
      </section>

      {/* Bio + Portrait */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Portrait — layered two-photo composition */}
          <div className="lg:col-span-5 lg:col-start-2 fade-in-text">
            <div className="relative">
              {/* Sage accent block */}
              <div
                className="absolute -top-5 -left-5 w-full h-full"
                style={{ backgroundColor: "var(--sage)", opacity: 0.12 }}
              />
              {/* Main photo */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src="/images/about-field.jpg"
                  alt="Ali Khan Asadi on location"
                  className="w-full h-full object-cover"
                  style={{ filter: "grayscale(85%) contrast(1.05)" }}
                />
              </div>
              {/* Overlapping second photo */}
              <div className="absolute -bottom-8 -right-8 w-[52%] bg-background p-2 shadow-lg">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src="/images/about-desert.jpg"
                    alt="Ali Khan Asadi between takes"
                    className="w-full h-full object-cover"
                    style={{ filter: "grayscale(85%) contrast(1.05)" }}
                  />
                </div>
              </div>
              {/* Color accent photo — on set, teaching/community project */}
              <div className="absolute -top-6 -right-10 w-[42%] bg-background p-2 shadow-lg hidden sm:block">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/images/about-classroom.jpg"
                    alt="Ali Khan Asadi filming a community project"
                    className="w-full h-full object-cover"
                  />
                </div>
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
              Giving voice to what usually stays in the background.
            </div>

            <div
              className="font-body space-y-4"
              style={{ fontSize: "0.8125rem", color: "oklch(0.4 0.008 60)", lineHeight: 1.8 }}
            >
              <p>
                Ali Asadi is a Manchester-based artist filmmaker working across documentary, moving image installation and participatory practice. Originally from Iran, he makes work about migration, memory and belonging, often created with communities and giving voice to what usually stays in the background: the sea and wind on Iran's Caspian coast, the electrical signals of trees, the imagination of diaspora children.
              </p>
              <p>
                His documentary Slow Dusk (2025) was an Official Selection at the Cinéma Vérité Iran International Documentary Film Festival and received an Honourable Mention at Ffilmic Festival (2026). His installations include The Cables, an exploration of memory and displacement developed in dialogue with AI, and In/Tangible at SEESAW Gallery, Manchester. His participatory hybrid documentary Between Two Worlds, co-created with Iranian-British children, premieres at Aviva Studios in December 2026 in collaboration with Sahba House of Arts and Culture and Factory International.
              </p>
              <p>
                He holds an MA in Filmmaking (Distinction) from Manchester Metropolitan University.
              </p>
            </div>

            {/* Meta info */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <p className="label-upper mb-2" style={{ color: "var(--sage-dark)" }}>
                  Based in
                </p>
                <p className="font-body text-sm" style={{ color: "var(--charcoal)" }}>
                  Manchester, UK
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
                  Practice
                </p>
                <p className="font-body text-sm" style={{ color: "var(--charcoal)" }}>
                  Documentary Film · Moving Image Installation · Participatory Practice
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
              <div className="col-span-2">
                <p className="label-upper mb-2" style={{ color: "var(--sage-dark)" }}>
                  CV
                </p>
                {/* TODO: replace mailto with real PDF links once CV files are supplied — see note below */}
                <a
                  href="mailto:alikhanasadi7@gmail.com?subject=CV%20request"
                  className="font-body text-sm relative group inline-block mr-6"
                  style={{ color: "var(--charcoal)" }}
                >
                  Artist's CV
                  <span className="absolute bottom-0 left-0 w-full h-px bg-current opacity-30 group-hover:opacity-100 transition-opacity" />
                </a>
                <a
                  href="mailto:alikhanasadi7@gmail.com?subject=CV%20request"
                  className="font-body text-sm relative group inline-block"
                  style={{ color: "var(--charcoal)" }}
                >
                  Film CV
                  <span className="absolute bottom-0 left-0 w-full h-px bg-current opacity-30 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 lg:col-start-2 fade-in-text">
            <p className="label-upper mb-6" style={{ color: "var(--sage-dark)" }}>
              Artist Statement
            </p>
            <p
              className="font-body"
              style={{ fontSize: "0.9375rem", lineHeight: 1.9, color: "oklch(0.35 0.008 60)" }}
            >
              I make work about what gets left out of the frame — the parts of migration, memory and belonging that don't fit neatly into a single story. Growing up between Iran and the UK, I've come to think of documentary and installation less as ways of recording a subject than as ways of listening to it: to a coastline losing its fishermen, to a tree's electrical signal, to a child's drawing of a place they've never seen. Participation runs through most of what I do, because the people whose lives are on screen usually understand their own story better than I ever could — my job is to build a form sturdy enough to hold it. I'm drawn to sound and image as evidence of things that are hard to say directly: displacement, grief, hope, the pull of two homes at once. I want the work to sit with the discomfort of that rather than resolve it too quickly.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
