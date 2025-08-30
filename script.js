// A button that scrolls the page up

const scrollButton = document.getElementById("scroll-btn");

window.addEventListener("scroll", () => {
  scrollButton.style.display = scrollY <= 250 ? "none" : "block";
});

// Function to validate password confirmation

const firstPass = document.getElementById("input-password");
const secondPass = document.getElementById("input-second-password");

const validatePasswords = () => {
  if (firstPass.value === "" || secondPass.value === "") {
    firstPass.style.borderColor = "";
    secondPass.style.borderColor = "";
    return;
  }

  if (firstPass.value !== secondPass.value) {
    firstPass.style.borderColor = "red";
    secondPass.style.borderColor = "red";
  } else {
    firstPass.style.borderColor = "green";
    secondPass.style.borderColor = "green";
  }
};

firstPass.addEventListener("input", validatePasswords);
secondPass.addEventListener("input", validatePasswords);
