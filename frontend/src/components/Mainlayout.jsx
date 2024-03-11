import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,

  AiOutlineUser,

  AiOutlineLogout,
} from "react-icons/ai";
import { IoWalletOutline } from "react-icons/io5";
import { FaMoneyBills } from "react-icons/fa6";
import { RiCouponLine } from "react-icons/ri";
import { BsPersonVcard } from "react-icons/bs";
import "react-toastify/dist/ReactToastify.css";
import { GrMoney } from "react-icons/gr";
import { Outlet } from "react-router-dom";
import { MdOutlineInventory } from "react-icons/md";
import { MdOutlineReduceCapacity } from "react-icons/md"

import { FaClipboardList, FaBloggerB } from "react-icons/fa";

import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <div>
      <Layout  >
        <Sider trigger={null} collapsible collapsed={collapsed} width={250} theme="light" >
          <div className="bg-inherit">
            <h2 className="text-white fs-5 text-center py-3 mb-0">
              <span className="sm-logo"></span>
              <span className="lg-logo">ERP</span>
            </h2>
          </div>
          <Menu

            theme="light"
            mode="inline"
            defaultSelectedKeys={[""]}
            onClick={({ key }) => {
              if (key === "signout") {
                localStorage.clear();
                window.location.reload();
              } else {
                navigate(key);
              }
            }}
            items={[
              {
                key: "",
                icon: <AiOutlineDashboard className="fs-4" />,
                label: "Dashboard",
              },
              {
                key: "staff",
                icon: <AiOutlineUser className="fs-4" />,
                label: "Staff",
              },
              {
                key: "paymentvoucher",
                icon: <IoWalletOutline  className="fs-4" />,
                label: "Payment Voucher",

              },
              {
                key: "payroll",
                icon: <FaMoneyBills  className="fs-4" />,
                label: "Payroll",
              },
              {
                key: "memo",
                icon: <RiCouponLine className="fs-4" />,
                label: "Memo",

              },
              {
                key: "circular",
                icon: <FaBloggerB className="fs-4" />,
                label: "Circulars",

              },
              // {
              //   key: "maintenance",
              //   icon: <FaClipboardList className="fs-4" />,
              //   label: "Maintenance",
              // },

              {
                key: "logistics",
                icon: <BsPersonVcard  className="fs-4" />,
                label: "Logistics",
              },
              {
                key: "budget",
                icon: <GrMoney  className="fs-4" />,
                label: "Office Budget",
              },
              {
                key: "stockandinventory",
                icon: <MdOutlineInventory  className="fs-4" />,
                label: "Stocks and Inventory",
                children: [
                  {
                    key: "stock",
                    icon: <FaClipboardList className="fs-4" />,
                    label: "Stocks",

                  },
                  {
                    key: "inventory",
                    icon: <MdOutlineInventory   className="fs-4" />,
                    label: "Inventory",

                  }
                ]
              },
              // {
              //   key: "notification",
              //   icon: <FaClipboardList className="fs-4" />,
              //   label: "Notification",
              // },
              {
                key: "capacity",
                icon: <MdOutlineReduceCapacity className="fs-4" />,
                label: "Capacity Building",
              },
              {
                key: "procurement",
                icon: <FaClipboardList className="fs-4" />,
                label: "Procurements",
              },
              {
                key: "signout",
                icon: <AiOutlineLogout className="fs-4" />,
                label: "Sign Out",
              },
            ]}
          />
        </Sider>
        <Layout className="site-layout" style={{ width: "100%" }}>
          <Header
            className="flex justify-between ps-1 pe-5"
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: () => setCollapsed(!collapsed),
              }
            )}
            <div className="flex gap-2 items-center">
              <div className="flex gap-1 items-center dropdown">
                <div className="flex items-center gap-2">
                  <img
                    width={36}
                    height={36}
                    src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                    alt=""
                  />
                  <h5 className="mb-0">Ajay</h5>
                </div>
                <div
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >

                  {/* <p className="mb-0">ajay@gmail.com</p> */}
                </div>

              </div>
            </div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >


            <Outlet />
          </Content>
        </Layout>
      </Layout>


    </div>
  );
};
export default MainLayout;
