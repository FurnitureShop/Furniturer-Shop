import { Button, Form, Input, Select, Typography } from 'antd'
import CheckboxControl from 'components/Controls/CheckboxControl/CheckboxControl';
import FloatLabel from 'components/Controls/FloatLabel/FloatLabel';
import SelectControl from 'components/Controls/SelectControl/SelectControl';
import React from 'react'
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import './ShippingAdress.scss'

const { Title } = Typography;
const { Option } = Select

const ShippingAddress = () => {

    return (
        <Form className='shipping-address'>
            <div className='delivery flex flex-col gap-y-3'>
                <div className='delivery--header'>
                    <Title
                        level={4}
                    >Delivery Information</Title>
                </div>

                <FloatLabel label="Recipient's name">
                    <Input size='large' />
                </FloatLabel>

                <div className='flex flex-row gap-x-3'>
                    <FloatLabel customClassName="flex-1" label="Phone number">
                        <Input size='large' />
                    </FloatLabel>
                    <FloatLabel customClassName="flex-1" label="Email">
                        <Input size='large' />
                    </FloatLabel>
                </div>

                <FloatLabel>
                    <Select
                        size='large'
                        showSearch
                        placeholder="Select an address"
                        style={{
                            width: "100%"
                        }}
                    >
                        <Option value="1">Address 1</Option>
                        <Option value="2">Address 2</Option>
                        <Option value="3">Address 3</Option>
                    </Select>
                </FloatLabel>


                <FloatLabel label="Notes">
                    <Input size='large' />
                </FloatLabel>

                <CheckboxControl
                    customClassName=""
                    label="Save delivery information for the next time" />
            </div>

            <div className='payment'>
                <div className='payment--header'>
                    <Title
                        level={4}
                        className
                    >Payment Method</Title>
                </div>
                <PaymentMethod />
            </div>

            <div className='order-btn'>
                <Button
                    type="primary"
                    className='order-btn--btn'>
                    Confirm Order
                </Button>
            </div>
        </Form>
    )
}

export default ShippingAddress