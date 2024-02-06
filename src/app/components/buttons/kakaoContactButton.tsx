import React from "react";
import Image from "next/image";

const kakaoContactButton = () => {
  return (
    <div>
      <div className="hover:dark:invert">
        <button className="flex flex-row py-[20px] px-[40px] items-center shrink-0 font-Pretendard font-semibold text-xl text-white bg-mainBlack rounded-[10px]">
          <Image src="/kakaotalk.svg" alt="kakaotalk" width={30} height={23} />
          <p className="ml-[13px]">카카오톡 문의 바로가기</p>
        </button>
      </div>
    </div>
  );
};

export default kakaoContactButton;
