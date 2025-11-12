// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
// Si tienes tiempo, puedes mover esta variable "products" a un archivo json o js y cargar los datos en este js. Se verá más profesional
const products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration.
// ** You'll understand the code better than with console.log(), and you'll also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.
// => Recordatorio: es extremadamente importante que depures tu código.
// ** Te ahorrará mucho tiempo y frustración.
// ** Entenderás el código mejor que usando console.log(), y también encontrarás errores más rápido.
// ** No dudes en pedir ayuda a tus compañeros o a tu mentor si todavía tienes problemas con la depuración.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
// Versión mejorada de cartList. El carrito es un array de productos (objetos), pero cada uno tiene un campo "quantity" para definir su cantidad, así que los productos no se repiten.
const cartList = [];

let total = 0;

// Exercise 1

const productButton = document.querySelectorAll("[data-product-id]");
let id;
for (let product of productButton) {
  product.addEventListener("click", () => {
    id = Number(product.getAttribute("data-product-id"));
    buy(id);
    calculateTotal();
  });
}

const buy = (id) => {
  // 2. Add found product to the cart array
  // 2. Agregar el producto encontrado al array cart

  for (let product of products) {
    if (id === product.id) {
      for (let productCart of cartList) {
        if (productCart.id === id) {
          productCart.quantity++;
          console.log(cartList);
          return;
        }
      }
      cartList.push({ ...product, quantity: 1 });
      console.log(cartList);
      return;
    }
  }
};

// Exercise 2

const cleanButton = document.getElementById("clean-cart");
cleanButton.addEventListener("click", () => {
  cleanCart();
});

const cleanCart = () => {
  cartList.splice(0, cartList.length);
  total = 0;
  console.log(cartList, "Clean Cart");
};

// Exercise 3

const calculateTotal = () => {
  // Calculate total price of the cart using the "cartList" array
  let acumm = 0;
  for (let product of cartList) {
    if (cartList.length != 0) {
      acumm += product.price * product.quantity;
    }
  }

  total = acumm;

  console.log(acumm);
};

// Exercise 4
// Ejercicio 4
const applyPromotionsCart = () => {
  // Apply promotions to each item in the array "cart"
  // Aplicar promociones a cada elemento del array "cart"
};

// Exercise 5
// Ejercicio 5
const printCart = () => {
  // Fill the shopping cart modal manipulating the shopping cart dom
  // Llenar el modal del carrito manipulando el DOM del carrito de compras
};

// ** Nivell II **
// ** Nivel II **

// Exercise 7
// Ejercicio 7
const removeFromCart = (id) => {};

const open_modal = () => {
  printCart();
};
