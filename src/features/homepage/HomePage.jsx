"use client";
import Image from "next/image";
import iphone from "../../../public/assets/images/iphone.png";
import ipicon from "../../../public/assets/icons/iphone.svg";
import arrow from "../../../public/assets/icons/arrowrighticon.svg";
import ProductCard from "@/features/homepage/ProductCard";
import CountdownTimer from "@/features/homepage/CountdownTimer";
import Category from "@/features/homepage/Category";
import BestSelling from "@/features/homepage/BestSelling";
import OtherCountdown from "@/features/homepage/OtherCountdown";
import jblimage from "../../../public/assets/images/jblimage.png";
import delivery from "../../../public/assets/icons/delivery.svg";
import customerserv from "../../../public/assets/icons/customerserv.svg";
import guarantee from "../../../public/assets/icons/guarantee.svg";

export default function HomePage() {
  // MOCK DATA TEMP
  const products = [
    { id: 1, name: "Product 1", description: "Description 1", price: 29.99 },
    { id: 2, name: "Product 2", description: "Description 2", price: 29.99 },
    { id: 3, name: "Product 3", description: "Description 3", price: 29.99 },
    { id: 4, name: "Product 4", description: "Description 4", price: 29.99 },
  ];

  const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
    { id: 6, name: "Category 6" },
    { id: 7, name: "Category 7" },
    { id: 8, name: "Category 8" },
  ];

  const bestselling = [
    {
      id: 1,
      name: "Best Selling Product 1",
      description: "Description 1",
      price: 29.99,
    },
    {
      id: 2,
      name: "Best Selling Product 2",
      description: "Description 2",
      price: 29.99,
    },
    {
      id: 3,
      name: "Best Selling Product 3",
      description: "Description 3",
      price: 29.99,
    },
    {
      id: 4,
      name: "Best Selling Product 4",
      description: "Description 4",
      price: 29.99,
    },
  ];

  // AI SUPPORT RECOMMENDATION MOCK DATA TEMP
  const recommendProducts = [
    { id: 1, name: "Product 1", description: "Description 1", price: 29.99 },
    { id: 2, name: "Product 2", description: "Description 2", price: 29.99 },
    { id: 3, name: "Product 3", description: "Description 3", price: 29.99 },
    { id: 4, name: "Product 4", description: "Description 4", price: 29.99 },
    { id: 5, name: "Product 5", description: "Description 5", price: 29.99 },
    { id: 6, name: "Product 6", description: "Description 6", price: 29.99 },
    { id: 7, name: "Product 7", description: "Description 7", price: 29.99 },
    { id: 8, name: "Product 8", description: "Description 8", price: 29.99 },
  ];
  return (
    <>
      <div className="flex">
        <div className="flex pt-2 ml-20 mr-40 mt-4">
          <ul className="border-r-2 pr-8 space-y-2">
            <li>Woman's Fashion</li>
            <li>Men's Fashion</li>
            <li>Electronics</li>
            <li>Home & Lifestyle</li>
            <li>Medicine</li>
            <li>Sports & Outdoor</li>
            <li>Boby's & Toys</li>
            <li>Groceries & Pets</li>
            <li>Health & Beauty</li>
          </ul>
        </div>
        <div className="flex flex-1 mr-40 bg-black text-white p-8 mt-4">
          <div className="flex-col mr-8">
            <div className="flex gap-4 items-center">
              <Image src={ipicon} alt="iphlogo" width={25} height={25} />
              <h1 className="text-lg font-bold">iPhone 14 Series</h1>
            </div>
            <p className="text-6xl mt-4">Up to 10%</p>
            <p className="text-6xl mt-4">off Voucher</p>
            <div className="text-2xl mt-4 flex gap-2 items-center">
              <a href="#" className="underline">
                Shop Now
              </a>
              <Image src={arrow} alt="arrow" width={25} height={25} />
            </div>
          </div>

          <div className="ml-40">
            <Image src={iphone} alt="prod" width={400} height={400} />
          </div>
        </div>
      </div>
      <div className="mt-12">
        <CountdownTimer />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center my-10 border-b-2 pb-8">
        <button className="bg-red-600 w-36 h-12 text-gray-200">
          View All Product
        </button>
      </div>

      <div>
        <h1 className="text-4xl font-bold mb-8 ml-16">Browse by Category</h1>
        <div className="mx-16 mb-16">
          <Category key={categories.id} categories={categories} />
        </div>
      </div>

      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-8 ml-16">
          {" "}
          Best Selling Products
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {bestselling.map((bestselling) => (
            <BestSelling key={bestselling.id} bestselling={bestselling} />
          ))}
        </div>
      </div>

      <div className="flex bg-violet-700 mx-48">
        <div className="text-white flex-1 pl-32 pt-8">
          <p>Music</p>
          <div className="text-6xl mt-2">
            <p>Enhance Your</p>
            <p>Music Experience</p>
          </div>
          <OtherCountdown />
          <button className="bg-red-500 w-36 h-16 mb-8">Shop Now</button>
        </div>
        <div className="flex-1 mt-10">
          <Image src={jblimage} alt="jblimage" width={400} height={400} />
        </div>
      </div>

      <div>
        <h1 className="text-4xl font-bold ml-16 mt-16 mb-8">
          Explore Our Product
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recommendProducts.map((recommendProducts) => (
            <ProductCard
              key={recommendProducts.id}
              product={recommendProducts}
            />
          ))}
        </div>
        <div className="flex justify-center my-10 border-b-2 pb-8">
          <button className="bg-red-600 w-36 h-12 text-gray-200">
            View All Product
          </button>
        </div>
      </div>

      <div className="flex gap-20 justify-center mb-20 mt-40">
        <div>
          <Image src={delivery} alt="delivery" width={100} height={100} />
          <h1 className="font-semibold mt-8">FREE AND FAST DELIVERY</h1>
          <p className="">We offer free delivery for all orders over $100</p>
        </div>
        <div>
          <Image
            src={customerserv}
            alt="customerservice"
            width={100}
            height={100}
          />
          <h1 className="font-semibold mt-8">24/7 CUSTOMER SERVICE</h1>
          <p className="">We have a 24/7 customer service team.</p>
        </div>
        <div>
          <Image src={guarantee} alt="guarantee" width={100} height={100} />
          <h1 className="font-semibold mt-8">MONEY BACK GUARANTEE</h1>
          <p className="">We offer a 30-day money-back guarantee.</p>
        </div>
      </div>
    </>
  );
}
