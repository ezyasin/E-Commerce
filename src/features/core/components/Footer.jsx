import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Techno Market</h3>
          <p className="mb-2">
            Subscribe to our newsletter and get a 10% discount on your first
            order.
          </p>
          <div className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full md:w-60 p-2 rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none text-black"
            />
            <button className="bg-blue-500 text-white rounded-md p-2 hover:bg-blue-600 focus:outline-none">
              Subscribe
            </button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p className="mb-2">Test addres</p>
          <p className="mb-2">technomarket@gmail.com</p>
          <p>0555 555 55 55</p>
          <div className="flex gap-3">
            <a href="https://linkedin.com">Linkedin</a>
            <a href="https://twitter.com">Twitter/X</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Account</h3>
          <ul>
            <li className="mb-2">My Account</li>
            <li className="mb-2">Login / Register</li>
            <li className="mb-2">Cart</li>
            <li className="mb-2">Shop</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2">Privacy Policy</li>
            <li className="mb-2">Terms of Use</li>
            <li className="mb-2">FAQ</li>
            <li className="mb-2">Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-3 pt-4">
        <div className="container text-center mt-3">
          <p>&copy; Copyright Techno Market 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
