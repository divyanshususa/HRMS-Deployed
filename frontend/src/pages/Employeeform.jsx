import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd';
import axios from 'axios';
import config from '../configuration/config';

const Employeeform=()=>{
    const[tableData , setTableData]= useState([])
    const [refreshFlag, setRefreshFlag] = useState(false);
    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
         
            render: (t, r) => <img src={`${r.image}`} style={{width:'50px', height:'50px'}}/>
         },
    
        {
          title: "First Name",
          dataIndex: "firstname",
          key: "firstname",
        },
        {
          title: "Last Name",
          dataIndex: "lastname",
          key: "lastname",
        },
        {
          title: "Gender",
          dataIndex: "gender",
          key: "gender",
        },
        {
          title: "Mobile no.",
          dataIndex: "mobile",
          key: "mobile",
        },
    
        {
          title: "Aadhar no.",
          dataIndex: "aadhar_number",
          key: "aadhar_number",
        },
        {
          title: "Pan no.",
          dataIndex: "pan_number",
          key: "pan_number",
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (_, record) => (
              <Button type="primary" onClick={() => handleRegister(record)}>Register</Button>
            )
          }
      ];

      const fetchData= async()=>{
            const response = await axios.get(`${config.baseURL}/api/user/employee-requests`)
            setTableData(response.data.data)
      }

      useEffect(()=>{
        fetchData();
      },[])

      const handleRegister = async (record) => {
        try {
            console.log("this is record", record)
          const response = await axios.post(`${config.baseURL}/api/user/create-employee`, record);
        //   message.success('Employee registered successfully');
          // Update the table data if necessary

          fetchData();
          setRefreshFlag(!refreshFlag);
        } catch (error) {
          console.error('Error registering employee:', error);
        //   message.error('Failed to register employee');
        }
      };

    return(
     <div className='container h-full px-6 py-24'>
  <div className=" text-left text-xl text-black font-body-3-small">
      <div className=" text-xs text-grey-70 overflow-auto ">
        <Table
          columns={columns}
          dataSource={tableData}
          pagination={{ pageSize: 8 }}
          size="middle"
        />
      </div>
    </div>
        </div>
    )
}

export default Employeeform