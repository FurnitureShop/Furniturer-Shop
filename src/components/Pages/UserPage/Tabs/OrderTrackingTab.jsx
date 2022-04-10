import { LoadingOutlined } from "@ant-design/icons";
import { Grid, Col, Form, Input, Row, Space, Button, Spin, List } from "antd";
import FloatLabel from "components/FloatLabel/FloatLabel";
import { useEffect, useState } from "react";

export default function OrderTrackingTab() {
    const [loading, setLoading] = useState(false);

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    const handleOrderClick = (id) => {
        console.log("Edit " + id);
    }

    const handleDeleteClick = (id) => {
        console.log("Delete " + id);
    }


    const datas = [1, 2, 3, 4, 5];
    return (
        <div>
            <List
                header={<h1 className="text-4xl mt-4 mb-6">Order Tracking</h1>}
                bordered
                loading={loading}
                dataSource={datas}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <a key="list-order-edit" onClick={e => handleOrderClick(item)}>edit</a>,
                            <a key="list-order-delete" onClick={e => handleDeleteClick(item)}>delete</a>
                        ]}
                    ><h1 className="text-xl">Order ID: {item}</h1>
                    </List.Item>
                )}
            />
        </div>
    )
}