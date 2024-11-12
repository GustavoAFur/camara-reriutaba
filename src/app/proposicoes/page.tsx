import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Footer } from "../_components/Footer";
import { GridContent } from "../_components/GridContent";
import { Header } from "../_components/Header";

export default function Proposicoes() {
  return (
    <div className="w-full h-auto">
      <Header />
      <GridContent>
        <Breadcrumbs>
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
        </Breadcrumbs>
        <p> Proposicoes </p>
      </GridContent>
      <Footer />
    </div>
  );
}
