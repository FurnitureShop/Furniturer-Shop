import { Grid, Col, Form, Input, Row, Space, Button } from "antd";
import FloatLabel from "components/Controls/FloatLabel/FloatLabel";
import { useState } from "react";
import plugin from "tailwindcss/plugin";

export default function ChangePasswordTab() {
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const [confirmNewPassword, setConfirmNewPassword] = useState();
    return (
        <div>
            <Row>
                <h1 className="text-4xl mt-4 mb-6">Change password</h1>
            </Row>
            <Row className="mb-2">
                <Col span={20}>
                    <FloatLabel label="Old password" name="oldpassword" value={oldPassword}>
                        <Input size="large" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                    </FloatLabel>
                </Col>
            </Row>
            <Row className="mb-2">
                <Col span={20}>
                    <FloatLabel label="New password" name="newpassword" value={newPassword}>
                        <Input size="large" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                    </FloatLabel>
                </Col>
            </Row>
            <Row>
                <Col span={20}>
                <FloatLabel label="Confirm new password" name="confirmnewpassword" value={confirmNewPassword}>
                        <Input size="large" value={confirmNewPassword} onChange={e => setConfirmNewPassword(e.target.value)} />
                    </FloatLabel>
                </Col>
            </Row>
            <Row className="mt-6">
                <Button size="large" type="primary" htmlType="submit">
                    <p style={{ font: "italic 16px EB Garamond" }}>Update password</p>
                </Button>
            </Row>
        </div>
    )
}