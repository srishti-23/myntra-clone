import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/action";
import Navbar from "./Navbar";
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
 
  const emptyCart = () => (<>
  <Navbar/>
    <div className="px-4 my-5 rounded-lg py-5">
      <div className="container w-full py-4">
        <div className="text-center">
          <h3 className="text-xl font-semibold">Your Cart is Empty</h3>
        </div>
      </div>
    </div>
  </>
    
  );

  const cartItems = (product) => (<>
  
    <div key={product.id} className="px-4 my-5 rounded-lg py-8">
      <div className="container py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold text-black m-4">{product.title}</h3>
             
              <div className="flex items-center ml-4">
                <h1 className="text-[#282C3F] text-lg ml-0">{"₹" + product.price}</h1>
                <h1 className="text-gray-400 line-through text-sm ml-4 mt-1 ">
                  ₹ {product.price + 500}
                </h1>
                <h1 className="text-xs text-orange-400 ml-2">(50% OFF)</h1>
              </div>
              <p className=" m-4 text-lg font-bold">
                {product.qty} X ₹{product.price} = ₹
                {product.qty * product.price}
              </p>
            </div>
            <div className="flex items-center p-2">
              <button
                className=" border bg-gray-200 border-black mr-2"
                onClick={() => handleDel(product)}
              >
                <FiMinus size={30} />
              </button>
              <button
                 className=" border bg-gray-200 border-black"
                onClick={() => handleAdd(product)}
              >
                <IoIosAdd size={30}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
    
  );

  const buttons = () => (
    <div className="container">
      <div className="text-center text-white ">
        <NavLink
          to="/checkout"
          className="bg-[#E93D67] mb-5 w-40 p-4 my-4 ml-4 mr-4"
        >
          Place order
        </NavLink>
      </div>
    </div>
  );

  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
