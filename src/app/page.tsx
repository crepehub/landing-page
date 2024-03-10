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

  const [activeImage, setActiveImage] = useState<number>(0);

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
              <div className="w-[100vw] lg:h-[1080px] md:h-[1194px] sm:h-[852px] relative z-00">
                <Image
                  src="/image/bg1/img/bg1.png"
                  alt="backgroundimg"
                  layout={"fill"}
                  objectFit={"cover"}
                  priority={true}
                  // width={1920}
                  // height={1080}
                />
              </div>
            </div>
            <div className="font-GangwonEduPower font-normal lg:text-[58px] md:text-[58px] sm:text-[48px] tracking-normal absolute z-10">
              every crepes{" "}
              <span className="lg:inline-block md:inline-block sm:block text-center">
                {" "}
                start here
              </span>
            </div>
          </div>
          {/* font issue */}
          <div className="flex flex-col justify-center items-center relative z-10">
            <div className="w-[100vw] lg:h-[90px] md:h-[180px] sm:h-[240px] z-00 ">
              <Image
                src="/image/bg2/D00/bg2.png"
                alt="backgroundimg2"
                layout={"fill"}
                objectFit={"cover"}
                priority={true}
                // width={1920}
                // height={1080}
              />
            </div>
            <div className="flex flex-col justify-center items-center  mb-[176px] z-10">
              <div className="flex flex-row items-center gap-[5px] lg:h-[38px] lg:w-[118px] md:h-[38px] md:w-[125px] sm:h-[29px] sm:w-[92px] bg-mainRed lg:px-3 md:px-3 sm:px-2 rounded-[50px] mb-[3px]">
                <div className="lg:h-[8px] lg:w-[8px] md:h-[8px] md:w-[8px] sm:h-[6px] sm:w-[6px] rounded-full bg-mainWhite items-center">
                  {" "}
                </div>
                <p className="font-Pretendard font-bold lg:text-2xl md:text-2xl sm:text-[18px] text-center items-center">
                  ON AIR
                </p>
              </div>
              <div className="font-GangwonEduPower font-normal lg:text-[58px] md:text-[58px] sm:text-[46px] tracking-normal mb-[19px] text-mainBlack">
                crepehub{" "}
                <span className="lg:inline-block md:inline-block sm:block">
                  franchise
                </span>
              </div>
              <p className="font-Pretendard font-normal lg:text-xl md:text-[20px] sm:text-[14px] lg:mb-[60px] md:mb-[80px] sm:mb-[54px] text-mainBlack">
                크레페허브와 함께하고 싶다면 지금 바로 문의해주세요
              </p>
              <div className="mb-[81px] w-[100vw] justify-center items-center  overflow-x-hidden scroll">
                <CarouselScroll />
              </div>
              <FranchiseContactButton />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-mainRed w-full relative z-00">
            <Image
              src="/image/bg/D00/img_bg.png"
              alt="backgroundimg3"
              width={2580}
              height={500}
            />
            <div className="flex flex-col justify-center items-center lg:mt-[-200px] md:mt-[-100px] sm:mt-[-50px] pb-[122px] z-10">
              <p className="font-GangwonEduPower font-normal lg:text-[58px] md:text-[58px] sm:text-[48px] mb-[70px]">
                crepe&apos;s{" "}
                <span className="lg:inline-block md:inline-block sm:block text-center">
                  hub
                </span>
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
                <div className="font-GangwonEduPower font-normal lg:text-[19px] md:text-[19px] sm:text-[13px] text-mainRed bg-mainWhite rounded-full lg:px-[8px] lg:pt-[4px] md:px-[8px] md:pt-[4px] sm:px-[8px] sm:pt-[4.5px]  flex-shrink-0">
                  {/* 메뉴 분류 데이터  */}
                  {homeMenu[activeImage]?.categories}
                </div>
                <div className="font-Pretendard font-bold lg:text-[24px] md:text-[24px] sm:text-[20px] text-mainWhite">
                  {/* 메뉴 이름 데이터 */}
                  {homeMenu[activeImage]?.name}
                </div>
              </div>
              {/* <FullMenuViewButton /> */}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center bg-mainRed w-full ">
            <div className="mt-[106px] pb-[89px]">
              <p className="font-GangwonEduPower font-normal lg:text-[58px] md:text-[58px] sm:text-[48px] text-center mb-[14px]">
                follow{" "}
                <span className="lg:inline-block md:inline-block sm:block">
                  crepehub
                </span>
              </p>
              <p className="font-Pretendard font-normal px-[20px] lg:text-[20px] md:text-[20px] sm:text-[14px] mb-[44px] text-center">
                크레페허브 인스타그램을 팔로우하고{" "}
                <span className="lg:inline-block md:inline-block sm:block">
                  {" "}
                  다양한 소식들을 확인해보세요
                </span>
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
                <div className="mb-[105px] mt-[-60px] px-[24px]">
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
