const firstPass = document.getElementById("input-password");
const secondPass = document.getElementById("input-second-password");

// Function to validate password confirmation

const validatePasswords = () => {
  // Get the current values from both password fields

  const pass1 = firstPass.value;
  const pass2 = secondPass.value;

  // Clear any previous validation classes (valid/invalid) from both fields

  firstPass.classList.remove("valid", "invalid");
  secondPass.classList.remove("valid", "invalid");

  if (pass1 === "" && pass2 === "") {
    return;
  }

  //Determine the correct class based on whether passwords match

  const className = pass1 === pass2 ? "valid" : "invalid";

  // Only apply validation classes if both fields have content

  if (pass1 && pass2) {
    firstPass.classList.add(className);
    secondPass.classList.add(className);
  }
};

// Listen for input events on both fields to trigger validation function

firstPass.addEventListener("input", validatePasswords);
secondPass.addEventListener("input", validatePasswords);
