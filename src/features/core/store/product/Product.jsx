"use client";
import { useState } from "react";
import { useSession } from "../../components/SessionContext";
import Image from "next/image";
import oyunkolu from "../../../../../public/assets/images/oyunkolu.png";
import Link from "next/link";

const Product = () => {
  // Örnek ürün verisi
  const sampleProduct = {
    id: 1,
    images: {
      small: [oyunkolu, oyunkolu, oyunkolu, oyunkolu],
      large: oyunkolu,
    },
    name: "Oyun Kolu",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, natus?",
    models: ["Model 1", "Model 2", "Model 3"],
    price: 99.99,
  };

  const [productCount, setProductCount] = useState(1);
  const { user, login, logout } = useSession();

  const handleIncrease = () => {
    setProductCount(productCount + 1);
  };

  const handleDecrease = () => {
    if (productCount > 0) {
      setProductCount(productCount - 1);
    }
  };

  const handleAddToCart = () => {
    login({ username: "exampleUser" });
    if (!user) {
      const cartItem = {
        id: sampleProduct.id,
        name: sampleProduct.name,
        image: sampleProduct.images.small[0],
        description: sampleProduct.description,
        quantity: productCount,
        price: sampleProduct.price,
      };

      const existingCartItem = JSON.parse(localStorage.getItem("cart")) || [];
      const existingItemIndex = existingCartItem.findIndex(
        (item) => item.id === cartItem.id
      );

      if (existingItemIndex != -1) {
        existingCartItem[existingItemIndex].quantity += cartItem.quantity;
      } else {
        existingCartItem.push(cartItem);
      }

      localStorage.setItem("cart", JSON.stringify(existingCartItem));
    } else {
      console.log("Lütfen giriş yapınız.");
    }
  };

  return (
    <div className="flex p-8">
      {/* Sol taraf */}
      <div className="flex">
        {/* Küçük resimler */}
        <div className="flex flex-col mb-4">
          {sampleProduct.images.small.map((image, index) => (
            <div key={index} className="">
              <Image
                className="w-1/4 mb-2"
                src={image}
                alt={`Small Product Image ${index + 1}`}
                width={400}
                height={400}
              />
            </div>
          ))}
        </div>
        {/* Orta taraf */}
        <div className="flex px-4">
          <Image
            className="mb-4 w-full"
            src={sampleProduct.images.large}
            alt={"Large Product Image"}
            width={375}
            height={375}
            layout="responsive"
          />
        </div>
      </div>
      {/* Sağ taraf */}
      <div className="w-1/2 pl-8">
        {/* Ürün bilgileri */}
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">{sampleProduct.name}</h1>
          <p className="text-gray-600 mb-4">{sampleProduct.description}</p>
        </div>
        {/* Model seçimi */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Model Seçimi
          </label>
          <select className="border p-2 w-full">
            {sampleProduct.models.map((model, index) => (
              <option key={index}>{model}</option>
            ))}
          </select>
        </div>

        {/* Ürün adedi */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ürün Adedi
          </label>
          <div className="flex">
            <button
              onClick={handleDecrease}
              className="border p-2 px-4 bg-white"
            >
              -
            </button>
            <input
              className="border p-2 text-center w-full"
              type="number"
              value={productCount}
              readOnly={true}
            />
            <button
              onClick={handleIncrease}
              className="border p-2 px-4 bg-red-500 text-white"
            >
              +
            </button>
          </div>
        </div>

        {/* Fiyat */}
        <div className="mb-4">
          <p className="text-2xl font-bold mb-2">{sampleProduct.price} ₺</p>
        </div>
        {/* Sepete ekle butonu */}
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleAddToCart}
          >
            <Link href="/cart">Sepete Ekle</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
