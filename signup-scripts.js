document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle (Simulated)
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('change', (e) => {
        const lang = e.target.value;
        alert(`Language switched to ${lang === 'en' ? 'English' : 'Luganda'}. Translation not implemented in this demo.`);
    });

    // Signup Form
    const signupForm = document.getElementById('signup-form');
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const userType = document.getElementById('user-type').value;
        const sex = document.getElementById('sex').value;
        const region = document.getElementById('region').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();

        if (!username || !password || !userType || !sex || !region || !phone || !email) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate signup success
        alert('Signup successful! Please login with your new credentials.');
        window.location.href = 'login.html';
        // In a real app, this would save the user details to a database (e.g., D1: Member Database for Members)
    });
});