import { Row } from "antd";
import ChangePasswordForm from "./form/ChangePasswordForm";

export default function ChangePasswordTab() {

    return (
        <div>
            <Row>
                <h1 className="text-4xl mt-4 mb-6">Change password</h1>
            </Row>
            <ChangePasswordForm />
        </div>
    )
}