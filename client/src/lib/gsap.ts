import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupScrollTrigger() {
  const sections = document.querySelectorAll("[data-scroll-section]");

  sections.forEach((section) => {
    gsap.fromTo(
      section,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",

  // Background color change on scroll
  gsap.to("body", {
    backgroundColor: "#327da8",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
    },
    immediateRender: false
  });

          end: "top 20%",
          scrub: 1,
        },
      }
    );
  });
}
