import Link from "next/link";

export default function HomeHeader() {
  return (
    <div className=" mt-7">
      <Link href={"/"}>
        <text className="text-white">증도GPT</text>
      </Link>
    </div>
  );
}
