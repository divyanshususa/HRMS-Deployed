import React from "react";
import { Table } from "antd";

const PaymentVouchersTable = () => {
  const columns = [
    {
      title: "S/N",
      dataIndex: "serialNumber",
      key: "serialNumber",
      render: (_, __, index) => index + 1,  
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <span className={text === "Pending" ? "text-accent-orange" : "text-accent-green"}>
          {text}
        </span>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      serialNumber: "01",
      subject: "Request for FARS for October 2022",
      date: "25/01/2023",
      status: "Pending",
    },
    {
      key: "2",
      serialNumber: "02",
      subject: "Request for project proposal fee",
      date: "19/01/2023",
      status: "Approved",
    },
    {
      key: "3",
      serialNumber: "03",
      subject: "Request for FARS for October 2022",
      date: "10/01/2023",
      status: "Approved",
    },
    {
      key: "4",
      serialNumber: "04",
      subject: "Request for project proposal fee",
      date: "03/01/2023",
      status: "Pending",
    },
    // Add more data as needed
  ];

  return (
    <div className=" overflow-y-auto bg-white rounded-xl shadow-md">
      <div className="flex flex-col items-start justify-start gap-4 p-4">
        <div className="font-extrabold">Payment Vouchers</div>
        <div className="overflow-y-auto h-[300px] text-xs text-grey-70">
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
      </div>
    </div>
  );
};

export default PaymentVouchersTable;
