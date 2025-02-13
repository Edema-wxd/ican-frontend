import "../globals.css";
import Sidebar from "@/components/admincomps/Sidebar";
import Header from "@/components/admincomps/Header";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "ICAN Surulere",
  description: "Empowering Professionals, Building Futures",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" h-full flex flex-row">
        <Sidebar />
        <div className=" w-full bg-neutral-100">
          <Header />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
