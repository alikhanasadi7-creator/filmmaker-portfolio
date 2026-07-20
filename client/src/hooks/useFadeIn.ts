import { useEffect } from "react";

/**
 * Observes all elements with .fade-in-text class
 * and adds .visible when they enter the viewport.
 * Call this hook once per page component.
 */
export function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe fade-in-text and fade-in-stagger elements
    document
      .querySelectorAll(".fade-in-text, .fade-in-stagger")
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
}
