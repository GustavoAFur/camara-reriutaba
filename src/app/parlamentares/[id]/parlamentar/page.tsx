"use client";
import { GridContent } from "@/app/_components/GridContent";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
export default function Parlamentar() {
  return (
    <GridContent>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/parlamentares">Parlamentares</BreadcrumbItem>
        <BreadcrumbItem>Parlamentar</BreadcrumbItem>
      </Breadcrumbs>
      <p> Parlamentar </p>
    </GridContent>
  );
}
