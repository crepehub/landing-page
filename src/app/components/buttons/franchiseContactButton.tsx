import Link from "next/link";
import React from "react";

const franchiseContactButton = () => {
  return (
    <div>
      <Link href={"/BusinessPage"}>
        <button className="hover:text-mainRed hover:bg-mainWhite py-[20px] px-[120px] items-center shrink-0 font-Pretendard font-bold text-3xl text-white bg-mainRed rounded-full">
          <p>가맹문의 바로가기</p>
        </button>
      </Link>
    </div>
  );
};

export default franchiseContactButton;
