import { AutoComplete, Button, Form, Input, Select, Typography } from "antd";
import { ENP_ORDER } from "api/EndPoint";
import CheckboxControl from "components/Controls/CheckboxControl/CheckboxControl";
import FloatLabel from "components/Controls/FloatLabel/FloatLabel";
import { axios } from "lib/axios/Interceptor";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUser } from "store/userSlice";
import PaymentMethod from "../PaymentMethod/PaymentMethod";
import "./ShippingAdress.scss";

const { Title } = Typography;
const { Option } = Select;

const ShippingAddress = ({ order }) => {
  const [form] = Form.useForm();
  const user = useSelector(selectUser);

  const onNameChangeHandler = (value) => {
    form.setFieldsValue({ customerName: value });
  };

  const onPhoneNumberChangeHandler = (value) => {
    form.setFieldsValue({ phone: value });
  };

  const onAddressSelected = (value) => {
    form.setFieldsValue({ address: value });
  };

  const onAddressChange = (value) => {
    form.setFieldsValue({ address: value });
  };

  const onNoteChangeHandler = (value) => {
    form.setFieldsValue({ note: value });
  };

  const [selectedMethod, setSelectedMethod] = useState(0);
  const handleOnChangeMethod = (value) => {
    const paymentMethod = value === 0 ? "Cash on delivery" : "Paypal";
    form.setFieldsValue({ paymentMethod: paymentMethod });
    setSelectedMethod(value);
  };

  const navigate = useNavigate();
  const onFinish = (values) => {
    axios
      .put(ENP_ORDER + order._id, { ...values, isPaid: true })
      .then((response) => {
        navigate("/");
      });
  };

  return (
    <Form
      form={form}
      initialValues={{
        customerName: order.customerName,
        phone: order.phone,
        email: user.email,
        address: order.address,
        note: order.note,
        paymentMethod: order.paymentMethod,
      }}
      className="shipping-address"
      autoComplete="off"
      onFinish={onFinish}
    >
      <div className="delivery flex flex-col">
        <div className="delivery--header">
          <Title level={4}>Delivery Information</Title>
        </div>

        <Form.Item
          name="customerName"
          shouldUpdate={(prevValues, curValues) =>
            curValues &&
            (curValues.customerName?.length === 0 ||
              curValues.customerName?.length === 1)
          }
        >
          <FloatLabel
            label="Recipient's name"
            value={form.getFieldValue("customerName")}
          >
            <Input
              size="large"
              defaultValue={order.customerName}
              onChange={(e) => onNameChangeHandler(e.target.value)}
            />
          </FloatLabel>
        </Form.Item>

        <div className="flex flex-row gap-x-3">
          <Form.Item
            name="phone"
            shouldUpdate={(prevValues, curValues) =>
              curValues &&
              (curValues.phone?.length === 0 || curValues.phone?.length === 1)
            }
          >
            <FloatLabel
              customClassName="flex-1"
              label="Phone number"
              value={form.getFieldValue("phone")}
            >
              <Input
                size="large"
                defaultValue={order.phone}
                onChange={(e) => onPhoneNumberChangeHandler(e.target.value)}
              />
            </FloatLabel>
          </Form.Item>
          <Form.Item
            name="email"
            shouldUpdate={(prevValues, curValues) =>
              curValues &&
              (curValues.email?.length === 0 || curValues.email?.length === 1)
            }
          >
            <FloatLabel
              customClassName="flex-1"
              label="Email"
              value={form.getFieldValue("email")}
            >
              <Input size="large" value={user.email} disabled />
            </FloatLabel>
          </Form.Item>
        </div>

        <Form.Item name="address">
          <AutoComplete
            size="large"
            options={user.address.map((value) => {
              const strAddress = `${value.landNumber}, ${value.ward}, ${value.district}, ${value.province}`;
              return {label: strAddress, value: strAddress}
            })}
            placeholder="Select an address"
            style={{
              width: "100%",
            }}
            onSelect={onAddressSelected}
            onChange={onAddressChange}
          />
        </Form.Item>

        <Form.Item
          name="note"
          shouldUpdate={(prevValues, curValues) =>
            curValues &&
            (curValues.note?.length === 0 || curValues.note?.length === 1)
          }
        >
          <FloatLabel
            customClassName="flex-1"
            label="Notes"
            value={form.getFieldValue("note")}
          >
            <Input
              size="large"
              defaultValue={order.note}
              onChange={(e) => onNoteChangeHandler(e.target.value)}
            />
          </FloatLabel>
        </Form.Item>

        <CheckboxControl
          customClassName=""
          label="Save delivery information for the next time"
        />
      </div>

      <div className="payment">
        <div className="payment--header">
          <Title level={4} className>
            Payment Method
          </Title>
        </div>
        <Form.Item name="paymentMethod">
          <PaymentMethod
            selectedMethod={selectedMethod}
            handleOnChangeMethod={handleOnChangeMethod}
            order={order}
          />
        </Form.Item>
      </div>

      <div className="order-btn">
        <Form.Item>
          <Button type="primary" htmlType="submit" className="order-btn--btn">
            Confirm Order
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default ShippingAddress;
