import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { Footer } from "../_components/Footer";
import { GridContent } from "../_components/GridContent";
import { Header } from "../_components/Header";

export default function Proposicoes() {
  return (
    <GridContent>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
      </Breadcrumbs>
      <p> Proposicoes </p>
    </GridContent>
  );
}
