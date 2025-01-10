import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

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
          <Toaster />
        </div>
      </body>
    </html>
  );
}
