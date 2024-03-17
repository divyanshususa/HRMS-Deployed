import React from "react";
import SalaryTable from "../components/SalaryTable";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const PaySlip =({payslip})=>{
    const navigate= useNavigate();
    return(
        <div className="w-full">
            <div>
            <div className="flex items-center cursor-pointer">
                <span onClick={()=>{navigate('/admin/payroll')}}>
                <FaLongArrowAltLeft/>Back
                </span>

            </div>

            <div className="shadow-md mt-5 p-4  flex justify-between">
<div>
<div>
   <div className="font-extrabold"> Ajay Gawli</div>
   <div className="mt-4 text-center">Full Stack Deveopler</div>
</div>
</div>

<div>
<div className="flex md:items-end items-end mt-4">
                      <button className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" 
                    //   onClick={()=>navigate('/admin/payroll/created-payslip')} 
                      >Edit PaySlip</button>

                  </div>
</div>
            </div>
            </div>
            <SalaryTable payslip={payslip}/>

        </div>
    )
}

export default PaySlip;