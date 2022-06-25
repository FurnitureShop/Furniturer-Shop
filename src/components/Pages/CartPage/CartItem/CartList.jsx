/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Table, Typography } from "antd";
import { ENP_CART, ENP_GET_PRODUCT_BY_LIST_ID, ENP_ORDER } from "api/EndPoint";
import QuantityControl from "components/Controls/QuantityControl/QuantityControl";
import { axios } from "lib/axios/Interceptor";
import path from "Paths/Path";
import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addOrder, getCart, selectUser, updateCart } from "store/userSlice";
import { createOrder } from "utils/createOrder";
import { formatProductCart } from "utils/formatProductCart";
import "./CartList.scss";

// let dummyData = [
//   {
//     key: "1",
//     img: require("../../../../assets/images/shoplist5.jpg"),
//     name: "hello",
//     price: 30,
//     quantity: 1,
//     subtotal: 30,
//   },
//   {
//     key: "2",
//     img: require("../../../../assets/images/shoplist5.jpg"),
//     name: "hello",
//     price: 30,
//     quantity: 1,
//     subtotal: 30,
//   },
//   {
//     key: "3",
//     img: require("../../../../assets/images/shoplist5.jpg"),
//     name: "hello",
//     price: 30,
//     quantity: 1,
//     subtotal: 30,
//   },
// ];

const { Column } = Table;
const { Text, Title } = Typography;

const CartList = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const dispatch = useDispatch();

  const [cartData, setCartData] = useState(null);

  const prevCartData = useRef([]);
  const total = useRef(0);

  const user = useSelector(selectUser);

  useEffect(() => {
    //Fetch card first time
    const fetchData = async () => {
      if (!user?.cart) await dispatch(getCart());

      const listID = [];
      if (!user?.cart) return;

      for (let index = 0; index < user.cart?.length; index++) {
        listID.push(user?.cart[index].product);
      }

      axios
        .post(ENP_GET_PRODUCT_BY_LIST_ID, { listID: listID })
        .then((response) => {
          for (let index = 0; index < response.data.products.length; index++) {
            response.data.products[index].key = user?.cart[index]._id;
            response.data.products[index].quantity = user?.cart[index].quantity;
            response.data.products[index].subtotal =
              user?.cart[index].quantity * response.data.products[index].price;
          }
          setCartData(response.data.products);
        });
    };

    fetchData();
  }, []);

  const onUpdate = (index) => (updateValue) => {
    if (updateValue > 0 && updateValue <= cartData[index]?.inStock) {
      const tempData = [...cartData];
      tempData[index].quantity = updateValue;
      tempData[index].subtotal = updateValue * tempData[index]?.price;

      prevCartData.current = cartData;
      total.current = selectedRows?.reduce((previousValue, currentValue) => {
        return previousValue + (currentValue?.subtotal || 0);
      }, 0);
      setCartData(tempData);
    }
  };

  useEffect(() => {
    if (cartData && prevCartData.current?.length !== 0) {
      const formatCart = formatProductCart(cartData);
      axios.put(ENP_CART, { products: formatCart }).then(() => {
        dispatch(updateCart(formatCart));
      });
    }
  }, [cartData]);

  const onRemove = (index) => {
    const tempData = [...cartData];

    tempData.splice(index, 1);

    prevCartData.current = cartData;
    setCartData(tempData);
  };

  const handleSelectChange = (selectedRowKeys, selectedRows) => {
    total.current = selectedRows?.reduce((previousValue, currentValue) => {
      return previousValue + (currentValue?.subtotal || 0);
    }, 0);
    setSelectedRows(selectedRows);
  };

  const navigate = useNavigate();
  const onCheckout = () => {
    const formatProduct = formatProductCart(selectedRows);
    const order = createOrder(user, formatProduct, total.current);

    let intersection = cartData.filter(
      (product) =>
        !selectedRows.map((selected) => selected._id).includes(product._id)
    );
    axios.post(ENP_ORDER, order).then((response) => {
      const newData = response.data.newOrderSave;

      prevCartData.current = cartData;
      setCartData(intersection);

      dispatch(addOrder(newData));
      navigate(path.order.route + "/" + newData._id);
    });
  };

  const hasSelected = selectedRows.length > 0;

  return (
    <section className="cart">
      <div className="cart--list">
        <Table
          pagination={false}
          dataSource={cartData}
          rowClassName={"cart--list__row"}
          rowSelection={{
            type: "checkbox",
            onChange: handleSelectChange,
          }}
        >
          <Column
            dataIndex={"img"}
            key="img"
            width={"150px"}
            render={(text, record) => (
              <img
                src={record?.image[0]}
                alt=""
                className="cart--list__thumbnail"
              />
            )}
          />
          <Column
            title="Product"
            dataIndex={"name"}
            key="name"
            render={(text, record, index) => (
              <div>
                <h2 className="cart--list__name">{record?.name}</h2>
                <Text
                  type="danger"
                  style={{
                    color: "rgb(211, 47, 47)",
                    cursor: "pointer",
                  }}
                  onClick={() => onRemove(index)}
                >
                  Remove
                </Text>
              </div>
            )}
          />
          <Column
            width={180}
            align="right"
            title="Price"
            dataIndex={"price"}
            key="price"
            render={(text, record) => <h2>${record?.price?.toFixed(2)}</h2>}
          />
          <Column
            width={"250px"}
            align="right"
            title="Quantity"
            dataIndex={"quantity"}
            key="quantity"
            render={(text, record, index) => (
              <div className="cart--list__quantity">
                <QuantityControl
                  value={cartData[index]?.quantity}
                  onUpdate={onUpdate(index)}
                  disable={
                    cartData[index]?.quantity === 1
                      ? -1
                      : cartData[index]?.quantity >= cartData[index]?.inStock
                      ? 1
                      : 0
                  }
                />
              </div>
            )}
          />
          <Column
            width={200}
            align="right"
            title="Subtotal"
            dataIndex={"subtotal"}
            key="subtotal"
            render={(text, record) => <h2>${record?.subtotal?.toFixed(2)}</h2>}
          />
        </Table>
      </div>

      <div className={`cart--confirm ${hasSelected > 0 ? "" : "invisible"}`}>
        <Text>
          {selectedRows.length} {"item(s) selected"}
        </Text>
        <div className="cart--confirm--btn">
          <Title style={{ fontWeight: "500", marginBottom: 0 }} level={4}>
            Total: ${total.current}
          </Title>
          <Button
            onClick={onCheckout}
            type="primary"
            className="cart--confirm--btn--btn"
          >
            Checkout
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CartList;
