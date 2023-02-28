import React, { useState } from "react";
import axios from "axios";

const CloudinaryUpload = () => {
  const [file, setFile] = useState(null);
  const [secureUrl, setSecureUrl] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "website");
    console.log(formData);
    axios
      .post("https://api.cloudinary.com/v1_1/dkbrurcix/image/upload", formData)
      .then((res) => setSecureUrl(res.data.secure_url))
      .catch((err) => console.error(err));
  };
  console.log(secureUrl);

  return (
    <>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {secureUrl ? <img src={secureUrl} alt="Uploaded" /> : null}
    </>
  );
};

export default CloudinaryUpload;
