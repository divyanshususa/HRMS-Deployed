import React from "react";
import { Table } from "antd";

const StaffListTable = () => {
  const columns = [
    {
      title: "S/N",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Staff Name",
      dataIndex: "staffName",
      key: "staffName",
    },
    {
      title: "Staff Role",
      dataIndex: "staffRole",
      key: "staffRole",
    },
    {
      title: "Designation",
      dataIndex: "designation",
      key: "designation",
    },
  ];

  const data = [
    {
      key: "1",
      serialNumber: "01",
      staffName: "Abubakar Ismaila Goje",
      staffRole: "Admin",
      designation: "Human Resource Dept.",
    },
    {
      key: "2",
      serialNumber: "02",
      staffName: "Ifeanyi Obinna",
      staffRole: "Admin",
      designation: "Management",
    },
    {
      key: "3",
      serialNumber: "03",
      staffName: "Bankole Olanrewaju",
      staffRole: "HOD I.T",
      designation: "Peoples and Operation",
    },
    {
      key: "4",
      serialNumber: "04",
      staffName: "Chidinma Ebere",
      staffRole: "HOD Account",
      designation: "Accounts",
    },
    // Add more data as needed
  ];

  return (
    <div className=" overflow-y-auto bg-white rounded-xl shadow-md">
      <div className="flex flex-col items-start justify-start gap-4 p-4">
        <div className="font-extrabold">Staff List</div>
        <div className=" overflow-y-auto text-xs text-grey-70 h-[300px]">
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
  );
};

export default StaffListTable;
