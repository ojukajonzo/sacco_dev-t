document.addEventListener('DOMContentLoaded', () => {
    // Sidebar Navigation
    const navLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.content-section');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            // Add active class to clicked link and corresponding section
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
        // In a real app, this would update text content based on language files
    });

    // Logout Button (Simulated)
    document.getElementById('logout-btn').addEventListener('click', () => {
        alert('Logging out...');
        // In a real app, this would redirect to a login page
    });

    // Financial Reports Form
    document.getElementById('report-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const reportType = document.getElementById('report-type').value;
        const startDate = document.getElementById('date-range-start').value;
        const endDate = document.getElementById('date-range-end').value;
        document.getElementById('report-output').innerHTML = `
            <p>Preview: Generated ${reportType} from ${startDate} to ${endDate}</p>
            <button id="export-report">Export (PDF/Excel)</button>
        `;
        // In a real app, this would call an API to generate the report
    });

    // Event Alerts Form
    document.getElementById('alert-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('event-title').value;
        const description = document.getElementById('event-description').value;
        const date = document.getElementById('event-date').value;
        const method = document.getElementById('delivery-method').value;
        document.getElementById('alert-confirmation').innerHTML = `
            <p>Alert "${title}" sent via ${method} for ${date}.</p>
        `;
        // In a real app, this would send the alert via SMS/app
    });

    // Branding Updates Form
    document.getElementById('update-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('update-title').value;
        const message = document.getElementById('update-message').value;
        document.getElementById('update-confirmation').innerHTML = `
            <p>Update "${title}" posted successfully.</p>
        `;
        // In a real app, this would post the update to the database
    });

    // Transaction Recording Form
    document.getElementById('transaction-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const memberId = document.getElementById('member-id').value;
        const type = document.getElementById('transaction-type').value;
        const amount = document.getElementById('amount').value;
        const date = document.getElementById('transaction-date').value;
        document.getElementById('transaction-confirmation').innerHTML = `
            <p>${type} of UGX ${amount} recorded for Member ID ${memberId} on ${date}.</p>
        `;
        // In a real app, this would save the transaction to the database
    });
});