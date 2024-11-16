"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import { GridContent } from "../_components/GridContent";

export default function Proposicoes() {
  return (
    <GridContent>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Proposicoes</BreadcrumbItem>
      </Breadcrumbs>
      <p> Proposicoes </p>
    </GridContent>
  );
}
