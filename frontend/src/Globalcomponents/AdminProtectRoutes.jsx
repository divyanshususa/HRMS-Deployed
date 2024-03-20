import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtectRoutes = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const login = JSON.parse(localStorage.getItem('user'))
   console.log('admin', login)
   if(login){

       if (login.role.toLowerCase() !== "admin" ) navigate("/");
   }else(navigate('/'))
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default AdminProtectRoutes;
