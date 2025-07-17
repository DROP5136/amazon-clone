let producthtml=""
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
            <select class="selected-quantity" data-product-id=${product.id}>
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

          <div class="added-to-cart">
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
document.querySelectorAll('.js-add-to-cart-btn').forEach(button=>{
    button.addEventListener('click',()=>{
          const productid=button.dataset.productId
          const selectelement=document.querySelector(`.selected-quantity[data-product-id="${productid}"]`)
          const selectedquantity=Number(selectelement.value)
          console.log(selectedquantity)
          
          let found=false
          
          cart.forEach(name=>
          {
            
            if(name.productid===productid){
              name.quantity+=selectedquantity
              found=true
              
            }
          }
          )
          if(!found){
          cart.push({
            productid,
            quantity:selectedquantity
          })
          
        }
        console.log(cart)
        let totalquan=0
     cart.forEach(value=>{
        totalquan+=value.quantity
     })
     console.log(totalquan)
        document.querySelector(".js-cart-quantity").innerHTML=totalquan
      }
      );
      

    
    }
    
  )
 
