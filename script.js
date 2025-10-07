// A button that scrolls the page up

const scrollButton = document.getElementById("scroll-btn");

window.addEventListener("scroll", () => {
  scrollButton.classList.toggle("hidden", scrollY <= 250);
});
