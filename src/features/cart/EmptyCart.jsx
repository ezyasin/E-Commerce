import React from "react";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-6xl font-bold mb-8">CART</h1>
      <div className="flex">
        <h2 className="text-3xl font-semibold mb-4">Your Cart is Empty</h2>
        <FaShoppingCart className="text-3xl mt-2 ml-2" />
      </div>
      <Link
        href="/"
        className="bg-red-500 text px-2 py-2 rounded-sm hover:bg-red-600 text-white transition duration-300"
      >
        Continue to Shopping
      </Link>
    </div>
  );
};

export default EmptyCart;
