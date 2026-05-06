import {
    DeleteOutlined,
    DownloadOutlined,
    EyeOutlined,
    TruckFilled,
    UploadOutlined,
} from "@ant-design/icons";
import type { TableColumnsType, TableProps } from "antd";
import { App, Button, Divider, Space, Table } from "antd";
import { useState } from "react";

type OnChange = NonNullable<TableProps<DataType>["onChange"]>;
type Filters = Parameters<OnChange>[1];

type GetSingle<T> = T extends (infer U)[] ? U : never;
type Sorts = GetSingle<Parameters<OnChange>[2]>;

interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
}

const data: DataType[] = [
    {
        key: "1",
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
    },
    {
        key: "2",
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
    },
    {
        key: "3",
        name: "Joe Black",
        age: 32,
        address: "Sydney No. 1 Lake Park",
    },
    {
        key: "4",
        name: "Jim Red",
        age: 32,
        address: "London No. 2 Lake Park",
    },
];

const HomePage = () => {
    const { message, modal } = App.useApp();
    const [filteredInfo, setFilteredInfo] = useState<Filters>({});
    const [sortedInfo, setSortedInfo] = useState<Sorts>({});

    const handleChange: OnChange = (pagination, filters, sorter) => {
        console.log("Various parameters", pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter as Sorts);
    };

    const clearFilters = () => {
        setFilteredInfo({});
    };

    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };

    const setAgeSort = () => {
        setSortedInfo({
            order: "descend",
            columnKey: "age",
        });
    };

    const columns: TableColumnsType<DataType> = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
            filters: [
                { text: "Joe", value: "Joe" },
                { text: "Jim", value: "Jim" },
            ],
            filteredValue: filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value as string),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Age",
            dataIndex: "age",
            key: "age",
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Address",
            dataIndex: "address",
            key: "address",
            filters: [
                { text: "London", value: "London" },
                { text: "New York", value: "New York" },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value as string),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: "Action",
            key: "action",
            render: () => (
                <Space size={4} separator={<Divider vertical />}>
                    <Button icon={<EyeOutlined />} />
                    <Button
                        icon={
                            <DeleteOutlined
                                style={{ color: "#cf1322" }}
                                onClick={() =>
                                    modal.confirm({
                                        title: "Are you sure you want to delete this item?",
                                        content: "This action cannot be undone.",
                                    })
                                }
                            />
                        }
                    />
                </Space>
            ),
        },
    ];

    return (
        <div style={{ padding: 90 }}>
            <p>rap</p>
            <Space size={"medium"}>
                <Button
                    type="primary"
                    onClick={() => {
                        message.success("This is a success message!");
                    }}
                    icon={<TruckFilled />}
                >
                    Monitoring
                </Button>
                <Button
                    onClick={() => {
                        message.error("Success!");
                    }}
                    icon={<DownloadOutlined />}
                >
                    Download
                </Button>
                <Button
                    onClick={() => {
                        message.error("Success!");
                    }}
                    icon={<UploadOutlined />}
                    loading
                >
                    Upload
                </Button>
                <Button onClick={setAgeSort}>Sort age</Button>
                <Button onClick={clearFilters}>Clear filters</Button>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table<DataType> columns={columns} dataSource={data} onChange={handleChange} />
        </div>
    );
};

export default HomePage;
