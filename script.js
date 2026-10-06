```javascript
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

  // Initial hero animation
  const intro = gsap.timeline();

  intro
    .from(".eyebrow", {
      y: 20,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from("#headline", {
      y: 50,
      opacity: 0,
      duration: 1.1,
      ease: "power4.out"
    }, "-=.45")
    .from(".subtitle", {
      y: 25,
      opacity: 0,
      duration: .8,
      ease: "power3.out"
    }, "-=.6")
    .from(".stat", {
      y: 25,
      opacity: 0,
      duration: .7,
      stagger: .15,
      ease: "power3.out"
    }, "-=.4")
    .from(".visual-wrap", {
      scale: .75,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    }, "-=1");

  // Main scroll-driven animation
  gsap.to(".visual-wrap", {
    y: 420,
    x: -180,
    scale: 1.25,
    rotation: -8,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      scrub: 1
    }
  });

  // Headline moves away as user scrolls
  gsap.to(".hero-content", {
    y: -180,
    opacity: .15,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "60% top",
      scrub: 1
    }
  });

  // Background movement
  gsap.to(".hero-bg", {
    y: 250,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5
    }
  });

  // Orbs move independently
  gsap.to(".orb-one", {
    x: -180,
    y: 250,
    rotation: 180,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.5
    }
  });

  gsap.to(".orb-two", {
    x: 250,
    y: -250,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom bottom",
      scrub: 1.2
    }
  });

  // Scroll indicator fades away
  gsap.to(".scroll-indicator", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".hero",
      start: "10% top",
      end: "20% top",
      scrub: true
    }
  });

});
```