// cart.js

let cart = [];

function addToCart(product) {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    updateCartCount();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartItems() {
    return cart;
}

function clearCart() {
    cart = [];
    updateCartCount();
}

export { addToCart, removeFromCart, getCartItems, clearCart };