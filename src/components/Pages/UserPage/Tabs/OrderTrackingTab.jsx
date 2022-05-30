import { LoadingOutlined } from "@ant-design/icons";
import { List } from "antd";
import { useState } from "react";
import { data } from "./drawer/mockData";
import OrderReviewDraw from "./drawer/OrderReviewDrawer";

export default function OrderTrackingTab() {
    const [loading, setLoading] = useState(false);

    const [visible, setVisible] = useState(false);
    const [dataPreview, setDataPreview] = useState(null);


    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const onCloseClick = () => {
        setVisible(false)
        setDataPreview(null)
    }

    const onOpenClick = (item) => {
        setVisible(true);
        setDataPreview(item);
    }

    return (
        <div>
            <List
                header={<h1 className="text-4xl mt-4 mb-6">Order Tracking</h1>}
                bordered
                loading={loading}
                dataSource={data}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <a key="list-order-edit" onClick={e => onOpenClick(item)}>Preview</a>,
                        ]}
                    ><List.Item.Meta
                            style={{ fontFamily: "EB Garamond" }}
                            title={<h1 className="text-2xl">Order ID: {item._id}</h1>}
                            description={
                                <div className="text-xl">
                                    Create at: {(new Date(item.createAt)).toLocaleDateString('en-GB', { timeZone: 'UTC' })}
                                </div>}
                        />
                        <div style={{ fontFamily: "EB Garamond" }} className="text-xl">Total price: ${item.totalPrice}</div>
                    </List.Item>
                )}
            />
            <OrderReviewDraw onClose={onCloseClick} visible={visible} data={dataPreview} />
        </div>
    )
}