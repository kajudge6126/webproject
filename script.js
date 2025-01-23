let cart = [];
const cartCountElement = document.getElementById('cart-count');
const cartTotalElement = document.getElementById('cart-total');
const cartItemsElement = document.getElementById('cart-items');
const productGrid = document.getElementById('product-grid');
const blogPosts = document.getElementById('blog-posts');

// Open Cart Modal
function openCart() {
    updateCartDisplay();
    document.getElementById('cart-modal').style.display = 'flex';
}

// Close Cart Modal
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Open Blog Modal
function openBlogModal(title, image, text) {
    document.getElementById('blog-modal').style.display = 'flex';
    document.getElementById('blog-modal-title').innerText = title;
    document.getElementById('blog-modal-image').src = image;
    document.getElementById('blog-modal-text').innerText = text;
}

// Close Blog Modal
function closeBlogModal() {
    document.getElementById('blog-modal').style.display = 'none';
}

// Open Checkout Modal
function openCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'flex';
}

// Close Checkout Modal
function closeCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'none';
}

// Confirm Order
function confirmOrder() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    if (name && address) {
        alert('Order Confirmed');
        closeCheckoutModal();
        cart = [];
        updateCartDisplay();
    } else {
        alert('Please enter your name and address.');
    }
}

// Add to Cart
function addToCart(product) {
    cart.push(product);
    updateCartDisplay();
    alert('Product added to cart!');
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

// Blog Posts Data
const blogData = [
    {
        title: "10 Best Beauty Tips for Glowing Skin",
        image: "assets/images/hero.jpg",
        text: "Discover the best beauty tips to make your skin glow like never before."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    },
    {
        title: "How to Choose the Right Foundation",
        image: "assets/images/hero.jpg",
        text: "Find out how to choose the right foundation for your skin type and tone."
    }
];

// Render Blog Posts
blogData.forEach(post => {
    const postDiv = document.createElement('div');
    postDiv.classList.add('blog-post');
    postDiv.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <h3>${post.title}</h3>
        <a href="#" onclick="openBlogModal('${post.title}', '${post.image}', '${post.text}')">Read More</a>
    `;
    blogPosts.appendChild(postDiv);
});

// Sample Product Data
const products = [
    { name: 'Lipstick', price: 15.00, img: 'assets/images/foundation.jpg' },
    { name: 'Mascara', price: 12.00, img: 'assets/images/foundation.jpg' },
    { name: 'Foundation', price: 20.00, img: 'assets/images/foundation.jpg' },
    { name: 'Foundation', price: 20.00, img: 'assets/images/foundation.jpg' },
    { name: 'Foundation', price: 20.00, img: 'assets/images/foundation.jpg' },
    { name: 'Foundation', price: 20.00, img: 'assets/images/foundation.jpg' },
    { name: 'Foundation', price: 20.00, img: 'assets/images/foundation.jpg' },
    { name: 'Foundation', price: 20.00, img: 'assets/images/foundation.jpg' },
    { name: 'Foundation', price: 20.00, img: 'assets/images/foundation.jpg' },
    { name: 'Foundation', price: 20.00, img: 'assets/images/foundation.jpg' },
    { name: 'Foundation', price: 20.00, img: 'assets/images/foundation.jpg' },
    { name: 'Foundation', price: 20.00, img: 'assets/images/foundation.jpg' }

];

// Render Products
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
