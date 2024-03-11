import React from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import { FaLongArrowAltLeft } from "react-icons/fa";

const CreateBudget=()=>{
    const navigate= useNavigate()
    return(
        <div className="w-full overflow-auto">

        <div className="shadow-md  p-4 ">
        <div className="flex items-center cursor-pointer">
                <span onClick={() => { navigate('/admin/budget') }}>
                    <FaLongArrowAltLeft />Back
                </span>

            </div>
            <div className="font-bold md:text-base flex mt-5">Create Budget</div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 '>






                <div className="mt-4">
                    <label htmlFor="budgetNo" className="block text-sm text-gray-700 text-left">
                     Budget Number
                    </label>
                    <input
                        type="text"
                        id="budgetNo"
                        className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter number"
                    />
                </div>


                <div className="mt-4">
                    <label htmlFor="description" className="block text-sm text-gray-700 text-left">
                       Budget Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter description"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="amount" className="block text-sm text-gray-700 text-left">
                      Budget Amount
                    </label>
                    <input
                        type="text"
                        id="amount"
                        className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter amount"
                    />
                </div>

             


              

                <div className="mt-4">
                    <label htmlFor="date" className="block text-sm text-gray-700 text-left">
                         Date 
                    </label>
                    <DatePicker
                        id="date"
                        className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Select Date"
                    />
                </div>

              


            </div>

            <div>
                   
                <div className="flex md:items-end items-end mt-4 flex-wrap gap-4">
                    <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" >Create Budget</button>

                </div>
            </div>
        </div>

    </div>
    )
}

export default CreateBudget