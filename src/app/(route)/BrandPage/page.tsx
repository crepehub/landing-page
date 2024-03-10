"use client";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import React, { useEffect, useState } from "react";
import FixedBanner from "../../components/banner/fixedBanner";
import Image from "next/image";

const BrandPage = () => {
  const [width, setWidth] = useState(0); // 초기값 설정

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth); // 컴포넌트가 마운트된 후에 window.innerWidth로 초기값 설정
      const handleResize = () => {
        setWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 실행되도록 함

  useEffect(() => {
    console.log("Window width:", width);
  }, [width]);

  return (
    <div>
      <Header />
      <FixedBanner />
      <div className="bg-mainRed">
        <div className="flex flex-col justify-center items-center relative z-00 min-h-[1109px]">
          <div className="lg:h-[1080px] md:h-[1194px] sm:h-[959px]">
            <Image
              src="/image/bg1/D01/bg1.png"
              alt="backgroundimg"
              layout={"fill"}
              objectFit={"cover"}
              priority={true}
              // width={1920}
              // height={1208}
            />
          </div>
          <div className="flex justify-center mx-auto  text-start absolute z-10 lg:pr-0 md:pt-[225px] md:pb-[157px]">
            <div className="flex flex-col px-[30px]">
              <div className="font-GangwonEduPower font-normal lg:text-[30px] lg:mb-[78px] md:text-[30px] md:mb-[66px] sm:text-[22px] sm:mb-[22px]">
                crepehub
                <br />
                story
              </div>
              <div className="font-Pretendard font-normal lg:text-[18px] md:text-[17px] sm:text-[13px]">
                안녕하세요, 크레페허브 입니다.
                <br />
                <br />
                누구나 자기만의 꿈과 목표를 품고 있지만 쉽게 이루지 못하듯이,
                <br />
                크레페허브 역시 오랜시간 크레페 전문점을 운영하면서 꾸었던 작은
                꿈과 목표가 있었습니다. <br />
                언젠가는 트렌드에 따라가는 것이 아닌 직접 트렌드의 중심이자
                신드롬이 되는 것,
                <br /> 우리가 가진 독자적인 기술과 크레페에 대한 진심 어린
                진정성을 안고 많은 고객님들을 직접 만나는 것이었습니다.
                <br />
                <br />
                고유의 전문성과 역량, 크레페에 대한 자부심을 가지고 있음에도,
                저희가 느낀 한가지 painpoint가 있었습니다.
                <br /> 고품질의 크레페를 만들기 위해 많은 사장님들이
                노력하시지만, 크레페의 표준화는 어려웠던 것이 오늘날의
                현실이었습니다.
                <br /> 크레페허브는 보다 고품질의 크레페가 언제 어디서 먹어도 그
                가치가 고스란히 전달 될 수 있는 유일한 길을 오랜시간
                고민했습니다. <br />
                그리고 그 끝에 용기를 내었습니다.
                <br />
                <br />
                장기적인 안목으로 이루어져야 할 설비투자나 연구개발을 위해서
                또한
                <br /> 고객님들에게 더욱 좋은 서비스와 품질로 그 결과물을
                고스란히 드리기 위해서,
                <br /> 타사에 의지하는 것이 아닌 자사의 기술력에 대한 믿음으로
                스스로 개척하기로 말입니다.
                <br />
                <br />
                앞으로 저희는 장기적인 연구개발과 품질에 대한 흔들림 없는 철학을
                바탕으로 <br />
                가장 완벽하고 기준이 되는 크레페를 고객님들에게 전하고자 합니다.{" "}
                <br />
                대한민국의 모든 분이 온종일 행복할 수 있는 크레페를 언제
                어디서든 만날 수 있는 날이 빨리 오기를 소망하며, <br />
                부디 저희의 정성이 고객님들에게 닿기를 바랍니다.
                <br />
                <br />
                꿈을 향해 걸어가는 크레페허브의 진심 어린 한 걸음을 지켜봐
                주시기 바랍니다.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full justify-center items-center relative z-00">
          <div className=" lg:h-[938px] md:h-[1194px] sm:h-[746px]">
            <Image
              src="/image/bg2/D01/bg2.png"
              alt="backgroundimg2"
              layout={"fill"}
              objectFit={"cover"}
              priority={true}
              // width={1920}
              // height={938}
            />
          </div>
          <div className="max-w-[1207px] mx-auto flex flex-col justify-center items-center text-center absolute z-10 mt-[260px] mb-[248px]">
            <div className="font-Pretendard font-extrabold lg:text-[42px] mb-[83px] md:text-[42px] sm:text-[32px]">
              크레페의 중심이자 기준이 되는 브랜드
            </div>
            <div className="font-Pretendard font-normal lg:text-[20px] md:text-[17px] sm:text-[14px] space-y-7">
              <p>
                크레페허브는 이 명제를 실현하는 목적으로 탄생한 브랜드입니다.
              </p>
              <p>
                디저트 시장은 현재도 빠르게 바뀌는 시장입니다.
                <br />
                빠르게 바뀌는 흐름속에서 경쟁력을 갖추려면
                <br />
                뼈대가 되는 본질과 빠른 변화 속 유연한 사고가 중요합니다.{" "}
              </p>
              <p>
                크레페의 가치와 미래를 위해 반드시 필요한,
                <br />
                그러나 아무도 시도하지 않았던 크레페를 우리가 정의하고
                <br />
                만들어나가는 것이 크레페허브의 존재 이유입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* lg일때 보여질 부분*/}
        <div className="lg:block md:hidden sm:hidden">
          <div className="bg-mainWhite w-full">
            <div className="flex flex-row justify-center items-center py-[28px] font-GangwonEduPower font-normal text-[33px] text-mainRed">
              <p className="px-[113px]">origin</p>
              <p className="font-Pretendard font-light text-lg">|</p>
              <p className="px-[88px]">creativity</p>
              <p className="font-Pretendard font-light text-lg">|</p>
              <p className="px-[51px]">co-existence</p>
            </div>
          </div>
          <div className="bg-mainRed w-full">
            <div className="flex flex-row justify-center items-center space-x-[70px] pt-[56px] pb-[166px]">
              <p className="text-center">
                국내 디저트는 해외 수입 의존도가 높습
                <br />
                니다. 자사의 기술력과 역량을 바탕으로
                <br /> 국내 디저트(대체가능) 인프라를 구축하
                <br />고 만들어나갑니다.
              </p>
              <p className="text-center">
                프랑스와 일본에서 유래한 크레페를 크레
                <br />
                페허브의 고유미와 멋을 접목하여 새로운 <br />
                디저트 문화를 만들어 나갑니다. 한국을 넘<br />어 세계인의 디저트
                문화에까지 영향을 끼<br />
                치고자 합니다.
              </p>
              <p className="text-center">
                점차 사라져가는 크레페가 크레페허브를
                <br /> 만나 활력을 찾았습니다. 이윤만을 추구
                <br />
                하는 것이 아닌 지역사회에 이바지할 수<br /> 있는 크레페허브로
                나아가고자 합니다.
                <br /> (기부, 소영농 출하품 사용)
              </p>
            </div>
          </div>
        </div>
        {/* md, sm일떄 보여질 부분 */}
        <div className="lg:hidden md:block sm:block">
          <div className="bg-mainRed w-full md:py-[140px] sm:py-[52px]">
            <div className="flex flex-col justify-center items-center  text-center">
              <div className="flex flex-col justify-center items-center pb-[64px]">
                <p className="font-GangwonEduPower font-normal md:text-[33px] sm:text-[20px] text-mainWhite">
                  origin
                </p>
                <p className="font-Pretendard font-normal md:text-[17px] sm:text-[13px] pt-[14px] ">
                  국내 디저트는 해외 수입 의존도가 높습니다. 자사의 기술력과
                  <br />
                  역량을 바탕으로 국내 디저트(대체가능) 인프라를 구축하고
                  <br />
                  만들어나갑니다.
                </p>
              </div>
              <div className="w-full h-[1px] bg-mainWhite/[0.3]"></div>
              <div className="flex flex-col justify-center items-center md:py-[64px] sm:py-[52px] text-center">
                <p className="font-GangwonEduPower font-normal md:text-[33px] sm:text-[20px] text-mainWhite ">
                  creativity
                </p>
                <p className="font-Pretendard font-normal md:text-[17px] sm:text-[13px] mt-[14px]">
                  프랑스와 일본에서 유래한 크레페를 크레페허브의 고유미와 <br />
                  멋을 접목하여 새로운 디저트 문화를 만들어 나갑니다. <br />
                  한국을 넘어 세계인의 디저트 문화에까지 영향을 끼치고자 합니다.
                </p>
              </div>
              <div className="w-full h-[1px] bg-mainWhite/[0.3]"></div>
              <div className="flex flex-col justify-center items-center md:py-[64px] sm:py-[52px]  text-center">
                <p className="font-GangwonEduPower font-normal md:text-[33px] sm:text-[20px] text-mainWhite">
                  co-existence
                </p>
                <p className="font-Pretendard font-normal md:text-[17px] sm:text-[13px] mt-[14px]">
                  점차 사라져가는 크레페가 크레페허브를 만나 활력을 찾았습니다.
                  <br />
                  이윤만을 추구하는 것이 아닌 지역사회에 이바지할 수 있는
                  <br />
                  크레페허브로 나아가고자 합니다. (기부, 소영농 출하품 사용)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-mainRed">
          <div className="flex flex-col justify-center items-center relative z-00">
            <div className="lg:h-[938px] md:h-[678px] sm:h-[535px]">
              <Image
                src="/image/bg4/D01/bg4.png"
                alt="backgroundimg3"
                layout={"fill"}
                objectFit={"cover"}
                priority={true}
                // width={1920}
                // height={836}
              />
            </div>
            <div className=" min-w-[382px] px-[30px] max-w-[1207px] mx-autoflex flex-col justify-center items-start text-start absolute z-10 flex-shrink-0">
              <p className="font-Pretendard font-bold lg:text-[24px] md:text-[20px] sm:text-[13px] mb-[28px]">
                크레페허브의 원칙
              </p>
              <p className="font-Pretendard font-extrabold lg:text-[38px] md:text-[38px] sm:text-[29px] mb-[94px]">
                모방이 불가능한 맛과 편안함을
                <br />
                가장 중요하게 생각합니다
              </p>
              <p className="font-Pretendard font-normal lg:text-[20px] md:text-[17px] sm:text-[13px] ">
                누구나 선보일 수 있는 크레페는 만들지 않습니다.
                <br />
                크레페허브에 들어 오실 때의 동선과 향, 기분이 좋아지는 직원의
                응대 서비스, 언제 어디서 (어딘가 몸이 불편한 사<br />
                람이) 먹어도 편하게 먹을 수 있는 인테리어와 포장용기를 세심하게
                설계합니다.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center relative z-00 s">
            <div className="lg:h-[836px] md:h-[678px] sm:h-[535px]">
              <Image
                src="/image/bg5/D01/bg5.png"
                alt="backgroundimg4"
                layout={"fill"}
                objectFit={"cover"}
                priority={true}
                // width={1923}
                // height={836}
              />
            </div>
            <div className="min-w-[382px] px-[30px] *:max-w-[1207px] mx-auto flex flex-col justify-center items-start text-start absolute z-10 flex-shrink-0 ">
              <p className="font-Pretendard font-bold lg:text-[24px] md:text-[20px] sm:text-[13px] mb-[28px]">
                우리가 만들고자 하는 경험
              </p>
              <p className="font-Pretendard font-extrabold lg:text-[38px] md:text-[38px] sm:text-[29px] mb-[94px]">
                크레페를 주문하는 순간
                <br />
                크레페를 먹는 그 순간의 만족감
              </p>
              <p className="font-Pretendard font-normal lg:text-[20px] md:text-[17px] sm:text-[13px]">
                음식을 먹을 때의 가장 큰 만족감은 식감으로 전해진다고
                생각합니다. 더불어 개개인의 취향을 주문할 수 있는 순간
                <br />
                에도 즐거움을, 그리고 세상에 없던 메뉴를 직접 만들어나갈 수
                있다면 자기만의 크레페를 주문하는 순간의 만족감, <br />
                그리고 크레페를 먹는 순간의 만족감. 우리는 그 순간을 설계합니다.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-mainRed ">
          <div className="max-w-[1207px] px-30 mx-auto flex flex-col justify-between items-center pt-[64px] pb-[88px]  flex-shrink-0 ">
            <div className="flex flex-row justify-start items-start pb-[307px] w-full">
              <p className="font-Pretendard font-normal lg:text-[20px] md:text-[20px] sm:text-[13px] text-left ">
                크레페허브 브랜드 아이덴티티
              </p>
            </div>
            <div className="flex flex-row items-center pb-[346px] ">
              <div className="lg:w-[571px] lg:h-[109px] md:w-[571px] md:h-[109px] sm:w-[289px] sm:h-[55.17px] relative">
                <Image
                  src="/image/bg6/D01/logo.png"
                  alt="crepehub logo"
                  layout={"fill"}
                  objectFit={"cover"}
                  priority={true}
                  // width={571}
                  // height={109}
                ></Image>
              </div>
            </div>
            <div className=" lg:max-w-[682px] md:max-w-[682px] flex items-center justify-center">
              <div className="flex flex-row font-Pretendard font-light text-[14px] space-x-[10px] text-justify justify-between sm:gap-x-[50px] ">
                <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between">
                  <div className="lg:h-[86px] lg:w-[86px] md:h-[86px] md:w-[86px] sm:h-[28px] w-[27px] bg-mainRed border-mainWhite/[0.25] border-[1px] "></div>
                  <div className="flex flex-row lg:mx-[24px] md:mx-[24px] lg:mt-0 md:mt-0 sm:mt-[16px]">
                    <div className="flex flex-row w-[34px] gap-[6px] items-start mr-[24px]">
                      <div className="flex flex-col text-start ">
                        <div>C</div>
                        <div>M</div>
                        <div>Y</div>
                        <div>K</div>
                      </div>
                      <div className="flex flex-col text-start">
                        <div>13</div>
                        <div>88</div>
                        <div>68</div>
                        <div>0</div>
                      </div>
                    </div>
                    <div className="flex flex-row w-[34px] gap-[6px] items-start">
                      <div className="flex flex-col text-start">
                        <div>R</div>
                        <div>G</div>
                        <div>B</div>
                      </div>
                      <div className="flex flex-col text-start">
                        <div>213</div>
                        <div>61</div>
                        <div>67</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-Pretendard font-light text-[14px] space-x-[10px] text-justify ">
                  <div className="flex lg:flex-row md:flex-row sm:flex-col">
                    <div className="lg:h-[86px] lg:w-[86px] md:h-[86px] md:w-[86px] sm:h-[28px] w-[27px] bg-mainWhite  "></div>
                    <div className="flex flex-row lg:mx-[24px] md:mx-[24px] lg:mt-0 md:mt-0 sm:mt-[16px]">
                      <div className="flex flex-row w-[34px] gap-[6px] items-start mr-[24px]">
                        <div className="flex flex-col text-start ">
                          <div>C</div>
                          <div>M</div>
                          <div>Y</div>
                          <div>K</div>
                        </div>
                        <div className="flex flex-col text-start">
                          <div>0</div>
                          <div>0</div>
                          <div>0</div>
                          <div>0</div>
                        </div>
                      </div>
                      <div className="flex flex-row w-[34px] gap-[6px] items-start">
                        <div className="flex flex-col text-start">
                          <div>R</div>
                          <div>G</div>
                          <div>B</div>
                        </div>
                        <div className="flex flex-col text-start">
                          <div>225</div>
                          <div>225</div>
                          <div>225</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row font-Pretendard font-light text-[14px] space-x-[10px] text-justify ">
                  <div className="flex lg:flex-row md:flex-row sm:flex-col">
                    <div className="lg:h-[86px] lg:w-[86px] md:h-[86px] md:w-[86px] sm:h-[28px] w-[27px]  bg-mainBlack "></div>
                    <div className="flex flex-row lg:mx-[24px] md:mx-[24px] lg:mt-0 md:mt-0 sm:mt-[16px]">
                      <div className="flex flex-row w-[34px] gap-[6px] items-start mr-[24px]">
                        <div className="flex flex-col text-start ">
                          <div>C</div>
                          <div>M</div>
                          <div>Y</div>
                          <div>K</div>
                        </div>
                        <div className="flex flex-col text-start">
                          <div>0</div>
                          <div>0</div>
                          <div>0</div>
                          <div>100</div>
                        </div>
                      </div>
                      <div className="flex flex-row w-[34px] gap-[6px] items-start">
                        <div className="flex flex-col text-start">
                          <div>R</div>
                          <div>G</div>
                          <div>B</div>
                        </div>
                        <div className="flex flex-col text-start">
                          <div>0</div>
                          <div>0</div>
                          <div>0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BrandPage;
