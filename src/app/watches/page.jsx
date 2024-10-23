import Products from '../../components/Products'
const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/watch");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const watches = async () => {
  const products = await getData();
  return (
    <Products products={products} />
  )
}

export default watches