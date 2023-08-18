# Junior Frontend Developer Interview Test for Vella Finance

## Overview

This is a solution for the Junior Frontend Developer Interview Test for Vella Finance. I have been tasked setup an environment using ionic framework, react, and typescript, integrate redux and redux toolkit.

This is mini e-commerce website where i am able to display products, add to cart and display cart items, add and reduce quantities, provide a checkout out form to collect user details, and proceed to checkout.

### The challenge

This is mini e-commerce website where I can display products, add to cart and display cart items, add and reduce quantities, provide a checkout out form to collect user details, and proceed to checkout.

## My process

### Built with

  - React
  - Ionic
  - Tailwind
  - Typescript

### What I learned 

- This project made me learn a lot and exposed me to quite a different number of challenges. I learned to use ionic framework to develop mobile apps, which can also be used as a web depending on how it is structured. With my previous knowledge of react, it wasn't that much of a challenge but I won't say it was easy.
  
- I also learned how to set up and manage state with the redux tool kit. Where I setup various actions like, 

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
- I also learned quite a substantial amount of typescript and would definitely improve on it.

### Challenges faced 

My initial challenge was understanding and setting up redux and redux toolkit to manage state. So I have to first understand what is does and how to work with it. I also faced did the same with ionic framework, with the help of Ionic docs i was able to achieve my result.
I had few errors and bugs while developing this application, and i can say, it was worth it.



### Continued development

What I would be focusing on is improving my knowledge of typescript and one way I have decided to do this is by always building my react projects with typescript.
Would also love to improve my design skills.

## Acknowledgments

I want to acknowledge Vella Finance for this opportunity it really exposed me to a lot of learning and an opportunity to showcase my skills.

