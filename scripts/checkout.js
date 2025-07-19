import { products } from '../data/products.js';
import { cart, clean, totalquantity, totalprice } from './cart.js';
let totalquan=totalquantity() 

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
          <span class="delete-quantity-link link-primary js-del-${item.productid}">Delete</span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">Choose a delivery option:</div>
        <div class="delivery-option">
          <input type="radio" checked class="delivery-option-input" name="delivery-option-${item.productid}">
          <div>
            <div class="delivery-option-date">Tuesday, June 21</div>
            <div class="delivery-option-price-${item.productid}">FREE Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio" class="delivery-option-input" name="delivery-option-${item.productid}">
          <div>
            <div class="delivery-option-date">Wednesday, June 15</div>
            <div class="delivery-option-price-${item.productid}">₹50 - Shipping</div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio" class="delivery-option-input" name="delivery-option-${item.productid}">
          <div>
            <div class="delivery-option-date">Monday, June 13</div>
            <div class="delivery-option-price-${item.productid}">₹100 - Shipping</div>
          </div>
        </div>
      </div>
    </div>
    
  `;
});

let totprice=totalprice()
document.querySelector('.checkout-header-middle-section').innerHTML=`Checkout (<a class="return-to-home-link"href="index.html">${totalquan} items</a>)`
const ordersummary=`<div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${totalquan}):</div>
            <div class="payment-summary-money">₹${totprice}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">₹100</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">₹${totprice+100}</div>
          </div>

          <div class="payment-summary-row">
            <div>GST (10%):</div>
            <div class="payment-summary-money">₹${((totprice+100)*1.1).toFixed()}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">₹${((totprice+100)*1.1).toFixed()}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>
      </div>
    </div>
`
document.querySelector('.cart-item-container').innerHTML = carthtml+ordersummary;



