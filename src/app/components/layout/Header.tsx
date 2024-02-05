import React from "react";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <header>
      <div className="max-w-[1207px] mx-auto px-4 pt-12">
        <div className="flex flex-row justify-between items-center h-12">
          <div className="flex flex-row items-center">
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={187} height={36} />
            </Link>
            <ul className="flex flex-row mx-12 gap-2.5">
              <li className="p-5">
                <Link href="/BrandPage">브랜드</Link>
              </li>
              <li className="p-5">
                <Link href="/BusinessPage">비즈니스</Link>
              </li>
              <li className="p-5">
                <Link href="/MenuPage">메뉴안내</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-2.5">
            <Link href="https://www.instagram.com/">
              <Image
                src="/instagram.svg"
                alt="instagram"
                width={40}
                height={40}
              />
            </Link>
            <Link href="https://www.kakaotalk.com/">
              <Image
                src="/kakaotalk.svg"
                alt="kakaotalk"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
