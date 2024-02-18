import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import React from "react";
import CategoryTab from "../../components/tab/categoryTab";
import CategoryDetailTab from "../../components/tab/categoryDetailTab";
import FixedBanner from "@/app/components/banner/fixedBanner";
import Image from "next/image";
import menuItems from "@/app/utils/constants";

const MenuPage = () => {
  const MenuList = () => {
    return (
      <div>
        <div className="grid grid-cols-4 justify-center items-center gap-[6px] text-center">
          {menuItems.map((menuItems) => (
            <Image
              key={menuItems.id}
              src={menuItems.img}
              alt={menuItems.name}
              width={285}
              height={285}
            ></Image>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <div className="h-full items-center bg-mainRed justify-center">
        <div className="justify-center flex flex-col items-center">
          <div className="mt-[243px]">
            <CategoryTab />
          </div>
          {/* 메뉴 제목    */}
          <div className="mt-[88px] flex flex-row gap-[18px] justify-center items-center ">
            <p className="font-GangwonEduPower font-normal text-[70px] text-mainWhite">
              crepehub
            </p>
            <div className=" bg-mainWhite h-[72px] w-[247px] pb-[6px] text-center flex flex-col justify-center items-center">
              <p className="font-GangwonEduPower font-normal text-[65px] text-mainRed">
                crepes
              </p>
            </div>
          </div>
          <div className="mt-[34px]">
            <p className="font-Pretendard font-regualr text-[20px] text-mainWhite">
              클래식부터 오리지널, 브륄레까지 크레페허브의 달콤한 메뉴
            </p>
          </div>
        </div>
        {/* 세부 매뉴 탭바 */}
        <div className="mt-[80px] text-center flex flex-row justify-center items-center">
          <CategoryDetailTab />
        </div>
        <div className=" w-[1158px] mt-[21px] mb-[51px] flex flex-row justify-center items-center mx-auto">
          <div>
            <MenuList />
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mx-auto w-[1158px] ">
          <div className="gap-[4px] flex flex-row justify-center relative mx-auto">
            <div className="w-[6px] h-[6px] rounded-full bg-mainWhite"></div>
            <div className="w-[6px] h-[6px] rounded-full bg-mainWhite/[0.4]"></div>
            <div className="w-[6px] h-[6px] rounded-full bg-mainWhite/[0.4]"></div>
            <div className="w-[6px] h-[6px] rounded-full bg-mainWhite/[0.4]"></div>
          </div>
        </div>
        <div className="flex flex-row mb-[233px] w-[95vh] justify-end mx-auto mt-[-24px]">
          <Image
            src="/ic/previous.svg"
            alt="previous_ico"
            width={38}
            height={40}
          />
          <Image src="/ic/next.svg" alt="previous_ico" width={38} height={40} />
        </div>
        <FixedBanner />
        {/* 메뉴 이미지 및 설명 */}
        <Footer />
      </div>
    </div>
  );
};

export default MenuPage;
