import Link from "next/link";

export default function MainHeader() {
  return (
    <div className="mt-7 flex gap-5">
      <Link href={"/main"}>
        <text className="text-white">증도GPT</text>
      </Link>
      <Link href={"/main/tour"}>
        <text className="text-white">TOUR</text>
      </Link>
      <Link href={"/main/sokdam"}>
        <text className="text-white">Sokdam</text>
      </Link>
    </div>
  );
}
