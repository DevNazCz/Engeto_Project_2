const select = document.getElementById("films-select");
const moviesSection = document.getElementById("movies");

const loadShows = () => {
  moviesSection.innerHTML = ""; // Clear previous results

  const value = select.value.trim();
  if (!value) return; // Do nothing if no input is selected

  fetch(`https://api.tvmaze.com/search/shows?q=${value}`)
    .then((response) => response.json())
    .then((data) => {
      for (const result of data) {
        const show = result.show;

        // Display image only if it exists
        if (show.image?.medium) {
          const imgElement = document.createElement("img");
          imgElement.src = show.image.medium;
          imgElement.alt = show.name;
          moviesSection.appendChild(imgElement);
        }
      }
      // Display a message if no results were found
      if (data.length === 0) {
        const noResultsElement = document.createElement("p");
        noResultsElement.textContent =
          "No shows found for your search. Please try a different selection.";
        moviesSection.appendChild(noResultsElement);
      }
    })
    .catch((error) => {
      console.error("Error while fetching data:", error);
      const errorElement = document.createElement("p");
      errorElement.textContent =
        "Error loading data. Please check your internet connection or try again later.";

      // Append the error message to the results section
      moviesSection.appendChild(errorElement);
    });
};

// Run when user changes selection
select.addEventListener("change", loadShows);
