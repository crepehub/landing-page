import React, { useState } from "react";
import menuItems from "@/app/constants/crepemenu";

interface ownProps {
  name: string;
  description: string;
}

const MenuOverlayDetail = ({ name, description }: ownProps) => {
  return (
    <div className="absolute w-full h-full hover:bg-black/90 justify-center items-center flex flex-col text-white/0  hover:text-white text-center my-auto mx-auto z-20">
      <div className="justify-center flex flex-col items-center text-center max-w-[130px]">
        <p className="font-Pretendard font-bold text-[18px]">{name}</p>
        <p className="font-Pretendard font-thin text-[30px]">-</p>
        <p className="font-Pretendard font-normal text-14">{description}</p>
      </div>
    </div>
  );
};

export default MenuOverlayDetail;
