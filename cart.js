// Initialize cart from localStorage or empty array if none exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Select elements
const cartCount = document.querySelector(".cart-count");
const cartModal = document.getElementById("cart-modal");
const cartItemsContainer = document.querySelector(".cart-items");
const cartTotal = document.getElementById("cart-total");
const productGrid = document.getElementById("product-grid");
const blogPostsContainer = document.getElementById("blog-posts");

// Function to update cart count
function updateCartCount() {
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    cartCount.textContent = totalItems;
    localStorage.setItem("cart", JSON.stringify(cart)); // Store cart in localStorage
}

// Function to render products on the product page
function renderProducts() {
    const products = [
        { id: 1, name: "Lipstick", price: 19.99, image: "lipstick.jpg" },
        { id: 2, name: "Foundation", price: 29.99, image: "foundation.jpg" },
        { id: 3, name: "Mascara", price: 14.99, image: "mascara.jpg" }
    ];
    
    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button class="add-to-cart" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Function to add items to the cart
function addToCart(id, name, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    renderCartItems();
    updateCartCount();
}

// Function to render cart items in the cart modal
function renderCartItems() {
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <div class="cart-item-details">
                <p>${item.name}</p>
                <p>$${item.price.toFixed(2)} x ${item.quantity}</p>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });
    cartTotal.textContent = total.toFixed(2);
}

// Open and close cart modal
function openCart() {
    cartModal.style.display = "flex";
    renderCartItems();
}

function closeCart() {
    cartModal.style.display = "none";
}

// Blog Modal: Open and display blog post content
function openBlogModal(post) {
    document.getElementById("blog-modal-title").textContent = post.title;
    document.getElementById("blog-modal-text").textContent = post.text;
    document.getElementById("blog-modal-image").src = post.image;
    document.getElementById("blog-modal").style.display = "block";
}

function closeBlogModal() {
    document.getElementById("blog-modal").style.display = "none";
}

// Checkout Modal: Open the checkout modal
function openCheckoutModal() {
    document.getElementById("checkout-modal").style.display = "flex";
}

// Checkout Modal: Close the checkout modal
function closeCheckoutModal() {
    document.getElementById("checkout-modal").style.display = "none";
}

// Function to handle order confirmation
function confirmOrder() {
    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;

    if (name && address) {
        alert("Order confirmed! Thank you for your purchase.");
        closeCheckoutModal();
    } else {
        alert("Please fill in all the fields.");
    }
}

// Blog posts
const blogPosts = [
    { id: 1, title: "How to Apply Lipstick", text: "Lorem ipsum dolor sit amet...", image: "blog1.jpg" },
    { id: 2, title: "Best Foundations for Your Skin", text: "Sed do eiusmod tempor incididunt...", image: "blog2.jpg" },
    { id: 3, title: "5 Tips for Glowing Skin", text: "Ut enim ad minim veniam...", image: "blog3.jpg" }
];

// Render blog posts dynamically
function renderBlogPosts() {
    blogPosts.forEach(post => {
        const blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");
        blogPost.innerHTML = `
            <img src="${post.image}" alt="${post.title}">
            <h3>${post.title}</h3>
            <a href="#" onclick="openBlogModal(${post.id})">Read More</a>
        `;
        blogPostsContainer.appendChild(blogPost);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    renderProducts();
    renderBlogPosts();
    updateCartCount();
});
