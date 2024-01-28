"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import CountrySelector from "../core/components/CountrySelector";
import CheckoutHandle from "../core/components/CheckoutHandle";

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: "",
    mailConfirm: false,
    firstName: "",
    lastName: "",
    country: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
  });

  const router = useRouter();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cartFromStorage = localStorage.getItem("cart");
    if (!cartFromStorage) {
      router.push("/");
    }

    if (cartFromStorage) {
      const parsedCart = JSON.parse(cartFromStorage);
      setCartItems(parsedCart);
    }
  }, []);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (event) => {
    const {
      email,
      mailConfirm,
      firstName,
      lastName,
      country,
      streetAddress,
      apartment,
      city,
      phoneNumber,
    } = formData;
    const checkoutInfo = {
      email,
      mailConfirm,
      firstName,
      lastName,
      country,
      streetAddress,
      apartment,
      city,
      phoneNumber,
    };

    localStorage.setItem("checkoutInfo", JSON.stringify(checkoutInfo));
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-8">Checkout</h1>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded"
                required
              />
              <div className="flex">
                <input
                  type="checkbox"
                  name="checkbox"
                  id="mailConfirm"
                  value={formData.mailConfirm}
                  onChange={handleInputChange}
                  className="mr-2"
                />
                <label htmlFor="checkbox">I want to get marketing mails.</label>
              </div>
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="firstName"
                className="text-sm font-medium text-gray-900"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="lastName"
                className="text-sm font-medium text-gray-900"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="country"
                className="text-sm font-medium text-gray-900"
              >
                Country
              </label>
              <CountrySelector />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="streetAddress"
                className="text-sm font-medium text-gray-900"
              >
                Street Address
              </label>
              <input
                type="text"
                id="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="apartment"
                className="text-sm font-medium text-gray-900"
              >
                Apartment (optional)
              </label>
              <input
                type="text"
                id="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded"
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-900"
              >
                Town/City
              </label>
              <input
                type="text"
                id="city"
                value={formData.city}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="phoneNumber"
                className="text-sm font-medium text-gray-900"
                typeof="tel"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="mt-1 p-2 border rounded"
                required
              />
            </div>

            <div className="mt-8 flex justify-end">
              <CheckoutHandle onSubmit={handleSubmit} />
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-600">{item.name}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
