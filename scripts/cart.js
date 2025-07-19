import { products } from "../data/products.js"

export const cart=JSON.parse(localStorage.getItem('cart')) || []
export function addtocart(productid,selectedquantity){
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
            localStorage.setItem('cart',JSON.stringify(cart))
}
export function totalquantity(){
let totalquan=0

     cart.forEach(value=>{
         totalquan+=value.quantity
     })
     
    return totalquan
    }
export function totalprice(){
  let totprice = 0;
  cart.forEach(cartvalue => {
    const product = products.find(p => p.id === cartvalue.productid);
    if (product) {
      totprice += product.price * cartvalue.quantity;
    }
  });
  return totprice;
}

//For temporary use
export function clean(){
  localStorage.removeItem('cart')
}
export function removefromcart(prodid){
    let temcart=[]
    cart.forEach(item=>{
      if(item.productid!==prodid){
        temcart.push({productid:item.productid,quantity:item.quantity})
      }
      })
    localStorage.setItem('cart',JSON.stringify(temcart))
    
  cart.length = 0;
  temcart.forEach(item => cart.push(item));

    console.log(cart)
}
