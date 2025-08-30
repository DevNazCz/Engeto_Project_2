const scrollButton = document.getElementById("scroll-btn");

window.addEventListener("scroll", () => {
  scrollButton.style.display = scrollY <= 250 ? "none" : "block";
});