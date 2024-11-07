import React, { useEffect, useState } from "react";
import { Card, Statistic, Row, Col } from "antd";
import { Bar } from "react-chartjs-2";
import "tailwindcss/tailwind.css";

// Import Ant Design icons
import {
  DollarOutlined,
  CalendarOutlined,
  TeamOutlined,
  BankOutlined,
  SafetyOutlined,
  PercentageOutlined,
  UserOutlined,
} from "@ant-design/icons";

// Import Chart.js components and register
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Form16 = () => {
  const [form16Data, setForm16Data] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [loading, setLoading] = useState(true);
  const [aggregateData, setAggregateData] = useState({});

  useEffect(() => {
    const currentMonth = new Date().toLocaleString("default", {
      month: "long",
    });
    fetchForm16Data(currentMonth);
  }, []);

  const fetchForm16Data = async (month) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/taxOverview/getdata?month=${month}`
      );
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      console.log("Fetched Data: ", data);
      processForm16Data(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const processForm16Data = (data) => {
    console.log("Processing Data: ", data);

    // Update aggregate data
    setAggregateData({
      aggregateNetPay: data.aggregateNetPay || 0,
      aggregateTaxDeduction: data.aggregateTaxDeduction || 0,
      aggregateEPF: data.aggregateEPF || 0,
      aggregateESI: data.aggregateESI || 0,
      aggregateNumberOfEmployees: data.aggregateNumberOfEmployees || 0,
      aggregateActiveEmployees: data.aggregateActiveEmployees || 0,
      aggregatePaymentDate:
        new Date(data.aggregatePaymentDate).toLocaleDateString() || "",
    });
  };

  const handleMonthChange = (event) => {
    const month = event.target.value;
    setSelectedMonth(month);
    if (month) {
      fetchForm16Data(month);
    } else {
      resetData();
    }
  };

  const resetData = () => {
    setForm16Data([]);
  };

  const graphData = {
    labels: ["Net Pay", "Taxes", "Gross Pay"],
    datasets: [
      {
        label: "Payroll Summary",
        data: [
          aggregateData.aggregateNetPay,
          aggregateData.aggregateTaxDeduction,
          aggregateData.aggregateEPF + aggregateData.aggregateESI, // Assuming you want to sum EPF and ESI for Gross Pay
        ],
        backgroundColor: ["#3498db", "#e74c3c", "#2ecc71"],
      },
    ],
  };

  return (
    <div className="p-5 bg-gray-100 min-h-screen">
      <h1>Welcome Admin</h1>
      <select onChange={handleMonthChange} className="mb-4">
        <option value="">-- Select Month --</option>
        {[
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ].map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>

      <h2>Process Pay Run for {selectedMonth} 2024</h2>

      <Row gutter={16}>
        <Col span={8}>
          <Card>
            <DollarOutlined
              style={{
                fontSize: "24px",
                color: "#3f8600",
                marginBottom: "10px",
              }}
            />
            <Statistic
              title="Employees' Net Pay"
              value={aggregateData.aggregateNetPay}
              valueStyle={{ color: "#3f8600" }}
              prefix="₹"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <CalendarOutlined
              style={{
                fontSize: "24px",
                color: "#2f54eb",
                marginBottom: "10px",
              }}
            />
            <Statistic
              title="Payment Date"
              value={aggregateData.aggregatePaymentDate || "Select a month"}
              valueStyle={{ color: "#2f54eb" }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <TeamOutlined
              style={{
                fontSize: "24px",
                color: "#3498db",
                marginBottom: "10px",
              }}
            />
            <Statistic
              title="Number of Employees"
              value={aggregateData.aggregateNumberOfEmployees}
              valueStyle={{ color: "#3498db" }}
            />
          </Card>
        </Col>
      </Row>

      <h2>Taxes And Forms</h2>
      <Row gutter={16} className="mt-4">
        <Col span={6}>
          <Card>
            <BankOutlined
              style={{
                fontSize: "24px",
                color: "#3498db",
                marginBottom: "10px",
              }}
            />
            <Statistic
              title="EPF"
              value={aggregateData.aggregateEPF}
              valueStyle={{ color: "#3498db" }}
              prefix="₹"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <SafetyOutlined
              style={{
                fontSize: "24px",
                color: "#2ecc71",
                marginBottom: "10px",
              }}
            />
            <Statistic
              title="ESI"
              value={aggregateData.aggregateESI}
              valueStyle={{ color: "#2ecc71" }}
              prefix="₹"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <PercentageOutlined
              style={{
                fontSize: "24px",
                color: "#e74c3c",
                marginBottom: "10px",
              }}
            />
            <Statistic
              title="Total Tax Deduction"
              value={aggregateData.aggregateTaxDeduction}
              valueStyle={{ color: "#e74c3c" }}
              prefix="₹"
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <UserOutlined
              style={{
                fontSize: "24px",
                color: "#00a854",
                marginBottom: "10px",
              }}
            />
            <Statistic
              title="Active Employees"
              value={aggregateData.aggregateActiveEmployees}
              valueStyle={{ color: "#00a854" }}
            />
          </Card>
        </Col>
      </Row>

      <Row gutter={16} className="mt-4">
        <Col span={24}>
          <Card>
            <h3>Payroll Cost Summary</h3>
            {loading ? <p>Loading...</p> : <Bar data={graphData} />}
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Form16;
