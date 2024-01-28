"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCVV] = useState("");
  const [name, setName] = useState("");

  const router = useRouter();

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Info:", { cardNumber, expirationDate, cvv, name });
    alert("Payment completed successfully!");
    router.push("/");
  };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4 text-center">
        Payment Informations
      </h1>
      <form onSubmit={handlePaymentSubmit} className="max-w-md mx-auto mb-8">
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-semibold text-gray-600"
          >
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="**** **** **** ****"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="expirationDate"
              className="block text-sm font-semibold text-gray-600"
            >
              Expiration Date
            </label>
            <input
              type="text"
              id="expirationDate"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="MM/YY"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="cvv"
              className="block text-sm font-semibold text-gray-600"
            >
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCVV(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="123"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-gray-600"
          >
            Name on Card
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Name Surname"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
        >
          Complete Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentPage;
