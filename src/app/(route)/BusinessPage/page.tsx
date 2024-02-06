import React from "react";
import KakaoContactButton from "../../components/buttons/kakaoContactButton";
import Header from "@/app/components/layout/Header";
import Image from "next/image";
import Footer from "@/app/components/layout/Footer";

const BusinessPage = () => {
  return (
    <div>
      <Header />
      <div className="h-full items-center bg-mainRed justify-center">
        <div className="justify-center flex flex-col items-center">
          <div className="flex flex-row justify-center items-center mt-[122px]">
            <Image
              src="/image/bg2/img/1.png"
              alt="가게 정면 이미지"
              width={586}
              height={676}
            />
            <div className="flex flex-col px-[87px]">
              <p className="font-Pretendard font-bold leading-[64px] text-5xl mb-[88px]">
                크레페허브
                <br />
                가맹문의
              </p>
              <p className="font-Pretendard font-normal text-xl mb-[54px]">
                크레페허브에 대한 깊은 관심 감사드립니다.
                <br />
                카카오톡 채팅을 통해 가맹점 문의 주시면
                <br />
                담당자 연결 후 답변드리겠습니다.
              </p>
              <KakaoContactButton />
            </div>
          </div>
          <div className="flex flex-row justify-center items-center mt-[206px] mb-[150px]">
            <div className="flex flex-col px-[87px]">
              <p className="font-Pretendard font-bold leading-[64px] text-5xl mb-[88px]">
                제휴 및 제안
              </p>
              <p className="font-Pretendard font-normal text-xl mb-[54px]">
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
                <p className="font-Pretendard font-normal text-xl ml-4 items-center">
                  235@crepehub.co.kr
                  <span className="ml-[10px]">이상호 팀장</span>
                </p>
              </div>
            </div>
            <Image
              src="/image/bg2/img/2.png"
              alt="가게 정면 이미지"
              width={586}
              height={676}
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BusinessPage;
