import { Col, Drawer, Row, Steps } from "antd";
import { ENP_GET_PRODUCT_BY_LIST_ID } from "api/EndPoint";
import IconDeliveryTruck from "assets/icons/IconDeliveryTruck";
import IconProcessing from "assets/icons/IconProcessing";
import IconShoppingBag from "assets/icons/IconShoppingBag";
import IconWallet from "assets/icons/IconWallet";
import { axios } from "lib/axios/Interceptor";
import React, { useEffect, useState } from "react";
import checkStatusIndex from "utils/checkStatusIndex";
import FormatProduct from "utils/formatProduct";


import ProductTable from "../table/ProductTable";
import "./OrderReviewDrawer.scss"

export default function OrderReviewDraw({ onClose, visible, data }) {

    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        const listID = [];
        if (!data) return;

        for (let index = 0; index < data.products.length; index++) {
            listID.push(data.products[index].product);
        }
        axios.post(ENP_GET_PRODUCT_BY_LIST_ID, { listID: listID })
            .then((response) => {
                for (let index = 0; index < response.data.products.length; index++) {
                    response.data.products[index].quantity = data.products[index].quantity
                }
                setProductsData(response.data.products)
                console.log(productsData);
            })
    }, [visible])

    if (!data) return null;


    return (
        <Drawer className="order_preview_drawer" width={640} placement="right" onClose={onClose} visible={visible}>
            <Row>
                <Col>
                    <h1 className="mb-10 text-5xl">Order id: {data._id}</h1>
                </Col>
            </Row>
            <div className=" text-3xl mb-3">
                <h1>Customer profile</h1>
            </div>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={10}>
                            <p>Customer name: {data.customerName}</p>
                        </Col>
                        <Col span={10}>
                            <p>Phone: {data.phone}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={10}>
                            <p>Order time: {(new Date(data.createAt)).toLocaleDateString('en-GB', { timeZone: 'UTC' })}</p>
                        </Col>
                        <Col span={12}>
                            <p>Note: {data.note}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p>Address: {data.address}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <div className="text-3xl mb-3 mt-5">
                <h1>Process progress</h1>
            </div>
            <div className="pt-9">
                <Steps current={checkStatusIndex(data.status)} labelPlacement={"vertical"}>
                    <Steps.Step title="Create order" icon={<IconShoppingBag width="1em" height="1em" />} />
                    <Steps.Step title="Confirm payment method" icon={<IconWallet width="1em" height="1em" />} />
                    <Steps.Step title="Processing" icon={<IconProcessing width="1em" height="1em" />} />
                    <Steps.Step title="Delivered" icon={<IconDeliveryTruck width="1em" height="1em" />} />
                </Steps>
            </div>
            <div className="text-3xl mb-3 mt-5">
                <h1>Products</h1>
            </div>
            <div className="pt-6">
                <ProductTable source={productsData.map(FormatProduct)} />
            </div>
        </Drawer>
    )
}