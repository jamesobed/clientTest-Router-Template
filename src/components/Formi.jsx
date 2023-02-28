import React, { useState } from "react";
import axios from "axios";
const url = "http://localhost:4400/user/update";
// "http://localhost:7000/user/update/94fcc719-c84d-46e9-a549-1c265d774370";
// eslint-disable-next-line
const data = {
  firstName: "test live",
  lastName: "string",
  userName: "string",
  phoneNumber: "12345678901",
};
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTE0M2NmNTFiM2Q0ZmZjMDkyZjM4MSIsImlhdCI6MTY3NTc2NTA4NywiZXhwIjoxNjc1ODUxNDg3fQ.ecgUJDFaGl2WCpsKqUpShPSaPPKxuuFSHmcWhnxlti4";

const auth = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

// // import { useState } from "react";

// // function Formi() {
// //   // send data to server
// //   // {
// //   //   "name": "John",
// //   //   "occupation": "Doyin",
// //   //   "dateOfBirth": "04/01/2004",
// //   //   "email": "example@domain.com",
// //   //   "password": "1234567890",
// //   //   "confirmPassword": "1234567890"
// //   // }

// //   const [name, setName] = useState("");
// //   const [occupation, setOccupation] = useState("");
// //   const [dateOfBirth, setDateOfBirth] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [confirmPassword, setConfirmPassword] = useState("");
// //   const [posted, setPosted] = useState("");
// //   const [selectedFile, setSelectedFile] = useState(null);
// //   const [commentBody, setcommentBody] = useState("");
// //   const [firstName, setfirstName] = useState("");
// //   const [lastName, setlastName] = useState("");
// //   const [postID, setpostID] = useState("");

// //   // const url = "http://localhost:4400/image/update-user-image";
// //   // const url = "http://localhost:4400/user/upload-image";
// //   // const url = "https://isdservices-org-api.onrender.com/register";
// //   // const url = "https://isds.onrender.com/user/register";

// //   const token =
// //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGNlNTM5YTZhNWE4NTllMTJkNzcyZSIsImlhdCI6MTY3NTQ2MDU2MSwiZXhwIjoxNjc1NTQ2OTYxfQ.giqcpEj4c2SUoH7-9qwpF2Dren85WJEHwzQhNizalFc";

// //   const handleFileSelect = (event) => {
// //     setSelectedFile(event.target.files[0]);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const data = {
// //       name,
// //       occupation,
// //       dateOfBirth,
// //       email,
// //       password,
// //       confirmPassword,
// //     };

// //     setPosted(JSON.stringify(data));

// //     fetch("http://localhost:4400/user/register", {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //       },
// //       body: JSON.stringify(data),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => console.log(data))
// //       .catch((err) => console.log(err));
// //   };

// //   // const handleImage = (e) => {
// //   //   e.preventDefault();
// //   //   const formData = new FormData();
// //   //   formData.append("image", image);
// //   //   // image.append("email", email);

// //   //   fetch("http://localhost:4400/user/update", {
// //   //     method: "put",
// //   //     headers: {
// //   //       Authorization: `Bearer ${token}`,
// //   //     },
// //   //     body: formData,
// //   //   })
// //   //     .then((res) => res.json())
// //   //     .then((data) => console.log(data))
// //   //     .catch((err) => console.log(err));
// //   // };

// //   // const CreatePost = (e) => {
// //   //   e.preventDefault();
// //   // };

// //   const handleUpload = () => {
// //     const formData = new FormData();
// //     formData.append("image", selectedFile);

// //     fetch("http://localhost:4400/user/update", {
// //       method: "PUT",
// //       body: formData,
// //     })
// //       .then((response) => response.json())
// //       .then((data) => {
// //         console.log(data);
// //       });
// //   };

// //   const createComment = (e) => {
// //     e.preventDefault();
// //     const data = {
// //       commentBody,
// //       postID,
// //       firstName,
// //       lastName,
// //     };

// //     const url = "http://localhost:4400/comment/create-comment";

// //     fetch(url, {
// //       method: "POST",
// //       headers: {
// //         "Content-Type": "application/json",
// //         Authorization: `Bearer ${token}`,
// //       },
// //       body: JSON.stringify(data),
// //     })
// //       .then((res) => res.json())
// //       .then((data) => console.log(data));
// //   };
// //   return (
// //     <>
// //       <h1>Image</h1>
// //       <form onSubmit={handleUpload}>
// //         <label>
// //           Upload your Profile Picture:
// //           <input type="file" onChange={handleFileSelect} />
// //         </label>

// //         <button type="submit">Submit</button>
// //       </form>
// //       <h1>Register</h1>
// //       <form onSubmit={handleSubmit}>
// //         <label>
// //           Enter your name:
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         </label>
// //         <label>
// //           Enter your occupation:
// //           <input
// //             type="text"
// //             value={occupation}
// //             onChange={(e) => setOccupation(e.target.value)}
// //           />
// //         </label>
// //         <label>
// //           Enter your date of birth:
// //           <input
// //             type="date"
// //             value={dateOfBirth}
// //             onChange={(e) => setDateOfBirth(e.target.value)}
// //           />
// //         </label>
// //         <label>
// //           Enter your email:
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </label>
// //         <label>
// //           Enter your password:
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </label>
// //         <label>
// //           Confirm your password:
// //           <input
// //             type="password"
// //             value={confirmPassword}
// //             onChange={(e) => setConfirmPassword(e.target.value)}
// //           />
// //         </label>
// //         <button type="submit">Submit</button>
// //       </form>
// //       <br />
// //       <br />
// //       <br />
// //       <h1>Comments</h1>
// //       <form onSubmit={createComment}>
// //         <label>
// //           Enter your Comments:
// //           <input
// //             type="textArea"
// //             value={commentBody}
// //             onChange={(e) => setcommentBody(e.target.value)}
// //           />
// //         </label>
// //         <label>
// //           Enter your postID:
// //           <input
// //             type="text"
// //             value={postID}
// //             onChange={(e) => setpostID(e.target.value)}
// //           />
// //         </label>

// //         <label>
// //           Enter your firstName:
// //           <input
// //             type="text"
// //             value={firstName}
// //             onChange={(e) => setfirstName(e.target.value)}
// //           />
// //         </label>
// //         <label>
// //           Enter your lastName:
// //           <input
// //             type="text"
// //             value={lastName}
// //             onChange={(e) => setlastName(e.target.value)}
// //           />
// //         </label>
// //         <button type="submit">Submit</button>
// //       </form>
// //       <br />
// //       <br />
// //       <br />
// //       <br />
// //       <br />
// //       posted: {posted}
// //     </>
// //   );
// // }

// // export default Formi;

// import React, { useState } from "react";

// const Formi = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileSelect = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0ZmNjNzE5LWM4NGQtNDZlOS1hNTQ5LTFjMjY1ZDc3NDM3MCIsImlhdCI6MTY3NTYwODcwOCwiZXhwIjoxNjc2MjEzNTA4fQ.Wn5Shi5CFfyV_wHuHpuzgjckZw8mnEfzuY_S8_wiYps";

//   const handleUpload = async () => {
//     console.log(selectedFile);
//     const formData = new FormData();
//     formData.append("image", selectedFile);

//     fetch(
//       "http://localhost:7000/user/update/94fcc719-c84d-46e9-a549-1c265d774370",
//       {
//         method: "post",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//         body: formData,
//       }
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//       });
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileSelect} />
//       <button onClick={handleUpload}>Upload</button>
//     </div>
//   );
// };

// export default Formi;

// // import React, { useState } from "react";

// // const ImageUpload = () => {
// //   const [image, setImage] = useState(null);
// //   const token =
// //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGNlNTM5YTZhNWE4NTllMTJkNzcyZSIsImlhdCI6MTY3NTQ2MDU2MSwiZXhwIjoxNjc1NTQ2OTYxfQ.giqcpEj4c2SUoH7-9qwpF2Dren85WJEHwzQhNizalFc";

// //   const handleChange = (event) => {
// //     const file = event.target.files[0];
// //     const reader = new FileReader();

// //     reader.readAsDataURL(file);
// //     reader.onload = () => {
// //       setImage(reader.result);
// //     };
// //   };

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();

// //     if (image) {
// //       const response = await fetch("http://localhost:5000/user", {
// //         method: "POST",
// //         body: JSON.stringify({ image }),
// //       });

// //       console.log(await response.json());
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <input type="file" onChange={handleChange} />
// //       <button type="submit">Submit</button>
// //     </form>
// //   );
// // };

// // export default ImageUpload;

// import { useState } from "react";

// const AddUser = () => {
//   const [data, setData] = useState({
//     name: "",
//     image: "",
//   });
//   const handleChange = (name) => (e) => {
//     const value = name === "image" ? e.target.files[0] : e.target.value;
//     setData({ ...data, [name]: value });
//   };
//   const handleSubmit = async () => {
//     try {
//       let formData = new FormData();
//       formData.append("image", data.image);
//       formData.append("name", data.name);

//       console.log(data);
//       console.log(formData);

//       const res = await fetch(`http://localhost:5000/user`, {
//         method: "POST",
//         body: formData,
//       });
//       if (res.ok) {
//         setData({ name: "", image: "" });
//       }
//       console.log(res);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div style={{ maxWidth: 500, margin: "auto" }}>
//       <div className="mb-3">
//         <input
//           className="form-control"
//           placeholder="Enter name"
//           type="text"
//           name="name"
//           value={data.name}
//           onChange={handleChange("name")}
//         />
//       </div>
//       <div className="mb-3">
//         <input
//           className="form-control"
//           type="file"
//           accept="image/*"
//           name="image"
//           onChange={handleChange("image")}
//         />
//       </div>
//       <div className="text-center">
//         <button className="btn btn-primary" onClick={handleSubmit}>
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AddUser;

// import React, { useState, useRef } from "react";
// import Swal from "sweetalert2";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ImageUpload = () => {
//   // eslint-disable-next-line
//   const [image, setImage] = useState(null);
//   const [avatar] = useState("");
//   const url =
//     "http://localhost:7000/user/update/94fcc719-c84d-46e9-a549-1c265d774370";
//   const fileupload = useRef();
//   let uploadPromise;

//   const data = {
//     firstName: "test live",
//     lastName: "string",
//     userName: "string",
//     phoneNumber: "12345678901",
//   };
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijk0ZmNjNzE5LWM4NGQtNDZlOS1hNTQ5LTFjMjY1ZDc3NDM3MCIsImlhdCI6MTY3NTY0NTQxNiwiZXhwIjoxNjc2MjUwMjE2fQ.S1uO_-fElvqeAkd6ZemKap6dgvZe4gWo1e8VeU9MmTY";

//   const auth = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };

//   // const handleChange = (event) => {
//   //   const file = event.target.files[0];
//   //   const reader = new FileReader();

//   //   reader.readAsDataURL(file);
//   //   reader.onload = () => {
//   //     setImage(reader.result);
//   //   };
//   // };

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault();

//   //   // console.log(JSON.stringify({ image }));

//   //   // if (image) {
//   //   //   let avatar = image;
//   //   // const response = await fetch(
//   //   //   "http://localhost:7000/user/update/94fcc719-c84d-46e9-a549-1c265d774370",
//   //   //   {
//   //   //     method: "POST",
//   //   //     headers: {
//   //   //       "Content-Type": "application/json",
//   //   //       Authorization: `Bearer ${token}`,
//   //   //     },
//   //   //     body: JSON.stringify({
//   //   //       firstName: "test live",
//   //   //       lastName: "string",
//   //   //       userName: "string",
//   //   //       phoneNumber: "12345678901",
//   //   //     }),
//   //   //   }
//   //   // );
//   //   // // console.log(await response.json());
//   //   // console.log(response);
//   //   // }
//   //   console.log(data);

//   //   const res = await axios.post(url, data, {
//   //     headers: {
//   //       Authorization: `Bearer ${token}`,
//   //     },
//   //   });

//   //   console.log(res);
//   // };

//   const convertBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);

//       fileReader.onload = () => {
//         resolve(fileReader.result);
//       };

//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   };

//   // const updateProfile = async () => {
//   //   const { value: file } = await Swal.fire({
//   //     title: "Select image",
//   //     input: "file",
//   //     inputAttributes: {
//   //       accept: "image/*",
//   //       "aria-label": "Upload your profile picture",
//   //     },
//   //   });

//   //   if (file) {
//   //     const reader = new FileReader();
//   //     reader.onload = async (e) => {
//   //       Swal.fire("Uploading");
//   //       // const res = await updateUserData({ avatar: e.target.result });
//   //       const res = await fetch(
//   //         "http://localhost:7000/user/update/94fcc719-c84d-46e9-a549-1c265d774370",
//   //         {
//   //           method: "POST",
//   //           headers: {
//   //             "Content-Type": "application/json",
//   //             Authorization: `Bearer ${token}`,
//   //           },
//   //           body: JSON.stringify({ avatar: e.target.result }),
//   //         }
//   //       );

//   //       if (res.status === 200) {
//   //         Swal.fire({
//   //           title: "Your uploaded picture",
//   //           imageUrl: e.target.result,
//   //           imageAlt: "The uploaded picture",
//   //         });
//   //       }
//   //     };

//   //     reader.readAsDataURL(file);
//   //   }
//   // };

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     const file = fileupload.current.files[0];
//     uploadPromise = convertBase64(file)
//       .then((result) => {
//         toast.success("File uploaded!");
//         setImage(result);
//       })
//       .catch(() => toast.error("File upload failed!"));
//   };

//   const handleSubmiti = async (e) => {
//     e.preventDefault();
//     // e.stopPropagation();
//     try {
//       if (!image) {
//         await uploadPromise;
//       }
//       const response = await axios.patch(
//         `${url}`,
//         {
//           avatar: image,
//         },
//         auth
//       );
//       if (response.status === 200) {
//         // toast.success("Update Successful");
//         const avatar = response.data.avatar;
//         console.log(avatar);
//         const localUser = JSON.parse(localStorage.getItem("userInfo"));
//         localUser.avatar = avatar;
//         localStorage.setItem("userInfo", JSON.stringify(localUser));
//       }
//       // window.location.reload();
//     } catch (err) {
//       // toast.error("Update Failed");
//       console.log(err);
//     }
//   };
//   return (
//     <>
//       {/* <form onSubmit={handleSubmit}>
//         {/* <input type="file" onChange={handleChange} /> */}
//       {/* <button type="submit">Submit</button> */}
//       {/* </form>  */}
//       {/* // <br />
//       // <br />
//       // <br /> */}
//       <label htmlFor="avater">Avater</label>
//       {/* <input
//         className="upload-picture"
//         type="button"
//         value="Update profile picture"
//         onClick={"updateProfile"}
//       /> */}
//       <form onSubmit={handleSubmiti}>
//         <input
//           className="formInput form-input"
//           name="avatar"
//           id="avatar"
//           ref={fileupload}
//           type="file"
//           value={avatar}
//           onChange={handleUpdate}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </>
//   );
// };

// export default ImageUpload;

const UploadAvatar = () => {
  const [avatar, setAvatar] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setAvatar(reader.result);
  };

  const handleSubmit = async (e) => {
    const res = await axios.post(
      url,
      {
        avatar,
      },
      auth
    );
    console.log(res);
    // e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
  );
};

export default UploadAvatar;
