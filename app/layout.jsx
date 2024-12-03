import Nav from "./(components)/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ktltc server",
  description: "Wep Application Database ktltc",
};
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <div className="grid grid-rows-1 grid-flow-col gap-4 py-4">
            <div className="flex">
              <Image
                src="/image/logo.webp"
                alt="Logo"
                width={80}
                height={30}
                className="pl-6 sx:w-60"
              />
              <div className="pl-2 pt-4">
                <p className="hidden sm:flex text-xs">
                  วิทยาลัยเทคนิคกันทรลักษ์
                </p>
                <p className="font-bold text-inherit">KTLTC</p>
              </div>
            </div>
            <div>
              <Nav />
            </div>
            <div className="flex justify-end pr-6 text-sm">
              <div className="flex gap-2 py-6">
                <Link href="/">
                  <div className="icon">Home</div>
                </Link>
                {/* <Link href="/UserPage/new">
                  <div className="icon">เพิ่มข้อมูล</div>
                </Link> */}
              </div>
            </div>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
