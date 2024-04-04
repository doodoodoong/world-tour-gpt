import { roboto } from "@/app/fonts";
import Link from "next/link";

export default function Introduce() {
  return (
    <div className="flex flex-row mt-44 ">
      <div className="flex flex-col gap-2">
        <div>
          <text className={`${roboto.className} text-8xl`}>World Tour</text>
        </div>
        <div>
          <text className={`${roboto.className} text-8xl`}>GPT</text>
        </div>
        <div>
          <text className="text-3xl text-gray-300">
            여러분의 세계 여행 계획을 도와드립니다 !
          </text>
        </div>
        <div>
          <Link href={"main"}>
            <button className="bg-fuchsia-500 w-44 h-12 rounded-3xl mt-10 hover:bg-fuchsia-700">
              <div>
                <text className={roboto.className}>Get started</text>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
