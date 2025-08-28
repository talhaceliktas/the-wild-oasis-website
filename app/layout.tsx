import { ReactNode } from "react";
import Header from "./_components/Header";
import "@/app/_styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "@/app/_components/AuthContext";
import { ReservationProvider } from "./_components/ReservationContext";
import ThemeSwitcher from "./_components/ThemeSwitcher";

import { Josefin_Sans } from "next/font/google";
import MobileNav from "./_components/MobileNav";
import ThemeProvider from "./_utils/ ThemeProvider";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
    description:
      "Luxurious cabin hotel, located in the heart of Italian Dolomites, surronunded by beautiful mountains and dark forests",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="tc-new-price" suppressHydrationWarning>
      <SessionProvider>
        <AuthProvider>
          <body
            className={`${josefin.className} bg-primary-950 text-primary-100 flex min-h-screen flex-col antialiased`}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Header />
              <MobileNav />

              <div className="grid flex-1 px-4 py-8 md:px-8 md:py-12">
                <main className="mx-auto w-full max-w-7xl">
                  <ReservationProvider>{children}</ReservationProvider>
                </main>
              </div>
              <ThemeSwitcher />
            </ThemeProvider>
          </body>
        </AuthProvider>
      </SessionProvider>
    </html>
  );
}
