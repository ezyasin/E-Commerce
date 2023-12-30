import React from "react";
import Image from "next/image";
import addToCartIcon from "../../../public/assets/icons/services-cart.svg";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md ml-8 mr-8 mt-12 ">
      <div className=" flex justify-center aspect-w-1 aspect-h-2 mb-4 ">
        <Image
          src="/assets/images/monitor.png"
          alt={product.name}
          width={150}
          height={150}
          className="rounded-lg"
        />
      </div>
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-500 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-lg font-bold">${product.price}</span>
        <button className="bg-blue-500 text-white px-2 py-2 rounded focus:outline-none flex items-center gap-2">
          <Image src={addToCartIcon} alt="Add to Cart" width={20} height={20} />
          <span className="mr-2">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
