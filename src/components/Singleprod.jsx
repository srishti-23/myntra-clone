import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";


function Singleprod() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const addToCart = (product) => {
    dispatch({
      type: "ADDITEM",
      payload: product,
    });
  };

  useEffect(() => {
    // Fetch individual product data from API
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  return (
    <>
      <Navbar />
      <div>
        {product ? (
          <div className="flex w-full">
            <div className=" m-8 flex justify-center items-center">
              <img
                src={product.image}
                alt="items"
                className="w-80 h-80 object-contain"
              />
            </div>
            <div className=" m-8">
              <div className=" text-black ">
                <h1 className="mt-8 ml-3 capitalize text-4xl mb-4">
                  {product.title}
                </h1>
                <h1 className="m-3 capitalize text-3xl">{product.category}</h1>
                <p className="m-3 text-gray-500 font-medium">
                  Description: {product.description}
                </p>
                <div className="flex items-center ml-4">
                  <h1 className=" ml-2 text-[#282C3F]">
                    {"₹" + product.price}
                  </h1>
                  <h1 className="text-gray-400 line-through text-sm ml-1 mt-1 ">
                    ₹ {product.price + 500}
                  </h1>
                  <h1 className="text-xs text-orange-400 ml-2">(50% OFF)</h1>
                </div>
              </div>
              <div className="mt-4 flex">
                <button
                  className="border flex font-medium border-[#FF527B] text-[#FF527B] bg-[#FF526B] text-white px-4 py-2 rounded-md mr-4 "
                  onClick={() => addToCart(product)}
                >
                  <Link to="/cart" className="flex m-auto">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5  stroke-1 cursor-pointer mr-2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                    ADD TO BAG
                  </Link>
                </button>
                <button className="text-black border border-gray-500  flex items-center p-2 hover:border-black">
                  <Link to="/wishlist">
                    <div className="flex cursor-pointer p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 ml-2 mr-2 stroke-1  cursor-pointer"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                        />
                      </svg>
                      <span className="font-medium flex items-center justify-center mr-1">
                        <small className="text-[#282C3F] text-lg">WISHLIST</small>
                      </span>
                    </div>
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
}

export default Singleprod;
