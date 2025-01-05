import "../globals.css";

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
        <div>{children}</div>

      </body>
    </html>
  );
}
