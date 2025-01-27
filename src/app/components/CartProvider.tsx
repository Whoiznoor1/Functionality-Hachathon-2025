
// "use client";
// import React, { useState } from "react";
// import { CartContext } from "./context";

// // Define the types for product and cart
// interface Obj {
//   title: string;
//   description: string;
//   price: number;
//   tags: string[];
//   dicountPercentage: number;
//   isNew: boolean;
//   image: any;
//   id: string;
// }

// export interface Product extends Obj {
//   quantity: number;
//   selectedColor: string; // Add selectedColor to product
// }

// const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<Product[]>([]);
//   const [wish,setWish] = useState<Product[]>([])
//   // Function to add a product to the cart
//   function addCart(product: Product) {
//     const existingProduct = cart.find(
//       (item) => item.id === product.id && item.selectedColor === product.selectedColor
//     );

//     if (existingProduct) {
//       const updatedCart = cart.map((item) =>
//         item.id === product.id && item.selectedColor === product.selectedColor
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       setCart(updatedCart);
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }      
//   }

//   // Function to remove a product from the cart
//   function delCart(product: Product) {
//     const updatedCart = cart.filter(
//       (item) => item.id !== product.id || item.selectedColor !== product.selectedColor
//     );
//     setCart(updatedCart);
//   }

//   // Function to update the quantity of a product
//   const updateQuantity = (id: string, selectedColor: string, newQuantity: number) => {
//     if (newQuantity <= 0) return;
//     setCart((prevCart) =>
//       prevCart.map((product) =>
//         product.id === id && product.selectedColor === selectedColor
//           ? { ...product, quantity: newQuantity }
//           : product
//       )
//     );
//   };

//   function addWish(product: Product) {
//     const existingProduct = wish.find(
//       (item) => item.id === product.id && item.selectedColor === product.selectedColor
//     );

//     if (existingProduct) {
//       const updatedWish = wish.map((item) =>
//         item.id === product.id && item.selectedColor === product.selectedColor
//           ? { ...item}
//           : item
//       );
//       setWish(updatedWish);
//     } else {
//       setWish([...wish, { ...product, }]);
//     }
//   }

//   function delWish(product: Product) {
//     const updatedWish = wish.filter(
//       (item) => item.id !== product.id || item.selectedColor !== product.selectedColor
//     );
//     setWish(updatedWish);
//   }

//   return (
//     <CartContext.Provider value={{ cart, addCart, delCart, updateQuantity,wish, addWish,delWish }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;

























"use client";
import React, { useState } from "react";
import { CartContext } from "./context";

// Define the types for product and cart
interface Obj {
  title: string;
  description: string;
  price: number;
  tags: string[];
  dicountPercentage: number;
  isNew: boolean;
  image: string;
  
  id: string;
}

export interface Product extends Obj {
  quantity: number;
  selectedColor: string; // Add selectedColor to product
}

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);
  const [wish,setWish] = useState<Product[]>([])
  // Function to add a product to the cart
  function addCart(product: Product) {
    const existingProduct = cart.find(
      (item) => item.id === product.id && item.selectedColor === product.selectedColor
    );

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id && item.selectedColor === product.selectedColor
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }      
  }

  // Function to remove a product from the cart
  function delCart(product: Product) {
    const updatedCart = cart.filter(
      (item) => item.id !== product.id || item.selectedColor !== product.selectedColor
    );
    setCart(updatedCart);
  }

  // Function to update the quantity of a product
  const updateQuantity = (id: string, selectedColor: string, newQuantity: number) => {
    if (newQuantity <= 0) return;
    setCart((prevCart) =>
      prevCart.map((product) =>
        product.id === id && product.selectedColor === selectedColor
          ? { ...product, quantity: newQuantity }
          : product
      )
    );
  };

  function addWish(product: Product) {
    const existingProduct = wish.find(
      (item) => item.id === product.id && item.selectedColor === product.selectedColor
    );

    if (existingProduct) {
      const updatedWish = wish.map((item) =>
        item.id === product.id && item.selectedColor === product.selectedColor
          ? { ...item}
          : item
      );
      setWish(updatedWish);
    } else {
      setWish([...wish, { ...product, }]);
    }
  }

  function delWish(product: Product) {
    const updatedWish = wish.filter(
      (item) => item.id !== product.id || item.selectedColor !== product.selectedColor
    );
    setWish(updatedWish);
  }

  return (
    <CartContext.Provider value={{ cart, addCart, delCart, updateQuantity,wish, addWish,delWish }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
