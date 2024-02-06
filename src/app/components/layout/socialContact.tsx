import React from "react";
import Image from "next/image";
import Link from "next/link";

const socialContact = () => {
  return (
    <div className="flex flex-row gap-2.5">
      <Link href="https://www.instagram.com/crepehub/">
        <Image src="/instagram.svg" alt="instagram" width={40} height={40} />
      </Link>
      <Link href="https://www.kakaotalk.com/">
        <Image src="/kakaotalk.svg" alt="kakaotalk" width={40} height={40} />
      </Link>
    </div>
  );
};

export default socialContact;
