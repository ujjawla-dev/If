import "./globals.css";

export const metadata = {
  title: "Auth UI",
  description: "Figma Auth Design",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}