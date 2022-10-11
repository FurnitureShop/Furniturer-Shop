/* eslint-disable react-hooks/exhaustive-deps */
import { Divider, Space, Typography } from "antd";
import { ENP_GET_PRODUCT_BY_LIST_ID } from "api/EndPoint";
import { axios } from "lib/axios/Interceptor";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./OrderSummary.scss";

const { Text, Title } = Typography;

const OrderSummary = ({ order }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const listID = [];
    for (let index = 0; index < order.products.length; index++) {
      listID.push(order.products[index].product);
    }

    axios
      .post(ENP_GET_PRODUCT_BY_LIST_ID, { listID: listID })
      .then((response) => {
        for (let index = 0; index < response.data.products.length; index++) {
          response.data.products[index].quantity =
            order.products[index].quantity;
        }
        setProductData(response.data.products);
      });
  }, []);

  return (
    <aside className="order-summary flex flex-col">
      <Title level={4}>Order Summary</Title>
      <Space className="flex-1" direction="vertical">
        {productData.map((item, index) => (
          <>
            <div key={index} className="products--item">
              <div className="products--item--img">
                <img src={item.image} alt="" />
              </div>
              <div className="products--item--info">
                <Title level={5}>{item.name}</Title>
                <Text>
                  {item.quantity} x {item.price.toFixed(2)}
                </Text>
              </div>
            </div>
            <Divider />
          </>
        ))}
        {/* <div className='products--item'>
                    <div className='products--item--img'>
                        <img src={data[0].img} alt="" />
                    </div>
                    <div className='products--item--info'>
                        <Title level={5}>{data[0].title}</Title>
                        <Text>{data[0].quantity} x {data[0].price.toFixed(2)}</Text>
                    </div>
                </div>
                <Divider /> */}
      </Space>

      <Space className="flex-1" direction="vertical" size={10}>
        <div className="products--calc">
          <Text>Subtotal</Text>
          <Text>${order.totalPrice}</Text>
        </div>
        <div className="products--calc">
          <Text>Tax</Text>
          <Text>${0.0}</Text>
        </div>
        <div className="products--calc">
          <Text>Shipping</Text>
          <Text>${0.0}</Text>
        </div>
        <div className="products--calc products--calc__total">
          <Text>Total</Text>
          <Text>${order.totalPrice}</Text>
        </div>
      </Space>
    </aside>
  );
};

export default OrderSummary;
