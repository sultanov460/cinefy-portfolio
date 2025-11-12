import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../widgets/Sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Cinefy",
    template: "%s | Cinefy",
  },
  description:
    "Cinefy is your ultimate destination for cinematic entertainment. Stream the latest blockbusters, timeless classics, and hidden gems from around the world — all in one place. With personalized recommendations, high-definition playback, and exclusive content, Cinefy brings the magic of the movies straight to your screen. Watch anywhere, anytime, and experience film like never before.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex flex-col md:flex-row ">
          <Sidebar />
          <div className="w-full overflow-x-auto">
            <div className="sm:h-screen overflow-auto">
              <div className="w-full flex justify-center mx-auto overflow-auto md:h-[calc(100vh-30px)] overflow-y-auto relative">
                <div className="w-full md:max-w-7xl mt-10">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
