import React from "react";
import Image from "next/image";
import Link from "next/link";

const socialContact = () => {
  return (
    <div className="flex flex-row gap-2.5 ">
      <div className="hover:opacity-40">
        <Link href="https://www.instagram.com/crepehub/">
          <Image src="/instagram.svg" alt="instagram" width={40} height={40} />
        </Link>
      </div>
      <div className="hover:opacity-40">
        <Link href="https://www.kakaotalk.com/">
          <Image src="/kakaotalk.svg" alt="kakaotalk" width={40} height={40} />
        </Link>
      </div>
    </div>
  );
};

export default socialContact;
