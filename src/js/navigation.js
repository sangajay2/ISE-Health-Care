document.addEventListener("DOMContentLoaded", () => {
    // Add data arrays at the top of the file
    const brands = ["Denmax-ortho", "Bondent", "Mediair", "Denmax", "Apple-dent", "Orikam", "Gnatus", "Baolai", "Polodent", "3m", /* ...rest of brands... */];
    const procedures = ["Restoration Carvers", "Periodontics", "Composite Restoration", /* ...rest of procedures... */];
    const products = ["Nitrile Gloves", "Latex Gloves", "Dental Floss", /* ...rest of products... */];

    // Add additional branch arrays for Diagnostics Instrument
    const diagnosticTypeProducts = [
        "Blood bank instrument",
        "Glucometer Strip",
        "Glucometer",
        "ELISA plate",
        "Haemoglobin Meter",
        "POCT Analyser",
        "Urine Analyzer",
        "Monitor",
        "Electrode",
        "ELISA reader"
    ];
    const diagnosticSpecialities = [
        "Transfusion medicine",
        "Diagnostics",
        "POCT",
        "Biochemistry",
        "Histopathology",
        "Clinical Pathology",
        "Hematology",
        "General Hand Instruments and Hollowares",
        "Immunology"
    ];
    // Custom subcategories for Diagnostics
    const customDiagnosticsSubcategories = [
        { id: "instrument", name: "Instrument", description: "Explore Instruments" },
        { id: "biochemistry", name: "Biochemistry", description: "Explore Biochemistry" },
        { id: "rapidCard", name: "Rapid Card", description: "Explore Rapid Card" },
        { id: "phlebotomy", name: "Phlebotomy", description: "Explore Phlebotomy" },
        { id: "diagnosticTestKit", name: "Diagnostic Test Kit", description: "Explore Diagnostic Test Kit" },
        { id: "equipmentAccessories", name: "Equipment & Accessories", description: "Explore Equipment & Accessories" }
    ];

    // Add custom subcategories for Consumables
    const customConsumablesSubcategories = [
        { id: "medicalConsumables", name: "Medical Consumables", description: "Explore Medical Consumables" },
        { id: "surgicalConsumables", name: "Surgical Consumables", description: "Explore Surgical Consumables" },
        { id: "hygieneControl", name: "Hygiene Control", description: "Explore Hygiene Control" },
        { id: "bandagesWound", name: "Bandages & Wound", description: "Explore Bandages & Wound" }
    ];

    // Add arrays for Medical Consumables details
    const medicalConsumablesTypeProducts = [
        "Stethoscope",
        "Forceps",
        "Trolley",
        "Syringe with Needle",
        "Generic",
        "IV Cannula",
        "Temporary Restoratives",
        "Dental Alginate",
        "Lancet",
        "Mesh"
    ];
    const medicalConsumablesSpecialities = [
        "General Consumable and Disposables",
        "Respiratory Consumables",
        "Diagnostics",
        "Ophthalmology",
        "Prosthodontics",
        "Implantology",
        "Endodontics",
        "Hospital Furniture",
        "Conservative Dentistry"
    ];

    // Add custom subcategories for Equipment
    const customEquipmentSubcategories = [
        { id: "cardiology", name: "Cardiology", description: "Explore Cardiology" },
        { id: "ophthalmology", name: "Ophthalmology", description: "Explore Ophthalmology" },
        { id: "respiratory", name: "Respiratory", description: "Explore Respiratory" },
        { id: "diagnostics", name: "Diagnostics", description: "Explore Diagnostics" },
        { id: "generalSurgery", name: "General Surgery", description: "Explore General Surgery" },
        { id: "dermatology", name: "Dermatology", description: "Explore Dermatology" },
        { id: "hospitalUtilities", name: "Hospital Utilities", description: "Explore Hospital Utilities" },
        { id: "gynecologyObstetrics", name: "Gynecology & Obstetrics", description: "Explore Gynecology & Obstetrics" }
    ];

    // Add array for Equipment Respiratory Type Products
    const equipmentRespiratoryTypeProducts = [
        "Suction Machine",
        "Ventilator",
        "Fingertip Pulse Oximeter",
        "Nebulizer",
        "Compressor Nebulizer",
        "Spirometer",
        "BiPAP Machine",
        "Air Purifier",
        "BPAP Machine",
        "CPAP Machine"
    ];

    // Fetch the exact categories from the JSON file
    fetch('src/data/categories.json')
        .then(response => { 
            if (!response.ok) { throw new Error(`HTTP error! status: ${response.status}`); }
            return response.json();
        })
        .then(categories => {
            categories.forEach(category => {
                if (category.name === "Diagnostics") {
                    // Override Diagnostics image with the new correct link
                    category.image = "https://etimg.etb2bimg.com/photo/112526425.cms";
                }
                if (category.name === "Consumables") {
                    category.image = "https://cdn-eplif.nitrocdn.com/wfvegrjPEPShEqEfUEqBAgAAxqbKSQLL/assets/images/optimized/rev-ffadd5f/wp-content/uploads/2022/10/Room-with-high-stock-levels-of-hospital-equipment.png";
                }
                if (category.name === "Equipment") {
                    category.image = "https://alliedusa.net/wp-content/uploads/2022/06/Tips-for-Choosing-Medical-Equipment-For-Your-Practice.jpg.webp";
                }
                if (category.name === "Ophthalmology") {
                    // Override Ophthalmology image with the provided link
                    category.image = "https://cdn.castleconnolly.com/dims4/default/fec3343/2147483647/strip/true/crop/1000x563+0+0/resize/840x473!/quality/90/?url=http%3A%2F%2Fcastle-connolly-brightspot.s3.us-east-1.amazonaws.com%2Fe0%2F4e%2Fca13f3ee428b9805eeef5aef9540%2Fpillar-opthamology-01-1200x675.jpg";
                }
                if (category.name === "Physiotherapy") {
                    // Override Physiotherapy image with the provided link
                    category.image = "https://regencyhealthcare.in/wp-content/uploads/2018/06/How-physiotherapy-can-help-with-pain-relief-and-better-mobility-1-1200x800.png";
                }
                if (category.name === "Nephrology") {
                    category.image = "https://www.omegahospitals.com/_next/image?url=https%3A%2F%2Fomegafilesstore.s3.ap-south-1.amazonaws.com%2Fwebsite%2Fspecializations%2Fnephrology.png&w=3840&q=75";
                }
                if (category.name === "Refurbished Devices") {
                    // Updated Refurbished image with new link
                    category.image = "https://meditechinsights.com/wp-content/uploads/2022/06/Refurbished-Medical-Equipment-Market-Website-New-e1655717061659.jpg";
                }
                if (category.name === "Dental") {
                    category.image = "https://www.dentistshorsham.co.uk/wp-content/uploads/2021/10/dental-health-care-blog.jpg.webp";
                    // Set only "Dental Equipments" as description
                    category.description = "Dental Equipments";
                }
                // ...existing forEach code...
            });
            // Define categories to remove from the heading navigation.
            const removeCats = ["Diagnostics", "Consumables", "Equipment", "Ophthalmology", "Nephrology", "Physiotherapy", "Refurbished Devices", "Dental"];
            
            const categoryNav = document.getElementById("category-nav");
            const categoryList = document.getElementById("category-list");

            // Clear any existing content
            categoryNav.innerHTML = '';
            categoryList.innerHTML = '';

            // Render navigation list items only for categories not in removeCats.
            categories.forEach(category => {
                // Override subcategories if needed (unchanged logic)
                if(category.name === "Diagnostics"){
                    category.subcategories = customDiagnosticsSubcategories;
                }
                if(category.name === "Consumables"){
                    category.subcategories = customConsumablesSubcategories;
                }
                if(category.name === "Equipment"){
                    category.subcategories = customEquipmentSubcategories;
                }

                // Render header navigation IF category is not in removeCats.
                if (!removeCats.includes(category.name)) {
                    const navItem = document.createElement("li");
                    navItem.textContent = category.name;
                    navItem.addEventListener("click", () => {
                        if (category.subcategories) {
                            showSubcategories(category);
                        } else {
                            window.location.href = `product.html?section=main&item=${encodeURIComponent(category.name)}`;
                        }
                    });
                    categoryNav.appendChild(navItem);
                }

                // Render category cards for all categories.
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
                        window.location.href = `product.html?section=main&item=${encodeURIComponent(category.name)}`;
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

        // Adjust click handlers for subcategories
        const subCards = categoriesSection.querySelectorAll('.subcategory-card');
        subCards.forEach(card => {
            card.addEventListener('click', () => {
                const selectedSub = card.querySelector('h4').textContent.trim();
                // If Diagnostics and subcategory is Instrument, render branch details
                if(category.name === "Diagnostics" && selectedSub === "Instrument"){
                    showDiagnosticInstrumentDetails();
                } else if(category.name === "Consumables" && selectedSub === "Medical Consumables"){
                    showMedicalConsumablesDetails();
                } else if(category.name === "Equipment" && selectedSub === "Respiratory"){
                    showEquipmentRespiratoryDetails();
                } else if(card.dataset.id === 'endodontics'){
                    showEndodonticsDetails();
                } else {
                    // For other subcategories, navigate directly (or implement additional logic)
                    window.location.href = `product.html?section=sub&item=${encodeURIComponent(selectedSub)}`;
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

    // New function to render Diagnostics → Instrument branches
    function showDiagnosticInstrumentDetails() {
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Diagnostics</a> > Instrument
            </div>
            <div class="product-sections">
                <div class="product-section">
                    <h3>Explore by Type of Products</h3>
                    <ul class="product-list">
                        ${diagnosticTypeProducts.map(prod => `<li>
                            <a href="product.html?section=diagnostics-type&item=${encodeURIComponent(prod)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(prod)}" alt="${prod}">
                                <br>${prod}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="product-section">
                    <h3>Explore by Specialities</h3>
                    <ul class="product-list">
                        ${diagnosticSpecialities.map(spec => `<li>
                            <a href="product.html?section=diagnostics-specialities&item=${encodeURIComponent(spec)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(spec)}" alt="${spec}">
                                <br>${spec}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        const backLink = categoriesSection.querySelector('.back-link');
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            // Reload Diagnostics subcategories—you may change this as needed.
            location.reload();
        });
    }

    function showEndodonticsDetails() {
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Dental</a> > Endodontics
            </div>
            <div class="product-sections">
                <div class="product-section">
                    <h3>By Brands</h3>
                    <ul class="product-list">
                        ${brands.map(brand => `<li>
                            <a href="product.html?section=brands&item=${encodeURIComponent(brand)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(brand)}" alt="${brand}">
                                <br>${brand}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="product-section">
                    <h3>By Procedure</h3>
                    <ul class="product-list">
                        ${procedures.map(proc => `<li>
                            <a href="product.html?section=procedures&item=${encodeURIComponent(proc)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(proc)}" alt="${proc}">
                                <br>${proc}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="product-section">
                    <h3>By Products</h3>
                    <ul class="product-list">
                        ${products.map(product => `<li>
                            <a href="product.html?section=products&item=${encodeURIComponent(product)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(product)}" alt="${product}">
                                <br>${product}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        const backLink = categoriesSection.querySelector('.back-link');
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            const dental = categories.find(c => c.id === "8");
            showSubcategories(dental);
        });
    }

    // New function to render Medical Consumables details
    function showMedicalConsumablesDetails() {
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Consumables</a> > Medical Consumables
            </div>
            <div class="product-sections">
                <div class="product-section">
                    <h3>Explore by Type of Products</h3>
                    <ul class="product-list">
                        ${medicalConsumablesTypeProducts.map(prod => `<li>
                            <a href="product.html?section=consumables-type&item=${encodeURIComponent(prod)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(prod)}" alt="${prod}">
                                <br>${prod}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
                <div class="product-section">
                    <h3>Explore by Specialities</h3>
                    <ul class="product-list">
                        ${medicalConsumablesSpecialities.map(spec => `<li>
                            <a href="product.html?section=consumables-specialities&item=${encodeURIComponent(spec)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(spec)}" alt="${spec}">
                                <br>${spec}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        const backLink = categoriesSection.querySelector('.back-link');
        backLink.addEventListener('click', (e) => {
            e.preventDefault();
            location.reload();
        });
    }

    // New function to render Equipment → Respiratory details
    function showEquipmentRespiratoryDetails() {
        const categoriesSection = document.getElementById("categories");
        categoriesSection.innerHTML = `
            <div class="breadcrumb">
                <a href="#" class="back-link">Back to Equipment</a> > Respiratory
            </div>
            <div class="product-sections">
                <div class="product-section">
                    <h3>Explore by Type of Products</h3>
                    <ul class="product-list">
                        ${equipmentRespiratoryTypeProducts.map(prod => `<li>
                            <a href="product.html?section=equipment-respiratory&item=${encodeURIComponent(prod)}">
                                <img src="https://via.placeholder.com/150?text=${encodeURIComponent(prod)}" alt="${prod}">
                                <br>${prod}
                            </a>
                        </li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        const backLink = document.querySelector('.breadcrumb .back-link');
        backLink.addEventListener('click', (e) => {
             e.preventDefault();
             location.reload();
        });
    }

    // Example: Add event listeners for profile and cart buttons
    document.querySelector('.profile-icon').addEventListener('click', () => {
        alert('Profile button clicked!');
    });

    document.querySelector('.cart-icon').addEventListener('click', () => {
        alert('Cart button clicked!');
    });

    // At the end of the file, update event listeners for the new navbar links
    document.getElementById("home-link").addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
    });

    // Toggle the "Products" dropdown instead of scrolling
    document.getElementById("products-link").addEventListener("click", (e) => {
        e.preventDefault();
        const dropdown = document.getElementById("products-dropdown");
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    });

    document.getElementById("pricing-link").addEventListener("click", (e) => {
        e.preventDefault();
        alert("Pricing details coming soon!");
    });

    document.getElementById("contact-link").addEventListener("click", (e) => {
        e.preventDefault();
        alert("Contact us at: info@example.com");
    });
});
