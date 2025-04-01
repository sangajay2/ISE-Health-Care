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

    // Add these new product category arrays for comprehensive search
    const surgicalConsumablesProducts = [
        "Suture", "Instrument Trays", "Local Anaesthetics", "Surgical Handles", 
        "Panty", "Hemostatic Agents"
    ];

    const hygieneControlProducts = [
        "Adult Diaper", "Surgical Gloves", "Examination Gloves", "Underpad",
        "Latex Examination Gloves", "Gel"
    ];

    const bandagesWoundProducts = [
        "Dressing", "Surgical tape", "Bandage", "Gauze swab"
    ];

    const cardiologyProducts = [
        "ECG Machine", "Patient Monitor", "Defibrillator", "Patient Monitor Accessories",
        "BPL Single Channel ECG Machine", "BPL Three Channel ECG Machine"
    ];

    const ophthalmologyProducts = [
        "Sugra Led Acuity Vision Chart", "Sugra Distance Vision Drum",
        "Sugra Loose Prism Set", "Sugra Led Vision Chart",
        "Sugra Trial Lens Set Golden and Silver", "Sugra Prism Bar Set"
    ];

    // Add the section mappings at the top with other constants
    const SECTION_MAPPINGS = {
        'diagnostic instruments': 'diagnostics-type',
        'medical consumables': 'consumables-type',
        'surgical consumables': 'surgical-consumables',
        'respiratory equipment': 'respiratory-equipment'
    };

    function getStandardizedSection(category) {
        return SECTION_MAPPINGS[category.toLowerCase()] || category.toLowerCase();
    }

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
                        ${diagnosticTypeProducts.map(prod => {
                            const imageUrl = (() => {
                                if (prod === "Blood bank instrument") {
                                    return "https://mediwise.co.in/wp-content/uploads/2016/10/BCM-20.jpg";
                                } else if (prod === "Glucometer Strip") {
                                    return "https://b-arm.com/wp-content/uploads/2021/06/Untitled-design-23.png";
                                } else if (prod === "Glucometer") {
                                    return "https://m.media-amazon.com/images/I/61vQYB662CL._SL1500_.jpg";
                                } else if (prod === "ELISA plate") {
                                    return "https://www.bosterbio.com/media/magefan_blog/elisa_pipettes.jpg";
                                } else if (prod === "Haemoglobin Meter") {
                                    return "https://static1.industrybuying.com/products/lab-supplies/lab-necessities/lab-measuring-instrument/LAB.LAB.824157316_1704180837354.webp";
                                } else if (prod === "POCT Analyser") {
                                    return "https://cdnus.globalso.com/pushkangbio/28773568.png";
                                } else if (prod === "Urine Analyzer") {
                                    return "https://www.agappe.com/media/catalog/product/u/r/uriskan_plus_2000x.png?auto=webp&format=png&width=960&height=1200&fit=cover";
                                } else if (prod === "Monitor") {
                                    return "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Monitor_%28medical%29.jpg/375px-Monitor_%28medical%29.jpg";
                                } else if (prod === "Electrode") {
                                    return "https://metalcutting.com/wp-content/uploads/2020/04/MCC-swiss-machining-of-medical-electrodes.png";
                                } else if (prod === "ELISA reader") {
                                    return "https://halomedicals.com/wp-content/uploads/2020/08/DAS-Elisa-Reader-570x570.jpg";
                                } else {
                                    return `https://via.placeholder.com/150?text=${encodeURIComponent(prod)}`;
                                }
                            })();
                            return `<li>
                                <a href="product.html?section=diagnostics-type&item=${encodeURIComponent(prod)}">
                                    <img src="${imageUrl}" alt="${prod}" class="diagnostic-img">
                                    <br>${prod}
                                </a>
                            </li>`;
                        }).join('')}
                    </ul>
                </div>
                <div class="product-section">
                    <h3>Explore by Specialities</h3>
                    <ul class="product-list">
                        ${diagnosticSpecialities.map(spec => {
                            const specImage = (() => {
                                if (spec === "Transfusion medicine") {
                                    return "https://www.lexiconin.com/wp-content/uploads/2023/01/image-30.png";
                                } else if (spec === "Diagnostics") {
                                    return "https://txhospitals.in/wp-content/uploads/2024/01/Molecular-Diagnostics.png";
                                } else if (spec === "POCT") {
                                    return "https://www.analis.com/web/image/541803-cdc3bd1a/DIRUI-POCT-URINE%20ANALYSIS-HC%20300.png?access_token=755d8867-fc39-4f80-b693-16ac765c1f78";
                                } else if (spec === "Biochemistry") {
                                    return "https://images.newscientist.com/wp-content/uploads/2019/10/22153920/biochemistry-shutterstock_187967735_web.jpg?width=900";
                                } else if (spec === "Histopathology") {
                                    return "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/MI_with_contraction_bands_very_high_mag.jpg/960px-MI_with_contraction_bands_very_high_mag.jpg";
                                } else if (spec === "Clinical Pathology") {
                                    return "https://www.aprocarediagnostics.com/images/services/ClinicalPathalogy.jpg";
                                } else if (spec === "Hematology") {
                                    return "https://www.regionalcancercare.org/wp-content/uploads/elementor/thumbs/laboratory-technician-placing-patients-blood-sample-on-rack-with-other-test-tubes-qgrhxyrqgo2kn8n3bvhesvol7ktxm0ilyk7ihnh5fc.jpg";
                                } else if (spec === "General Hand Instruments and Hollowares") {
                                    return "https://www.colmed.in/pub/media/catalog/product/cache/0b053d6a941a972e37b88f9ddcceee64/b/p/bphandle.jpg";
                                } else if (spec === "Immunology") {
                                    return "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/MRSA%2C_Ingestion_by_Neutrophil.jpg/800px-MRSA%2C_Ingestion_by_Neutrophil.jpg";
                                } else {
                                    return `https://via.placeholder.com/150?text=${encodeURIComponent(spec)}`;
                                }
                            })();
                            return `<li>
                                <a href="product.html?section=diagnostics-specialities&item=${encodeURIComponent(spec)}">
                                    <img src="${specImage}" alt="${spec}" class="diagnostic-img">
                                    <br>${spec}
                                </a>
                            </li>`;
                        }).join('')}
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
        const medicalConsumablesImages = {
            "Stethoscope": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/Stethoscope_e4FmFEP.jpg?tr=w-150,q-60,f-avif",
            "Forceps": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/surgical-Hand-Instruments_toDYyvt.jpg?tr=w-150,q-60,f-avif",
            "Trolley": "https://static1.industrybuying.com/products/medical-supplies-equipment/hospital-furniture-equipments/hospital-trolley-buckets/MED.HOS.421708665_1695300213030.webp",
            "Syringe with Needle": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/image_UVd7B9q.png?tr=w-150,q-60,f-avif",
            "Generic": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/image_gJ8Eu79.png?tr=w-150,q-60,f-avif",
            "IV Cannula": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/IV_Cannula_0aQbDvk.jpg?tr=w-150,q-60,f-avif",
            "Temporary Restoratives": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/105.Temporary-Restoratives_WHfvLm2.png?tr=w-150,q-60,f-avif",
            "Dental Alginate": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/66.Dental-Alginate_oTfDgnK.png?tr=w-150,q-60,f-avif",
            "Lancet": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/Lancet_vFbHoZN.jpg?tr=w-150,q-60,f-avif",
            "Mesh": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/NewGenericNames/Mesh_di8FgYq.jpg?tr=w-150,q-60,f-avif"
        };
        const medicalConsumablesSpecialityImages = {
            "General Consumable and Disposables": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/General_Consumable_and_Disposables.jpg?tr=w-150,q-60,f-avif",
            "Respiratory Consumables": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Diagnostics_K7WGiYZ.jpg?tr=w-150,q-60,f-avif",
            "Diagnostics": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Respiratory_Se3FjVS.jpg?tr=w-150,q-60,f-avif",
            "Ophthalmology": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/Specialities/HospitalFurniture.jpg?tr=w-150,q-60,f-avif",
            "Prosthodontics": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Ophthalmology_QhotdCG.jpg?tr=w-150,q-60,f-avif",
            "Implantology": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Frame_2.png?tr=w-150,q-60,f-avif",
            "Endodontics": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/Specialities/Implantology.png?tr=w-150,q-60,f-avif",
            "Hospital Furniture": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/Specialities/Endodontics.png?tr=w-150,q-60,f-avif",
            "Conservative Dentistry": "https://ik.imagekit.io/z6mqjyyzz/media/public/default_images/Images/Specialities/Conservative_dentistry.png?tr=w-150,q-60,f-avif"
        };
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
                                <img src="${medicalConsumablesImages[prod]}" alt="${prod}" style="max-width:150px; height:auto;">
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
                                <img src="${medicalConsumablesSpecialityImages[spec] || `https://via.placeholder.com/150?text=${encodeURIComponent(spec)}`}" alt="${spec}" style="max-width:150px; height:auto;">
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

    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');

    function performSearch(query) {
        query = query.toLowerCase().trim();
        if (!query) return;

        const allProducts = [];
        
        // Collect all products with their metadata with normalized text
        function addProducts(products, category, sectionSlug, subcategory = '') {
            products.forEach(prod => 
                allProducts.push({ 
                    name: prod,
                    nameLower: prod.toLowerCase(), 
                    category: category,
                    categoryLower: category.toLowerCase(),
                    subcategory: subcategory,
                    subcategoryLower: subcategory.toLowerCase(),
                    sectionSlug: sectionSlug
                })
            );
        }

        // Add all product categories
        addProducts(diagnosticTypeProducts, 'Diagnostic Instruments', 'diagnostics-type', 'Instruments');
        addProducts(medicalConsumablesTypeProducts, 'Medical Consumables', 'consumables-type', 'General');
        addProducts(equipmentRespiratoryTypeProducts, 'Equipment', 'respiratory-equipment', 'Respiratory');
        addProducts(surgicalConsumablesProducts, 'Consumables', 'sub', 'Surgical Consumables');
        addProducts(hygieneControlProducts, 'Consumables', 'sub', 'Hygiene Control');
        addProducts(bandagesWoundProducts, 'Consumables', 'sub', 'Bandages & Wound');
        addProducts(cardiologyProducts, 'Equipment', 'sub', 'Cardiology');
        addProducts(ophthalmologyProducts, 'Equipment', 'sub', 'Ophthalmology');

        // Enhanced case-insensitive search with scoring
        const results = allProducts
            .map(product => {
                let score = 0;
                const nameMatch = product.nameLower.includes(query);
                const categoryMatch = product.categoryLower.includes(query);
                const subcategoryMatch = product.subcategoryLower.includes(query);
                
                // Case-insensitive exact match
                if (product.nameLower === query) score += 10;
                // Partial matches at word boundaries get higher score
                else if (product.nameLower.split(' ').some(word => word.startsWith(query))) score += 7;
                // Any partial match in name
                else if (nameMatch) score += 5;
                
                // Category and subcategory matching
                if (product.categoryLower === query) score += 5;
                else if (categoryMatch) score += 3;
                if (product.subcategoryLower === query) score += 4;
                else if (subcategoryMatch) score += 2;

                // Word boundary matching for category/subcategory
                if (product.categoryLower.split(' ').some(word => word.startsWith(query))) score += 2;
                if (product.subcategoryLower.split(' ').some(word => word.startsWith(query))) score += 1;
                
                return { ...product, score };
            })
            .filter(product => product.score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, 10);

        if (results.length > 0) {
            const searchResults = document.createElement('div');
            searchResults.className = 'search-results';
            
            searchResults.innerHTML = `
                <div class="search-summary">
                    Found <span class="result-count">${results.length}</span> result${results.length === 1 ? '' : 's'} for "<span class="search-query">${query}</span>"
                    <button class="close-search-results" aria-label="Close search results">×</button>
                </div>
            `;

            const resultsHTML = results.map(product => `
                <div class="search-result-item">
                    <a href="product.html?section=${product.sectionSlug}&item=${encodeURIComponent(product.name)}">
                        <div class="result-content">
                            <span class="result-name">${highlightMatch(product.name, query)}</span>
                            <div class="result-metadata">
                                <span class="category-tag">${product.category}</span>
                                ${product.subcategory ? `<span class="subcategory-tag">${product.subcategory}</span>` : ''}
                            </div>
                        </div>
                    </a>
                </div>
            `).join('');

            searchResults.innerHTML += resultsHTML;
            
            const existingResults = document.querySelector('.search-results');
            if (existingResults) {
                existingResults.remove();
            }
            
            const searchContainer = searchInput.parentNode;
            searchContainer.appendChild(searchResults);

            const closeButton = searchResults.querySelector('.close-search-results');
            closeButton.addEventListener('click', () => searchResults.remove());
        }
    }

    // Updated highlight function to be case-insensitive
    function highlightMatch(text, query) {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark>$1</mark>');
    }

    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter' && searchInput.value.trim()) {
            performSearch(searchInput.value.trim());
        }
    });

    searchBtn.addEventListener('click', () => {
        if (searchInput.value.trim()) {
            performSearch(searchInput.value.trim());
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            const searchResults = document.querySelector('.search-results');
            if (searchResults) {
                searchResults.remove();
            }
        }
    });

    // Live Chat Implementation
    const chatWidget = document.getElementById('chat-widget');
    const chatInput = document.getElementById('chat-input');
    const chatBody = document.getElementById('chat-body');
    const sendMessageBtn = document.getElementById('send-message');
    const liveChatBtn = document.getElementById('live-chat-btn');
    const closeChat = document.getElementById('close-chat');

    function addMessage(message, isUser = true) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user' : 'support'}`;
        messageDiv.innerHTML = `
            <div class="message-content">
                <span class="sender">${isUser ? 'You' : 'Support'}</span>
                <p>${message}</p>
                <span class="time">${new Date().toLocaleTimeString()}</span>
            </div>
        `;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    const autoResponses = {
        'hello': 'Hello! How can I help you today?',
        'hi': 'Hi there! How can I assist you?',
        'price': 'For pricing information, please contact our sales team at sales@ise-healthcare.com',
        'contact': 'You can reach us at support@ise-healthcare.com or call us at 1-800-123-4567',
        'help': 'I\'m here to help! What information are you looking for?'
    };

    function getAutoResponse(message) {
        message = message.toLowerCase();
        for (const [key, response] of Object.entries(autoResponses)) {
            if (message.includes(key)) {
                return response;
            }
        }
        return "Thank you for your message. A customer service representative will respond shortly.";
    }

    liveChatBtn.addEventListener('click', () => {
        chatWidget.style.display = 'block';
        addMessage('Welcome to ISE Health Care Support! How can we assist you today?', false);
    });

    closeChat.addEventListener('click', () => {
        chatWidget.style.display = 'none';
        chatBody.innerHTML = ''; // Clear chat history
    });

    function sendMessage() {
        const message = chatInput.value.trim();
        if (message) {
            addMessage(message);
            setTimeout(() => {
                addMessage(getAutoResponse(message), false);
            }, 1000);
            chatInput.value = '';
        }
    }

    sendMessageBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Keyboard accessibility for navbar
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link, index) => {
        link.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                link.click();
            }
            if (e.key === 'ArrowRight' && index < navLinks.length - 1) {
                navLinks[index + 1].focus();
            }
            if (e.key === 'ArrowLeft' && index > 0) {
                navLinks[index - 1].focus();
            }
        });
    });
});

// Update the search results CSS for better positioning and visibility
const style = document.createElement('style');
style.textContent = `
    .search-container {
        position: relative;
    }

    .search-results {
        position: absolute;
        top: calc(100% + 5px);
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        min-width: 300px;
        max-width: 600px;
        background: white;
        border: 1px solid #ddd;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 1000;
        max-height: 400px;
        overflow-y: auto;
        margin-top: 2px;
    }

    .search-summary {
        padding: 12px 15px;
        background: #2b3990;
        color: white;
        border-bottom: 1px solid #ddd;
        font-size: 1.1em;
        font-weight: 500;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 8px 8px 0 0;
        letter-spacing: 0.3px;
    }

    .search-summary span.result-count {
        color: #ffd700;
        font-weight: 600;
        padding: 2px 8px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.1);
    }

    .search-summary span.search-query {
        color: #98fb98;
        font-style: italic;
        padding: 0 4px;
    }

    .close-search-results {
        background: none;
        border: none;
        font-size: 1.4em;
        cursor: pointer;
        padding: 0 5px;
        color: white;
        transition: all 0.2s;
        opacity: 0.9;
    }

    .close-search-results:hover {
        opacity: 1;
        transform: scale(1.1);
    }

    .search-result-item {
        border-bottom: 1px solid #eee;
        transition: all 0.2s ease;
    }

    .search-result-item:last-child {
        border-bottom: none;
    }

    .search-result-item:hover {
        background-color: #f8f9fa;
        transform: translateX(5px);
    }

    .search-result-item a {
        text-decoration: none;
        color: #333;
        padding: 12px 15px;
        display: block;
    }

    .result-content {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .result-name {
        font-weight: 500;
        font-size: 1em;
        color: #2b3990;
    }

    .result-metadata {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
    }

    .category-tag {
        background: #2b3990;
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8em;
        transition: background-color 0.2s;
    }

    .subcategory-tag {
        background: #4CAF50;
        color: white;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8em;
        transition: background-color 0.2s;
    }

    .category-tag:hover, .subcategory-tag:hover {
        opacity: 0.9;
    }

    mark {
        background: #fff3cd;
        color: #856404;
        padding: 0 2px;
        border-radius: 2px;
    }

    @media (max-width: 768px) {
        .search-results {
            width: calc(100vw - 40px);
            left: 50%;
            transform: translateX(-50%);
            margin: 0 auto;
        }
    }
`;

document.head.appendChild(style);
