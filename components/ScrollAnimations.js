"use client";

import { useEffect } from "react";

export default function ScrollAnimations() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const targets = Array.from(
      document.querySelectorAll(
        [
          "section h1",
          "section h2",
          "section h3",
          "section .rounded-2xl",
          "section .rounded-3xl",
          "section [data-reveal]",
        ].join(",")
      )
    ).filter((element) => {
      if (element.closest("header")) return false;
      if (element.closest("footer")) return false;
      if (element.closest("[data-no-reveal]")) return false;
      if (element.classList.contains("reveal-ready")) return false;
      return true;
    });

    targets.forEach((element, index) => {
      element.classList.add("reveal-ready");
      element.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -70px 0px",
      }
    );

    targets.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
