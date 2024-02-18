import React from "react";
import Image from "next/image";

const CarouselScroll = () => {
  return (
    <div className="relative w-[1920px] overflow-hidden stroke-red-900">
      <div className="justify-center items-center w-[4342px] flex flex-nowrap  translate-x-[-2171px] gap-[10px] animate-spin-slow">
        <div className="flex flex-row space-x-[10px] justify-center items-start w-[2166px]">
          <Image
            src="/image/group/1.png"
            alt="carousel_img1"
            width={534}
            height={354}
          />
          <Image
            src="/image/group/2.png"
            alt="carousel_img2"
            width={534}
            height={354}
          />
          <Image
            src="/image/group/3.png"
            alt="carousel_img3"
            width={534}
            height={354}
          />
          <Image
            src="/image/group/4.png"
            alt="carousel_img4"
            width={534}
            height={354}
          />
        </div>
        <div className="flex flex-row justify-center  space-x-[10px] items-start w-[2166px]">
          <Image
            src="/image/group/1.png"
            alt="carousel_img1"
            width={534}
            height={354}
          />
          <Image
            src="/image/group/2.png"
            alt="carousel_img2"
            width={534}
            height={354}
          />
          <Image
            src="/image/group/3.png"
            alt="carousel_img3"
            width={534}
            height={354}
          />
          <Image
            src="/image/group/4.png"
            alt="carousel_img4"
            width={534}
            height={354}
          />
        </div>
      </div>
    </div>
  );
};

// export default CarouselScroll;
// "use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";

// const CarouselScroll = () => {
//   const containerRef = useRef<HTMLDivElement>(null); // HTMLDivElement 타입으로 ref 선언

//   useEffect(() => {
//     const container = containerRef.current;

//     if (!container) return; // null 체크

//     const scrollElements = () => {
//       container.scrollLeft += 1; // 요소를 오른쪽으로 1px씩 이동

//       // 요소가 오른쪽 끝에 도달하면 맨 앞으로 이동
//       if (
//         container.scrollLeft >=
//         container.scrollWidth - container.clientWidth
//       ) {
//         container.scrollLeft = 10;
//       }
//     };

//     // 일정 시간 간격으로 요소를 이동시키는 타이머 설정
//     const scrollTimer = setInterval(scrollElements, 1);

//     // 컴포넌트가 unmount될 때 타이머 정리
//     return () => clearInterval(scrollTimer);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="relative w-[1920px] h-[354px] overflow-hidden bg-slate-600"
//     >
//       <div className = "flex">
//         <div className="flex flex-row gap-[10px]">
//           <Image
//             src="/image/group/1.png"
//             alt="carousel_img1"
//             width={534}
//             height={354}
//           />
//           <Image
//             src="/image/group/2.png"
//             alt="carousel_img2"
//             width={534}
//             height={354}
//           />
//           <Image
//             src="/image/group/3.png"
//             alt="carousel_img3"
//             width={534}
//             height={354}
//           />
//           <Image
//             src="/image/group/4.png"
//             alt="carousel_img4"
//             width={534}
//             height={354}
//           />
//         </div>
//         <div className="flex flex-row gap-[10px]">
//           <Image
//             src="/image/group/1.png"
//             alt="carousel_img1"
//             width={534}
//             height={354}
//           />
//           <Image
//             src="/image/group/2.png"
//             alt="carousel_img2"
//             width={534}
//             height={354}
//           />
//           <Image
//             src="/image/group/3.png"
//             alt="carousel_img3"
//             width={534}
//             height={354}
//           />
//           <Image
//             src="/image/group/4.png"
//             alt="carousel_img4"
//             width={534}
//             height={354}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

export default CarouselScroll;
