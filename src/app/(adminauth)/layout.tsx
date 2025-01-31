import "../globals.css";
import Image from "next/image";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ICAN Surulere",
  description: "Empowering Professionals, Building Futures",
};

export default function AdminAuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-0 pt-20 pl-20 bg-white items-start flex-col justify-center w-full ">
        <Image src="/Logo_big.png" alt="Logo" width={143} height={60} />
        <div className="pt-20 mx-auto">{children}</div>
      </body>
    </html>
  );
}
