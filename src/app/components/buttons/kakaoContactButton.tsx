import React from "react";
import Image from "next/image";

const kakaoContactButton = () => {
  return (
    <div>
      <div className="hover:dark:invert">
        <button className="flex flex-row lg:py-[20px] lg:px-[40px] sm:py-[16px] sm:px-[23px] items-center shrink-0 font-Pretendard font-semibold lg:text-xl md:font-semibold md:text-[20px] sm:font-semibold sm:text-[16px] text-white bg-mainBlack rounded-[10px]">
          <Image src="/kakaotalk.svg" alt="kakaotalk" width={30} height={23} />
          <p className="ml-[13px]">카카오톡 문의 바로가기</p>
        </button>
      </div>
    </div>
  );
};

export default kakaoContactButton;
