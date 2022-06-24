import { Form, Radio, Typography } from "antd";
import IconCOD from "assets/icons/IconCOD";
import IconPaypal from "assets/icons/IconPayPal";
import Paypal from "components/Paypal/Paypal";
import React from "react";
import "./PaymentMethod.scss";

const { Text } = Typography;

const PaymentMethod = ({ selectedMethod, handleOnChangeMethod, order }) => {
  return (
    <Form className="payment-method">
      <Radio.Group
        defaultValue={selectedMethod}
        onChange={(e) => handleOnChangeMethod(e.target.value)}
        size="large"
      >
        <div
          className={`method--item ${selectedMethod === 0 ? "selected" : ""}`}
        >
          <Radio value={0}>
            <div className={`method--title`}>
              <IconCOD width={60} />
              <Text>Cash on Delivery</Text>
            </div>
          </Radio>
        </div>

        <div
          className={`method--item ${selectedMethod === 1 ? "selected" : ""}`}
        >
          <Radio value={1}>
            <div className={`method--title`}>
              <IconPaypal width={80} height={60} />
              <Text>PayPal</Text>
            </div>
          </Radio>
        </div>
      </Radio.Group>
      {selectedMethod === 1 ? (
        <div style={{ maxWidth: "750px", minHeight: "200px", marginTop: 20 }}>
          <Paypal order={order} />
        </div>
      ) : null}
    </Form>
  );
};

export default PaymentMethod;
