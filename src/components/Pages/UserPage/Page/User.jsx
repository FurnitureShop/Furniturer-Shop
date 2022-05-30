import { VerticalAlignBottomOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "store/userSlice";
import AddressShippingTab from "../Tabs/AddressShippingTab";
import ChangePasswordTab from "../Tabs/ChangePasswordTab";
import OrderTrackingTab from "../Tabs/OrderTrackingTab";
import UserInfoTab from "../Tabs/UserInfoTab";
import "./User.scss"

const { TabPane } = Tabs;


export default function User() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogoutTabClick = (key) => {
        if (key == 5) {
            navigate("/")
            dispatch(logout());
        }
    }

    return (
        <div className="mb-24">
            <div className="myaccount-container">
                <h1>MY ACCOUNT</h1>
            </div>
            <div className="usertab-container pt-10">
                <Tabs defaultActiveKey="1" tabPosition="left" onTabClick={onLogoutTabClick}>
                    <TabPane tab="ACCOUNT DETAIL" key="1"><UserInfoTab /></TabPane>
                    <TabPane tab="SHIPPING INFORMATION" key="2"><AddressShippingTab /></TabPane>
                    <TabPane tab="ORDERS" key="3"><OrderTrackingTab /></TabPane>
                    <TabPane tab="CHANGE PASSWORD" key="4"><ChangePasswordTab /></TabPane>
                    <TabPane tab="LOGOUT" key="5" on></TabPane>
                </Tabs>
            </div>
        </div>
    )
}