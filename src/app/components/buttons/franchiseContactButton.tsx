import Link from "next/link";
import React from "react";

const franchiseContactButton = () => {
  return (
    <div>
      <Link href={"/BusinessPage"}>
        <button className="hover:text-mainRed hover:bg-mainWhite lg:py-[20px] md:py-[20px] sm:py-[16px] lg:px-[120px] md:px-[120px] sm:px-[60px] items-center shrink-0 font-Pretendard font-bold lg:text-3xl md:text-[30px] sm:text-[20px] text-white bg-mainRed rounded-full">
          <p>가맹문의 바로가기</p>
        </button>
      </Link>
    </div>
  );
};

export default franchiseContactButton;
