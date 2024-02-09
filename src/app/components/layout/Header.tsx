import React from "react";
import Image from "next/image";
import Link from "next/link";
import SocialContact from "./SocialContact";

const header = () => {
  return (
    //  bg-mainBlack/[0.8]
    <header className="w-full backdrop-blur-xl fixed z-50">
      <div className="max-w-[1207px] mx-auto pt-12 pb-[10px]">
        <div className="flex flex-row justify-between items-center h-12">
          <div className="flex flex-row ">
            <div className="mb-[3px] mt-[2px]">
              <Link href="/">
                <Image src="/logo.svg" alt="logo" width={187} height={36} />
              </Link>
            </div>
            <ul className="flex flex-row mx-12 gap-2.5">
              <li className="p-5">
                <Link href="/BrandPage">
                  <p className="font-normal text-lg text-mainWhite/[0.4] hover:font-bold hover:text-mainWhite active:font-bold">
                    브랜드
                  </p>
                </Link>
              </li>
              <li className="p-5">
                <Link href="/BusinessPage">
                  <p className="font-normal text-lg text-mainWhite/[0.4] hover:font-bold hover:text-mainWhite active:font-bold">
                    비즈니스
                  </p>
                </Link>
              </li>
              <li className="p-5">
                <Link href="/MenuPage">
                  <p className=" font-normal text-lg text-mainWhite/[0.4] hover:font-bold hover:text-mainWhite active:font-bol">
                    메뉴안내
                  </p>
                </Link>
              </li>
            </ul>
          </div>
          <SocialContact />
        </div>
      </div>
    </header>
  );
};

export default header;
