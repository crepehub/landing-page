import React from "react";
import SocialContact from "./SocialContact";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-mainBlack">
      <div className="bg-mainBlack max-w-[1207px] mx-auto w-100vw">
        <div className="flex flex-col">
          <div className="mt-[53px]">
            <Image src="/logo.svg" alt="logo" width={187} height={36} />
          </div>
          <div className="mt-[38px]">
            <SocialContact />
          </div>
          <div className="mt-[16px] mb-[53px] flex flex-row  font-regular text-xs text-mainGray">
            대표자 김동규 TEL. 0507-1305-2974
            <br />
            서울특별시 서대문구 거북골로 21-5 1층
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
