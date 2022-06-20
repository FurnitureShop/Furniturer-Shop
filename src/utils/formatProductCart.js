export const formatProductCart = (data) => {
  const productList = [];
  for (let index = 0; index < data.length; index++) {
    const product = {
      product: data[index]._id,
      quantity: data[index].quantity,
    };
    productList.push(product);
  }
  return productList;
};
