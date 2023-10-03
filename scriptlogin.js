/*document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can add your authentication logic here

        if (username === 'sourabh' && password === 'belure') {
            alert('Login successful');
            // Redirect to the password manager app or perform other actions
        } else {
            alert('Login failed. Please check your credentials.');
        }
    });
});*/
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // You can add your authentication logic here

        if (username === 'sourabh' && password === 'belure') {
            alert('Login successful');
            // Redirect to the saveretrievepass.html page upon successful login
            window.location.href = 'saveretrivepass.html';
        } else {
            alert('Login failed. Please check your credentials.');
        }
    });
});
