"use client";

import { usePathname } from "next/navigation";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const noLayoutRoutes = ["/esic/login", "/esic/criar-conta"];
  const shouldHideLayout = noLayoutRoutes.includes(pathname);

  return (
    <>
      {!shouldHideLayout && <Header />}
      <main>{children}</main>
      {!shouldHideLayout && <Footer />}
    </>
  );
}
