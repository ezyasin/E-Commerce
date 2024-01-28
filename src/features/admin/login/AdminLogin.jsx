"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import adminicon from "../../../../public/assets/icons/admin-icon.svg";

function AdminLogin() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin") {
      localStorage.setItem("role", "admin");
      router.push("/admin/dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="flex mt-10 mb-20 justify-center">
      <div className="mt-20 border-2 border-gray-600 p-10">
        <Image src={adminicon} alt="adminicon" width={150} height={150} />
        <h1 className="text-3xl mb-6 font-semibold">Admin Login</h1>
        <h2>Enter your details below</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 mt-8">
              <input
                type="text"
                id="username"
                className="mt-4 py-2 px-4 block"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="mt-2 py-2 px-4 block"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-8">
              <button
                type="submit"
                className="py-2 px-12 bg-red-600 text-white hover:bg-red-700 rounded block"
              >
                Log in
              </button>
              <a href="#" className="mr-5 text-red-500">
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
