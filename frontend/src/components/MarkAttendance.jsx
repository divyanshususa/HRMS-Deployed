import React from 'react'
import axios from 'axios';
import config from '../configuration/config';
import "react-toastify/dist/ReactToastify.css";
import { toast } from 'react-toastify';

const MarkAttendance = ()=>{
    

    
    const handlePunchIn = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
          const response = await axios.post(`${config.baseURL}/attendance/mark-attendance`, {
            employeeId: user?._id,
            action: 'punchIn',
          });
          console.log(response.data.message);
          toast.success("Attendance Mark Successfully")
        } catch (error) {
            toast.error("something went wrong")
          console.error('Error marking attendance:', error);
        }
      };
    
      const handlePunchOut = async () => {
        try {
            const user = JSON.parse(localStorage.getItem('user'))
          const response = await axios.post(`${config.baseURL}/attendance/mark-attendance`, {
            employeeId: user?._id,
            action: 'punchOut',
          });
          toast.success("Punch Out Successfully")
          console.log(response.data.message);
        } catch (error) {
            toast.error("something went wrong")
          console.error('Error marking attendance:', error);
        }
      };
    return(
        <div>
            <div className='font-semibold text-xl'>Mark Attendance</div>
            <div className='flex gap-4 bg-slate-200 mt-10 justify-center'>
                <button className ='cursor-pointer w-40  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white'
                  onClick={handlePunchIn}
                >
                Punch In

                </button>
                <button className='cursor-pointer w-40  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white'
                  onClick={handlePunchOut}
                >
                Punch Out
                </button>

            </div>
        </div>
    )
}

export default MarkAttendance