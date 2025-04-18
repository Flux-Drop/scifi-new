import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { UiProvider } from "@/contexts/UiContext";
import { Toaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { auth } from "../../auth";
import { UserDataProvider } from "@/contexts/UserDataContext";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  return (
    <html lang="en">
      <SessionProvider session={session}>
        <body
          className={`${layGrotesk.className} ${layGrotesk.variable} antialiased  -z-10 inset-0 h-full w-full 
bg-[linear-gradient(to_right,#73737320_1px,transparent_1px),linear-gradient(to_bottom,#73737320_1px,transparent_1px)] 
bg-[size:35px_35px] 
 bg-black`}
        >
          <UserDataProvider>
            <UiProvider>
              {children}
              <Toaster
                closeButton
                expand={false}
                richColors
                position="top-right"
              />
            </UiProvider>
          </UserDataProvider>
        </body>
      </SessionProvider>
    </html>
  );
}
