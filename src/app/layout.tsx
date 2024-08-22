import type { Metadata } from "next";
import { DM_Serif_Text } from "next/font/google";
import "./globals.css";

const inter = DM_Serif_Text({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "5university",
  description: "My Art Rooms",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      ></meta>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
