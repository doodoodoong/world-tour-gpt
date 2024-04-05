import Link from "next/link";

export default function Header() {
  return (
    <div className=" mt-7">
      <Link href={"/"}>
        <text className="text-white">TOUR-GPT</text>
      </Link>
    </div>
  );
}
