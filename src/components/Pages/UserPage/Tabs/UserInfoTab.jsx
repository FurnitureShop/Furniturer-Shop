<<<<<<< Updated upstream
import { Grid, Col, Form, Input, Row, Space, Button } from "antd";
import FloatLabel from "components/FloatLabel/FloatLabel";
=======
import { Row } from "antd";
>>>>>>> Stashed changes
import { useState } from "react";
import UserInfoForm from "./form/UserInfoForm";

export default function UserInfoTab() {
    return (
        <div>
            <Row>
                <h1 className="text-4xl mt-4 mb-6">My Account</h1>
            </Row>
            <UserInfoForm />
        </div>
    )
}