"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import CategoryTab from "@/app/components/tab/CategoryTab";
import CategoryDetailTab from "../../components/tab/categoryDetailTab";
import FixedBanner from "@/app/components/banner/fixedBanner";
import Pagination from "@/app/components/pagination/Pagination";
import menuItems from "@/app/constants/crepemenu";
import MenuOverlayDetail from "@/app/components/overlay/menuOverlayDetail";
import { useRouter } from "next/navigation";

const MenuPage = () => {
  interface MenuItem {
    id: number;
    name: string;
    img: string;
    categories: string;
    description: string;
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [currentPosts, setCurrentPosts] = useState<MenuItem[]>([]);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    // 현재 페이지에 해당하는 메뉴 아이템들을 계산하여 설정
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const slicedItems = menuItems.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPosts(slicedItems);
    setIsButtonDisabled(currentPosts.length < postsPerPage);
  }, [currentPage, currentPosts.length, postsPerPage]);

  useEffect(() => {
    scrollToTop();
  }, [currentPosts]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const router = useRouter();

  const handleClick = (category: string) => {
    router.push(`/MenuPage/${category}`);
  };

  return (
    <div>
      <Header />
      <div className="h-full items-center bg-mainRed justify-center">
        <div className="justify-center flex flex-col items-center">
          <div className="mt-[243px]">
            <CategoryTab />
          </div>
          <div className="mt-[88px] flex flex-row gap-[18px] justify-center items-center ">
            <p className="font-GangwonEduPower font-normal text-[70px] text-mainWhite">
              crepehub
            </p>
            <div className=" bg-mainWhite h-[72px] w-[247px] pb-[6px] text-center flex flex-col justify-center items-center">
              <p className="font-GangwonEduPower font-normal text-[65px] text-mainRed">
                crepes
              </p>
            </div>
          </div>
          <div className="mt-[34px]">
            <p className="font-Pretendard font-regualr text-[20px] text-mainWhite">
              클래식부터 오리지널, 브륄레까지 크레페허브의 달콤한 메뉴
            </p>
          </div>
        </div>
        <div className="mt-[80px] text-center flex flex-row justify-center items-center">
          <CategoryDetailTab />
        </div>
        <div className=" w-[1158px] mt-[21px] mb-[51px] flex flex-row justify-center items-center mx-auto">
          <div>
            <div className="grid grid-cols-4 justify-center items-center gap-[6px] text-center">
              {currentPosts.map((menuItems) => (
                <>
                  <div className="relative">
                    <MenuOverlayDetail
                      name={menuItems.name}
                      description={menuItems.description}
                    />
                    <Image
                      key={menuItems.id}
                      src={menuItems.img}
                      alt={menuItems.name}
                      width={285}
                      height={285}
                    />
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center mx-auto w-[1158px]">
          <div className="flex flex-col text-center justify-center items-center m-auto relative">
            <Pagination
              totalPosts={menuItems.length}
              postsPerPage={postsPerPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
            <div className="flex flex-row mb-[233px] w-[1158px] justify-end mx-auto mt-[-24px]">
              <button onClick={handlePrevPage} disabled={currentPage === 1}>
                <Image
                  src="/ic/previous.svg"
                  alt="previous_ico"
                  width={38}
                  height={40}
                  style={{ opacity: currentPage === 1 ? 0.4 : 1 }}
                />
              </button>
              <button onClick={handleNextPage} disabled={isButtonDisabled}>
                <Image
                  src="/ic/next.svg"
                  alt="next_ico"
                  width={38}
                  height={40}
                  style={{ opacity: isButtonDisabled ? 0.4 : 1 }}
                />
              </button>
            </div>
          </div>
        </div>
        <FixedBanner />
        <Footer />
      </div>
    </div>
  );
};

export default MenuPage;
