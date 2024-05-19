"use client";

import { TypeAnimation } from "react-type-animation";
import Button from "../components/Button";
import { Link } from "next/link";

export default function Alert() {
  return (
    <div>
      <div className="flex justify-center">
        <TypeAnimation
          sequence={["주의사항", 2000, "꼭 기억하기", 2000]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          className="sm:text-4xl sm:font-[500] text-2xl lg:text-9xl"
        />
      </div>
      <div className="mt-10">
        <ul>
          <li className="sm:text-2xl text-xl lg:text-4xl mb-5">
            할루시네이션 효과 : AI가 거짓을 사실인것 처럼 이야기할 수 있습니다.
            전적으로 믿지 않습니다.
          </li>
          <li className="sm:text-2xl text-xl lg:text-4xl mb-5">
            부모님의 동의, 어른이 있을 때만 사용합니다.
          </li>
          <li className="sm:text-2xl text-xl lg:text-4xl mb-5">
            AI가 알려주는 결과는 항상 직접 검색해보고 검증해야합니다.
          </li>
        </ul>
      </div>
      <div className="text-center">
        <a href="/main">
          <Button text={"큰 소리로 읽었으면 시작하기"} />
        </a>
      </div>
    </div>
  );
}
