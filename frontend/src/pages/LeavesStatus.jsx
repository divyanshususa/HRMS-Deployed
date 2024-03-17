import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd';
import axios from 'axios';
import config from '../configuration/config';
import { toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";

const LeavesStatus=()=>{
    const[tableData , setTableData]= useState([])
    const [refreshFlag, setRefreshFlag] = useState(false);
    const columns = [
        {
          title: 'Image',
          dataIndex: 'employee',
          render: (employee, record) => (
            <img src={employee?.photo} style={{ width: '50px', height: '50px' }} alt="Employee" />
          )
        },
        {
          title: "First Name",
          dataIndex: "employee",
          render: (employee, record) => employee?.firstname + ''+ employee?.lastname
        },
        {
          title: "Employee Id",
          dataIndex: "employee",
          render: (employee, record) => employee?.empId
        },
        {
          title: "Start Date",
          dataIndex: "startDate",
          key: "startDate",
        },
        {
          title: "End Date",
          dataIndex: "endDate",
          key: "endDate",
        },
        {
            title: "Status",
            dataIndex: "status",
            key: "status",
          },
        {
          title: "Reason",
          dataIndex: "reason",
          key: "reason",
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <div>
                {record.status==="Rejected" ?
                <Button type="primary" onClick={() => handleApprove(record)}>Approve</Button>
                :<>
                {record.status==="Approved"?'' :
                <Button type="primary" onClick={() => handleApprove(record)}>Approve</Button>
                }
              <Button type="danger" className='bg-red-500' onClick={() => handleReject(record)}>Reject</Button>
                </>}
             
            </div>
          )
        }
      ];
      
      const fetchData= async()=>{
            const response = await axios.get(`${config.baseURL}/api/leave/allLeaves`)
            // console.log("this is response", response)
            setTableData(response.data)
      }

      useEffect(()=>{
        fetchData();
      },[])


      const handleApprove = async (record) => {
        try {
          const response = await axios.put(`${config.baseURL}/api/leave/approve?leaveId=${record._id}`);
          if (response.status === 200) {
            toast.success('Leave Approved Successfully')
            fetchData();
            setRefreshFlag(!refreshFlag); // Call a function to fetch updated data
          } else {
            toast.error('Something went wrong')
            console.error('Error approving leave:', response.statusText);
          }
        } catch (error) {
          console.error('Error approving leave:', error.message);
        }
      };
      
      const handleReject = async (record) => {
        try {
          const response = await axios.put(`${config.baseURL}/api/leave/reject?leaveId=${record._id}`);
          if (response.status === 200) {
            toast.success('Leave Reject Successfully')
            fetchData();
            setRefreshFlag(!refreshFlag);
          } else {
            toast.error('Something went wrong')
            console.error('Error rejecting leave:', response.statusText);
          }
        } catch (error) {
          console.error('Error rejecting leave:', error.message);
        }
      };

    return(
     <div className='container h-[80%] px-6 '>
  <div className=" text-left text-xl text-black font-body-3-small">
      <div className=" text-xs text-grey-70 overflow-auto ">
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 8 }}
          size="middle"
          className='overflow-auto'
        />
      </div>
    </div>
        </div>
    )
}

export default LeavesStatus