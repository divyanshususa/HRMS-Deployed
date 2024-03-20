import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Login from './pages/Login'
import ForgetPassword from './pages/ForgetPassword'
import MainLayout from './components/Mainlayout'
import VerifyEmail from './pages/VerifyEmail';
import ResetPassword from './pages/ResetPassword';
import Dashbaord from './pages/Dashboard';
import Staff from './pages/Staff';
import AddStaffForm from './components/AddStaffForm';
import PaymentVoucherTable from './components/PaymentVoucherTable';
import CreatePaymentVoucher from './pages/CreatePaymentVoucher';
import Memo from './pages/Memo';
import Payroll from './pages/Payroll';
import SalaryDefination from './components/SalaryDefination';
import TaxDefination from './components/TaxDefination';
import CreatePayslip from './components/CreatePayslip';
import PaySlip from './pages/PaySlip';
import CreatePayroll from './pages/CreatePayroll';
import CreateMemo from './components/CreateMemo';
import Circular from './pages/Circular';
import CreateCircular from './components/CreateCircular';
import Logistics from './pages/Logistics';
import LogisticRequest from './components/LogisticRequest';
import OfficeBudget from './pages/OfficeBudget';
import CreateBudget from './components/CreateBudget';
import Stocks from './pages/Stocks';
import UpdateStock from './components/UpdateStock';
import Capacity from './pages/Capacity';
import TrainingRequest from './components/TrainingRequest';
import Procurement from './pages/Procurement';
import ProcurementReq from './components/ProcurementReq';
import Signup from './pages/Signup';
import Thankyou from './pages/Thankyou';
import Employeeform from './pages/Employeeform';
import ApplyLeave from './components/Applyleave';
import LeavesStatus from './pages/LeavesStatus';
import AdminProtectRoutes from './Globalcomponents/AdminProtectRoutes';
import EmployeeProtectRoute from './Globalcomponents/EmloyeeProtectRoute';

function App() {
  const [count, setCount] = useState(0)
  const[payslip, setpayslip]=useState()

  return (
    <>
  <Router>
      <Routes>
        <Route
          path="/"
          element={
       
              <Login />
          
          }
        />
      
        <Route path='/forget-password' element={<ForgetPassword/>}/>
        <Route path='/verify-email' element={<VerifyEmail/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/thankyou' element={<Thankyou/>}/>
        <Route path='/applyleaves' element={<ApplyLeave/>}/>
        <Route
          path="/employee"
          element={
          <EmployeeProtectRoute Component={MainLayout}/>
          }
        >
  <Route index element={<Dashbaord />} />
  <Route path='/employee/apply-leaves' element={<ApplyLeave/>} />  
        </Route>
        <Route
          path="/admin"
          element={
            <AdminProtectRoutes Component={MainLayout}/>
             
          }
        >
          <Route index element={<Dashbaord />} />
          <Route path='/admin/employee-forms' element={<Employeeform/>} />
          <Route path='/admin/leaves-status' element={<LeavesStatus/>} />
          <Route path='/admin/staff' element={<Staff/>} />
          <Route path='/admin/staff/add-staff' element={<AddStaffForm/>} />
          <Route path='/admin/paymentvoucher' element={<PaymentVoucherTable/>} />
          <Route path='/admin/paymentvoucher/create' element={<CreatePaymentVoucher/>} />
          <Route path='/admin/payroll' element={<Payroll/>} />
          <Route path='/admin/payroll/salary-defination' element={<SalaryDefination/>} />
          <Route path='/admin/payroll/tax-defination' element={<TaxDefination/>} />
          <Route path='/admin/payroll/create-payslip' element={<CreatePayslip  setpayslip={setpayslip}/>} />
          <Route path='/admin/payroll/created-payslip' element={<PaySlip payslip={payslip}/>} />
          <Route path='/admin/payroll/create-payroll' element={<CreatePayroll/>} />
          <Route path='/admin/memo' element={<Memo/>} />
          <Route path='/admin/memo/create-memo' element={<CreateMemo/>} />
          <Route path='/admin/circular' element={<Circular/>} />
          <Route path='/admin/circular/create-circular' element={<CreateCircular/>} />
          <Route path='/admin/logistics' element={<Logistics/>} />
          <Route path='/admin/logistic/logistic-request' element={<LogisticRequest/>} />
          <Route path='/admin/budget' element={<OfficeBudget/>} />
          <Route path='/admin/budget/create-budget' element={<CreateBudget/>} />
          <Route path='/admin/stock' element={<Stocks/>} />
          <Route path='/admin/stock/update-stock' element={<UpdateStock/>} />
          <Route path='/admin/capacity' element={<Capacity/>} />
          <Route path='/admin/capacity/training-request' element={<TrainingRequest/>} />
          <Route path='/admin/procurement' element={<Procurement/>} />
          <Route path='/admin/procurement/procurement-request' element={<ProcurementReq/>} />
        </Route>
      </Routes>
    </Router>
    </>

    
  )
}

export default App
