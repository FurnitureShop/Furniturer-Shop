import { notification } from 'antd';

export const createOrder = (user, products, total) => {
  if (user.name === null || user.phone === null) {
    notification.error({
      message: 'Error',
      description: 'Please input name and phone to checkout',
      placement: 'bottomLeft',
    });
    window.history.pushState({}, '', '/user');
    window.history.go();
  }
  return {
    customerName: user.name,
    phone: user.phone,
    address: ' ',
    products,
    totalPrice: total,
    isPaid: 'false',
    paymentMethod: 'Cash on delivery',
    status: 'Create order',
    note: '',
  };
};
