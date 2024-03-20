import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import config from '../configuration/config'
import "react-toastify/dist/ReactToastify.css";
import { storage } from '../firebase'
import {getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
const Signup = () => {

  const navigate = useNavigate();
  const [imageURL, setImageURL] = useState("");
  const [files, setFiles] = useState([]);
  const [offerLetterURL, setOfferLetterURL] = useState("");
  const [Data, setFormData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    mobile: "",
    aadhar: "",
    pan: "",
    resume: "",
    offer_letter: "",
    experience: "",
    education: "",
    docs:[]
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('this is working')
    try {
      // const formData = new FormData();
      // formData.append('firstname', Data.firstname);
      // formData.append('lastname', Data.lastname);
      // formData.append('gender', Data.gender);
      // formData.append('email', Data.email);
      // formData.append('mobile', Data.mobile);

      // formData.append('aadhar', Data.aadhar);
      // formData.append('pan', Data.pan);
      // formData.append('experience', Data.experience);
      // formData.append('education', Data.education);
      // formData.append('image', Data.image);
      // formData.append('resume', Data.resume);
      // formData.append('offer_letter', Data.offer_letter);

      // console.log("this is form data ",  Data)
      const userData = {
        firstname: Data.firstname,
        lastname: Data.lastname,
        gender: Data.gender,
        email: Data.email,
        mobile: Data.mobile,
        image: imageURL,
        aadhar_number: Data.aadhar,
        pan_number:Data.pan

        // docs:[],
        // Add other user data fields as needed
      };
  
      console.log("this is files data", files)
      const uploadTasks = files.map(async (file) => {
        const timestamp = new Date().getTime(); // Generate timestamp for uniqueness
        const fileName = `${timestamp}_${file.name}`; // Append timestamp to filename
        const storageRef = ref(storage, `documents/${fileName}`);
        await uploadBytes(storageRef, file);
        return fileName; // Return the generated filename
      });
  
      const uploadedFileNames = await Promise.all(uploadTasks);
  
      // Get download URLs for uploaded files
      const fileURLs = await Promise.all(
        uploadedFileNames.map((fileName) => getDownloadURL(ref(storage, `documents/${fileName}`)))
      );
      userData.docs = fileURLs;
      // Append file URLs to formData
   

      console.log("new form data ,", userData)


      const res = await axios.post(`${config.baseURL}/api/user/req-form`, userData);
      console.log(res.data.response);
      // toast.success("Wait document are uploading ..")

      navigate("/thankyou")
      setOfferLetterURL(res.data.response.offer_letter)// Handle success
    } catch (error) {
      console.error(error); // Handle error
    }
  };
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
  
    // Generate a unique filename
    const timestamp = new Date().getTime();
    const fileName = `${timestamp}_${file.name}`;
  
    try {
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `images/${fileName}`);
      await uploadBytes(storageRef, file);
  
      // Get the download URL of the uploaded image
      const imageurl = await getDownloadURL(storageRef);
     console.log(imageurl)
      // Set the imageURL state to display or further processing
      setImageURL(imageurl);
    } catch (error) {
      console.error('Error uploading image:', error);
      // Handle error
    }
  };
  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...Data });
      setFiles(Array.from(e.target.files));
    } else {
      setFormData({ ...Data, [e.target.id]: e.target.value });
    }
  };



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
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 md:grid-cols-2 md:gap-3 '>






                <div className="mt-4 text-left">
                  <label htmlFor="firstName" className="block text-sm text-gray-700 text-left">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstname"
                    className="mt-2  h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter first name"
                    onChange={handleChange}
                  />
                </div>


                <div className="mt-4 text-left">
                  <label htmlFor="lastName" className="block text-sm text-gray-700 text-left">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastname"
                    className=" mt-2 h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter last name"
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
                  />
                </div>


                <div className="mt-4 text-left">
                  <label htmlFor="aadhar" className="block text-sm text-gray-700 text-left">
                    Aadhar Number
                  </label>
                  <input
                    type="text"
                    id="aadhar"
                    className=" mt-2 h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter  your aadhar"
                    onChange={handleChange}
                  />
                </div>
                <div className="mt-4 text-left">
                  <label htmlFor="pan" className="block text-sm text-gray-700 text-left">
                    Pan number
                  </label>
                  <input
                    type="text"
                    id="pan"
                    className=" mt-2 h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                    placeholder="Enter  your pan"
                    onChange={handleChange}
                  />
                </div>



                <div className="mt-4">
                  <label htmlFor="Gender" className="block text-sm text-gray-700 text-left">
                    Gender
                  </label>
                  <select
                    id="gender"
                    className=" mt-2 w-full h-10 px-4 border rounded-md focus:outline-none focus:border-blue-500"
                    onChange={handleChange}
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
                  htmlFor="image"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Upload Image
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="image"
                  // onChange={handleChange}
                 onChange={handleImageUpload}
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="docs"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Upload All Documents
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="docs"
                  multiple // Allow multiple files to be selected
                  onChange={handleChange}
                //  onChange={handleOfferLetterUpload}
                />
              </div>


              {/* <div className="mt-4">
                <label
                  htmlFor="resume"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Resume
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="resume"
                  onChange={handleChange}
                //  onChange={handleOfferLetterUpload}
                />
              </div>


              <div className="mt-4">
                <label
                  htmlFor="offer_letter"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Offer letter
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="offer_letter"
                  onChange={handleChange}
                //  onChange={handleOfferLetterUpload}
                />
              </div>

              <div className="mt-4">
                <label
                  htmlFor="experience"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Experience
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="experience"
                  onChange={handleChange}
                //  onChange={handleOfferLetterUpload}
                />
              </div>
              <div className="mt-4">
                <label
                  htmlFor="education"
                  className="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                >
                  Education and other docs
                </label>
                <input
                  className="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                  type="file"
                  id="education"
                  onChange={handleChange}
                //  onChange={handleOfferLetterUpload}
                />
              </div> */}




              {/* <!-- Remember me checkbox --> */}


              {/* <!-- Submit button --> */}

              <div className="w-full mt-5  flex justify-center">
                <button
                  type="submit"
                  className=" cursor-pointer w-40  focus:outline-none focus:ring focus:ring-violet-300 md:hover:bg-sky-700 rounded-3xs [background:linear-gradient(135deg,_#14add5,_#384295)] h-[46px] flex flex-row items-center justify-center p-2.5 box-border text-white"

                >
                  Sign up
                </button>
              </div>
              {/* <iframe
              src={offerLetterURL}
          width="100%"
          height="500px"
        ></iframe> */}
              {/* {offerLetterURL && <img src={offerLetterURL}/>} */}
              {/* <!-- Divider --> */}

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup