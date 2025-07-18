import {cart, addtocart, clean, totalquantity } from './cart.js'
import {products} from '../data/products.js'
let producthtml=""
document.querySelector(".js-cart-quantity").innerHTML=JSON.parse(localStorage.getItem('totalquan'))
products.forEach(product =>{
producthtml+=`
<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            ₹${product.price}
          </div>

          <div class="product-quantity-container">
            <select class="selected-quantity-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart-${product.id} added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart-btn" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`
        
        }
    )
document.querySelector(".js-products-grid").innerHTML=producthtml 
let timeoutid=new Map()
document.querySelectorAll('.js-add-to-cart-btn').forEach(button=>{
    button.addEventListener('click',()=>{
          const productid=button.dataset.productId
          const selectelement=document.querySelector(`.selected-quantity-${productid}`)
          const selectedquantity=Number(selectelement.value)
          
          addtocart(productid,selectedquantity)
          
          totalquantity()
     
        document.querySelector(".js-cart-quantity").innerHTML=JSON.parse(localStorage.getItem('totalquan'))
        const addedElement = document.querySelector(`.added-to-cart-${productid}`);
        addedElement.classList.add('added-to-cart-visible')
        if(timeoutid) {
          clearTimeout(timeoutid)
        }
        timeoutid.set(productid, setTimeout(()=>
        addedElement.classList.remove('added-to-cart-visible')
        ,2000));
        
      }
      );
      

    
    }
    
  )
 
