import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "PinRef — Broadcast Cable Builder",
  description: "Interactive pin reference guide for broadcast connectors and cable builds. Open source by GumDrop LLC.",
  manifest: "/manifest.json",
  themeColor: "#ff6b35",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "PinRef",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body>{children}</body>
    </html>
  );
}
