var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var o = {};
  o[item] = Math.floor(Math.random()*100)+1;
  cart[cart.length] = o;
  console.log(`${item} has been added to your cart.`);
  return cart;
}

function viewCart() {
  var message = ``;
  if (cart.length<1){
    message = message + `Your shopping cart is empty.`;
  } else {
  var message = `In your cart, you have`;
  for (let i=0; i<cart.length; i++){
    if (i<cart.length-1){
      message = message + ``;
    } else {
      message = message + ``;
    }
  }
  }
  console.log(message);
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
