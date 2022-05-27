import { Alert } from "antd";
import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import RegisterForm from "./form/RegisterForm";

export default function RegisterTab() {
    const [searchParams] = useSearchParams();
    const isWarning = searchParams.get("isWarning");

    return (
        <div className="register text-center">
            <div className="greeting">
                <h2 className="text-5xl font-bold mb-5">Bonjour!</h2>
                <p className="mb-6.5">To connect to your account, enter your email address and password.</p>
            </div>
            <RegisterForm />
        </div>
    )
}