const cloudinary = require('cloudinary').v2;

const fs =require('fs') ;

cloudinary.config({
  cloud_name: 'drylissfg',
  api_key: '586327854827185',
  api_secret: 'VYCfY7OYZnm-qGA98QjZMeUGpPE'
});

const uploadOnCloudinary = async (files) => {
  try {
    if (!files || files.length === 0) return null;

    const uploadPromises = files.map(async (file) => {
      const response = await cloudinary.uploader.upload(file.path);
      console.log("File uploaded on Cloudinary:", response.url);
      return response.url;
    });

    const urls = await Promise.all(uploadPromises);

    // Cleanup: Delete local files after upload
    files.forEach((file) => {
      fs.unlinkSync(file.path);
    });

    return urls;
  } catch (error) {
    console.error("Error uploading files to Cloudinary:", error);
    return null;
  }
};

module.exports = uploadOnCloudinary; 










// import {v2 as cloudinary} from 'cloudinary'
// import fs from 'fs'


          
// cloudinary.config({ 
//   cloud_name:'drylissfg' , 
//   api_key: '586327854827185', 
//   api_secret: 'VYCfY7OYZnm-qGA98QjZMeUGpPE'
// });


// const uploadOnCloudinary=async(localFilePath)=>{
// try {
//     if(!localFilePath) return null
//    const response= await  cloudinary.uploader.upload(localFilePath,{
//         resource_type:'auto'
//     } )

//     console.log("file uploaded on cloudinary", response.url)
//     return response.url
    
// } catch (error) {
//     fs.unlinkSync(localFilePath)
//     return null
// }

// }

// export default uploadOnCloudinary