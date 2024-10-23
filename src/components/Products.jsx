"use client";
import Image from "next/image";
import Link from "next/link";

import { useContext, useState, } from "react";
import CartContext from '../app/context'

import { useRouter } from "next/navigation";
// import { useState } from "react"

function Products({ products }) {
  const [search, setSearch] = useState('');
  const router = useRouter();

 


  const { cartData, setCartData } = useContext(CartContext);
  const [filterText, setFilterText] = useState("");


  // const addToCart = (product) => {
  //   const existingProduct = cartData.find((item) => item._id === product._id);

  //   if (existingProduct) {
  //     alert("This item is already in the cart");
  //   } else {
  //     setCartData([...cartData, { ...product, qty: 1 }]);
  //     alert("Product added to cart");
  //   }
  // };

  const addToCart = (product) => {
    const existingProduct = cartData.find((item) => item._id === product._id);

    if (existingProduct) {
      alert("This item is already in the cart");
    } else {
      // Adding product to the cart
      setCartData([...cartData, { ...product, qty: 1 }]);
      alert("Product added to cart");
    }
  };

  return (
    <div className="max-w-screen-xl mx-auto py-10">
      {/* Filter Input */}
      <form className="flex justify-between px-5 max-w-6xl mb-8">
        <input
          type="text"
          placeholder="Filter by title"
          onChange={(e) => setFilterText(e.target.value)}
          className="border border-gray-300 rounded-md p-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
      </form>
  
      {/* Filtered and Mapped Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
        {products
          .filter((item) =>
            item.title.toLowerCase().includes(filterText.toLowerCase())
          )
          .map((item, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:scale-105"
            >
              <Link
                href={{ pathname: "/SingleProduct", query: { _id: item?._id } }}
                className="product-card"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-80 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
                />
              </Link>
              <div className="p-4 text-sm flex flex-col gap-2">
                <p className="text-gray-700 font-medium">{item.title}</p>
                <p className="font-semibold text-lg text-blue-600">Price: ${item.price}</p>
                <div className="flex items-center justify-between mt-4">
                  <button
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg transform transition duration-300 ease-in-out hover:bg-blue-700 hover:scale-105"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </button>
                  <Link href={{ pathname: "/SingleProduct", query: { _id: item?._id } }}>
                    <button className="uppercase text-sm font-semibold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out hover:scale-105">
                      More Info
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
  

}

export default Products;


















// 'use client';
// import Image from "next/image";
// import Link from "next/link";
// import { useContext } from "react";
// // import React, { useContext } from "react";
// import CartContext from '../app/context'

// function Products({ products }) {
//   const { cartData, setCartData } = useContext(CartContext);

//   const addToCart = (products) => {
//     const existingProduct = cartData.find((item) => item._id === products._id);

//     if (existingProduct) {
//       alert("This item is already in the cart");
//     } else {
//       // Adding product to the cart
//       setCartData([...cartData, { ...products, qty: 1 }]);
//       alert("Product added to cart");
//     }
//   };
//   return (
//     <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10">

//       {products.map((item,index) => (
//         <div key={index} className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300">
//           <Link href={{ pathname: "/SingleProduct", query: { _id: item?._id } }} className="product-card">
//             <Image src={item.image} alt={item.title} width={500} height={500} className="w-full h-80 object-cover" />
//           </Link>
//           <div className="px-4 pb-2 text-sm flex flex-col gap-1">
//             <p className="text-gray-600">{item.title}</p>
//             <p className="font-semibold">Price: ${item.price} </p>
//             <div className="flex items-center justify-between mt-2">
//               <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200" onClick={() => addToCart(item)} >
//                 Add to Cart
//               </button>
//               <Link href={{ pathname: "/SingleProduct", query: { _id: item?._id } }}>
//                 <button className="uppercase text-xs font-semibold text-blue-600 hover:text-blue-800 transition duration-200">
//                   More info
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>

//   );
// }

// export default Products;
