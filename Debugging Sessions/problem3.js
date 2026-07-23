// The code should calculate the total price of all items in the cart.

const cart = [
  { item: "Book", price: 120 },
  { item: "Pen", price: 15 },
  { item: "Notebook", price: 60 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);

console.log(total);

// Expected putput: 
// 195