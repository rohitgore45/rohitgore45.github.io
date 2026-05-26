document.addEventListener("DOMContentLoaded", () => {
  // Preloader
  setTimeout(() => {
    document.getElementById("preloader").style.display = "none";
  }, 1200);

  // Hero fade-in
  document.querySelector(".hero").classList.add("visible");

  // Scroll reveal
  const revealEl = document.querySelectorAll(".reveal");
  const onScroll = () => {
    revealEl.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 120) el.classList.add("visible");
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});
