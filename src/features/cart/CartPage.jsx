"use client";
import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

function CartPage() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", quantity: 2, price: 20 },
    { id: 2, name: "Product 2", quantity: 1, price: 30 },
  ]);

  const removeItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  const handleManualQuantityChange = (itemId, newQuantity) => {
    const parsedQuantity = parseInt(newQuantity, 10);
    if (!isNaN(parsedQuantity)) {
      updateQuantity(itemId, Math.max(1, parsedQuantity));
    }
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const shipping = 10;

  const total = subtotal + shipping;

  return (
    <>
      <div className="container mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
        <div className="flex justify-between bg-white p-8 rounded-md shadow-md mb-2">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>

        <div className="bg-white p-8 rounded-md shadow-md mb-4">
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is currently empty.</p>
          ) : (
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="mb-4 flex items-center justify-between"
                >
                  <p className="text-lg font-bold">{item.name}</p>
                  <p className="text-gray-900">${item.price}</p>
                  <div className="flex items-center">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) =>
                        handleManualQuantityChange(item.id, e.target.value)
                      }
                      className="w-16 h-8 border rounded ml-2 text-center"
                    />
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 ml-2 text-xs"
                    >
                      <FaTrash />
                    </button>
                  </div>
                  <p className="text-gray-900">${item.price * item.quantity}</p>
                </div>
              ))}
              <p className="text-xl font-bold mt-4">
                Total: ${subtotal.toFixed(2)}
              </p>
            </div>
          )}
        </div>

        <div className="container mt-16 mx-auto p-2 border w-80 h-70 mb-16">
          <h1 className="font-semibold text-2xl my-4">Cart Total</h1>
          <div className="flex flex-col gap-2">
            <div className="border-b-2 mt-2 flex justify-between">
              <span>Subtotal: </span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="border-b-2 mt-2 flex justify-between">
              <span>Shipping: </span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="mt-2 flex justify-between">
              <span>Total: </span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <button className="bg-red-500 text-white rounded-sm p-2 mb-4 ml-16 mt-8">
            Process to checkout
          </button>
        </div>
      </div>
    </>
  );
}

export default CartPage;
