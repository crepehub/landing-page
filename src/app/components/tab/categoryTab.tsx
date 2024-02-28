"use client";

import Link from "next/link";
import React from "react";

const CategoryTab = () => {
  return (
    <div className="flex flex-row text-mainWhite">
      <Link href="/MenuPage?category=crepe">
        <div className="w-[136px] px-[44px] py-[11px] bg-mainWhite/[0.4] hover:text-mainRed hover:bg-mainWhite active:text-mainRed active:bg-mainWhite visited:text-mainRed visited:bg-mainWhite">
          <p className="font-Pretendard font-bold text-[18px]">크레페</p>
        </div>
      </Link>
      <Link href="/MenuPage?category=drink">
        <div className="w-[136px] px-[52px] py-[11px] bg-mainWhite/[0.4] hover:text-mainRed hover:bg-mainWhite active:text-mainRed active:bg-mainWhite visited:text-mainRed visited:bg-mainWhite">
          <p className="font-Pretendard font-bold text-[18px]">음료</p>
        </div>
      </Link>
    </div>
  );
};

export default CategoryTab;
