import React from "react";
import Image from "next/image";
import Link from "next/link";

const Category = ({ categories }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.id}`}>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <div className="flex justify-center aspect-w-1 aspect-h-2 mb-4">
              <Image
                src="/assets/icons/Category-Computer.svg"
                alt={category.name}
                width={50}
                height={50}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">
              {category.name}
            </h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Category;
