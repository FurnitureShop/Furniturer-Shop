import { Form, Radio, Typography } from 'antd'
import IconCOD from 'assets/icons/IconCOD'
import IconPaypal from 'assets/icons/IconPayPal';
import React, { useState } from 'react'
import "./PaymentMethod.scss"

const { Text } = Typography;

const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState(0)
    const handleOnChangeMethod = (e) => {
        setSelectedMethod(e.target.value)
    }

    return (
        <Form className='payment-method'>
            <Radio.Group
                defaultValue={selectedMethod}
                onChange={handleOnChangeMethod}
                size='large'>
                <div className={`method--item ${selectedMethod === 0 ? "selected" : ""}`}>
                    <Radio
                        value={0}>
                        <div className={`method--title`}>
                            <IconCOD width={60} />
                            <Text>Cash on Delivery</Text>
                        </div>
                    </Radio>
                </div>

                <div className={`method--item ${selectedMethod === 1 ? "selected" : ""}`}>
                    <Radio
                        value={1}>
                        <div className={`method--title`}>
                            <IconPaypal width={80} height={60}/>
                            <Text>PayPal</Text>
                        </div>
                    </Radio>
                </div>
            </Radio.Group>
        </Form>
    )
}

export default PaymentMethod