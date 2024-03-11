import React from "react";
import { DatePicker } from 'antd';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Table } from "antd";
import { staffDetailsCol } from "../utils/columns";
import {
    dummyStaffDetailsData,

} from "../utils/dummyData";

const CreatePayroll = () => {
    const navigate = useNavigate();
    return (
        <div>

            <div className="shadow-md  p-4 ">
                <div className="flex items-center cursor-pointer">
                    <span onClick={() => { navigate('/admin/payroll') }}>
                        <FaLongArrowAltLeft />Back
                    </span>

                </div>
                <div className="font-bold md:text-base flex mt-10">Generate Payroll</div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3  mt-5'>






                    <div className="mt-4">
                        <label htmlFor="paymentName" className="block text-sm text-gray-700 text-left">
                            Payment Name
                        </label>
                        <input
                            type="text"
                            id="paymentName"
                            className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter payment name"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="designation" className="block text-sm text-gray-700 text-left">
                            Designation
                        </label>
                        <select
                            id="designation"
                            className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="" disabled selected>
                                Select designation
                            </option>
                            <option value="male">MD/CEO</option>
                            <option value="female">CEO</option>
                            <option value="other">DGM</option>
                            <option value="other">ED</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="generatedDate" className="block text-sm text-gray-700 text-left">
                            Generated Date
                        </label>
                        <DatePicker
                            id="generatedDate"
                            className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Select Generated Date"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="month" className="block text-sm text-gray-700 text-left">
                            Payment Month
                        </label>
                        <select
                            id="month"
                            className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="" disabled selected>
                                Select Month
                            </option>
                            <option value="January">January</option>
                            <option value="febuary">febuary</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="year" className="block text-sm text-gray-700 text-left">
                            Payment Year
                        </label>
                        <select
                            id="year"
                            className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="" disabled selected>
                                Select Year
                            </option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>




                    {/* 
                    <div className="flex md:items-end items-end mt-4">
                        <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" >Create</button>

                    </div> */}






                </div>
                <div className="flex md:items-end items-end mt-4">
                    <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
                    >Generate Payroll</button>

                </div>
            </div>


            <div className="bg-white rounded-xl shadow-md mt-6 p-3">
                <div className="font-bold md:text-base flex mt-3">Staff Details</div>
                <div className="overflow-auto md:overflow-auto  md:overflow-x-scroll mt-6  text-left text-xl text-black font-body-3-small">
                    <div className=" text-xs text-grey-70">
                        <Table
                            columns={staffDetailsCol}
                            dataSource={dummyStaffDetailsData}
                            pagination={{ pageSize: 7 }}
                            size="middle"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default CreatePayroll