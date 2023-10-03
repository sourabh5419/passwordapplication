const savePasswordForm = document.getElementById("save-password-form");

savePasswordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the values from the form
  const website = document.getElementById("website").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Save the credentials to the local storage
  localStorage.setItem("website", website);
  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  // Display a success message
  alert("Password saved successfully!");
});
