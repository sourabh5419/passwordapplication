/*const retrievePasswordForm = document.getElementById("retrieve-password-form");
const verificationCodeForm = document.getElementById("verification-code-form");

retrievePasswordForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the username or email address from the form
  const usernameOrEmail = document.getElementById("username-or-email").value;

  // Send a verification code to the user's email address
  // or perform face ID detection

  // Display the verification code form
  document.querySelector(".verification-code").style.display = "block";
});

verificationCodeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Get the verification code from the form
  const verificationCode = document.getElementById("verification-code").value;

  // Verify the verification code

  // If the verification code is valid, retrieve the user's password from the local storage and display it to the user
});
*/
const loginForm = document.getElementById("login-form");
const verificationCodeForm = document.getElementById("verification-code-form");
const faceIdDetectionButton = document.getElementById("face-id-detection-button");

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the email and password from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Send the email and password to the server for verification
  // If the email and password are valid, the server will send a verification code to the user's email address

  // Display the verification code form
  verificationCodeForm.style.display = "block";
});

verificationCodeForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  // Get the verification code from the form
  const verificationCode = document.getElementById("verification-code").value;

  // Verify the verification code with the server
  // If the verification code is valid, the server will authenticate the user

  // If the user is authenticated, redirect them to the main page of your application
});

faceIdDetectionButton.addEventListener("click", async () => {
  // Perform face ID detection
  // If the face ID detection is successful, authenticate the user

  // If the user is authenticated, redirect them to the main page of your application
});
