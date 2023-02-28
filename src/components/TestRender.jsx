import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import axios from "axios";

export default function MyForm() {
  // const history = useHistory();

  const [formData, setFormData] = useState({
    amount: "",
    email: "",
    phone_number: "",
  });

  const { amount, email, phone_number } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const tx_ref =
      "CargoLand" + Date.now() + Math.floor(Math.random() * 100000) + 1,
    paymentData = { ...formData, tx_ref };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(paymentData); // replace with your own logic to send data to the server
    const fetch = await axios.post(
      "http://localhost:4300/payment/create",
      paymentData
    );
    console.log(fetch);
    localStorage.setItem("paymentData", JSON.stringify(paymentData));
    window.location.href = "/pay-with-flutter";
    setFormData({
      amount: "",
      email: "",
      phone_number: "",
    });
  };

  return (
    <form>
      <label>
        Amount:
        <input
          type="number"
          name="amount"
          value={amount}
          onChange={handleChange}
        />
      </label>
      {amount && (
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
      )}
      {email && (
        <label>
          Phone number:
          <input
            type="text"
            name="phone_number"
            value={phone_number}
            onChange={handleChange}
          />
        </label>
      )}
      {phone_number && (
        <div>
          <button
            type="submit"
            onClick={handleSubmit}
            id="render-btn"
            style={{ width: 300 }}
          >
            SUbmit
          </button>
        </div>
      )}
    </form>
  );
}
