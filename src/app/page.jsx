
"use client";

import { useState, useEffect } from 'react';
import Products from '../components/Products';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  // Client-side fetching using useEffect
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://jsonserver.reactbd.com/amazonpro");

        console.log("Resp",res)
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    getData();
  }, []); // Empty dependency array to run once after the initial render

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <main>
      {products.length > 0 ? (
        <Products products={products} />
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}
