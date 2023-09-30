document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registration-form');

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }

        // Check if the username already exists (in this simple example, we use local storage)
        const existingUser = localStorage.getItem(newUsername);
        if (existingUser !== null) {
            alert('Username already exists. Please choose a different username.');
            return;
        }

        // Store the new user's information in local storage (you should use a server and database)
        localStorage.setItem(newUsername, newPassword);

        alert('Registration successful! You can now login with your new account.');
        
        // Redirect to the login page after successful registration
        window.location.href = 'index.html';
    });
});
