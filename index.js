// GSAP animations

var screenSize = document.documentElement.clientWidth || window.innerWidth;

if (screenSize <= 992) {
} else {
  let tl = gsap.timeline({ paused: true });

  tl.to(".strategy", { opacity: 0.5, duration: 4 });

  tl.to(".creative", { opacity: 100, duration: 4 }, "<");

  tl.to(
    ".strategy-highlighted",
    {
      backgroundColor: "#fbf5ee",
      color: "#323031",
      scale: 1,
      boxShadow: "none",
      duration: 4,
      ease: "power1.in",
    },
    "<"
  );

  tl.to(
    ".creative-highlighted",
    {
      backgroundColor: "#db6842",
      color: "#fbf5ee",
      scale: 1.1,
      boxShadow: "0px 4px 14px 2px rgba(0, 0, 0, 0.25)",
      duration: 4,
      ease: "power1.in",
    },
    "<"
  );

  let t2 = gsap.timeline({});

  t2.to(".cta-main_astronaut-image, .cta-main_moon-image", {
    yPercent: 25,
    ease: "none",
    scrollTrigger: { trigger: ".section_cta-main", scrub: 2 },
  });

  let t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".home-work_component",
      start: "top 15%",
      scrub: 1,
    },
  });

  t3.to(".home-work_animated-image", { opacity: 100, y: "-3rem", duration: 1 });

  let t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".services-offering_component-bottom",
      start: "top 75%",
      scrub: 2,
    },
  });

  t4.fromTo(
    ".services-offering_item",
    { opacity: 0 },
    { opacity: 100, stagger: 0.5, duration: 2, ease: "power1.in" }
  );

  let t5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".process_component",
      start: "top 70%",
      scrub: 1,
    },
  });

  t5.fromTo(
    ".process_item",
    { opacity: 0 },
    { opacity: 100, stagger: 0.5, duration: 2, ease: "power1.in" }
  );

  let t6 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section_home-about",
      start: "top 50%",
      end: "bottom 75%",
      scrub: 0.5,
    },
  });

  t6.fromTo(
    ".home-about_moon-image",
    { scale: 0.75 },
    { scale: 1.1, duration: 2 }
  );
}