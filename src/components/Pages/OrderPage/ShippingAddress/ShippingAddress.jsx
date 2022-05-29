import { Form, Input, Select, Typography } from 'antd'
import CheckboxControl from 'components/Controls/CheckboxControl/CheckboxControl';
import FloatLabel from 'components/Controls/FloatLabel/FloatLabel';
import SelectControl from 'components/Controls/SelectControl/SelectControl';
import React from 'react'
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
                        className
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

                <FloatLabel label="Street">
                    <Input size='large' />
                </FloatLabel>

                <div className='flex flex-row gap-x-3'>
                    <SelectControl customClassName="flex-1" label="Province" />
                    <SelectControl customClassName="flex-1" label="District" />
                    <SelectControl customClassName="flex-1" label="Ward" />
                </div>

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
            </div>
        </Form>
    )
}

export default ShippingAddress