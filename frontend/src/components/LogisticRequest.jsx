import React from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import { FaLongArrowAltLeft } from "react-icons/fa";

const LogisticRequest=()=>{
    const navigate= useNavigate()
    return(
        <div className="w-full overflow-auto">

        <div className="shadow-md  p-4 ">
        <div className="flex items-center cursor-pointer">
                <span onClick={() => { navigate('/admin/logistics') }}>
                    <FaLongArrowAltLeft />Back
                </span>

            </div>
            <div className="font-bold md:text-base flex mt-5">Logistic Request</div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 '>






                <div className="mt-4">
                    <label htmlFor="requestTitle" className="block text-sm text-gray-700 text-left">
                      Request Title
                    </label>
                    <input
                        type="text"
                        id="requestTitle"
                        className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter title"
                    />
                </div>


                <div className="mt-4">
                    <label htmlFor="purpose" className="block text-sm text-gray-700 text-left">
                        Purpose
                    </label>
                    <input
                        type="text"
                        id="purpose"
                        className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter purpose"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="amount" className="block text-sm text-gray-700 text-left">
                       Amount
                    </label>
                    <input
                        type="text"
                        id="amount"
                        className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter amount"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="requestedBy" className="block text-sm text-gray-700 text-left">
                    Requested By
                    </label>
                    <input
                        type="text"
                        id="requestedBy"
                        className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter name"
                    />
                </div>


                <div className="mt-4">
                    <label htmlFor="sentTo" className="block text-sm text-gray-700 text-left">
                        Sent to
                    </label>
                    <input
                        type="text"
                        id="sentTo"
                        className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter name"
                    />
                </div>

              

                <div className="mt-4">
                    <label htmlFor="dateFrom" className="block text-sm text-gray-700 text-left">
                         Date from
                    </label>
                    <DatePicker
                        id="dateFrom"
                        className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Select  Date"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="dateTo" className="block text-sm text-gray-700 text-left">
                         Date to
                    </label>
                    <DatePicker
                        id="dateTo"
                        className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Select  Date"
                    />
                </div>
               


          






            </div>

            <div>
                   
                <div className="flex md:items-end items-end mt-4 flex-wrap gap-4">
                    <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" >Attach Payment Voucher</button>

                </div>
            </div>
        </div>

    </div>
    )
}

export default LogisticRequest