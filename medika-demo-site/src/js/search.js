// Function to filter products based on search input
function searchProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const productList = document.getElementById('product-list');
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Clear previous results
    productList.innerHTML = '';

    // Filter products based on search input
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchInput) || 
        product.description.toLowerCase().includes(searchInput)
    );

    // Display filtered products
    filteredProducts.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span>Price: $${product.price}</span>
        `;
        productList.appendChild(productItem);
    });
}

// Event listener for search input
document.getElementById('search-input').addEventListener('input', searchProducts);