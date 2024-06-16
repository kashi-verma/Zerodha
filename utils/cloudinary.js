import { v2 as cloudinary} from "cloudinary";

import fs from "fs";

    cloudinary.config({ 
        cloud_name: "process.env.CLOUDINARY_CLOUD_NAME", 
        api_key: "process.env.CLOUDINARY_API_KEY",  
        api_secret: "process.env.CLOUDINARY_API_SECRET" // Click 'View Credentials' below to copy your API secret
    });

    const uploadCloudinary = async(localFilePath) => {
      try{
            if(!localFilePath) return null;
            const response= await cloudinary.uploader.upload(localFilePath, {
              resource_type: "auto"
            })
            //file upload
            console.log("Uploading and uploaded on cloudinary", response.response.url);
            return response;
      } catch (error){
        fs.unlinkSync(localFilePath) //remove the locally saved temporary file if the upload operation got failed
        return null;
      }
}


export {uploadCloudinary} 
    
  //   // Upload an image
  //   cloudinary.v2.uploader.upload("https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg", {
  //       public_id: "shoes"
  //   },

  // function(error, result) {
  //   console.log(result);
  // });  
    
