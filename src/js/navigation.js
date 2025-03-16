document.addEventListener("DOMContentLoaded", () => {
    // Add data arrays at the top of the file
    const brands = ["Denmax-ortho", "Bondent", "Mediair", "Denmax", "Apple-dent", "Orikam", "Gnatus", "Baolai", "Polodent", "3m", /* ...rest of brands... */];
    const procedures = ["Restoration Carvers", "Periodontics", "Composite Restoration", /* ...rest of procedures... */];
    const products = ["Nitrile Gloves", "Latex Gloves", "Dental Floss", /* ...rest of products... */];

    // Fetch the exact categories from the JSON file
    fetch('data/categories.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(categories => {
            const categoryNav = document.getElementById("category-nav");
            const categoryList = document.getElementById("category-list");

            // Clear any existing content
            categoryNav.innerHTML = '';
            categoryList.innerHTML = '';

            // Render navigation and cards for each category
            categories.forEach(category => {
                // Create navigation list item
                const navItem = document.createElement("li");
                navItem.textContent = category.name;
                navItem.addEventListener("click", () => {
                    if (category.subcategories) {
                        showSubcategories(category);
                    } else {
                        console.log(`Clicked category: ${category.name}`);
                    }
                });
                categoryNav.appendChild(navItem);

                // Create category card
                const categoryCard = document.createElement("div");
                categoryCard.className = "category-card";
                categoryCard.innerHTML = `
                    <img src="${category.image}" alt="${category.name}">
                    <h3>${category.name}</h3>
                    <p>${category.description}</p>
                    ${category.subcategories ? `<div class="subcategories-preview">View Options</div>` : ''}
                `;
                categoryCard.addEventListener("click", () => {
                    if (category.subcategories) {
                        showSubcategories(category);
                    } else {
                        console.log(`Clicked category: ${category.name}`);
                    }
                });
                categoryList.appendChild(categoryCard);
            });
        })
        .catch(error => {
            console.error('Error loading categories:', error);
            document.getElementById("category-list").innerHTML = `
                <div class="error-message">
                    <h3>Sorry, we couldn’t load the categories</h3>
                    <p>Please try refreshing the page</p>
                </div>
            `;
        });

    function showSubcategories(category) {
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Categories</a> > ${category.name}
            </div>
            <div class="subcategories-grid">
                ${category.subcategories.map(sub => `
                    <div class="subcategory-card" data-id="${sub.id}">
                        <h4>${sub.name}</h4>
                        <p>${sub.description}</p>
                    </div>
                `).join('')}
            </div>
        `;

        // Add click handlers for subcategories
        const subCards = categoriesSection.querySelectorAll('.subcategory-card');
        subCards.forEach(card => {
            card.addEventListener('click', () => {
                if (card.dataset.id === 'endodontics') {
                    showEndodonticsDetails();
                }
            });
        });

        // Back button handler
        const backLink = categoriesSection.querySelector('.back-link');
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            location.reload();
        });
    }

    function showEndodonticsDetails() {
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Dental</a> > Endodontics
            </div>
            
            <div class="product-section">
                <h3>By Brands</h3>
                <ul class="product-list">
                    ${brands.map(brand => `<li>${brand}</li>`).join('')}
                </ul>
            </div>

            <div class="product-section">
                <h3>By Procedure</h3>
                <ul class="product-list">
                    ${procedures.map(proc => `<li>${proc}</li>`).join('')}
                </ul>
            </div>

            <div class="product-section">
                <h3>By Products</h3>
                <ul class="product-list">
                    ${products.map(product => `<li>${product}</li>`).join('')}
                </ul>
            </div>
        `;

        const backLink = categoriesSection.querySelector('.back-link');
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            const dental = categories.find(c => c.id === "8");
            showSubcategories(dental);
        });
    }
});
