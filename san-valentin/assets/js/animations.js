gsap.registerPlugin(ScrollTrigger);

// Mouse scroll animation
gsap.to(".mouse span", {
  y: 8,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

// scroll down arrow animation
gsap.to(".arrow span", {
  y: 5,
  ease: "power1.inOut",
  repeat: -1,
  yoyo: true,
});

// Main container animation
// Image coming from the left
gsap.from(".main-section .image-area", { opacity: 0, x: -100, duration: 3 });
// Text content coming from the right
gsap.from(".main-section .content-area", { opacity: 0, x: 100, duration: 3 });
gsap.from(".main-section .content-area .scroll-down", {
  opacity: 0,
  duration: 2,
  delay: 3,
});

// Now we create the animation for the second section, the "us" section.
let usTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".us-section",
    toggleActions: "restart pause resume pause",
  },
});

usTimeline
  .from(".us-section .content-area", { opacity: 0, duration: 1 })
  .from(".message .title", { opacity: 0, x: -50, duration: 1 })
  .from(".message p", { opacity: 0, x: 100, duration: 1 })
  .from(".us-section .content-area .image-area", {
    opacity: 0,
    duration: 1,
    transform: "scale(0)",
    ease: "elastic(1, 0.6)",
  });

// Now we create another animation for the images within the ".us-section"
let imagesTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".us-section .cards-area",
    toggleActions: "restart pause resume reset",
    start: "top center",
  },
});

imagesTimeline.from(".cards-area img", {
  rotation: 360,
  x: -1200,
  duration: 1.5,
  stagger: 1,
});

// Another timeline for teh ".actually" section
let actuallyTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".actually",
    toggleActions: "restart pause resume pause",
  },
});

actuallyTimeline
  .from(".actually .content-area", { opacity: 0, duration: 1 })
  .from(".actually .content-area h2", {
    opacity: 0,
    duration: 1,
    ease: "circ.in",
    x: -50,
  })
  .from(".actually .content-area img", {
    opacity: 0,
    duration: 1,
    transform: "scale(0)",
    ease: "elastic(1, 0.8)",
  })
  .from(".actually .content-area .text-area .stagger", {
    opacity: 0,
    duration: 1,
    y: -50,
    stagger: 0.6,
  });

// Animation for the text in the footer
let footerTextTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".footer .title-wrapper",
    toggleActions: "restart pause resume pause",
  },
});

footerTextTimeline
  .from(".footer .space .title-wrapper h2", {
    x: "-101%",
    duration: 1,
    ease: "elastic(1, 1.3)",
  })
  .from(".footer .text p", { x: "-101%", duration: 1, stagger: 0.6 })
  .from(".footer .text .footer-img", {
    x: "-101%",
    ease: "elastic(1, 0.6)",
    duration: 1,
  })
  .from(".footer .i-love-you", {
    opacity: 0,
    duration: 1.5,
  });

/* 
  Menu toggler animations
*/
function toggleMenu() {
  const toggler = document.getElementById("activator");
  toggler.classList.toggle("collapsed");
}

let card = document.getElementById("activator");
let tl = gsap.timeline({
  defaults: {
    ease: "power2.inOut",
  },
});
tl.pause();

let toggle = false;

tl.to(".activator", {
  background: "#b12828",
  borderTopLeftRadius: "0",
  borderBottomLeftRadius: "0",
});
tl.to(
  "nav",
  {
    clipPath: "ellipse(100% 100% at 50% 50%)",
  },
  "-=.5"
);
tl.to(
  "nav ul li a span",
  {
    opacity: 1,
    transform: "translateX(0)",
    stagger: 0.05,
    ease: "elastic(1, 0.3)",
    duration: 1,
  },
  "-=.5"
);

card.addEventListener("click", () => {
  toggle = !toggle;
  if (toggle ? tl.play() : tl.reverse());
});
