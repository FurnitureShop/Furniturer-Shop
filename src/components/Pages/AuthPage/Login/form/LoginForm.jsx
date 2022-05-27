import { Button, Form, Input } from "antd";
import { ENP_LOGIN } from "api/EndPoint";
import FloatLabel from "components/Controls/FloatLabel/FloatLabel";
import { axios } from "lib/axios/Interceptor";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LocalStorageService from "services/LocalStorage";
import "./LoginForm.scss"

export default function LoginForm() {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const [form] = Form.useForm();

    const onEmailChangeHandler = (value) => {
        form.setFieldsValue({ email: value });
    }

    const onPasswordChangeHandler = (value) => {
        form.setFieldsValue({ password: value });
    }
    const onFinish = (values) => {
        setIsLoading(true);
        axios.post(ENP_LOGIN, values)
            .then(({ data: { accessToken, refreshToken } }) => {
                LocalStorageService.setAuthToken(accessToken);
                LocalStorageService.setRefreshToken(refreshToken);
                setTimeout(
                    () => {
                        navigate(-1);
                        setIsLoading(false);
                    }, 1000)
            })
    };

    return (
        <Form
            form={form}
            className="login_form"
            name="login_form"
            wrapperCol={{ span: 22 }}
            initialValues={{ email: "", password: "" }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                name="email"
                rules={[{
                    required: true,
                    message: 'Please input your email!',
                    type: "string"
                }]}
                shouldUpdate={(prevValues, curValues) =>
                    curValues.email.length === 0 || curValues.email.length === 1
                }>
                <FloatLabel label="Email" value={form.getFieldValue("email")}>
                    <Input size="large" onChange={(e) => onEmailChangeHandler(e.target.value)} />
                </FloatLabel>
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{
                    required: true,
                    message: 'Please input your password!',
                    type: "string",
                    min: 4,
                }]}
                shouldUpdate={(prevValues, curValues) =>
                    curValues.password.length === 0 || curValues.password.length === 1
                }>
                <FloatLabel label="Password" value={form.getFieldValue("password")}>
                    <Input type="password" size="large" onChange={(e) => onPasswordChangeHandler(e.target.value)} />
                </FloatLabel>
            </Form.Item>
            <p className="sign-up text-left ml-5">
                Don&lsquo;t have an account?
                <a
                    className="text--success"
                >
                    {' '}
                    Sign up
                </a>
            </p>
            <Form.Item>
                <Button className="w-full" type="primary" size="large"
                    loading={isLoading} htmlType="submit">
                    Log In
                </Button>
            </Form.Item>
        </Form>
    )
}