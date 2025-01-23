// Initialize Cart and Modal States
let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartTotalElement = document.getElementById('cart-total');
const cartItemsElement = document.getElementById('cart-items');

// Open Cart Modal
function openCart() {
    updateCartDisplay();
    document.getElementById('cart-modal').style.display = 'flex';
}

// Close Cart Modal
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Update Cart Display
function updateCartDisplay() {
    if (cart.length === 0) {
        cartItemsElement.innerHTML = "<p>Your cart is empty.</p>";
    } else {
        let cartHTML = "";
        let totalPrice = 0;
        cart.forEach((product) => {
            cartHTML += `<p>${product.name} - $${product.price}</p>`;
            totalPrice += product.price;
        });
        cartItemsElement.innerHTML = cartHTML;
        cartTotalElement.innerText = totalPrice.toFixed(2);
    }
    cartCountElement.innerText = cart.length;
}

// Add to Cart Function
function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
    alert('Product added to cart!');
}

// Sample Product Data and Render Products
const products = [
    { name: 'Lipstick', price: 15.00, img: 'lipstick.jpg' },
    { name: 'Mascara', price: 12.00, img: 'mascara.jpg' },
    { name: 'Foundation', price: 20.00, img: 'foundation.jpg' }
];

// Render Products
const productGrid = document.getElementById('product-grid');
products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <img src="${product.img}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button class="add-to-cart" onclick="addToCart(${JSON.stringify(product)})">Add to Cart</button>
    `;
    productGrid.appendChild(productCard);
});
