import React from "react";
import { TEInput, TERipple } from "tw-elements-react";

 const Signup=()=> {
  return (
    <section className="mt-10">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          {/* <!-- Left column container with background--> */}
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="w-full"
              alt="Phone image"
            />
          </div>

          {/* <!-- Right column container with form --> */}
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form>
            <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 '>






<div className="mt-4 text-left">
    <label htmlFor="firstName" className="block text-sm text-gray-700 text-left">
        First name
    </label>
    <input
        type="text"
        id="firstName"
        className="mt-2  h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter first name"
    />
</div>


<div className="mt-4 text-left">
    <label htmlFor="lastName" className="block text-sm text-gray-700 text-left">
        Last name
    </label>
    <input
        type="text"
        id="lastName"
        className=" mt-2 h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter last name"
    />
</div>




<div className="mt-4 text-left">
    <label htmlFor="email" className="block text-sm text-gray-700 text-left">
        Email
    </label>
    <input
        type="email"
        id="email"
        className=" mt-2  h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter email"
    />
</div>


<div className="mt-4 text-left">
    <label htmlFor="mobile" className="block text-sm text-gray-700 text-left">
       Mobile
    </label>
    <input
        type="text"
        id="mobile"
        className=" mt-2  h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter your number"
    />
</div>
<div className="mt-4 text-left">
    <label htmlFor="adhaa" className="block text-sm text-gray-700 text-left">
      Adhaar Number
    </label>
    <input
        type="text"
        id="adhaar"
        className=" mt-2 h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter adhaar no."
    />
</div>

<div className="mt-4 text-left">
    <label htmlFor="Education" className="block text-sm text-gray-700 text-left">
        Education
    </label>
    <input
        type="text"
        id="Education"
        className=" mt-2 h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Enter  your education"
    />
</div>



<div className="mt-4">
    <label htmlFor="Gender" className="block text-sm text-gray-700 text-left">
    Gender
    </label>
    <select
        id="sentTo"
        className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
    >
        <option value="" disabled selected>
            Select
        </option>
        <option value="Male">Male </option>
        <option value="Female">Female</option>
    </select>
</div>






</div>

<div className="mt-4">
          <label
            htmlFor="formFile"
            className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
          >
        Offer letter
          </label>
          <input
            className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
            type="file"
           id="formFile"
          />
      </div>

              {/* <!-- Email input --> */}
              {/* <TEInput
                type="email"
                label="Email address"
                size="lg"
                className="mb-6"
              ></TEInput> */}

              {/* <!--Password input--> */}
              {/* <TEInput
                type="password"
                label="Password"
                className="mb-6"
                size="lg"
              ></TEInput> */}

              {/* <!-- Remember me checkbox --> */}
          

              {/* <!-- Submit button --> */}

              <div className="w-full mt-5  flex justify-center">
                <button
                  type="button"
                  className=" cursor-pointer w-40  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"
                >
                  Sign up
                </button>
              </div>

              {/* <!-- Divider --> */}
          
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup