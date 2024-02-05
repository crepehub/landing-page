import Header from "@/app/components/layout/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-center items-center">
        <div>
          <Image
            src="/image/bg1/img/bg1.png"
            alt="backgroundimg1"
            width={1920}
            height={1080}
          />
        </div>
        {/* font issue */}
        <div className=" font-GangwonEduPower font-normal text-[58px] tracking-normal absolute">
          every crepes starts here
        </div>
      </main>
    </div>
  );
}
