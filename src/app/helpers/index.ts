const getData = async () => {
  const res = await fetch("https://jsonserver.reactbd.com/amazonpro");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export const getSingleProduct = async (_id: number) => {
  const item = await getData();
  const singleItem = await item.find((Product: any) => Product._id === _id);
  return singleItem;
};

// export async function getRelatedProducts(category, excludeId) {
//   const response = await fetch(`/api/products?category=${category}`);
//   const products = await response.json();

//   return products.filter(product => product._id !== excludeId);
// }
