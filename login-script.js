document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle (Simulated)
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('change', (e) => {
        const lang = e.target.value;
        alert(`Language switched to ${lang === 'en' ? 'English' : 'Luganda'}. Translation not implemented in this demo.`);
    });

    // Login Form
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const userType = document.getElementById('user-type').value;

        if (!username || !password || !userType) {
            alert('Please fill in all fields.');
            return;
        }

        // Simulate login success and redirect based on user type
        switch (userType) {
            case 'member':
                window.location.href = 'index.html';
                break;
            case 'leader':
                window.location.href = 'leader-portal.html';
                break;
            case 'trader':
                window.location.href = 'trader-portal.html';
                break;
            default:
                alert('Invalid user type selected.');
        }
        // In a real app, this would authenticate via an API and redirect
    });
});