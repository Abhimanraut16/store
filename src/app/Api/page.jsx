import Products from './components/Products'
const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default async function Home() {
  const products = await getData();

  console.log(products)


  return (
    <main>
      <Products products={products} />
    </main>
  );
}