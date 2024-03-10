import React from "react";
import Image from "next/image";
import Link from "next/link";

const fixedBanner = () => {
  return (
    <div className="z-40 lg:h-[750px] lg:w-full absolute">
      {/* lg일때 보여질 것 */}
      <div className="lg:block md:block sm:hidden">
        <Link href={"/BusinessPage"}>
          <button className="w-[152px] flex flex-col justify-center items-center bg-black rounded-xl top-[440px] right-[24px] fixed z-50">
            <div className="flex flex-col justify-center items-center gap-[10px] mt-[33px]">
              <Image
                src="/ic/Chat.svg"
                alt="상담 아이콘"
                width={37}
                height={33}
              />
              <p className="font-Pretendard text-center font-bold text-lg mb-[30px]">
                온라인
                <br />
                창업상담
              </p>
            </div>
            <div className="flex flex-col justify-center items-center w-[128.5px] h-[1px] bg-gray-500 mb-[30px]">
              {""}
            </div>
            <div className="mb-[24px]">
              <div className="flex flex-col justify-center items-center gap-[10px]">
                <Image
                  src="/ic/lightBulb.svg"
                  alt="lightBulb 아이콘"
                  width={50}
                  height={50}
                />
                <p className="font-Pretendard font-bold text-lg mb-[4px]">
                  제휴 및 제안
                </p>
              </div>
            </div>
          </button>
        </Link>
      </div>
      {/* sm일때 보여질 것 */}
      <div className="lg:hidden md:hidden sm:block">
        <Link href={"/BusinessPage"}>
          <button className="w-full h-[114px] flex flex-row justify-center items-center bg-black bottom-0 fixed z-50">
            <div className="flex flex-row justify-center items-center gap-[8.5px] mb-[2px]">
              <Image
                src="/ic/Chat.svg"
                alt="상담 아이콘"
                width={28}
                height={28}
              />
              <p className="font-Pretendard text-center font-bold text-[17px] items-center mt-[-5px]">
                온라인 창업상담
              </p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default fixedBanner;
