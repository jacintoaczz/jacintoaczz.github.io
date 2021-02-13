window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Getting rid of the preloaders
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");

  preloader.classList.add("preload-finish");
});
