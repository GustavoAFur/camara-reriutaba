import { NextUIProvider } from "@nextui-org/react";
import { Header } from "./_components/Header";
import { SectionHero } from "./_components/SectionHero";
import { Warnings } from "./_components/Warnings";
import { Propositions } from "./_components/Propositions";
import { Footer } from "./_components/Footer";
import LastVideos from "./_components/LastVideos";

export default function Home() {
  return (
    <NextUIProvider>
      <SectionHero />
      <Propositions />
      <Warnings />
      <LastVideos />
    </NextUIProvider>
  );
}
