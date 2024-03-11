import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";


const UpdateStock = () => {
    const navigate=useNavigate();
  return (
    <div className="w-full   mt-7">
 <div className="flex items-center cursor-pointer">
                <span onClick={() => { navigate('/admin/stock') }}>
                    <FaLongArrowAltLeft />Back
                </span>

            </div>
        <div className=" flex mt-4 text-xl font-extrabold text-black p-4 mb-4">Add a New Item</div>
      <div className='grid md:grid-cols-2 md:gap-4 grid-cols-1 w-full  md:auto-cols-max'>

      <div className="  rounded-xl bg-white shadow-md p-8">
        <div className="w-32 h-32 mx-auto mb-6">
          <img
            className="w-full h-full object-cover"
            alt="Upload photo"
            src="/images/img4.png"
          />
        </div>
        <div className="flex flex-col items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <img className="w-4 h-4" alt="Add photo" src="/add-photo.svg" />
            <span>Upload photo</span>
          </div>
          <div>
            <p className="m-0">Allowed format: JPG, JPEG, and PNG</p>
            <p className="m-0">Max file size: 2MB</p>
          </div>
        </div>
      </div>



{/* form fileds start */}
<div className='grow'>
<div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 '>
      <div className="mt-4">
        <label htmlFor="productName" className="block text-sm text-gray-700 text-left">
         Product Name
        </label>
        <input
          type="text"
          id="productName"
          className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter product name"
        />
      </div>


      <div className="mt-4">
        <label htmlFor="productId" className="block text-sm text-gray-700 text-left">
        Product ID
        </label>
        <input
          type="text"
          id="productId"
          className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter product id"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="Category" className="block text-sm text-gray-700 text-left">
         Category
        </label>
        <select
          id="category"
          className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled selected>
            Select category
          </option>
          <option value="Laptops">Laptops</option>
          <option value="Stationary">Stationary</option>
          <option value="IT product">IT product</option>
        </select>
      </div>


      <div className="mt-4">
        <label htmlFor="qtyPurchase" className="block text-sm text-gray-700 text-left">
         QTY Purchased
        </label>
        <input
          type="number"
          id="qtyPurchase"
          className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter quantity"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="unitPrice" className="block text-sm text-gray-700 text-left">
         Unit Price
        </label>
        <input
          type="tel"
          id="unitPrice"
          className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter amount"
        />
      </div>
      
   
      <div className="mt-4">
        <label htmlFor="totalAmount" className="block text-sm text-gray-700 text-left">
       Total Amount
        </label>
        <input
          type="text"
          id="totalAmount"
          className="mt-2 md:w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter amount"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="supplier" className="block text-sm text-gray-700 text-left">
       Supplier
        </label>
        <input
          type="text"
          id="supplier"
          className="mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter supplier"
        />
      </div>
      

      
     


      </div>
      </div>

      {/* form fields end */}

      </div>
      <div className="mt-6">
        <button className="w-full h-10 bg-gradient-to-br from-[#14add5] to-[#384295] text-white rounded-md">
        Add item
        </button>
      </div>
    
    </div>
  );
};

export default UpdateStock;
