import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/visuals/header";
import Sponsors from "@/components/visuals/sponsors";
import SocialMedia from "@/components/visuals/social";
import Link from "next/link";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KTG Lüneburger Heide",
  description: "Ein ganz besonderes Team",
};

export const viewport: Viewport = {
  themeColor: '#570035'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"></link>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Alkatra:wght@400..700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet"></link>
      </head>
      <body className={`${openSans.className} relative`}>
        <Header transparent={true} />
        <main className="flex min-h-screen flex-col items-center justify-start p-0">
          {children}
        </main>
        <footer>
          <Sponsors/>
          <SocialMedia/>
          <ul className="pb-20 text-center uppercase tracking-widest bg-oxford-blue-900 text-oxford-blue-500 relative">
            <li className="p-4"><Link href="/impressum">© 2024 KTG Lüneburger Heide</Link></li>
          </ul>
        </footer>
      </body>
    </html>
  );
}
