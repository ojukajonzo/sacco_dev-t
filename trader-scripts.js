document.addEventListener('DOMContentLoaded', () => {
    // Simulated Trader (for demo purposes)
    const currentTrader = {
        name: 'Sarah',
        role: 'Trader'
    };
    document.querySelector('.user-info span').textContent = `Welcome, ${currentTrader.name}`;

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

    // Tab Switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Manage Listings
    const listingsList = document.getElementById('listings-list');
    const listingForm = document.getElementById('listing-form');
    const formTitle = document.getElementById('form-title');
    const listingIdInput = document.getElementById('listing-id');
    const productNameInput = document.getElementById('product-name');
    const priceInput = document.getElementById('price');
    const descriptionInput = document.getElementById('description');
    const contactInput = document.getElementById('contact');
    let listingIdCounter = 2; // Start after the sample listing (ID 1)

    // Add New Listing
    document.getElementById('add-listing-btn').addEventListener('click', () => {
        formTitle.textContent = 'Add New Listing';
        listingForm.style.display = 'block';
        listingForm.reset();
        listingIdInput.value = '';
    });

    // Cancel Form
    document.getElementById('cancel-form').addEventListener('click', () => {
        listingForm.style.display = 'none';
        listingForm.reset();
    });

    // Submit Listing Form (Add/Edit)
    listingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const listingId = listingIdInput.value;
        const productName = productNameInput.value.trim();
        const price = priceInput.value;
        const description = descriptionInput.value.trim();
        const contact = contactInput.value.trim();

        if (!productName || !price || !description || !contact) {
            alert('Please fill in all fields.');
            return;
        }

        if (listingId) {
            // Edit existing listing
            const listing = document.querySelector(`#listings-list li[data-id="${listingId}"]`);
            listing.querySelector('h3').textContent = `${productName} - UGX ${price}`;
            listing.querySelector('p').textContent = `${description} Contact: ${contact}`;
        } else {
            // Add new listing
            const newListing = document.createElement('li');
            newListing.setAttribute('data-id', listingIdCounter++);
            newListing.innerHTML = `
                <div>
                    <h3>${productName} - UGX ${price}</h3>
                    <p>${description} Contact: ${contact}</p>
                </div>
                <div>
                    <button class="edit-btn">Edit</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;
            listingsList.appendChild(newListing);
        }

        listingForm.style.display = 'none';
        listingForm.reset();
        // In a real app, this would save the listing to the Trader Listings Database (D4)
    });

    // Edit/Delete Listings (Delegate events for dynamic listings)
    listingsList.addEventListener('click', (e) => {
        const target = e.target;
        const listing = target.closest('li');
        if (!listing) return;

        // Edit Listing
        if (target.classList.contains('edit-btn')) {
            formTitle.textContent = 'Edit Listing';
            listingForm.style.display = 'block';
            listingIdInput.value = listing.getAttribute('data-id');
            const [productName, price] = listing.querySelector('h3').textContent.split(' - UGX ');
            const [description, contact] = listing.querySelector('p').textContent.split(' Contact: ');
            productNameInput.value = productName;
            priceInput.value = price;
            descriptionInput.value = description;
            contactInput.value = contact;
        }

        // Delete Listing
        if (target.classList.contains('delete-btn')) {
            if (confirm('Are you sure you want to delete this listing?')) {
                listing.remove();
                // In a real app, this would delete the listing from the database
            }
        }
    });
});