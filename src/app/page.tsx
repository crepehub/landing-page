"use client";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Image from "next/image";
import FranchiseContactButton from "./components/buttons/franchiseContactButton";
import { useEffect, useState } from "react";
import FixedBanner from "./components/banner/fixedBanner";
import CarouselScroll from "./components/carousel/CarouselScroll";
import FullMenuViewButton from "./components/buttons/fullMenuViewButton";
import Link from "next/link";
import homeMenu from "./constants/homemenu";

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

  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === homeMenu.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(homeMenu.length - 1)
      : setActiveImage(activeImage - 1);
  };

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
            <div className="flex flex-col absolute justify-center items-center mt-[154px] mb-[176px] z-30">
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
              <div className="mb-[81px] w-[100vw] justify-center items-center  overflow-x-hidden scroll">
                <CarouselScroll />
              </div>
              <FranchiseContactButton />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-mainRed w-full">
            <Image
              src="/image/bg/D00/img_bg.png"
              alt="backgroundimg3"
              width={2580}
              height={500}
            />
            <div className="flex flex-col justify-center items-center mt-[-300px] pb-[122px] z-10">
              <p className="font-GangwonEduPower font-normal text-[58px] mb-[70px]">
                crepe&apos;s hub
              </p>
              <div className="flex flex-row space-x-[50px] mb-[62px]">
                <Image
                  src="/ic/previous.svg"
                  alt="prev_ico"
                  width={38}
                  height={40}
                  onClick={clickPrev}
                />
                {homeMenu.map((elem, idx) => (
                  <div
                    key={idx}
                    className={`${
                      idx === activeImage
                        ? "flex flex-row justify-center items-center"
                        : "hidden"
                    }`}
                  >
                    <Image
                      key={idx}
                      src={elem.img}
                      alt={elem.name}
                      width={590}
                      height={542}
                    ></Image>
                  </div>
                ))}
                <Image
                  src="/ic/next.svg"
                  alt="next_ico"
                  width={38}
                  height={40}
                  onClick={clickNext}
                />
              </div>
              <div className="flex flex-row gap-[12px] pb-[20px] ">
                <div className="font-GangwonEduPower font-normal text-[19px] text-mainRed bg-mainWhite rounded-full px-[8px] pt-[4px] flex-shrink-0">
                  {/* 메뉴 분류 데이터  */}
                  {homeMenu[activeImage]?.categories}
                </div>
                <div className="font-Pretendard font-bold text-[24px] text-mainWhite">
                  {/* 메뉴 이름 데이터 */}
                  {homeMenu[activeImage]?.name}
                </div>
              </div>
              <FullMenuViewButton />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-mainRed w-full ">
            <div className="mt-[106px] pb-[89px]">
              <p className="font-GangwonEduPower font-normal text-[58px] text-center mb-[14px]">
                follow crepehub
              </p>
              <p className="font-Pretendard font-normal text-[20px] mb-[44px]">
                크레페허브 인스타그램을 팔로우하고 다양한 소식들을 확인해보세요
              </p>
              <div className="flex flex-col justify-center items-center text-center">
                <div className="relative hover:scale-125 hover:duration-200 hover:ease-out">
                  <Link href="https://www.instagram.com/crepehub/">
                    <Image
                      src="/image/insta/to_instagram.png"
                      alt="instagram"
                      width={196}
                      height={196}
                    />
                  </Link>
                </div>
                <div className="mb-[105px] mt-[-60px]">
                  <Image
                    src="/image/insta/insta.png"
                    alt="insta"
                    width={484}
                    height={325}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
