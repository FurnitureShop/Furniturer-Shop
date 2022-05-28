import { Button, Form, Input } from "antd";
import { ENP_LOGIN, ENP_REGISTER } from "api/EndPoint";
import { data } from "autoprefixer";
import FloatLabel from "components/Controls/FloatLabel/FloatLabel";
import { axios } from "lib/axios/Interceptor";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LocalStorageService from "services/LocalStorage";
import { login, selectLoading, selectUser } from "store/userSlice";
import "./RegisterForm.scss"

export default function RegisterForm() {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [form] = Form.useForm();

    const user = useSelector(selectUser);
    const isLoading = useSelector(selectLoading)

    const onEmailChangeHandler = (value) => {
        form.setFieldsValue({ email: value });
    }

    const onPasswordChangeHandler = (value) => {
        form.setFieldsValue({ password: value });
    }

    const onConfirmPasswordChangeHandler = (value) => {

        form.setFieldsValue({ confirmPassword: value });
        console.log(form.getFieldValue("confirmPassword"))
    }

    //Login success -> go back to previous page
    useEffect(() => {
        if (user) {
            navigate(-1);
        }
    }, [user])

    const onFinish = async (values) => {
        if (values.password === values.confirmPassword) {
            axios.post(ENP_REGISTER,
                { email: values.email, password: values.password })
                .then((data) => {
                    dispatch(login({ email: values.email, password: values.password }));
                })
        }
    };


    return (
        <Form
            form={form}
            className="register_form"
            name="register_form"
            wrapperCol={{ span: 22 }}
            initialValues={{ email: "", password: "", confirmPassword: "" }}
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
            <Form.Item
                name="confirmPassword"
                rules={[{
                    required: true,
                    message: 'Please input your confirm password!',
                    type: "string",
                    min: 4,
                }]}
                shouldUpdate={(prevValues, curValues) =>
                    curValues.confirmPassword.length === 0 || curValues.confirmPassword.length === 1
                }>
                <FloatLabel label="Confirm Password" value={form.getFieldValue("confirmPassword")}>
                    <Input type="password" size="large" onChange={(e) => onConfirmPasswordChangeHandler(e.target.value)} />
                </FloatLabel>
            </Form.Item>
            <p className="sign-up text-left ml-5">
                Already have an account?
                <Link
                    to="/login"
                    className="text--success"
                >
                    {' '}
                    Log in
                </Link>
            </p>
            <Form.Item>
                <Button className="w-full" type="primary" size="large"
                    loading={isLoading} htmlType="submit">
                    Sign up
                </Button>
            </Form.Item>
        </Form>
    )
}