import {
  Grid,
  Col,
  Form,
  Input,
  Row,
  Space,
  Button,
  Spin,
  List,
  InputNumber,
  Typography,
  Popconfirm,
  Table,
  Select,
  notification,
} from "antd";
import {
  BASE_API_LOCATION_VN_URL,
  ENP_ADD_ADDRESS,
  ENP_CHANGE_ADDRESS,
  ENP_DISTRICT,
  ENP_PROVINCE,
  ENP_WARD,
} from "api/EndPoint";
import axios from "axios";

import { axios as axiosAuth } from "lib/axios/Interceptor";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "store/userSlice";
import AddAddressForm from "./form/AddAddressForm";

export default function AddressShippingTab() {
  //Editing cell create
  const [provinceData, setProvinceData] = useState([]);
  const [districtData, setDistrictData] = useState([]);
  const [wardData, setWardData] = useState([]);

  const user = useSelector(selectUser);
  const [form] = Form.useForm();
  const [data, setData] = useState(user?.address);
  const [editingKey, setEditingKey] = useState("");

  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    axios.get(BASE_API_LOCATION_VN_URL + ENP_PROVINCE).then((response) => {
      const options = [];
      for (let i = 0; i < response.data.results.length; i++) {
        options.push({
          label: response.data.results[i]["province_name"],
          value: response.data.results[i]["province_id"],
        });
      }
      setProvinceData(options);
    });
  }, []);

  const onHandleProvinceSelected = (value, option) => {
    form.setFieldsValue({ province: option.label });

    axios
      .get(BASE_API_LOCATION_VN_URL + ENP_DISTRICT + value)
      .then((response) => {
        const options = [];
        for (let i = 0; i < response.data.results.length; i++) {
          options.push({
            label: response.data.results[i]["district_name"],
            value: response.data.results[i]["district_id"],
          });
        }
        form.setFieldsValue({ district: "", ward: "" });
        setDistrictData(options);
      });
  };

  const onHandleDistrictSelected = (value, option) => {
    form.setFieldsValue({ district: option.label });

    axios.get(BASE_API_LOCATION_VN_URL + ENP_WARD + value).then((response) => {
      const options = [];
      for (let i = 0; i < response.data.results.length; i++) {
        options.push({
          label: response.data.results[i]["ward_name"],
          value: response.data.results[i]["ward_id"],
        });
      }
      form.setFieldsValue({ ward: "" });
      setWardData(options);
    });
  };
  const onHandleWardSelected = (value, option) => {
    form.setFieldsValue({ ward: option.label });
  };

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
    let comboBoxNode;

    if (dataIndex === "province")
      comboBoxNode = (
        <Select
          size="large"
          style={{ width: "200px" }}
          value={form.getFieldValue("province")}
          options={provinceData}
          onSelect={onHandleProvinceSelected}
        />
      );
    else if (dataIndex === "district")
      comboBoxNode = (
        <Select
          size="large"
          style={{ width: "200px" }}
          value={form.getFieldValue("district")}
          options={districtData}
          onChange={onHandleDistrictSelected}
        />
      );
    else if (dataIndex === "ward")
      comboBoxNode = (
        <Select
          size="large"
          style={{ width: "200px" }}
          value={form.getFieldValue("ward")}
          options={wardData}
          onChange={onHandleWardSelected}
        />
      );
    else comboBoxNode = <Input style={{ paddingTop: "10px" }} />;

    return (
      <td key={dataIndex} {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{ margin: 0 }}
            rules={[
              {
                message: `Please input ${title}!`,
              },
            ]}
          >
            {comboBoxNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  // Table
  const updateAddress = (_id, address) => {
    axiosAuth.put(ENP_CHANGE_ADDRESS + _id, address).then((response) => {
      setData(response.data.user.address);
      notification.success({
        message: "Update success",
        placement: "bottomLeft",
      });
    });
  };

  const deleteAddress = (value) => {
    axiosAuth.delete(ENP_CHANGE_ADDRESS + value._id, value).then((response) => {
      setData(response.data.user.address);
      notification.success({
        message: "Delete success",
        placement: "bottomLeft",
      });
    });
  };

  const onFinish = (value) => {
    axiosAuth.post(ENP_ADD_ADDRESS, value).then((response) => {
      setData(response.data.user.address);
      notification.success({
        message: "Add success",
        placement: "bottomLeft",
      });
    });
    setOpenModel(false);
  };

  const isEditing = (record) => record?._id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      landNumber: "",
      ward: "",
      district: "",
      province: "",
      ...record,
    });
    setEditingKey(record._id);
  };

  const cancel = () => {
    setEditingKey("");
  };
  const save = async (_id) => {
    try {
      const row = await form.validateFields();

      updateAddress(_id, row);

      setEditingKey("");
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "Street",
      dataIndex: "landNumber",
      width: "25%",
      editable: true,
    },
    {
      title: "Ward",
      dataIndex: "ward",
      width: "25%",
      editable: true,
    },
    {
      title: "District",
      dataIndex: "district",
      width: "20%",
      editable: true,
    },
    {
      title: "Province",
      dataIndex: "province",
      width: "18%",
      editable: true,
    },
    {
      render: (text, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record._id)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </span>
        ) : (
          <span>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => {
                edit(record);
              }}
              style={{ color: "#47c269", marginRight: 20 }}
            >
              Edit
            </Typography.Link>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => {
                deleteAddress(record);
              }}
              style={{ color: "#d32f2f" }}
            >
              Delete
            </Typography.Link>
          </span>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: "text",
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
      <Button
        size="large"
        style={{ position: "relative", top: "-3.125rem" }}
        type="primary"
        onClick={() => {
          setOpenModel(true);
        }}
      >
        <span style={{ font: "italic 16px EB Garamond" }}>Add Address</span>
      </Button>
      <AddAddressForm
        visible={openModel}
        onCancel={() => {
          setOpenModel(false);
        }}
        onFinish={onFinish}
      />
    </>
  );
}
