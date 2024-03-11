import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const CreatePayslip = () => {
    const navigate= useNavigate();
    return (
        <div className="w-full">
                 <div className="flex items-center cursor-pointer">
                <span onClick={()=>{navigate('/admin/payroll')}}>
                <FaLongArrowAltLeft/>Back
                </span>

            </div>
            {/* div 1st start below */}

            <div className="shadow-md mt-5 p-4">
                <div className="font-bold md:text-xl flex"> Create Pay Slip</div>
                <div className="font-bold md:text-base flex mt-5">Basic Information</div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3  mt-4'>

                    <div className="mt-4">
                        <label htmlFor="staffName" className="block text-sm text-gray-700 text-left">
                            Staff Name
                        </label>
                        <select
                            id="staffName"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="" disabled selected>
                                Select Name
                            </option>
                            <option value="ajay">Ajay</option>
                            <option value="divyanshu">Divyanshu</option>
                            <option value="prakhar">Prakhar</option>
                            <option value="Shamshad">Shamshad</option>
                        </select>
                    </div>

                    <div className="mt-4">
                        <label htmlFor="title" className="block text-sm text-gray-700 text-left">
                            Title
                        </label>
                        <select
                            id="title"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="" disabled selected>
                                Select Title
                            </option>
                            <option value="male">Manager</option>
                            <option value="female">Asst. Manager</option>
                            <option value="other">HR</option>
                            <option value="other">Developer</option>
                        </select>
                    </div>


                    <div className="mt-4">
                        <label htmlFor="level" className="block text-sm text-gray-700 text-left">
                            Level
                        </label>
                        <select
                            id="level"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                        >
                            <option value="" disabled selected>
                                Select Level
                            </option>
                            <option value="male">MD/CEO</option>
                            <option value="female">CEO</option>
                            <option value="other">DGM</option>
                            <option value="other">ED</option>
                        </select>
                    </div>
                </div>

            </div>
            {/* div 1st end above */}

            {/* second div start  */}
            <div className="shadow-md  p-4 ">
                <div className="font-bold md:text-base flex mt-5">Salary Structure</div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 '>
                  


                


                    <div className="mt-4">
                        <label htmlFor="basicSalary" className="block text-sm text-gray-700 text-left">
                            Basic Salary
                        </label>
                        <input
                            type="text"
                            id="basicSalary"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter amount"
                        />
                    </div>


                    <div className="mt-4">
                        <label htmlFor="houseAllowance" className="block text-sm text-gray-700 text-left">
                           House  Allowance
                        </label>
                        <input
                            type="text"
                            id="houseAllowance"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter amount"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="transportAllowance" className="block text-sm text-gray-700 text-left">
                            Transport Allowance
                        </label>
                        <input
                            type="text"
                            id="transportAllowance"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter amount"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="utilityAllowance" className="block text-sm text-gray-700 text-left">
                           Utility Allowance
                        </label>
                        <input
                            type="text"
                            id="transportAllowance"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter amount"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="productivityAllowance" className="block text-sm text-gray-700 text-left">
                         Productivity Allowance
                        </label>
                        <input
                            type="text"
                            id="productivityAllowance"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter amount"
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="communicationAllowance" className="block text-sm text-gray-700 text-left">
                         Communication Allowance
                        </label>
                        <input
                            type="text"
                            id="communicationAllowance"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter amount"
                        />
                    </div>
                    
                    <div className="mt-4">
                        <label htmlFor="inconvenienceAllowance" className="block text-sm text-gray-700 text-left">
                         Inconvenience Allowance
                        </label>
                        <input
                            type="text"
                            id="inconvenienceAllowance"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter amount"
                        />
                    </div>


                    <div className="mt-4">
                        <label htmlFor="grossSalary" className="block text-sm text-gray-700 text-left">
                            Gross Salary
                        </label>
                        <input
                            type="email"
                            id="grossSalary"
                            className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter email address"
                        />
                    </div>

                


{/* 
                    <div className="flex md:items-end items-end mt-4">
                        <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" >Create</button>

                    </div> */}






                </div>
            </div>
            {/* second div end  above*/}
            {/* third div start below  */}
            <div className="shadow-md  p-4">
            <div className="font-bold md:text-base flex mt-5">Deductions</div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 '>
                  


                


                  <div className="mt-4">
                      <label htmlFor="tax/paye" className="block text-sm text-gray-700 text-left">
                     TAX/PAYE
                      </label>
                      <input
                          type="text"
                          id="taxpaye"
                          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                          placeholder="Enter amount"
                      />
                  </div>


                  <div className="mt-4">
                      <label htmlFor="employeePension" className="block text-sm text-gray-700 text-left">
                         Employee Pension
                      </label>
                      <input
                          type="text"
                          id="employeePension"
                          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                          placeholder="Enter amount"
                      />
                  </div>

                  <div className="mt-4">
                      <label htmlFor="totalDeduction" className="block text-sm text-gray-700 text-left">
                          Total Deduction
                      </label>
                      <input
                          type="text"
                          id="totalDeduction"
                          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                          placeholder="Enter amount"
                      />
                  </div>

             

           
               
                  
       

              









              </div>
            </div>
            {/* third div end below  */}
            {/* last div */}
            <div className="shadow-md  p-4">
            <div className="font-bold md:text-base flex mt-5">Net Salary</div>
            <div className='grid grid-cols-1 md:grid-cols-3 md:gap-3 '>
                  




                  <div className="mt-4">
                      <label htmlFor="netSalary" className="block text-sm text-gray-700 text-left">
                    Net Salary
                      </label>
                      <input
                          type="text"
                          id="netSalary"
                          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                          placeholder="Enter amount"
                      />
                  </div>
</div>


<div className="flex md:items-end items-end mt-4">
                      <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" 
                      onClick={()=>navigate('/admin/payroll/created-payslip')} >Create</button>

                  </div>
            </div>
        </div>
    )
}

export default CreatePayslip;