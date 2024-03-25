import React from "react";
import Navbar from "./Navbar";
import login from "../images/login.webp";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="bg-[#FCEFE9] w-full h-screen justify-center items-center">
        <img src={login} className="w-[400px] h-60 mx-auto "></img>
        <div className="bg-white box-border h-80 w-[400px]  p-4 border-0 mx-auto">
          <h3 className="mt-4  items-center text-xl">
            Login <span className="ml-4 text-gray-500 font-medium">or</span>{" "}
            Signup
          </h3>
          <div className="mt-4">
            <input
              type="tel"
              name="number"
              id="number"
              class="border font-medium border-gray-300 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-400 block w-full p-2.5 dark:bg-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="+91 | Mobile Number"
              required=""
            />
            <button type="submit"
            className="mt-8 bg-[#FF3F6C] text-white p-4 w-80 ml-8"
            
            >
            Continue
            </button>
            <p class="text-sm font-light text-gray-500 dark:text-gray-400 mt-6">
             Have trouble logging in? <span className="text-[#FF7797]">Get help</span>{" "}
              <a
                href="#"
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
              
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
