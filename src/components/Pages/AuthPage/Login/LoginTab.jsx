import { Alert } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import LoginForm from "./form/LoginForm";

export default function LoginTab() {
    const [searchParams] = useSearchParams();
    const isWarning = searchParams.get("isWarning");

    return (
        <div className="login text-center">
            <div className="greeting">
                <h2 className="text-5xl font-bold mb-5">Bonjour!</h2>
                <p className="mb-10">To connect to your account, enter your email address and password.</p>
            </div>
            <div className="login__alert w-11/12 m-auto">
                {
                    isWarning && (
                        <Alert message="You must login first" type="warning" showIcon />
                    )
                }
            </div>
            <LoginForm />
        </div>
    )
}