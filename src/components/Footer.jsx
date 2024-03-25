import React from "react";
import play from "../images/googleplay.png";
import apple from "../images/apple.png";
import original from "../images/original.png";
import ret from "../images/ret.png";
import { AiFillFacebook } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full mt-20 bg-[#FAFBFC] text-sm">
      <div className="row space-y-4 space-x-4 text-[#282C3F]">
        <div className="p-3 grid grid-cols-4">
          <div className="col-span-1">
            <div className="ml-32">
              <p>ONLINE SHOPPING</p>
              <div className="mt-8 text-[#696B79] font-normal space-y-1">
                <p>MEN</p>
                <p>WOMEN</p>
                <p>Kids</p>
                <p>Home & Living</p>
                <p>Beauty</p>
                <p>Gift Cards</p>
                <p>Myntra insiders</p>
              </div>
            </div>
            <div className="row space-y-10 space-x-1 text-[#282C3F]">
              <div className="mt-8 ml-32">
                <p>USEFUL LINKS</p>
                <div className="mt-8 text-[#696B79] font-normal space-y-1">
                  <p>Blog</p>
                  <p>Careers</p>
                  <p>Site Map</p>
                  <p>Corporate information </p>
                  <p>Whitehat</p>
                  <p>Clear trip</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <p>Customer policies</p>
            <div className="mt-8 text-[#696B79] font-normal space-y-1">
              <p>Contact us</p>
              <p>FAQ</p>
              <p>T&C</p>
              <p>Terms of Use </p>
              <p>Track orders</p>
              <p>Shipping</p>
              <p>Cancellation</p>
              <p>Returns</p>
              <p>Privacy policy</p>
              <p>Grievance offer</p>
            </div>
          </div>
          <div className="col-span-0 ml-[-132px]">
            <div className="row space-y-8 ">
              <p>Experience Myntra app mobile</p>
              <div className="flex  ">
                <img src={play} className="w-40 mr-2 h-12 " alt="Google Play" />
                <img src={apple} className="w-40 h-12" alt="Apple App Store" />
              </div>
              <div className="mt-10 tracking-wide ">
                KEEP IN TOUCH
                <div className="flex ">
                  <AiFillFacebook size={25} className="mt-2 mr-4 " />
                  <BsTwitter size={25} className="mt-2 mr-4" />
                  <FaYoutube size={25} className="mt-2 mr-4" />
                  <TiSocialInstagram size={25} className="mt-2 mr-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1 ">
            <div className="row space y-8 flex ">
              <img
                src={original}
                alt="originlsign "
                className="w-[48px] h-[40px]"
              />
              <p>
                <span className="font-bold">100% ORIGINAL</span>
                <span className="text-[#696B79] font-normal">
                  {" "}
                  guarantee for<br></br>
                  all products at myntra.com
                </span>
              </p>
            </div>
            <div className="mt-10 tracking-wide ">
            <div className=" flex mr-24">
            <img src={ret}  className="w-[48px] h-[40px]" alt="ret"/>
            <p>Return within 14 days <span className="text-[#696B79] font-normal">of receiving your order</span></p>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
