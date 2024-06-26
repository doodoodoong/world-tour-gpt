import { noto } from "@/app/fonts";
import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Jeungdo-GPT",
  description: "Generated by create next app",
  icons: {
    icon: "/jeungdo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={noto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
