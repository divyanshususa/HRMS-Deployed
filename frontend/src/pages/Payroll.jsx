import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { salcolumns, taxcolumns, payrollcolumns,staffDetailsCol } from "../utils/columns";
import {
  saldummyData,
  taxDummyData,
  payrollDummyData,
  dummyStaffDetailsData
} from "../utils/dummyData";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const DynamicTable = ({ columns, dataSource }) => {
  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      pagination={{ pageSize: 7 }}
      size="middle"
    />
  );
};

const Payroll = () => {
  const [currColumn, setCurrColumn] = useState([]);
  const [currData, setcurrData] = useState([]);
  const [activeTab, setActiveTab] = useState("salary");
  const navigate = useNavigate();

  const handleDynamicTable = (val) => {
    console.log(val);
    if (val === "salary") {
      setActiveTab(val);
      setCurrColumn(salcolumns);
      setcurrData(saldummyData);
    } else if (val === "tax") {
      setActiveTab(val);
      setCurrColumn(taxcolumns);
      setcurrData(taxDummyData);
    } else if (val === "payslip") {
      setActiveTab(val);
      setCurrColumn(staffDetailsCol);
      setcurrData(dummyStaffDetailsData);
    } else if (val === "payroll") {
      setActiveTab(val);
      setCurrColumn(payrollcolumns);
      setcurrData(payrollDummyData);
    }
  };

  return (
    <div>
      {/* Upper div starts  */}

      <div className="flex max-xl:flex-col  flex-row gap-4">
        {/* left div starts*/}
        <div>
          <div className="flex  flex-wrap md:flex-wrap gap-2">
            <div className=" rounded-xl shadow-md">
              <div className="flex gap-3 p-5 items-start justify-start ">
                <div>
                  <div className=" font-extrabold text-base">25785890</div>
                  <div className=" text-base leading-[24px]">
                    Gross Salary this month
                  </div>
                </div>
                <div>
                  <img
                    className=" w-[50px] h-[50px]"
                    alt=""
                    src="/images/img5.png"
                  />
                </div>
              </div>

              <div className="flex flex-row items-center justify-start text-xs text-grey-70 m-2">
                <div className="">
                  <FaArrowUp className="" />
                  12 more than last quarter
                </div>
              </div>
            </div>

            {/* total application */}

            <div className=" rounded-xl shadow-md">
              <div className="flex gap-3 p-5 items-start justify-start ">
                <div>
                  <div className=" font-extrabold text-base">1089787680</div>
                  <div className=" text-base leading-[24px]">
                    Net salary this month
                  </div>
                </div>
                <div>
                  <img
                    className=" w-[50px] h-[50px]"
                    alt=""
                    src="/images/img6.png"
                  />
                </div>
              </div>

              <div className="flex flex-row items-center justify-start text-xs text-grey-70 m-2">
                <FaArrowUp />
                <div className="relative leading-[20px]">
                  0.2% than last quater
                </div>
              </div>
            </div>

            {/* Total projects */}

            <div className=" rounded-xl shadow-md">
              <div className="flex gap-3 p-5 items-start justify-start ">
                <div>
                  <div className=" font-extrabold text-base">56878700</div>
                  <div className=" text-base leading-[24px]">
                    Total Tax this month
                  </div>
                </div>
                <div>
                  <img
                    className=" w-[50px] h-[50px]"
                    alt=""
                    src="/images/img7.png"
                  />
                </div>
              </div>

              <div className="flex flex-row items-center justify-start text-xs text-grey-70 m-2">
                <FaArrowDown />
                <div className="relative leading-[20px]">
                  2% more than last quater
                </div>
              </div>
            </div>

            {/* Total departments */}

            <div className=" rounded-xl shadow-md">
              <div className="flex gap-3 p-5 items-start justify-start ">
                <div>
                  <div className=" font-extrabold text-base">9877860</div>
                  <div className=" text-base leading-[24px]">
                    Total Loan this month
                  </div>
                </div>
                <div>
                  <img
                    className=" w-[50px] h-[50px]"
                    alt=""
                    src="/images/img8.png"
                  />
                </div>
              </div>
              <div className="flex flex-row items-center justify-start text-xs text-grey-70 m-2">
                <FaArrowDown />
                <div className="relative leading-[20px]">
                  2% more than last quater
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* left div ends */}
        {/* right div starts  */}
        <div className="bg-white rounded-xl shadow-md md:w-[800px] overflow-auto ">
         <img src="/images/graph.png" alt="" className="md:h-[300px] md:w-[350px] mt-5" />
        </div>
        {/* right div ends  */}
      </div>

      {/* upper div ends */}
      {/* center div starts  */}
      <div className="bg-white rounded-xl shadow-md  p-8 ">
        <div className="flex md:flex-wrap flex-wrap gap-7 cursor-pointer">
          <button
            className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
            onClick={() => handleDynamicTable("salary")}
          >
            Salary Breakdown
          </button>
          <button
            className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
            onClick={() => handleDynamicTable("tax")}
          >
            Tax Defination
          </button>
          <button
            className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
            onClick={() => handleDynamicTable("payslip")}
          >
            PaySlips
          </button>
          <button
            className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
            onClick={() => handleDynamicTable("payroll")}
          >
            Payroll
          </button>
        </div>
      </div>
      {/* center div close above */}

      {/* lower div  */}
      {activeTab === "salary" && (
        <div className="flex justify-between  items-center mt-6 p-3 ">
          <div className="font-extrabold">Salary BreakDown</div>
          <button
            className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
            onClick={() => navigate("/admin/payroll/salary-defination")}
          >
            <div className="">Create Salary BreakDown</div>
          </button>
        </div>
      )}

      {activeTab === "tax" && (
        <div className="flex justify-between  items-center mt-6 p-3 ">
          <div className="font-extrabold">Tax Definations</div>
          <button
            className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
            onClick={() => navigate("/admin/payroll/tax-defination")}
          >
            <div className="">Create Tax Defination</div>
          </button>
        </div>
      )}

      {activeTab === "payslip" && (
        <div className="flex justify-between  items-center mt-6 p-3 ">
          <div className="font-extrabold">Employee Payslip History</div>
          <button
            className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
            onClick={() => navigate("/admin/payroll/create-payslip")}
          >
            <div className="">Create PaySlip</div>
          </button>
        </div>
      )}

      {activeTab === "payroll" && (
        <div className="flex justify-between  items-center mt-6 p-3 ">
          <div className="font-extrabold">Employee Payroll History</div>
          <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
          onClick={() => navigate("/admin/payroll/create-payroll")}
          >
            <div className="">Create Payroll</div>
          </button>
        </div>
      )}
      <div className="bg-white rounded-xl shadow-md mt-6 p-3">
        <div className="overflow-auto md:overflow-auto  md:overflow-x-scroll   text-left text-xl text-black font-body-3-small">
          <div className=" text-xs text-grey-70">
            <DynamicTable
              columns={currColumn}
              dataSource={currData}
              pagination={{ pageSize: 7 }}
              size="middle"
            />
          </div>
        </div>
      </div>
      {/* lower div close above */}
    </div>
  );
};
export default Payroll;
