import Link from "next/link";
import React from "react";

const fullMenuViewButton = () => {
  return (
    <div>
      <Link href={"/MenuPage"}>
        <button className="w-[250px] border-mainWhite border-[1px] hover:bg-mainWhite hover:text-mainRed">
          <p className="font-Pretendard font-normal text-[14px] py-[10px] px-[12px]">
            메뉴 전체보기
          </p>
        </button>
      </Link>
    </div>
  );
};

export default fullMenuViewButton;
