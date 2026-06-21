// PARALLAX MOUSE MOVE
document.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".layer").forEach((layer) => {
    const speed = layer.getAttribute("data-speed") || 20;
    const x = (window.innerWidth - e.pageX * speed) / 200;
    const y = (window.innerHeight - e.pageY * speed) / 200;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
});

// GSAP HERO FADE-IN
gsap.from(".title", { y: 40, opacity: 0, duration: 1.2 });
gsap.from(".subtitle", { y: 40, opacity: 0, duration: 1.2, delay: 0.2 });
gsap.from(".desc", { y: 40, opacity: 0, duration: 1.2, delay: 0.4 });
gsap.from(".btn", { y: 40, opacity: 0, duration: 1.2, delay: 0.6 });

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});
