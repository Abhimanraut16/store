"use client";
import { useContext } from "react";
import CartContext from "../context";
import Link from "next/link";
import Image from "next/image";

function Cart() {

  const { cartData, addToCart, decreaseQty, removeFromCart, getRelatedProducts } = useContext(CartContext);
  // const relatedProducts = getRelatedProducts();

  const total = cartData?.reduce((price, item) => price + item.qty * item.price, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {cartData.length === 0 ? (
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold">Shopping Cart is empty</h3>
          <Link href="/" className="text-tomato mt-4 inline-block text-lg">
            Shop now
          </Link>
        </div>
      ) : (
        <div>
          <table className="w-full text-left border-collapse mt-10">
            <caption className="sr-only">Shopping Cart Items</caption>
            <thead>
              <tr className="border-b">
                <th className="py-3">Image</th>
                <th className="py-3">Name</th>
                <th className="py-3">Qty</th>
                <th className="py-3">Price</th>
                <th className="py-3">Total</th>
                <th className="py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <tr key={item._id} className="border-b hover:bg-gray-100">
                  <td className="py-3">
                    <Image src={item.image} alt="product Image" width={50} height={50} className="rounded" />
                  </td>
                  <td className="py-3">{item.title}</td>
                  <td className="py-3 flex items-center">
                    <button
                      onClick={() => decreaseQty(item)}
                      className="px-2 py-1 bg-gray-200 rounded-l hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="px-3">{item.qty}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-2 py-1 bg-gray-200 rounded-r hover:bg-gray-300"
                    >
                      +
                    </button>
                  </td>
                  <td className="py-3">${item.price}</td>
                  <td className="py-3">${(item.qty * item.price).toFixed(2)}</td>
                  <td className="py-3">
                    <button
                      onClick={() => removeFromCart(item)}
                      className="text-red-600 hover:text-red-800"
                    >
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
  
          <div className="flex justify-between mt-6">
            <Link href="/Payment">
              <button className="w-44 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                Payment Now
              </button>
            </Link>
            <h3 className="text-xl font-bold">SubTotal: ${total.toFixed(2)}</h3>
          </div>
        </div>
      )}
  
      <div className="fixed bottom-5 right-5">
        <Link href="/enquiry">
          <div className="bg-tomato text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition font-semibold">
            Enquiry
          </div>
        </Link>
      </div>
    </div>
  );
  

}

export default Cart;
