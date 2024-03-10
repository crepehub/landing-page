"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import SocialContact from "@/app/components/layout/SocialContact";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full backdrop-blur-xl fixed z-50 lg:bg-mainRed md:bg-mainRed sm:bg-mainRed">
      <div className="max-w-[1207px] px-10 mx-auto pt-12 pb-[10px] ">
        <div className="flex flex-row justify-between items-center h-12">
          <div className="flex flex-row ">
            <div className="mb-[3px] mt-[2px]">
              <div className="lg:h-[44px] lg:w-[187px] md:h-[44px] md:w-[187px] sm:w-[129px] sm:h-[26px] relative z-00">
                <Link href="/">
                  <Image
                    src="/logo.svg"
                    alt="logo"
                    layout={"fill"}
                    objectFit={"cover"}
                    priority={true}
                  />
                </Link>
              </div>
            </div>
            <div className="lg:block md:block sm:hidden">
              <ul className="flex flex-row mx-12 gap-2.5 ">
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
          </div>
          <div className="flex flex-row">
            {/* <SocialContact /> */}
            {/* 배포 이슈 (moduels not found) */}
            <div className="flex flex-row gap-2.5 ">
              <div className="hover:opacity-40">
                <Link href="https://www.instagram.com/crepehub/">
                  <Image
                    src="/instagram.svg"
                    alt="instagram"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
              <div className="hover:opacity-40">
                <Link href="https://www.kakaotalk.com/">
                  <Image
                    src="/kakaotalk.svg"
                    alt="kakaotalk"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>
            </div>
            <button
              className="lg:hidden md:hidden sm:block ml-[8px] hover:opacity-40"
              onClick={handleMenuClick}
            >
              {isMenuOpen ? (
                <Image
                  src="ic/HamburgerClose.svg"
                  alt="close"
                  width={36}
                  height={36}
                ></Image>
              ) : (
                <Image
                  src="/ic/HamburgerMenu.svg"
                  alt="menu"
                  width={36}
                  height={36}
                />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="bg-mainWhite ">
          <div className="flex flex-row justify-center items-center gap-[44px] py-[12px]">
            <Link href="/BrandPage">
              <p className="font-normal  text-[14px] text-mainBlack hover:font-bold hover:text-mainRed active:font-bold">
                브랜드
              </p>
            </Link>
            <Link href="/BusinessPage">
              <p className="font-normal text-[14px] text-mainBlack hover:font-bold hover:text-mainRed active:font-bold">
                비즈니스
              </p>
            </Link>
            <Link href="/MenuPage">
              <p className=" font-normal text-[14px] text-mainBlack  hover:font-bold hover:text-mainRed active:font-bol">
                메뉴안내
              </p>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
