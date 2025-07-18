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
//For temporary use
export function clean(){
  localStorage.removeItem('cart')
}