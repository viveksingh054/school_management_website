// Handle Login Form Submission
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById('loginForm');
    const registrationForm = document.getElementById('registrationForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Simple validation for demonstration
            if (username === 'admin' && password === 'password123') {
                alert('Login Successful!');
            } else {
                alert('Invalid credentials, please try again.');
            }
        });
    }

    // Handle Registration Form Submission
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const firstName = document.getElementById('first_name').value;
            const lastName = document.getElementById('last_name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const dob = document.getElementById('dob').value;
            const gender = document.getElementById('gender').value;
            const course = document.getElementById('course').value;

            // Check if all required fields are filled
            if (firstName && lastName && email && phone && dob && gender && course) {
                alert('Registration Successful!');
            } else {
                alert('Please fill out all required fields.');
            }
        });
    }
});
