document.addEventListener('DOMContentLoaded', () => {
    // Simulated Member (for demo purposes)
    const currentMember = {
        name: 'John',
        role: 'Member'
    };
    document.querySelector('.user-info span').textContent = `Welcome, ${currentMember.name}`;

    // Sidebar Navigation
    const navLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            link.classList.add('active');
            const sectionId = link.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
        });
    });

    // Language Toggle (Simulated)
    const languageToggle = document.getElementById('language-toggle');
    languageToggle.addEventListener('change', (e) => {
        const lang = e.target.value;
        alert(`Language switched to ${lang === 'en' ? 'English' : 'Luganda'}. Translation not implemented in this demo.`);
    });

    // Logout Button (Simulated)
    document.getElementById('logout-btn').addEventListener('click', () => {
        alert('Logging out...');
        // In a real app, this would redirect to a login page
    });

    // Refresh Balance (Simulated)
    document.getElementById('refresh-balance-btn').addEventListener('click', () => {
        alert('Refreshing balance...');
        // In a real app, this would fetch the latest balance from the Member Database (D1)
    });
});
