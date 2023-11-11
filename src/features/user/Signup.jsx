import React from "react";
import Image from "next/image";
import signupImage from "../../../public/assets/images/loginimage.png";
import googlesvg from "../../../public/assets/images/google.svg";

export function Signup() {
    return (
        <div className="flex mt-10 mb-20">
            <div className="flex-1">
                <Image src={signupImage} alt="logo" width={600} height={600} />
            </div>
            <div className="flex-1 mt-20 ">
                <h1 className="text-3xl mb-6 font-semibold">Create an Account</h1>
                <h2>Enter your details below</h2>
                <div>
                    <form>
                        <div className="mb-4 mt-6">
                            <input
                                type="name"
                                id="name"
                                className="mt-2 py-2 px-4 block rounded-md"
                                placeholder="Name" />
                        </div>

                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                className="mt-2 py-2 px-4 block rounded-md"
                                placeholder="Email" />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                id="password"
                                className="mt-2 py-2 px-4 block rounded-md"
                                placeholder="Password" />
                        </div>

                        <div className="space-y-2">
                            <button
                                type="submit"
                                className="py-4 px-24 bg-red-600 text-white hover:bg-red-700 rounded block"
                            >
                                Create Account
                            </button>
                            <button type="button" className="py-2 block">
                                <Image
                                    src={googlesvg}
                                    alt="logo"
                                    width={310}
                                    height={310}
                                    className="mt-2 mr-1" />
                            </button>
                            <span className="text-sm mr-5">Already have an account?</span>
                            <span><a href="#" className="underline">Log in</a></span>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}
export default Signup;