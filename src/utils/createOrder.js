export const createOrder = (user, products, total) => {
  return {
    customerName: user.name,
    phone: user.phone,
    address: " ",
    products,
    totalPrice: total,
    isPaid: "false",
    paymentMethod: "Cash on delivery",
    status: "Create order",
    note: "",
  };
};
