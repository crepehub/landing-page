import React from "react";

const categoryTab = () => {
  return (
    <div className="flex flex-row text-mainWhite">
      <div className="w-[136px] px-[44px] py-[11px] bg-mainWhite/[0.4] active:text-mainRed active:bg-mainWhite visited:text-mainRed visited:bg-mainWhite">
        <p className="font-Pretendard font-bold text-[18px]">크레페</p>
      </div>
      <div className="w-[136px] px-[52px] py-[10px] bg-mainWhite/[0.4] active:text-mainRed active:bg-mainWhite visited:text-mainRed visited:bg-mainWhite">
        <p className="font-Pretendard font-bold text-[18px]">음료</p>
      </div>
    </div>
  );
};

export default categoryTab;
