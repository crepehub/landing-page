import React from "react";
import Image from "next/image";

const fixedBanner = () => {
  return (
    <div className="z-40 h-[750px] w-full absolute">
      <button className="w-[152px] flex flex-col justify-center items-center bg-black rounded-xl top-[440px] right-[24px] fixed z-50">
        <div className="flex flex-col justify-center items-center gap-[10px] mt-[33px]">
          <Image src="/ic/Chat.svg" alt="상담 아이콘" width={37} height={33} />
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
    </div>
  );
};

export default fixedBanner;
