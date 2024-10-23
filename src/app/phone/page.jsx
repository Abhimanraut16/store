// import Products from '../../app/components/Products'
import Products from '../../components/Products'
const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/phone");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const Phone = async () => {
  const products = await getData();
  return (
    <Products products={products} />
  )
}

export default Phone