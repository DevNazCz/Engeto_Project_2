// A button that scrolls the page up

const scrollButton = document.getElementById("scroll-btn");

window.addEventListener("scroll", () => {
  scrollButton.classList.toggle("hidden", scrollY <= 250);
});

// Function to validate password confirmation

const firstPass = document.getElementById("input-password");
const secondPass = document.getElementById("input-second-password");

const validatePasswords = () => {
  const pass1 = firstPass.value;
  const pass2 = secondPass.value;

  firstPass.classList.remove("valid", "invalid");
  secondPass.classList.remove("valid", "invalid");

  if (pass1 === "" && pass2 === "") {
    return;
  }

  const className = pass1 === pass2 ? "valid" : "invalid";

  firstPass.classList.add(className);
  secondPass.classList.add(className);
};

firstPass.addEventListener("input", validatePasswords);
secondPass.addEventListener("input", validatePasswords);
