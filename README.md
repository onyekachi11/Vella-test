This is a solution for the Junior Frontend Developer Interview Test for Vella Finance. I have been tasked setup an environment using ionic framework, react, and typescript, integrate redux and redux toolkit.

This is mini e-commerce website where i am able to display products, add to cart and display cart items, be able to add and reduce quantities, provide a checkout out form to collect user details and proceed to checkout.

### The challenge

- [The challenge](#the-challenge)
  This is mini e-commerce website where i am able to display products, add to cart and display cart items, be able to add and reduce quantities, provide a checkout out form to collect user details and proceed to checkout.

### Built with

- [Built with](#built-with)
    - React
    - Ionic
    - Tailwind
    - Typescript

### What I learned 

- This project made me learn alot and exposed me to quite a different number of challenges. I learned to use ionic framework to develope mobile apps, which can also be used as a web depending on how it is structured. With my previous knowledge of react, it wasnt that much of a challenge but i wont say it was easy.

- I also learned how to setup and manage state with redux tool kit. Where i setup various actions like, 

```js
    addToCart: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.cartProductDetails.find(
        (item) => item.id === id
      );
      if (existingItem) {
        state.cartProductDetails;
        existingItem.amount = (existingItem.amount || 1) + 1;
      } else {
        state.cartProductDetails.push(action.payload);
        state.cartValue++;
      }
    },
    addCartQuantity: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.cartProductDetails.find((item) => item.id === id);
      if (cartItem) {
        cartItem.amount = (cartItem.amount || 1) + 1;
      }
    },
    subtractCartQuantity: (state, action) => {
      const { id } = action.payload;
      const cartItem = state.cartProductDetails.find((item) => item.id === id);
      if (cartItem) {
        if (cartItem.amount > 1) {
          cartItem.amount -= 1;
          console.log(cartItem.price);
        }
      }
    },
```