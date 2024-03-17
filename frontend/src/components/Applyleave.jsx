import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios';
import {
  Form,
  Upload,
  Breadcrumb,
  Statistic,
  Table,
 
  Tag,
  Input,
  Col,
  Select,
  Row,
  Button,
  DatePicker,
} from 'antd';


const dateFormat = 'DD/MM/YYYY';
const InputGroup = Input.Group;
const { TextArea } = Input;

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import config from '../configuration/config';

const ApplyLeave = () => {
  // State variables using useState hook
  const [leaveType, setLeaveType] = useState([]);
  const [data, setData] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState('');
  const [numberOfDays, setnumberOfDays] = useState(null);
  const [currUser, setCurrUser] = useState();

  // Function to fetch leave types
  const refreshgetAllLeaveType = () => {
    // Your logic to fetch leave types and setLeaveType
  };

  // useEffect hook to run side effects (like data fetching) when the component mounts
  useEffect(() => {
    refreshgetAllLeaveType();
    setCurrUser(JSON.parse(localStorage.getItem('user')))
    fetchleaveHistory()
  }, []);

  const fetchleaveHistory =async()=>{
     const  response = await axios.get(`${config.baseURL}/api/leave/empleave/${currUser?._id}`)
     setData(response.data)
    //  console.log("inside leaves", response.data)
  }

  const handleStartDateChange = (date) => {
    // Convert the date to a string with the desired format
    const formattedDate = date ? date.format(dateFormat) : null;
    setStartDate(formattedDate);
  };
  const handleEndDateChange = (date) => {
    // Convert the date to a string with the desired format
    const formattedDate = date ? date.format(dateFormat) : null;
    setEndDate(formattedDate);
  };
  // Columns configuration for the leave history table
  const columns = [
    // {
    //   title: 'Leave Type',
    //   key: 'tags',
    //   dataIndex: 'tags',
    //   render: tags => (
    //     <span>
    //       {tags.map(tag => {
    //         let color = tag;
    //         if (tag === 'Medical') {
    //           color = 'volcano';
    //         } else if (tag === 'Annual') {
    //           color = 'green';
    //         } else if (tag === 'Casual') {
    //           color = 'geekblue';
    //         }

    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </span>
    //   ),
    // },
    {
      title: 'Start Date',
      dataIndex: 'startDate',
    },
    {
      title: 'End Date',
      dataIndex: 'endDate',
    },
    {
      title: 'Number of Days',
      dataIndex: 'numberOfDays',
    },
    {
      title: 'Reason',
      dataIndex: 'reason',
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];
  // console.log(currUser)

  const handleRequestLeave = async () => {
  
    try {
    

      const leavedata = {
        numberOfDays,
        reason,
         startDate,
         endDate,
         employeeId: currUser._id,
      }

      // console.log("this is leave data",leavedata)
      const response = await axios.post(`${config.baseURL}/api/leave/apply`, leavedata);
      toast.success("Leave requested successfully")
      // Optionally, you can update the UI or show a success message
      console.log('Leave requested successfully:', response.data);
      setEndDate(null)
      setStartDate(null)
      setnumberOfDays(null)
      setReason('')
    } catch (error) {
      toast.error("something went wrong")
      console.error('Error requesting leave:', error);
     
    }
  };

  return (
    <React.Fragment>
      <Row>
        {/* First column */}
        <Col id="responsive-div1" span={16}>
  {/* Your JSX for applying leave */}
  <Breadcrumb style={{ margin: '16px 0' }}>
    {/* <Breadcrumb.Item>Leave Managment</Breadcrumb.Item> */}
    <Breadcrumb.Item>Apply Leave</Breadcrumb.Item>
  </Breadcrumb>
  <div style={{ padding: 24, background: '#fff', minHeight: 360, marginRight: '20px' }}>
    {/* Your JSX for applying leave */}
    <Row>
      <Col span={24}>
        {/* Your JSX for applying leave */}
        <InputGroup>
          <Row gutter={24}>
            <Col id="responsive-input1" span={6}>
              {/* Date picker for From Date */}
              <Form.Item hasFeedback label="From Date" layout="inline">
                <div>
                  <DatePicker format={dateFormat} 
                  //  onChange={(date) =>{setStartDate(date)
                  //   console.log(date)
                  // } }
                  value={startDate ? moment(startDate, dateFormat) : null} 
                  onChange={handleStartDateChange}
                  showTime={false}
                   
                  />
                </div>
              </Form.Item>
            </Col>
            <Col id="responsive-input2" span={6}>
              {/* Date picker for To Date */}
              <Form.Item hasFeedback label="To Date" layout="vertical">
                <div>
                  <DatePicker  format={dateFormat}
             
                  // onChange={(date) => setEndDate(date)}
                  onChange={handleEndDateChange}
                  value={endDate ? moment(endDate, dateFormat) : null}
                  />
                </div>
              </Form.Item>
            </Col>
            <Col id="responsive-input3" span={6}>
              {/* Your JSX for applying leave */}
              <Form.Item hasFeedback label="Number of Days" layout="vertical">
              <input
                            type="Number"
                            id="numberOfDays"
                            className=" w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                            placeholder="Enter number"
                            onChange={(e) => setnumberOfDays(e.target.value)}
                            value={numberOfDays}
                        />
                </Form.Item>
            </Col>
          </Row>
        </InputGroup>
        {/* Your JSX for applying leave */}
        <InputGroup>
          <Row gutter={24}>
            <Col id="responsive-input4" span={12}>
              {/* Your JSX for applying leave */}
            </Col>
            <Col id="responsive-input5" span={12}>
              {/* Your JSX for applying leave */}
            </Col>
          </Row>
        </InputGroup>
        {/* Your JSX for applying leave */}
        <Form.Item hasFeedback label="Reason" layout="vertical">
          <div style={{ margin: '24px 0' }}>
            <TextArea
              placeholder="Reason"
              autosize={{ minRows: 2, maxRows: 8 }}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        </Form.Item>
        {/* Your JSX for applying leave */}
        <Button type="primary" style={{ float: 'right' }}  onClick={handleRequestLeave} >
          Request
        </Button>
        <Button type="danger" style={{ float: 'right', marginRight: '10px' }}
         onClick={()=>{
          setEndDate(null)
          setStartDate(null)
          setnumberOfDays(null)
          setReason('')
         }}
        >
          Clear
        </Button>
        {/* Your JSX for applying leave */}
      </Col>
    </Row>
  </div>
</Col>

        {/* Second column */}
        <Col id="responsive-div2" span={8}>
          {/* Your JSX for available leave and carry forward leave request */}
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Available Leave</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ padding: 24, background: '#fff', minHeight: 50 }}>
            {/* Your JSX for available leave and carry forward leave request */}
            <Row>
              <Col span={8}>
                {/* Your JSX for available leave and carry forward leave request */}
                <Statistic title="Annual" value={10} suffix="/ 10" />
              </Col>
              <Col span={8}>
                {/* Your JSX for available leave and carry forward leave request */}
                <Statistic title="Casual" value={5} suffix="/ 5" />
              </Col>
              <Col span={8}>
                {/* Your JSX for available leave and carry forward leave request */}
                <Statistic title="Medical" value={7} suffix="/ 7" />
              </Col>
            </Row>
          </div>
        
          <div style={{ padding: 24, background: '#fff', minHeight: 50, marginTop: '20px' }}>
            {/* Your JSX for available leave and carry forward leave request */}
            <Row>
              <Col span={24}>
                {/* Your JSX for available leave and carry forward leave request */}
                <Form.Item layout="vertical" label="Remaining days of Annual Leave">
                  <div>
                    <Input defaultValue="0" disabled />
                  </div>
                </Form.Item>
                <Form.Item layout="vertical" label="Remaining days of Casual Leave">
                  <div>
                    <Input defaultValue="0" disabled />
                  </div>
                </Form.Item>
                <Form.Item layout="vertical" label="Remaining days of Medical Leave">
                  <div>
                    <Input defaultValue="0" disabled />
                  </div>
                </Form.Item>
                
                {/* Your JSX for available leave and carry forward leave request */}
            
                {/* Your JSX for available leave and carry forward leave request */}
              
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Leave History</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, background: '#fff', minHeight: 360, marginTop: '20px' }}>
        {/* Table component for leave history */}
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ApplyLeave;
