import React from "react";
import axios from "axios";
import { FlutterWaveButton, closePaymentModal } from "flutterwave-react-v3";

export default function App() {
  const { email, phone_number, name, tx_ref, amount } = JSON.parse(
    localStorage.getItem("paymentData")
  );
  const config = {
    public_key: "FLWPUBK_TEST-f564e56d0a69d492987b95ffe668e009-X",
    tx_ref,
    amount,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    redirect_url: "http://localhost:4300/payment/verify",

    customer: {
      email,
      phone_number,
      name,
    },
    customizations: {
      title: "CargoLand",
      description: "CargoLand Payment",
      logo: "https://cargoland.netlify.app/assets/logo-197784e7.png",
    },
  };

  const fwConfig = {
    ...config,
    text: "Pay with Flutterwave!",
    callback: async (response) => {
      console.log(response);
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: async () => {
      // setTimeout(async () => {
      // await axios.post("http://localhost:4300/payment/flutterwave", data);
      // }, 7000);
    },
  };

  return (
    <div className="App">
      <h1>CargoLand Shipment Payment</h1>
      {/* <form>
        {/* {currentInput === "name" && ( */}
      {/* <>
        <label htmlFor="name">Fullname:</label>
        <input
          type="text"
          placeholder="Enter your full name"
          value={name}
          name="name"
          onChange={handleNameChange} */}
        {/* />{" "} */}
      {/* </> */}
      {/* )} */}
      {/* {currentInput === "amount" && ( */}
      {/* <>
        <label htmlFor="email">Amount:</label>
        <input
          type="text"
          placeholder="Enter amount"
          name="amount"
          value={amount}
          onChange={handleAmountChange}
        />{" "} */}
      {/* </> */}
      {/* )}{" "} */}
      {/* {currentInput === "phone_number" && ( */}
      {/* <>
        <label htmlFor="email">Phone Number:</label>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone_number}
          name="phone_number"
          onChange={handlePhoneNumberChange}
        />{" "} */}
      {/* </> */}
      {/* )} */}
      {/* {currentInput === "email" && ( */}
      {/* <>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          name="email"
          onChange={handleEmailChange}
        />{" "}
      </> */}
      {/* )} */}
      {/* </form> */}
      <FlutterWaveButton {...fwConfig} />
      {/* {currentInput === "email" && <FlutterWaveButton {...fwConfig} />} */}
    </div>
  );
}
