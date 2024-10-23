// import Products from '../../app/components/Products'
import Products from '../../components/Products'
const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/accessories");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

const accessories = async () => {
  const products = await getData();
  return (
    <Products products={products} />
  )
}

export default accessories