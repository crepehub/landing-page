"use client";
import React, { useState, useEffect } from "react";
import KakaoContactButton from "../../components/buttons/kakaoContactButton";
import Header from "@/app/components/layout/Header";
import Image from "next/image";
import Footer from "@/app/components/layout/Footer";

const BusinessPage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    console.log("Window width:", width);
  }, [width]);

  return (
    <div>
      <Header />
      <div className="h-full items-center bg-mainRed justify-center">
        <div className="justify-center flex flex-col items-center ">
          <div className="flex lg:flex-row md:flex-col sm:flex-col justify-center items-center md:items-start sm:items-start mt-[214px] lg:mt-[214px] md:mt-[0px] sm:mt-[0px]">
            <div className=" ">
              {width >= 1024 ? (
                <Image
                  src="/image/bg2/img/1.png"
                  alt="가게 정면 이미지"
                  width={586}
                  height={676}
                />
              ) : (
                <Image
                  src="/image/tablet/T02/1.jpg"
                  alt="가게 정면 이미지"
                  width={1023}
                  height={492}
                  sizes="100vw"
                />
              )}
            </div>
            <div className="flex flex-col lg:px-[87px] lg:py-[64px] md:py-[64px] md:px-[60px] sm:py-[64px] sm:px-[36px] flex-shrink-0">
              <p className="font-Pretendard lg:leading-[64px] lg:font-bold lg:text-5xl lg:mb-[88px] md:leading-[64px] md:font-bold md:text-[48px] md:mb-[88px] sm:text-[29px] sm:font-bold sm:mb-[60px] sm:leading-[38px]">
                크레페허브
                <br />
                가맹문의
              </p>
              <p className="font-Pretendard font-normal lg:text-xl lg:mb-[54px] md:font-normal md:text-[17px] md:mb-[42px] sm:mb-[34px] sm:text-[14px] flex-shrink-0">
                크레페허브에 대한 깊은 관심 감사드립니다.
                <br />
                카카오톡 채팅을 통해 가맹점 문의 주시면
                <br />
                담당자 연결 후 답변드리겠습니다.
              </p>
              <KakaoContactButton />
            </div>
          </div>
          <div className="flex lg:flex-row md:flex-col sm:flex-col lg:justify-center md:justify-start lg:items-center md:items-start sm:items-start mt-[206px] mb-[150px] ">
            <div className="lg:hidden md:place-self-start sm:place-self-start md:mt-[-120px] sm:mt-[-130px]">
              <Image
                src="/image/tablet/T02/2.jpg"
                alt="가게 정면 이미지"
                width={1023}
                height={492}
              />
            </div>
            <div className="flex flex-col md:items-start sm:items-start lg:pl-[20px] lg:py-[64px] md:pl-[60px] md:pr-[64px] sm:py-[64px] sm:pl-[36px]">
              <p className="font-Pretendard lg:font-bold lg:text-5xl lg:mb-[88px]  md:text-[48px] sm:text-[29px] md:font-bold sm:font-bold sm:mb-[60px] flex-shrink-0">
                제휴 및 제안
              </p>
              <p className="font-Pretendard lg:font-normal lg:text-xl lg:mb-[54px] md:mb-[54px] md:text-[17px] sm:mb-[22px] sm:text-[14px]">
                크레페허브에 전하고 싶은 제휴 문의나 제안이 있다면
                <br />
                언제든지 아래 메일로 문의해주세요.
              </p>
              <div className="flex flex-row items-center">
                <div>
                  <Image
                    src="/text/email.png"
                    alt="이메일 로고"
                    width={22}
                    height={16}
                  />
                </div>
                <p className="font-Pretendard lg:font-normal md:font-normal sm:font-normal lg:text-xl lg:ml-4 items-center md:text-[17px] md:ml-[10px] sm:text-[14px] sm:ml-[10px]">
                  235@crepehub.co.kr
                  <span className="ml-[10px]">이상호 팀장</span>
                </p>
              </div>
            </div>
            <div className="lg:block md:hidden sm:hidden">
              <Image
                src="/image/bg2/img/2.png"
                alt="가게 정면 이미지"
                width={586}
                height={676}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BusinessPage;
