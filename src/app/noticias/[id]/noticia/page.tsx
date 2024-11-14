"use client";
import { GridContent } from "@/app/_components/GridContent";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";

export default function Noticia(){
  return (
    <GridContent>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/noticias">Notícias</BreadcrumbItem>
        <BreadcrumbItem>Notícia</BreadcrumbItem>
      </Breadcrumbs>
      <h1>Noticia</h1>
    </GridContent>
  )
}