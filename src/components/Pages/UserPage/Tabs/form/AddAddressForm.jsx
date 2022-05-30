import { Button, Form, Input, Select } from "antd";
import Modal from "antd/lib/modal/Modal";
import { BASE_API_LOCATION_VN_URL, ENP_ADD_ADDRESS, ENP_DISTRICT, ENP_PROVINCE, ENP_WARD } from "api/EndPoint";
import axios from "axios";
import { axios as axiosAuth } from "lib/axios/Interceptor";
import React, { useEffect, useState } from "react";
import "./AddAddressForm.scss"

export default function AddAddressForm({ visible, onFinish, onCancel }) {
    const [form] = Form.useForm();

    //Editing cell create
    const [provinceData, setProvinceData] = useState([]);
    const [districtData, setDistrictData] = useState([]);
    const [wardData, setWardData] = useState([]);

    useEffect(() => {
        axios.get(BASE_API_LOCATION_VN_URL + ENP_PROVINCE)
            .then((response) => {
                const options = [];
                for (let i = 0; i < response.data.results.length; i++) {
                    options.push({
                        label: response.data.results[i]["province_name"],
                        value: response.data.results[i]["province_id"]
                    })
                }
                setProvinceData(options)
            });
    }, [])

    const onHandleProvinceSelected = (value, option) => {
        form.setFieldsValue({ province: option.label });

        axios.get(BASE_API_LOCATION_VN_URL + ENP_DISTRICT + value)
            .then((response) => {
                const options = [];
                for (let i = 0; i < response.data.results.length; i++) {
                    options.push({
                        label: response.data.results[i]["district_name"],
                        value: response.data.results[i]["district_id"],
                    })
                }
                form.setFieldsValue({ district: '', ward: '' })
                setDistrictData(options);

            });
    }

    const onHandleDistrictSelected = (value, option) => {
        form.setFieldsValue({ district: option.label });

        axios.get(BASE_API_LOCATION_VN_URL + ENP_WARD + value)
            .then((response) => {
                const options = [];
                for (let i = 0; i < response.data.results.length; i++) {
                    options.push({
                        label: response.data.results[i]["ward_name"],
                        value: response.data.results[i]["ward_id"],
                    })
                }
                form.setFieldsValue({ ward: '' });
                setWardData(options)
            });
    }
    const onHandleWardSelected = (value, option) => {
        form.setFieldsValue({ ward: option.label });
    }

    const onLandNumberChange = (value) => {
        form.setFieldsValue({ landNumber: value });
    }

    const handleAdd = () => {
        form.validateFields()
            .then((value) => {
                onFinish(value);
                form.resetFields();
            })
            .catch((info) => {
                console.log('Validate Failed:', info);
            });
    }

    return (
        <Modal
            visible={visible}
            title="Add new address"
            onCancel={onCancel}
            footer={[
                <Button key="submit" type="primary" onClick={handleAdd}>
                    <span style={{ font: "italic 16px EB Garamond" }}>Add</span>
                </Button>,
                <Button onClick={onCancel}>
                    <span style={{ font: "italic 16px EB Garamond" }}>Cancel</span>
                </Button>
            ]}
        >
            <Form form={form}
                className="add_address_form"
                name="add_address_form"
                onFinish={onFinish}
                initialValues={{ landNumber: "", ward: "", district: "", province: "" }}
                autoComplete="off"
            >
                <Form.Item
                    name="province"
                    style={{ margin: 0 }}
                    rules={[
                        {
                            message: `Please input Province!`,
                        },
                    ]}
                    label="Province"
                >
                    <Select style={{ width: "21rem" }}
                        value={form.getFieldValue("province")} options={provinceData} onSelect={onHandleProvinceSelected} />
                </Form.Item>

                <Form.Item
                    name="district"
                    style={{ margin: 0 }}
                    rules={[
                        {
                            message: `Please input District!`,
                        },
                    ]}
                    label="District"
                >
                    <Select style={{ width: "21rem" }}
                        value={form.getFieldValue("district")} options={districtData} onChange={onHandleDistrictSelected} />
                </Form.Item>

                <Form.Item
                    name="ward"
                    style={{ margin: 0 }}
                    rules={[
                        {
                            message: `Please input Ward!`,
                        },
                    ]}
                    label="Ward"
                >
                    <Select style={{ width: "21rem" }}
                        value={form.getFieldValue("ward")} options={wardData} onChange={onHandleWardSelected} />
                </Form.Item>

                <Form.Item
                    name="landNumber"
                    style={{ margin: 0 }}
                    rules={[
                        {
                            message: `Please input Land Number!`,
                        },
                    ]}
                    label="Land Number"
                >
                    <Input style={{ width: "21rem" }} onChange={e => onLandNumberChange(e.target.value)} />
                </Form.Item>
            </Form >
        </Modal>
    )
}