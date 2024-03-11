import React from "react";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "antd";
import { FaLongArrowAltLeft } from "react-icons/fa";

const ProcurementReq = () => {
    const navigate = useNavigate()
    return (
        <div className="w-full overflow-auto">

            <div className="shadow-md  p-4 ">
                <div className="flex items-center cursor-pointer">
                    <span onClick={() => { navigate('/admin/procurement') }}>
                        <FaLongArrowAltLeft />Back
                    </span>

                </div>
                <div className="font-bold md:text-base flex mt-5">Training Request</div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 '>






                    <div className="mt-4">
                        <label htmlFor="item" className="block text-sm text-gray-700 text-left">
                            Item
                        </label>
                        <input
                            type="text"
                            id="budgetNo"
                            className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter item name"
                        />
                    </div>


                    <div className="mt-4">
                        <label htmlFor="quantity" className="block text-sm text-gray-700 text-left">
                            Quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter quantity"
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
                        <label htmlFor="unitPrice" className="block text-sm text-gray-700 text-left">
                            Unit Price
                        </label>
                        <input
                            type="text"
                            id="unitPrice"
                            className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter amount"
                        />
                    </div>


                    <div className="mt-4">
                        <label htmlFor="totalPrice" className="block text-sm text-gray-700 text-left">
                            Total Price
                        </label>
                        <input
                            type="text"
                            id="totalPrice"
                            className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter amount"
                        />
                    </div>


                    <div className="mt-4">
                        <label htmlFor="requestBy" className="block text-sm text-gray-700 text-left">
                            Requested By
                        </label>
                        <input
                            type="text"
                            id="requestBy"
                            className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter name"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="requestBy" className="block text-sm text-gray-700 text-left">
                            Requested By
                        </label>
                        <input
                            type="text"
                            id="requestBy"
                            className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter name"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="sentTo" className="block text-sm text-gray-700 text-left">
                            Sent to
                        </label>
                        <select
                            id="sentTo"
                            className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="HR">HR </option>
                            <option value="Admin">Admin</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="addAttachment" className="block text-sm text-gray-700 text-left">
                            Add Attachement
                        </label>
                        <select
                            id="addAttachment"
                            className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            <option value="Yes">Yes </option>
                            <option value="NO">NO</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="attachmentType" className="block text-sm text-gray-700 text-left">
                            Attachement Type
                        </label>
                        <select
                            id="attachmentType"
                            className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="" disabled selected>
                                Select
                            </option>
                            {/* <option value="Yes">Yes </option>
          <option value="NO">NO</option> */}
                        </select>
                    </div>


                </div>

                <div>

                    <div className="flex md:items-end items-end mt-4 flex-wrap gap-4">
                        <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" >Attach Payment Voucher</button>

                    </div>
                </div>
            </div>


        <div className="  flex flex-col items-start justify-start gap-[20px_0px] mt-10 shadow-md w-full ">
        <div className=" font-extrabold">Beneficiary Payment Details </div>

        <div className="flex flex-wrap md:flex-wrap gap-4 md:items-end w-full" >
        <div className="mt-4 flex-auto">
        <label htmlFor="accountName" className="block text-sm text-gray-700 text-left">
         Account Name
        </label>
        <input
          type="text"
          id="accountName"
          className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter  name"
        />
      </div>


      <div className="mt-4 flex-auto">
        <label htmlFor="accountNo" className="block text-sm text-gray-700 text-left">
        Account No.
        </label>
        <input
          type="text"
          id="accountNo"
          className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter number"
        />
      </div>

      <div className="mt-4 flex-auto">
        <label htmlFor="bankName" className="block text-sm text-gray-700 text-left">
         Bank Name
        </label>
        <input
          type="text"
          id="bankName"
          className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter bank name"
        />
      </div>

      {/* <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
        >
          <div className="">Submit  Payment Voucher</div>
        </button> */}



        </div>
        </div>


        <div className="  flex flex-col items-start justify-start gap-[20px_0px] mt-10 shadow-md w-full mb-4 ">
        <div className=" font-extrabold">Memo Activities</div>

        <div className="flex flex-wrap md:flex-wrap gap-4 md:items-end w-full" >
        <div className="mt-4 flex-auto">
        <label htmlFor="initiatedBy" className="block text-sm text-gray-700 text-left">
        Initiated by
        </label>
        <input
          type="text"
          id="initiatedBy"
          className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter  name"
        />
      </div>


      <div className="mt-4 flex-auto">
        <label htmlFor="verifiedby" className="block text-sm text-gray-700 text-left">
        Verified by
        </label>
        <input
          type="text"
          id="verifiedby"
          className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter name"
        />
      </div>

      <div className="mt-4 flex-auto">
        <label htmlFor="approvedBy" className="block text-sm text-gray-700 text-left">
       Approved by
        </label>
        <input
          type="text"
          id="approvedBy"
          className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter  name"
        />
      </div>

      {/* <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
        >
          <div className="">Submit  Payment Voucher</div>
        </button> */}



        </div>
        </div>
        <div className="flex md:items-end items-end  flex-wrap gap-4 mb-4 mt-4">
                        <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" >Save and Send for Approval</button>
                        <button className="w-[205px] cursor-pointer text-blue-300 focus:outline-none focus:ring border-purple-500  rounded-3xs  h-[46px] flex flex-row items-center justify-center p-2.5 box-border " >Save</button>

                    </div>
        </div>
    )
}

export default ProcurementReq