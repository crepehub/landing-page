import React from "react";

const categoryDetailTab = () => {
  return (
    <div>
      <div className="flex flex-row space-x-[24px] font-Pretendard font-regular text-[18px] text-mainWhite/[0.4] ">
        <p className="font-bold active:text-mainWhite s">전체</p>
        <div className="h-[16px] border-[0.5px] border-mainWhite flex flex-row justify-center items-center my-auto"></div>
        <p className="active:text-mainWhite hover:text-mainWhite">클래식</p>
        <p className="active:text-mainWhite hover:text-mainWhite">오리지널</p>
        <p className="active:text-mainWhite hover:text-mainWhite">브륄레</p>
        <p className="active:text-mainWhite hover:text-mainWhite">토핑</p>
      </div>
    </div>
  );
};

export default categoryDetailTab;
