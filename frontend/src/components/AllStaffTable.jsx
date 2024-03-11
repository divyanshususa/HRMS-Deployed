import React from "react";
import { Table } from "antd";

const AllStaffTable = () => {
  const onViewMoreTextClick = (record) => {
    // Handle view more click for the specific record
    // record will contain information about the clicked row
    console.log("View more clicked for:", record);
  };

  const columns = [
    {
      title: "S/N",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Staff ID",
      dataIndex: "staffID",
      key: "staffID",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <span
          className="text-transparent !bg-clip-text [background:linear-gradient(135deg,_#14add5,_#384295)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] cursor-pointer"
          onClick={() => onViewMoreTextClick(record)}
        >
          View more
        </span>
      ),
    },
  ];

  const data = Array.from({ length: 10 }, (_, index) => ({
    key: (index + 1).toString(),
    serialNumber: (index + 1).toString(),
    firstName: "First Name",
    lastName: "Last Name",
    gender: index % 2 === 0 ? "Male" : "Female",
    staffID: `0246AH${index + 1}`,
    phoneNumber: "08130000000",
    role: "Admin",
    designation: "Human Resources",
  }));

  return (
    <div className=" text-left text-xl text-black font-body-3-small">
      <div className=" text-xs text-grey-70 overflow-auto ">
        <Table
          columns={columns}
          dataSource={data}
          pagination={{ pageSize: 8 }}
          size="middle"
        />
      </div>
    </div>
  );
};

export default AllStaffTable;
