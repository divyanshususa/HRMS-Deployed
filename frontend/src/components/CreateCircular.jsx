import React from "react";
import { DatePicker } from "antd";
import { useNavigate } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const CreateCircular = () => {
    const navigate= useNavigate()
    return (
        <div className="w-full overflow-auto">

            <div className="shadow-md  p-4 ">
            <div className="flex items-center cursor-pointer">
                    <span onClick={() => { navigate('/admin/circular') }}>
                        <FaLongArrowAltLeft />Back
                    </span>

                </div>
                <div className="font-bold md:text-base flex mt-5">Create Circular</div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 '>






                    <div className="mt-4">
                        <label htmlFor="circularTitle" className="block text-sm text-gray-700 text-left">
                            Circular Title
                        </label>
                        <input
                            type="text"
                            id="circularTitle"
                            className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter title"
                        />
                    </div>


                    <div className="mt-4">
                        <label htmlFor="sentFrom" className="block text-sm text-gray-700 text-left">
                            Sent from
                        </label>
                        <input
                            type="text"
                            id="sentFrom"
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
                        <label htmlFor="generatedDate" className="block text-sm text-gray-700 text-left">
                             Date
                        </label>
                        <DatePicker
                            id="generatedDate"
                            className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Select  Date"
                        />
                    </div>
                  
                    <div className="mt-4 text-bold">
                        <label htmlFor="circularMessage" className="block text-sm text-gray-700 text-left">
                          Circular Message
                        </label>
                        <textarea
                            type="text"
                            id="circularMessage"
                            className=" mt-2 md:w-full md:h-[120px] h-[100px] p-1 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter message.."
                        />
                    </div>


    

                </div>


                <div>
                       
                    <div className="flex md:items-end items-end mt-4 flex-wrap gap-4">
                        <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" >Send Circular</button>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default CreateCircular;