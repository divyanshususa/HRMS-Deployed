import React from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import { FaLongArrowAltLeft } from "react-icons/fa";

const TrainingRequest=()=>{
    const navigate= useNavigate()
    return(
        <div className="w-full overflow-auto">

        <div className="shadow-md  p-4 ">
        <div className="flex items-center cursor-pointer">
                <span onClick={() => { navigate('/admin/capacity') }}>
                    <FaLongArrowAltLeft />Back
                </span>

            </div>
            <div className="font-bold md:text-base flex mt-5">Training Request</div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 '>






                <div className="mt-4">
                    <label htmlFor="description" className="block text-sm text-gray-700 text-left">
                 Training description
                    </label>
                    <input
                        type="text"
                        id="budgetNo"
                        className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter description"
                    />
                </div>


                <div className="mt-4">
                    <label htmlFor="trainingType" className="block text-sm text-gray-700 text-left">
                       Training type
                    </label>
                    <input
                        type="text"
                        id="trainingType"
                        className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter type"
                    />
                </div>

                <div className="mt-4">
                    <label htmlFor="trainingDuration" className="block text-sm text-gray-700 text-left">
                     Training duration
                    </label>
                    <input
                        type="text"
                        id="trainingDuration"
                        className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter duration"
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

              
                <div className="mt-4">
        <label htmlFor="mode" className="block text-sm text-gray-700 text-left">
         Training mode
        </label>
        <select
          id="category"
          className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled selected>
            Select mode
          </option>
          <option value="Online">Online </option>
          <option value="Offline">Offline</option>
        </select>
      </div>


      <div className="mt-4">
                    <label htmlFor="stafftoTrain" className="block text-sm text-gray-700 text-left">
                Staff to be trained
                    </label>
                    <input
                        type="text"
                        id="stafftoTrain"
                        className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        placeholder="Enter name"
                    />
                </div>
            </div>

            <div>
                   
                <div className="flex md:items-end items-end mt-4 flex-wrap gap-4">
                    <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" >Save and Submit</button>
                    <button className="w-[205px] cursor-pointer text-blue-300 focus:outline-none ring border-purple-500  rounded-3xs  h-[46px] flex flex-row items-center justify-center p-2.5 box-border " >Save</button>

                </div>
            </div>
        </div>

    </div>
    )
}

export default TrainingRequest