import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { UiProvider } from "@/contexts/UiContext";

const layGrotesk = localFont({
  src: [
    { path: "/fonts/laygrotesk-trial-regular.otf", weight: "400" },
    { path: "/fonts/laygrotesk-trial-medium.otf", weight: "500" },
    { path: "/fonts/laygrotesk-trial-semibold.otf", weight: "600" },
    { path: "/fonts/laygrotesk-trial-bold.otf", weight: "700" },
  ],
  variable: "--lay-grotesk",
});

export const metadata: Metadata = {
  title: "Scifi",
  description: "Best ISP in India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${layGrotesk.className} ${layGrotesk.variable} antialiased`}
      >
        <UiProvider>{children}</UiProvider>
      </body>
    </html>
  );
}
