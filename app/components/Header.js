"use client";
import { usePathname } from "next/navigation";
import MainHeader from "./MainHeader";
import HomeHeader from "./HomeHeader";

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return <header>{isHomePage ? <HomeHeader /> : <MainHeader />}</header>;
}
