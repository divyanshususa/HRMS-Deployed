import React from 'react';

const AddStaffForm = () => {
  return (
    <div className="w-full   mt-16">
        <div className="mt-4 text-xl font-extrabold text-black p-4 mb-4">Add a New Staff</div>
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
        <label htmlFor="firstName" className="block text-sm text-gray-700 text-left">
          Full Name
        </label>
        <input
          type="text"
          id="firstName"
          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter first name"
        />
      </div>


      <div className="mt-4">
        <label htmlFor="lastName" className="block text-sm text-gray-700 text-left">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter last name"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="gender" className="block text-sm text-gray-700 text-left">
          Gender
        </label>
        <select
          id="gender"
          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled selected>
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>


      <div className="mt-4">
        <label htmlFor="email" className="block text-sm text-gray-700 text-left">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter email address"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="phoneNumber" className="block text-sm text-gray-700 text-left">
          Phone Number
        </label>
        <input
          type="tel"
          id="phoneNumber"
          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter phone number"
        />
      </div>
      
      <div className="mt-4">
        <label htmlFor="role" className="block text-sm text-gray-700 text-left">
          Role
        </label>
        <select
          id="role"
          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        >
          <option value="" disabled selected>
            Select role
          </option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="designation" className="block text-sm text-gray-700 text-left">
       Designation
        </label>
        <input
          type="text"
          id="designation"
          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Designation"
        />
      </div>

      <div className="mt-4">
        <label htmlFor="staffId" className="block text-sm text-gray-700 text-left">
       Staff ID
        </label>
        <input
          type="text"
          id="staffId"
          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter StaffID"
        />
      </div>
      

      
      <div className="mt-4">
        <label htmlFor="OfficialEmail" className="block text-sm text-gray-700 text-left">
       Official Email
        </label>
        <input
          type="text"
          id="officalEmail"
          className="w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Offical Email"
        />
      </div>


      </div>
      </div>

      {/* form fields end */}

      </div>
      <div className="mt-6">
        <button className="w-full h-10 bg-gradient-to-br from-[#14add5] to-[#384295] text-white rounded-md">
          Add Staff
        </button>
      </div>
    
    </div>
  );
};

export default AddStaffForm;
