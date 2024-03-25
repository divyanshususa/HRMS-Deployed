import React from "react";
import SalaryTable from "../components/SalaryTable";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './payslip.css'
const PaySlip = ({ payslip }) => {
  const navigate = useNavigate();
  return (
    //         <div classNameName="w-full">
    //             <div>
    //             <div classNameName="flex items-center cursor-pointer">
    //                 <span onClick={()=>{navigate('/admin/payroll')}}>
    //                 <FaLongArrowAltLeft/>Back
    //                 </span>

    //             </div>

    //             <div classNameName="shadow-md mt-5 p-4  flex justify-between">
    // <div>
    // <div>
    //    <div classNameName="font-extrabold"> Ajay Gawli</div>
    //    <div classNameName="mt-4 text-center">Full Stack Deveopler</div>
    // </div>
    // </div>

    // <div>
    // <div classNameName="flex md:items-end items-end mt-4">
    //                       <button classNameName="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white" 
    //                     //   onClick={()=>navigate('/admin/payroll/created-payslip')} 
    //                       >Edit PaySlip</button>

    //                   </div>
    // </div>
    //             </div>
    //             </div>
    //             <SalaryTable payslip={payslip}/>

    //         </div>

    <div className="salary-slip" >
      <table className="empDetail">
        <tr height="100px" style={{ backgroundColor: "#c2d69b" }}>
          <td colspan='4'>
            <img height="90px" src='/images/logo.png' /></td>
          <td colspan='4' className="companyName"> Susalabs Pvt Ltd.  </td>
        </tr>
        <tr>
          <th>
            Name
          </th>
          <td>
            Example
          </td>
          <td></td>
          <th>
            Bank Code
          </th>
          <td>
            ABC123
          </td>
          <td></td>
          <th>
            Branch Name
          </th>
          <td>
            ABC123
          </td>
        </tr>
        <tr>
          <th>
            Employee Code
          </th>
          <td>
            XXXXXXXXXXX
          </td>
          <td></td>
          <th>
            Bank Name
          </th>
          <td>
            XXXXXXXXXXX
          </td>
          <td></td>
          <th>
            Payslip no.
          </th>
          <td>
            XXXXXXXXXX
          </td>
        </tr>
        <tr>
          
          <th>
            Bank Branch
          </th>
          <td>
            XXXXXXXXXX
          </td><td></td>
          <th>
            Pay Period
          </th>
          <td>
            XXXXXXXXXXX
          </td>
        </tr>
        <tr>
      
          <th>
            Bank A/C no.
          </th>
          <td>
            XXXXXXXXXX
          </td>
       
        </tr>
        <tr>
       
         
          <th>
            PAN No:
          </th>
          <td>
            MOP72182E
          </td>
        </tr>
        <tr className="myBackground">
          <th colspan="2">
            Payments
          </th>
          <th >
            Particular
          </th>
          <th className="table-border-right">
            Amount (Rs.)
          </th>
          <th colspan="2">
            Deductions
          </th>
          <th >
            Particular
          </th>
          <th >
            Amount (Rs.)
          </th>
        </tr>
        <tr>
          <th colspan="2">
            Basic Salary
          </th>
          <td></td>
          <td className="myAlign">
            4935.00
          </td>
          <th colspan="2" >
            Provident Fund
          </th >
          <td></td>

          <td className="myAlign">
            00.00
          </td>
        </tr >
        <tr>
          <th colspan="2">
            House Allowance
          </th>
          <td></td>

          <td className="myAlign">
            00.00
          </td>
          <th colspan="2" >
            Tax
          </th >
          <td></td>

          <td className="myAlign">
            00.00
          </td>
        </tr >
        <tr>
          <th colspan="2">
            Transport Allowance
          </th>
          <td></td>

          <td className="myAlign">
            00.00
          </td>
      
        </tr >
        <tr>
          <th colspan="2">
            Utility Allowance
          </th>
          <td></td>
          <td className="myAlign">
            00.00
          </td>
       
        </tr >
        <tr>
          <th colspan="2">
          Productivity Allowance
          </th>
          <td></td>


          <td className="myAlign">
            00.00
          </td>
        </tr >
        <tr>
          <th colspan="2">
           Communication Allowance
          </th> <td></td>
          <td className="myAlign">
            00.00
          </td>
       
        </tr >
     
        <tr>
          <th colspan="2">
            Inconvenience Allowance
          </th>
          <td></td>
          <td className="myAlign">
            00.00
          </td>
      
        </tr >
        <tr>
          <td colspan="4" className="table-border-right"></td>
       
        </tr >
        <tr>
          <td colspan="4" className="table-border-right"></td>
        
        </tr >
        <tr>
          <td colspan="4" className="table-border-right"></td>
       
        </tr >
        <tr className="myBackground">
          <th colspan="3">
            Total Payments
          </th>
          <td className="myAlign">
            10000
          </td>
          <th colspan="3" >
            Total Deductions
          </th >
          <td className="myAlign">
            1000
          </td>
        </tr >
        <tr height="40px">
          <th colspan="2">
     
          </th>
          <th>
          </th>
          <td className="table-border-right">
          </td>
          <th colspan="2" className="table-border-bottom" >
            Net Salary
          </th >
          <td >
          </td>
          <td >
            XXXXXXXXXX
          </td>
        </tr >
        <tr>
          <td colspan="2">
            Gross Salary
          </td> <td></td>
          <td className="myAlign">
            00.00
          </td><td colspan="4"></td>
        </tr >
     
       
        <tr>
      
        </tr >
        <tr>
          <td colspan="2">
            Total Income
          </td> <td></td>
          <td className="myAlign">
            00.00
          </td>
          <td colspan="4"></td>
        </tr >
        <tbody className="border-center">
          <tr>
            <th>
              Attend/ Absence
            </th>
            <th>
              Days in Month
            </th>
            <th>
              Days Paid
            </th>
            <th>
              Days Not Paid
           
                         </th>
          </tr>
          <tr>
            <td >12</td>
            <td ></td>
            <td ></td>
            <td ></td>
           
          </tr >
          <tr>
            <th >Current Month</th>
            <td >31.0</td>
            <td >31.0</td>
            <td >31.0</td>
           
          </tr >
   
     
        
        </tbody>
      </table >

    </div >

  )
}

export default PaySlip;