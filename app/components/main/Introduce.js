import { roboto } from "@/app/fonts";
import Image from "next/image";
import Link from "next/link";
import tourPic from "@/public/tour.jpg";

export default function Introduce() {
  return (
    <div className="flex flex-row mt-44 justify-between ">
      <div className="flex flex-col gap-2">
        <div>
          <text
            className={`${roboto.className}sm:text-4xl lg:text-8xl text-2xl`}
          >
            World Tour
          </text>
        </div>
        <div>
          <text
            className={`${roboto.className} sm:text-4xl lg:text-8xl text-2xl`}
          >
            GPT
          </text>
        </div>
        <div>
          <text className="sm:text-2xl lg:text-3xl text-xl text-gray-300">
            여러분의 세계 여행 계획을 도와드립니다 !
          </text>
        </div>
        <div>
          <Link href={"main/alert"}>
            <button className="bg-fuchsia-500 w-44 h-12 rounded-3xl mt-10 hover:bg-fuchsia-700">
              <div>
                <text className={roboto.className}>Get started</text>
              </div>
            </button>
          </Link>
        </div>
      </div>
      <div className="sm:w-44 sm:h-44 w-64 h-64 lg:w-96 lg:h-96">
        <Image alt="photo" src={tourPic} className="rounded-lg" />
      </div>
      <div className="w-1"></div>
    </div>
  );
}
