import { Grid, Col, Form, Input, Row, Space, Button } from "antd";
import FloatLabel from "components/Controls/FloatLabel/FloatLabel";
import { useState } from "react";

export default function UserInfoTab() {
    const [fullName, setFullName] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    return (
        <div>
            <Row>
                <h1 className="text-4xl mt-4 mb-6">My Account</h1>
            </Row>
            <Row className="mb-2">
                <Col span={20}>
                    <FloatLabel label="Full name" name="fullname" value={fullName}>
                        <Input size="large" value={fullName} onChange={e => setFullName(e.target.value)} />
                    </FloatLabel>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={10}>
                    <FloatLabel label="Phone number" name="phonenumber" value={phoneNumber}>
                        <Input size="large" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    </FloatLabel>
                </Col>
                <Col span={10}>
                    <FloatLabel label="Email" value="admin@123" disabled>
                        <Input className="cursor-not-allowed" size="large" value="admin@123" disabled />
                    </FloatLabel>
                </Col>
            </Row>
            <Row className="mt-6">
                <Button size="large" type="primary" htmlType="submit">
                    <p style={{ font: "italic 16px EB Garamond" }}>Save information</p>
                </Button>
            </Row>
        </div>
    )
}