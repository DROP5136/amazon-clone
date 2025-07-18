import { products } from '../data/products.js';
import { cart, clean } from './cart.js';


let carthtml = "";

cart.forEach(item => {
  
  const matchingproduct = products.find(product => product.id === item.productid);

  carthtml += `
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image" src="${matchingproduct.image}">

      <div class="cart-item-details">
        <div class="product-name">${matchingproduct.name}</div>
        <div class="product-price">₹${matchingproduct.price}</div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${item.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">Update</span>
          <span class="delete-quantity-link link-primary">Delete</span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">Choose a delivery option:</div>
        <div class="delivery-option">
          <input type="radio" checked class="delivery-option-input" name="delivery-option-${item.productid}">
          <div>
            <div class="delivery-option-date">Tuesday, June 21</div>
            <div class="delivery-option-price">FREE Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio" class="delivery-option-input" name="delivery-option-${item.productid}">
          <div>
            <div class="delivery-option-date">Wednesday, June 15</div>
            <div class="delivery-option-price">₹50 - Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio" class="delivery-option-input" name="delivery-option-${item.productid}">
          <div>
            <div class="delivery-option-date">Monday, June 13</div>
            <div class="delivery-option-price">₹100 - Shipping</div>
          </div>
        </div>
      </div>
    </div>
    <hr/>
  `;
});

document.querySelector('.cart-item-container').innerHTML = carthtml;

