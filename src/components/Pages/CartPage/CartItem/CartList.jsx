import { Table, Typography } from 'antd'
import QuantityControl from 'components/Controls/QuantityControl/QuantityControl';
import React from 'react'
import "./CartList.scss"


let dummyData = [
    {
        key: "1",
        img: require("../../../../assets/images/shoplist5.jpg"),
        name: "hello",
        price: 30,
        quantity: 1,
        subtotal: 30
    }
]

const { Column } = Table;
const { Text } = Typography;

const CartList = () => {

    return (
        <section className='cart'>
            <div className='cart--list'>
                <Table
                    pagination={false}
                    dataSource={dummyData}
                    rowClassName={"cart--list__row"}
                    rowSelection={{
                        type: "checkbox",
                    }}>
                    <Column
                        dataIndex={"img"}
                        key="img"
                        width={"150px"}
                        render={(text, img) =>
                            <img src={img.img}
                                alt=""
                                className='cart--list__thumbnail'
                            />}
                    />
                    <Column
                        title="Product"
                        dataIndex={"name"} key="name"
                        render={(text, record) =>
                            <div>
                                <h2 className='cart--list__name'>{record.name}</h2>
                                <Text type='danger'
                                    style={{
                                        color: "rgb(211, 47, 47)",
                                        cursor: "pointer"
                                }}>Remove</Text>
                            </div>
                        }
                    />
                    <Column width={180}
                        align='right'
                        title="Price"
                        dataIndex={"price"} key="price"
                        render={(text, record) =>
                            <h2>${record.price.toFixed(2)}</h2>
                        }
                    />
                    <Column
                        width={"250px"}
                        align='right'
                        title="Quantity"
                        dataIndex={"quantity"} key="quantity"
                        render={(text, record) =>
                            <div className='cart--list__quantity'>
                                <QuantityControl />
                            </div>}
                    />
                    <Column
                        width={200}
                        align='right'
                        title="Subtotal"
                        dataIndex={"subtotal"} key="subtotal"
                        render={(text, record) =>
                            <h2>${record.subtotal.toFixed(2)}</h2>
                        }
                    />
                </Table>
            </div>
        </section>
    )
}

export default CartList