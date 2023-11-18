document.getElementById('mobile-menu').addEventListener('click', function () {
  var navList = document.querySelector('section nav .nav-list');
  navList.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', function () {
  const cartIcon = document.getElementById('cart-icon');
  const cartNotification = document.getElementById('cart-notification');
  const cartList = document.getElementById('cart-list');

  let cartItems = [];

  function updateCartUI() {
    const itemCount = cartItems.length;
    cartNotification.textContent = itemCount > 0 ? itemCount : '';

    // Update the cart list
    cartList.innerHTML = '';
    cartItems.forEach((item) => {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.textContent = item.name;
      cartList.appendChild(cartItemDiv);
    });
  }

  function addToCart(product) {
    cartItems.push(product);
    updateCartUI();
  }

  // Toggle cart list visibility
  cartIcon.addEventListener('click', function () {
    cartList.style.display =
      cartList.style.display === 'block' ? 'none' : 'block';
  });

  // Example usage for adding to cart
  const addToCartButtons = document.querySelectorAll('.btn'); // Assuming your Add to Cart buttons have the 'btn' class
  addToCartButtons.forEach((button) => {
    button.addEventListener('click', function () {
      const productText = this.parentElement.querySelector('h2').textContent;
      addToCart({ name: productText }); // You can add more details to the product object
    });
  });
});
