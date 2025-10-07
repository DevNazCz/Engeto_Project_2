const filmsDropdown = document.getElementById("films-select");
const moviesSection = document.getElementById("movies");

const loadShows = () => {
  const searchTerm = filmsDropdown.value.trim();
  if (!searchTerm) return; // Do nothing if no input is selected

  fetch(
    `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchTerm)}`
  )
    .then((response) => response.json())
    .then((results) => {
      moviesSection.innerHTML = ""; // Clear previous results

      for (const result of results) {
        const show = result.show;
        // Display image only if it exists
        if (show.image?.medium) {
          const imgElement = document.createElement("img");
          imgElement.src = show.image.medium;
          imgElement.alt = show.name;
          moviesSection.appendChild(imgElement);
        }
      }
    })
    .catch((error) => {
      console.error("Error while fetching data:", error);
    });
};

// Run when user changes selection or when page loads
filmsDropdown.addEventListener("change", loadShows);
window.addEventListener("DOMContentLoaded", loadShows);
