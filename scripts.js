document.addEventListener('DOMContentLoaded', () => {
    // Screen Management
    const screens = document.querySelectorAll('.screen');
    const showScreen = (screenId) => {
        screens.forEach(screen => screen.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    };

    // Login Form
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        if (username && password) {
            // Simulate login success
            document.querySelector('#home-screen h1').textContent = `Welcome, ${username}`;
            showScreen('home-screen');
            // In a real app, this would authenticate via an API
        } else {
            alert('Please enter username and password.');
        }
    });

    // Language Toggle (Simulated)
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('change', (e) => {
        const lang = e.target.value;
        alert(`Language switched to ${lang === 'en' ? 'English' : 'Luganda'}. Translation not implemented in this demo.`);
        // In a real app, this would update text content based on language files
    });

    // Logout Button (Simulated)
    document.getElementById('logout-btn').addEventListener('click', () => {
        alert('Logging out...');
        showScreen('login-screen');
        // In a real app, this would clear session data and redirect to login
    });

    // Quick Actions
    document.getElementById('check-balance-btn').addEventListener('click', () => {
        showScreen('balance-screen');
        // In a real app, this would fetch balance data from the Member Database (D1)
    });

    document.getElementById('view-announcements-btn').addEventListener('click', () => {
        showScreen('announcements-screen');
        // In a real app, this would fetch announcements from the Announcements Database (D3)
    });

    document.getElementById('contact-sacco-btn').addEventListener('click', () => {
        showScreen('contact-screen');
    });

    // Back Buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            showScreen('home-screen');
        });
    });
});