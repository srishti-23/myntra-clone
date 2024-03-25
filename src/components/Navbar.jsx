import React from "react";
import logo from "../images/myntra.png";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const handleCategoryChange = (category) => {
    // Handle category change here, e.g., update state or perform filtering
    console.log("Category changed:", category);
  };

  return (
    <div className="flex h-[21] w-full shadow-md bg-[#FFFFFF] z-[3] border-b-2 border-[#FFFFFF]">
     
        <div className="w-[9%] h-9 flex justify-center items-center ml-[-6] mt-8">
         <Link to="/"><img classname=" w-[15] h-9 " src={logo} alt="myntra-logo " />
        
         </Link> </div>
     
      {/* clothing options */}
      <div className="w-[46%] ml-0 mt-2 flex flex-row items-center space-x-8 text-[#282C3F] text-sm tracking-wider">
        <div className="h-8 ">
          <Link
            to={{ pathname: "/products", state: { category: "men" } }}
            {...location.state?.category}
            className="cursor-pointer"
            onClick={() => handleCategoryChange("men")}
          >
            MEN
          </Link>
        </div>
        <div className="h-8">
          <Link
            to={{ pathname: "/products", state: { category: "women" } }}
            className="cursor-pointer"
            onClick={() => handleCategoryChange("women")}
          >
            WOMEN
          </Link>
        </div>
        <div className="h-8 ">
          <Link
            to={{ pathname: "/products", state: { category: "kids" } }}
            className="cursor-pointer"
            onClick={() => handleCategoryChange("kids")}
          >
            KIDS
          </Link>
        </div>
        <div className="h-8">
          <Link
            to={{ pathname: "/products", state: { category: "home" } }}
            className="cursor-pointer"
            onClick={() => handleCategoryChange("home")}
          >
            HOME & LIVING
          </Link>
        </div>
        <div className="h-8">
          <Link
            to={{ pathname: "/products", state: { category: "beauty" } }}
            className="cursor-pointer"
            onClick={() => handleCategoryChange("beauty")}
          >
            BEAUTY
          </Link>
        </div>
        <div className="h-8">
          <Link
            to={{ pathname: "/products", state: { category: "studio" } }}
            className="cursor-pointer"
            onClick={() => handleCategoryChange("studio")}
          >
            STUDIO<sup className="ml-1 text-[#FF3F6C]">NEW</sup>
          </Link>
        </div>
      </div>
      {/* search component */}
      <div className="w-[30%] py-6 flex justify-center items-center relative rounded mr-10 ">
        <div className="h-10  py-3 absolute left-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-4 focus:bg-[white] "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search for products,brands and more"
          className="text-slate-200 w-full h-10 font-normal bg-[#F5F5F6] pl-[40px] rounded focus:bg-[white] focus:outline-none focus:border-[2px]"
        ></input>
      </div>
      {/* icons */}
      <div className="w-[15%] flex flex-row items-center space-x-8 py-6 mr-4 ">
        <Link to="/login">
        <div className="flex 1 flex flex-col hover:underline">
          {/* profile icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mx-auto stroke-1 cursor-pointer hover:underline "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <span classname="w-6 font-thin">
            <small>Profile</small>
          </span>
        </Link>
        </div>

        {/* wishlist */}

        <div classname="flex 1 flex flex-col">
          <Link to="/wishlist">
            <div classname="flex justify-center cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 ml-2 stroke-1 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                />
              </svg>
              <span classname="w-6 font-thin flex justify-center">
                <small>Wishlist</small>
              </span>
            </div>
          </Link>
        </div>

        {/* bag */}
        <div classname="flex 1 flex flex-col">
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 mx-auto stroke-1 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <span classname="w-6 font-thin justify-center text-center">
              <small> Bag</small>
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
