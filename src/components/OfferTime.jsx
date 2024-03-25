import React from "react";
import { useState } from "react";

const OfferTime = () => {
  const date = new Date();
  const hh = date.getHours();
  const mm = date.getMinutes();
  const ss = date.getSeconds();
  const [time, setTime] = useState("");
  setTimeout(() => {
    setTime(hh + "H:" + mm + "H:" + ss + "S");
  }, 1000);
  return (
    <>
        <div className='w-full bg-rose-50 h-14 flex flex-col items-center justify-center'>
        <h1 className='text-gray-500'>Sale Ends In <span className='text-rose-400'>{time}</span></h1>
        </div>
    </>
  );
};

export default OfferTime;
