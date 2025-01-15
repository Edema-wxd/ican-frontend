import "../globals.css";
import { Toaster } from "@/components/ui/toaster";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="flex h-screen items-center flex-col justify-center "
        style={{
          backgroundImage: "url(/bgauth.png)",
          backgroundSize: "cover",
        }}
      >
        <div className="pt-20">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
