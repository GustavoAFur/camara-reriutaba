"use client";
import { GridContent } from "../_components/GridContent";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
export default function Noticias(){
  return(
    <GridContent>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Notícias</BreadcrumbItem>
      </Breadcrumbs>
      <h1>Noticias</h1>
    </GridContent>
  )
}