import { LoadingOutlined } from "@ant-design/icons";
import { Grid, Col, Form, Input, Row, Space, Button, Spin, List, InputNumber, Typography, Popconfirm, Table } from "antd";
import FloatLabel from "components/FloatLabel/FloatLabel";
import { useEffect, useState } from "react";

export default function AddressShippingTab() {
    const [loading, setLoading] = useState(false);

    const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

    //Create data
    const originData = [{
        key: 1,
        landNumber: 12,
        ward: "Hiep Binh Chanh",
        district: "1",
        province: "Ho Chi Minh city",
    }];

    //Create editable cell
    const EditableCell = ({
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
    }) => {
        const inputNode = inputType === 'number' ? <InputNumber size="small" /> : <Input size="small" />;

        return (
            <td {...restProps}>
                {editing ? (
                    <Form.Item
                        name={dataIndex}
                        style={{ margin: 0 }}
                        rules={[
                            {
                                required: true,
                                message: `Please input ${title}!`,
                            },
                        ]}
                    >
                        {inputNode}
                    </Form.Item>
                ) : (
                    children
                )}
            </td>
        );
    };
    const [form] = Form.useForm();
    const [data, setData] = useState(originData);
    const [editingKey, setEditingKey] = useState('');


    const isEditing = record => record?.key === editingKey;


    const edit = (record) => {
        form.setFieldsValue({ name: '', age: '', address: '', ...record });
        setEditingKey(record.key);
    };

    const cancel = () => {
        setEditingKey('');
    };
    const save = async (key) => {
        try {
            const row = (await form.validateFields());

            const newData = [...data];
            const index = newData.findIndex(item => key === item.key);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setData(newData);
                setEditingKey('');
            } else {
                newData.push(row);
                setData(newData);
                setEditingKey('');
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    };

    const columns = [
        {
            title: 'Street',
            dataIndex: 'landNumber',
            width: '25%',
            editable: true,
        },
        {
            title: 'Ward',
            dataIndex: 'ward',
            width: '25%',
            editable: true,
        },
        {
            title: 'District',
            dataIndex: 'district',
            width: '20%',
            editable: true,
        },
        {
            title: 'Province',
            dataIndex: 'province',
            width: '25%',
            editable: true,
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link onClick={() => save(record.key)} style={{ marginRight: 8 }}>
                            Save
                        </Typography.Link>
                        <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
                            <a>Cancel</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => { console.log(record); edit(record) }}>
                        Edit
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = columns.map(col => {
        console.log(col)
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record) =>
            ({
                record,
                inputType: 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    return (
        <>
            <Form form={form} component={false}>
                <Table
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={data}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </>
    )
}