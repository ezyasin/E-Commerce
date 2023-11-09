import React from "react";
import Image from "next/image";
import loginImage from "../../../public/assets/image/loginimage.png";

function Login() {
  return (
    <div className="flex mt-10">
      <div className="flex-1">
        <Image src={loginImage} alt="logo" width={600} height={600} />
      </div>
      <div className="flex-1 mt-20 ">
        <h1 className="text-3xl mb-6 font-semibold">Log in to Exclusive</h1>
        <h2>Enter your details below</h2>
        <div>
          <form>
            <div className="mb-4 mt-12">
              <input
                type="email"
                id="email"
                className="mt-4 py-2 px-4 block rounded-md"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                className="mt-2 py-2 px-4 block rounded-md"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center gap-8">
              <button
                type="submit"
                className="py-4 px-16 bg-red-600 text-white hover:bg-red-700 rounded block"
              >
                Log in
              </button>
              <a href="#" className="mr-5 text-red-500">Forgot Password?</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
