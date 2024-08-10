import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Hello Next.JS",
    template: "%s | Hello Next.JS",
  },
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Header</p>
        </header>

        {children}
        <footer
          style={{
            backgroundColor: "lightblue",
            padding: "1rem",
          }}
        >
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
