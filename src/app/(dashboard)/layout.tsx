import "../globals.css";
import { Header } from "./ui/Header";
import { Sidebar } from "./ui/Sidebar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <div className="mt-40">
          <h1>Dashboard layout</h1>
          <div>{children}</div>
        </div> */}
        <div className="min-h-screen flex bg-gray-50">
          <Sidebar />
          <div className="flex-1 pt-12 bg-gray-50">
            <Header />
            <main className="pt-12 p-6">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
