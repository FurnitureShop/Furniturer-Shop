import { Divider, Space, Typography } from 'antd'
import React from 'react'
import "./OrderSummary.scss"

const { Text, Title } = Typography

const data = [
    {
        title: "Desk Decord",
        img: require("../../../../assets/images/shoplist5.jpg"),
        quantity: 1,
        price: 30,
    },
    {
        title: "Desk Decord",
        img: require("../../../../assets/images/shoplist5.jpg"),
        quantity: 1,
        price: 30,
    }
]

const OrderSummary = () => {
    return (
        <aside className='order-summary flex flex-col'>
            <Title level={4}>Order Summary</Title>
            <Space
                className='flex-1'
                direction='vertical'>
                {data.map((item, index) => (
                    <>
                        <div key={index} className='products--item'>
                            <div className='products--item--img'>
                                <img src={item.img} alt="" />
                            </div>
                            <div className='products--item--info'>
                                <Title level={5}>{item.title}</Title>
                                <Text>{item.quantity} x {item.price.toFixed(2)}</Text>
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

            <Space
                className='flex-1'
                direction='vertical'
                size={10}>
                <div className='products--calc'>
                    <Text>Subtotal</Text>
                    <Text>${240.00}</Text>
                </div>
                <div className='products--calc'>
                    <Text>Tax</Text>
                    <Text>${0.00}</Text>
                </div>
                <div className='products--calc'>
                    <Text>Shipping</Text>
                    <Text>${0.00}</Text>
                </div>
                <div className='products--calc products--calc__total'>
                    <Text>Total</Text>
                    <Text>${240.00}</Text>
                </div>
            </Space>
        </aside>
    )
}

export default OrderSummary