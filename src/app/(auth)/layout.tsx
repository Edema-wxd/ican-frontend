import "../globals.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mt-40">
          <h1>Auth layout</h1>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
