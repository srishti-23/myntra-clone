import React from 'react'
import medal1 from "../images/medal1.webp";
import medal2 from "../images/medal2.webp";
import medal3 from "../images/medal3.webp";
import medal4 from "../images/medal4.jpg";
import medal5 from "../images/medal5.webp";
import medal6 from "../images/medal6.webp";
import grand1 from "../images/grand1.webp";
import grand2 from "../images/grand2.webp";
import grand3 from "../images/grand3.webp";
import grand4 from "../images/grand4.webp";
import grand5 from "../images/grand5.webp";
import grand6 from "../images/grand6.webp";
import shop1 from "../images/shop1.webp";
import shop2 from "../images/shop2.webp";
import shop3 from "../images/shop3.webp";
import shop4 from "../images/shop4.jpg";
import shop5 from "../images/shop5.webp";
import shop6 from "../images/shop6.jpg";
import shop7 from "../images/shop7.jpg";
import shop8 from "../images/shop8.webp";
import shop9 from "../images/shop9.webp";
import shop10 from "../images/shop10.webp";
import shop11 from "../images/shop11.webp";
import shop12 from "../images/shop12.webp";
import shop13 from "../images/shop13.webp";
import shop14 from "../images/shop14.jpg";
import shop15 from "../images/shop15.webp";
import {Link} from "react-router-dom"
const HomeContent = () => {
  return (
    <div> <div>
    <div className="mt-24 ">
      <h3 className=" ml-8  text-3xl tracking-[0.2em] pr-8 text-[#3E4152] mb-24">
        MEDAL WORTHY BRANDS TO BAG
      </h3>
      <Link to ="/products" state={{category:"Clothes"}}>
      <div className="flex mx-auto">
        <div>
          <img src={medal1} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={medal2} alt="m1" className="h-72 w-[236px] flex-grow" />
        </div>
        <div>
          <img src={medal3} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={medal4} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={medal5} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={medal6} alt="m1" className="h-72 w-[236px] " />
        </div>
      </div>
      </Link>
    
    </div>
    
    <div className="mt-24 ">
      <h3 className=" ml-8  text-3xl tracking-[0.2em] pr-8 text-[#3E4152] mb-24">
        GRAND GLOBAL BRANDS
      </h3>
      <Link to ="/products" state={{category:"Shoes"}}>
      <div className="flex mx-auto">
        <div>
          <img src={grand1} alt="m1" className="h-72 w-60" />
        </div>
        <div>
          <img src={grand2} alt="m1" className="h-72 w-56 flex-grow" />
        </div>
        <div>
          <img src={grand3} alt="m1" className="h-72 w-56" />
        </div>
        <div>
          <img src={grand4} alt="m1" className="h-72 w-56" />
        </div>
        <div>
          <img src={grand5} alt="m1" className="h-72 w-56" />
        </div>
        <div>
          <img src={grand6} alt="m1" className="h-72 w-56 " />
        </div>
      </div>
      </Link>
    </div>
  
  
    <div className="mt-24">
      <h3 className=" ml-8  text-3xl tracking-[0.2em] pr-8 text-[#3E4152] mb-20">
        SHOP BY CATEGORY
      </h3>
      <Link to ="/products" state={{category:"Clothes"}}>
      <div className="flex ">
        <div>
          <img src={shop1} alt="m1" className="h-72 w-[236px] " />
        </div>
        <div>
          <img src={shop2} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop3} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop4} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop5} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop6} alt="m1" className="h-72 w-[236px]" />
        </div>
      </div>
      <div className="flex mx-auto   ">
        <div>
          <img src={shop7} alt="m1" className="h-72 w-[236px] " />
        </div>
        <div>
          <img src={shop8} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop9} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop10} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop11} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop12} alt="m1" className="h-72 w-[236px]" />
        </div>
      </div>
      <div className="flex   ">
        <div>
          <img src={shop7} alt="m1" className="h-72 w-[236px] " />
        </div>
        <div>
          <img src={shop8} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop9} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop10} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop11} alt="m1" className="h-72 w-[236px]" />
        </div>
        <div>
          <img src={shop12} alt="m1" className="h-72 w-[236px]" />
        </div>
      </div></Link>
    </div>  
    <Link to="/products"state={{category:"Miscellaneous"}}>
    <div className=" flex justify-center">
      <div>
        <img src={shop13} alt="m1" className="h-72 w-[236px] " />
      </div>
      <div>
        <img src={shop14} alt="m1" className="h-72 w-[236px] " />
      </div>
      <div>
        <img src={shop15} alt="m1" className="h-72 w-[236px] " />
      </div>
    </div>
    </Link>
  

  </div></div>
  )
}

export default HomeContent