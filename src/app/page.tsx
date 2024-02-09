"use client";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Image from "next/image";
import FranchiseContactButton from "./components/buttons/franchiseContactButton";
import { useEffect, useState } from "react";
import FixedBanner from "./components/banner/fixedBanner";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (scrollPosition > 459) {
    console.log("이제 색이 바뀌어야 할 포지션값이야 : ", scrollPosition);
  } else {
    console.log(
      "원래처럼 흰배경의 네브바가 보여야 할 포지션값이야 : ",
      scrollPosition
    );
  }

  return (
    <>
      <div>
        <div className="">
          <Header />
        </div>
        <FixedBanner />
        <main className="flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center realtive">
            <div className="flex flex-col justify-center items-center w-screen">
              <div className="relative z-20">
                <Image
                  src="/image/bg1/img/bg1.png"
                  alt="backgroundimg"
                  width={1920}
                  height={1080}
                />
              </div>
            </div>
            <div className="font-GangwonEduPower font-normal text-[58px] tracking-normal absolute z-30">
              every crepes starts here
            </div>
          </div>
          {/* font issue */}
          <div className="flex flex-col justify-center items-center relative z-30 ">
            <Image
              src="/image/bg2/D00/bg2.png"
              alt="backgroundimg2"
              width={1920}
              height={1080}
            />
            <div className="flex flex-col absolute justify-center items-center z-30">
              <div className="flex flex-row items-center gap-[5px] h-[38px] w-[118px] bg-mainRed pl-3 pr-3 rounded-[50px] mb-[3px]">
                <div className="h-[8px] w-[8px] rounded-full bg-mainWhite items-center">
                  {" "}
                </div>
                <p className="font-Pretendard font-bold text-2xl text-center items-center">
                  ON AIR
                </p>
              </div>
              <div className=" font-GangwonEduPower font-normal text-[58px] tracking-normal mb-[19px] text-mainBlack">
                crepehub franchise
              </div>
              <p className="font-Pretendard font-normal text-xl mb-[60px] text-mainBlack">
                크레페허브와 함께하고 싶다면 지금 바로 문의해주세요
              </p>
              <FranchiseContactButton />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
