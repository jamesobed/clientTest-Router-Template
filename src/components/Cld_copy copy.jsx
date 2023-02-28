// import React, { useState } from "react";
// import axios from "axios";

// const FlutterwavePayment = ({ amount = "100", onSuccess, onClose }) => {
//   const [loading, setLoading] = useState(false);

//   const handleFlutterPayment = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/flutterwave/pay", { amount });
//       const { data } = response;

//       // Initiate payment with Flutterwave
//       const flutterwaveCheckout = new window.FlutterwaveCheckout({
//         public_key: "FLWPUBK_TEST-f564e56d0a69d492987b95ffe668e009-X",
//         tx_ref: "Belrald-PYK-74095247",
//         amount: amount,
//         country: "NG",
//         currency: "NGN",
//         payment_options: "card,mobilemoney,ussd",
//         customer: {
//           email: "test@gmail.com",
//           phonenumber: "08165367712",
//           billName: "Acceptance fees",
//           name: "Shipment fees",
//         },
//         callback: (response) => {
//           setLoading(false);
//           onSuccess(response);
//         },
//         onclose: () => {
//           setLoading(false);
//           onClose();
//         },
//       });
//       flutterwaveCheckout.open();
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };

//   return (
//     <button disabled={loading} onClick={handleFlutterPayment}>
//       {loading ? "Loading..." : `Pay ${amount}`}
//     </button>
//   );
// };

// export default FlutterwavePayment;
import React, { useState } from "react";

const PaymentButton = () => {
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const config = {
    public_key: "YOUR_PUBLIC_KEY",
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card",
    customer: {
      email: "user@example.com",
      phone_number: "08012345678",
      name: "John Doe",
    },
    customizations: {
      title: "My React App",
      description: "Payment for goods and services",
      logo: "https://myapp.com/logo.png",
    },
  };

  function handlePayment(e) {
    e.preveventDefault();
    // eslint-disable-next-line no-undef
    FlutterwaveCheckout({
      // public_key: 'FLWPUBK_TEST-661f207a8c29b8711c34bbfa944b5497-X',
      public_key: "FLWPUBK_TEST-f564e56d0a69d492987b95ffe668e009-X",
      tx_ref: "Belrald-PYK-74095247",
      amount: 5000,
      country: "NG",
      currency: "NGN",
      payment_options: "card",

      // redirect_url: "http://localhost:4300/paystack/verify",

      customer: {
        email,
        billName: "Shipment fees",
        name,
      },
      callback: function (data) {
        console.log(data);
      },
      onclose: function () {},
      customizations: {
        title: "CargoLand",
        description: "CargoLand Payment",
        logo: "https://cargoland.netlify.app/assets/logo-197784e7.png",
      },
    });
  }

  return (
    <>
      <form onSubmit={handlePayment}>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Enter amount"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Pay with Flutterwave</button>
      </form>{" "}
    </>
  );
};

export default PaymentButton;

// import React from 'react';
// import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

// export default function App() {
//    const config = {
//     public_key: 'FLWPUBK-**************************-X',
//     tx_ref: Date.now(),
//     amount: 100,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: 'user@gmail.com',
//       phone_number: '070********',
//       name: 'john doe',
//     },
//     customizations: {
//       title: 'My store',
//       description: 'Payment for items in cart',
//       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: 'Pay with Flutterwave!',
//     callback: (response) => {
//        console.log(response);
//       closePaymentModal() // this will close the modal programmatically
//     },
//     onClose: () => {},
//   };

//   return (
//     <div className="App">
//      <h1>Hello Test user</h1>
//       <FlutterWaveButton {...fwConfig} />
//     </div>
//   );
// }

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

// export default function App() {
//   const [formData, setFormData] = useState({
//     amount: "",
//     email: "",
//     name: "",
//     phone_number: "",
//   });
//   // const [amount, setAmount] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [name, setName] = useState("");
//   // const [phone_number, setPhone] = useState("");
//   const tx_ref =
//     "CargoLand" + Date.now() + Math.floor(Math.random() * 100000) + 1;
//   // data = { amount, email, name, phone_number, tx_ref };
//   useEffect(() => {
//     // Define the URL and the options for the fetch request
//     const url = "http://localhost:4300/payment/flutterwave";
//     const options = {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(formData),
//     };

//     // Send the form data to the server using fetch
//     fetch(url, options)
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error(error));
//   }, [formData]);

//   function handleChange(event) {
//     const { name, value } = event.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   }
//   const config = {
//     public_key: "FLWPUBK_TEST-f564e56d0a69d492987b95ffe668e009-X",
//     tx_ref,
//     amount: formData.amount,
//     currency: "NGN",
//     payment_options: "card,mobilemoney,ussd",
//     redirect_url: "http://localhost:4300/payment/verify",

//     customer: {
//       email: formData.email,
//       phone_number: formData.phone_number,
//       name: formData.name,
//     },
//     customizations: {
//       title: "CargoLand",
//       description: "CargoLand Payment",
//       logo: "https://cargoland.netlify.app/assets/logo-197784e7.png",
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: "Pay with Flutterwave!",
//     callback: async (response) => {
//       console.log(response);
//       closePaymentModal(); // this will close the modal programmatically
//     },
//     onClose: async () => {
//       setTimeout(async () => {
//         // await axios.post("http://localhost:4300/payment/flutterwave", data);
//       }, 7000);
//     },
//   };

//   return (
//     <div className="App">
//       <h1>CargoLand Shipment Payment</h1>{" "}
//       <form>
//         <input
//           type="text"
//           placeholder="Enter your full name"
//           value={formData.name}
//           name={formData.name}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Enter amount"
//           value={formData.amount}
//           name={formData.amount}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Enter phone number"
//           name={formData.phone_number}
//           value={formData.phone_number}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           placeholder="Enter email"
//           name={formData.email}
//           value={formData.email}
//           onChange={handleChange}
//         />{" "}
//       </form>
//       <FlutterWaveButton {...fwConfig} />
//     </div>
//   );
// }
