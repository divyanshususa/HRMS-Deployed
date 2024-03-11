import React from "react";
import { Table } from "antd";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa"
import { logisticColumns, stockColumns } from "../utils/columns";
import { dummyLogisticData, dummyStockData } from "../utils/dummyData";
import { useNavigate } from "react-router-dom";

const  Stocks=()=>{
    const navigate= useNavigate()
return(
    <div>

<div className="flex w-full  flex-wrap md:flex-wrap gap-8">

<div className=" rounded-xl shadow-md">
    <div className="flex gap-3 p-5 items-start justify-start ">
        <div>
            <div className=" font-extrabold">10</div>
            <div className=" text-base leading-[24px]">
                Categories
            </div>
        </div>
        <div>
            <img
                className=" w-[50px] h-[50px]"
                alt=""
                src="/images/img17.png"
            />
        </div>
    </div>

    <div className="flex flex-row items-center justify-start text-xs text-grey-70 m-2">
    <FaLongArrowAltUp />
        <div className="relative leading-[20px]">
            3 more than last year
        </div>
    </div>
</div>

{/* total application */}

<div className=" rounded-xl shadow-md">
    <div className="flex gap-3 p-5 items-start justify-start ">
        <div>
            <div className=" font-extrabold">500</div>
            <div className=" text-base leading-[24px]">
                Total items
            </div>
        </div>
        <div>
            <img
                className=" w-[50px] h-[50px]"
                alt=""
                src="/images/img18.png"
            />
        </div>
    </div>

    <div className="flex flex-row items-center justify-start text-xs text-grey-70 m-2">
    <FaLongArrowAltUp />
        <div className="relative leading-[20px]">
            10 than last quater
        </div>
    </div>
</div>

{/* Total projects */}

<div className=" rounded-xl shadow-md">
    <div className="flex gap-3 p-5 items-start justify-start ">
        <div>
            <div className=" font-extrabold">50000</div>
            <div className=" text-base leading-[24px]">
                Total item cost
            </div>
        </div>
        <div>
            <img
                className=" w-[50px] h-[50px]"
                alt=""
                src="/images/img19.png"
            />
        </div>
    </div>

    <div className="flex flex-row items-center justify-start text-xs text-grey-70 m-2">
      <FaLongArrowAltDown/>
        <div className="relative leading-[20px]">
            2% less than last quater
        </div>
    </div>
</div>

{/* Total departments */}

<div className=" rounded-xl shadow-md">
    <div className="flex gap-3 p-5 items-start justify-start ">
        <div>
            <div className=" font-extrabold">100</div>
            <div className=" text-base leading-[24px]">
           Items low in stock 
            </div>
        </div>
        <div>
            <img
                className=" w-[50px] h-[50px]"
                alt=""
                src="/images/img20.png"
            />
        </div>
    </div>

<div className="flex flex-row items-center justify-start text-xs text-grey-70 m-2">
    <FaLongArrowAltUp/>
        <div className="relative leading-[20px]">
            2% more than last week 
        </div>
    </div>
</div>


</div>


<div className="bg-white rounded-xl shadow-md mt-4  p-8 ">
        <div className="flex md:flex-wrap flex-wrap gap-7 cursor-pointer justify-between items-center">
            <div className="md:text-bold text-[20px]">Update Stock list</div>
        
          <button
            className="w-[205px] cursor-pointer  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
            onClick={() => navigate("/admin/stock/update-stock")}
          >
         Update Stock
          </button>
        </div>
      </div>

      <div className="mt-10">
                
                <div className="bg-white rounded-xl shadow-md mt-6 p-3">
                <div className="font-bold md:text-base flex mt-3"> Stock List </div>
                <div className="overflow-auto md:overflow-auto  md:overflow-x-scroll mt-6  text-left text-xl text-black font-body-3-small">
              <div className=" text-xs text-grey-70">
                <Table
                  columns={stockColumns}
                  dataSource={dummyStockData}
                  pagination={{ pageSize: 7 }}
                  size="middle"
                />
              </div>
            </div>
                </div>
                </div>

    </div>
)
}

export default Stocks