import React, { useState } from "react";
import axios from "axios";

const Form = () => {
  const [inputData, setInputData] = useState({
    file: null,
    name: "",
    email: "",
    date: "",
    password: "",
  });
  const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZTE0M2NmNTFiM2Q0ZmZjMDkyZjM4MSIsImlhdCI6MTY3NTc2NTA4NywiZXhwIjoxNjc1ODUxNDg3fQ.ecgUJDFaGl2WCpsKqUpShPSaPPKxuuFSHmcWhnxlti4",
    cloudUrl = "https://api.cloudinary.com/v1_1/dkbrurcix/image/upload";

  const auth = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const backendURL = "http://localhost:4400/user/update";

  const handleChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
  };

  const handleFileChange = (event) => {
    setInputData({
      ...inputData,
      [event.target.name]: event.target.files[0],
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputData.file);

    const formData = new FormData();
    formData.append("file", inputData.file);
    formData.append("upload_preset", "website");

    console.log(formData);
    try {
      const re = await axios.post(cloudUrl, formData);

      const secureUrl = re.data.secure_url;
      console.log(secureUrl);

      const data = {
        name: formData.name,
        avatar: secureUrl,
      };
      const dat = {
        name: formData.name,
        email: formData.email,
        date: formData.date,
        password: formData.password,
        avatar: secureUrl,
      };

      const res = await axios.post(backendURL, data, auth);
      console.log(res.data);
      console.log(dat);
    } catch (err) {
      console.error(err);
    }
  };
  function makePayment() {
    // FlutterwaveCheckout({
    //   // public_key: 'FLWPUBK_TEST-661f207a8c29b8711c34bbfa944b5497-X',
    //   public_key: "FLWPUBK_TEST-f564e56d0a69d492987b95ffe668e009-X",
    //   tx_ref: "Belrald-PYK-74095247",
    //   amount: 5000,
    //   country: "NG",
    //   currency: "NGN",
    //   payment_options: "card",

    //   redirect_url: "http://localhost:4300/paystack/verify",

    //   customer: {
    //     email: "test@gmail.com",
    //     // billName: "Acceptance fees",
    //     name: "Shipment fees",
    //   },
    //   callback: function (data) {
    //     console.log(data);
    //   },
    //   onclose: function () {},
    //   customizations: {
    //     title: "CargoLand",
    //     description: "CargoLand Payment",
    //     logo: "https://cargoland.netlify.app/assets/logo-197784e7.png",
    //   },
    // });
  }

  return (
    <form onSubmit={makePayment}>
      <input type="file" name="file" onChange={handleFileChange} required />
      <input
        type="text"
        name="name"
        value={inputData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        value={inputData.email}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={inputData.date}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        value={inputData.password}
        onChange={handleChange}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
