
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function setupScrollTrigger() {
  const sections = document.querySelectorAll("[data-scroll-section]");
  
  // Create gradient animation on scroll
  gsap.to("body", {
    backgroundImage: "linear-gradient(135deg, #1a365d 0%, #327da8 50%, #4299e1 100%)",
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const hue1 = gsap.utils.interpolate(26, 210, progress);
        const hue2 = gsap.utils.interpolate(96, 240, progress);
        document.body.style.backgroundImage = `linear-gradient(135deg, 
          hsl(${hue1}, 70%, 20%) 0%, 
          hsl(${hue2}, 50%, 40%) 50%, 
          hsl(${hue1}, 60%, 60%) 100%)`;
      }
    },
    immediateRender: false
  });

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
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  });
}
