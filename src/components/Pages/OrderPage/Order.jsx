/* eslint-disable react-hooks/exhaustive-deps */
import { Skeleton } from "antd";
import { ENP_ORDER } from "api/EndPoint";
import { axios } from "lib/axios/Interceptor";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import OrderSummary from "./OrderSummary/OrderSummary";
import ShippingAddress from "./ShippingAddress/ShippingAddress";

const Order = () => {
  const { id } = useParams();
  const [order, setOrder] = useState();

  useEffect(() => {
    axios.get(ENP_ORDER + id).then((response) => {
      setOrder(response.data.order);
    });
  }, []);

  return (
    <section
      className="furniturer-container grid grid-cols-3 gap-x-4"
      style={{
        marginTop: "70px",
        marginBottom: "70px",
      }}
    >
      <div className="col-span-3 order-2 md:order-1 md:col-span-2">
        {order ? <ShippingAddress order={order} /> : <Skeleton active />}
      </div>

      <div className="col-span-3 order-1 md:order-2 md:col-span-1">
        {order ? <OrderSummary order={order} /> : <Skeleton active />}
      </div>
    </section>
  );
};

export default Order;
