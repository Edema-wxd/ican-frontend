import "../globals.css";
import Toast from "@/components/genui/Toast";

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
      <body>
        <div className="mt-40">
          <h1>Admin layout</h1>
          <div>{children}</div>
          {/* <Toast type="error" message="error" />
          <Toast type="warning" message="warning" />
          <Toast type="info" message="info" /> */}
        </div>
      </body>
    </html>
  );
}
