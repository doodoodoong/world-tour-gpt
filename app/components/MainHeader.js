import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="mt-7 flex gap-5">
      <Link href={"/main"}>
        <text className="text-white text-6xl">증도GPT</text>
      </Link>
      <div className="flex gap-5 items-center">
        <button className="px-4 py-2 rounded-lg border border-slate-400 transition ease-in delay-0 hover:scale-110 hover:bg-slate-600">
          <Link href={"/main/tour"}>
            <text className="text-white">여행계획</text>
          </Link>
        </button>
        <button className="px-4 py-2 rounded-lg border border-slate-400 transition ease-in delay-0 hover:scale-110 hover:bg-slate-600">
          <Link href={"/main/sokdam"}>
            <text className="text-white">속담</text>
          </Link>
        </button>
      </div>
    </div>
  );
}
