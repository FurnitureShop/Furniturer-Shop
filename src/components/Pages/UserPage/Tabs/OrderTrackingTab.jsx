import { LoadingOutlined } from "@ant-design/icons";
import { List } from "antd";
import { ENP_ORDER } from "api/EndPoint";
import { axios } from "lib/axios/Interceptor";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "./drawer/mockData";
import OrderReviewDraw from "./drawer/OrderReviewDrawer";

export default function OrderTrackingTab() {
  const [loading, setLoading] = useState(false);

  const [visible, setVisible] = useState(false);
  const [dataPreview, setDataPreview] = useState(null);

  const [listOrder, setListOrder] = useState();

  useEffect(() => {
    axios.get(ENP_ORDER).then((response) => {
      setListOrder(response.data.order);
    });
  }, []);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  const onCloseClick = () => {
    setVisible(false);
    setDataPreview(null);
  };

  const onOpenClick = (item) => {
    setVisible(true);
    setDataPreview(item);
  };

  const navigate = useNavigate();
  const onClickNavigatePaymentMethod = (id) => {
    console.log(id);
    navigate("/order/" + id);
  };

  return (
    <div>
      <List
        header={<h1 className="text-4xl mt-4 mb-6">Order Tracking</h1>}
        bordered
        loading={loading}
        dataSource={listOrder}
        pagination
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-order-edit" onClick={(e) => onOpenClick(item)}>
                Preview
              </a>,
            ]}
          >
            <List.Item.Meta
              style={{ fontFamily: "EB Garamond" }}
              title={<h1 className="text-2xl">Order ID: {item._id}</h1>}
              description={
                <div className="text-xl">
                  Create at:{" "}
                  {new Date(item.createAt).toLocaleDateString("en-GB", {
                    timeZone: "UTC",
                  })}
                </div>
              }
            />
            <div style={{ fontFamily: "EB Garamond" }} className="text-xl">
              Total price: ${item.totalPrice}
            </div>
          </List.Item>
        )}
      />
      <OrderReviewDraw
        onClose={onCloseClick}
        visible={visible}
        data={dataPreview}
        onClickNavigatePaymentMethod={onClickNavigatePaymentMethod}
      />
    </div>
  );
}
