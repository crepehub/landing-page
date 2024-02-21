"use client";
import React from "react";
import FranchiseContactButton from "../../components/buttons/franchiseContactButton";
import MenuOverlayDetail from "@/app/components/overlay/menuOverlayDetail";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const page = () => {
  return (
    <div>
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <FranchiseContactButton />
      <button onClick={scrollToTop} className="h-[32px] bg-red">
        Scroll To Top
      </button>
      {/* <MenuOverlayDetail menuItem={undefined}/> */}
    </div>
  );
};

export default page;
