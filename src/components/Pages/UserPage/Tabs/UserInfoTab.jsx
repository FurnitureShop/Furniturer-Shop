
import { Row } from "antd";

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