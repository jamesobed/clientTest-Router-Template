// import React, { useState } from "react";
// import axios from "axios";

// interface FormData {
//   file: File | null;
//   name: string;
//   email: string;
//   date: string;
//   password: string;
// }

// const Form: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     file: null,
//     name: "",
//     email: "",
//     date: "",
//     password: "",
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.files![0],
//     });
//   };

//   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append("file", formData.file);
//     formData.append("upload_preset", "your_upload_preset");

//     try {
//       const res = await axios.post(
//         "https://api.cloudinary.com/v1_1/your_cloud_name/image/upload",
//         formData
//       );

//       const secureUrl = res.data.secure_url;
//       console.log(secureUrl);

//       const data = {
//         name: formData.name,
//         email: formData.email,
//         date: formData.date,
//         password: formData.password,
//         secureUrl,
//       };

//       const res = await axios.post(
//         "http://your-server-url.com/api/submit",
//         data
//       );
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" name="file" onChange={handleFileChange} required />
//       <input
//         type="text"
//         name="name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="date"
//         name="date"
//         value={inputData.date}
//         onChange={handleChange}
//         required
//       />
//       <input
//         type="password"
//         name="password"
//         value={inputData.password}
//         onChange={handleChange}
//         required
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Form;
