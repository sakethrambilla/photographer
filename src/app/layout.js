import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photography",
  description: "Photographer portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + "font-Manrope"}>
        <div className="h-full w-full bg-[#070708] text-[#E4E4E6]">
          <div className="h-24 px-6 md:px-16 2xl:px-36 border-b-4 border-[#1C1C21] ">
            <div className="border-x-4   pt-6 h-full border-[#1C1C21]">
              <Navbar />
            </div>
          </div>
          <div className="h-[calc(100vh-6rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
