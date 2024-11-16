"use client";
import { GridContent } from "../_components/GridContent";

import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
export default function Faq() {
  return (
    <GridContent>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Faq</BreadcrumbItem>
      </Breadcrumbs>

      <h1 className="text-3xl font-semibold text-[#024c3d]">
        Perguntas Frequentes
      </h1>

      <Accordion variant="splitted">
        <AccordionItem
          key="1"
          aria-label="O que é processo Legislativo?"
          title="O que é processo Legislativo?"
        >
          <p>
            É o conjunto de atos realizados pelos órgãos do Poder Legislativo,
            de acordo com regras previamente fixadas, para elaborar normas
            jurídicas (emendas à Lei Orgânica, leis complementares, leis
            ordinárias e outros tipos normativos dispostos no art. 59 da
            Constituição Federal)
          </p>
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Onde se encontram definidas as regras relativas ao processo legislativo?"
          title="Onde se encontram definidas as regras relativas ao processo legislativo?"
        >
          <p>
            As regras gerais de elaboração legislativa encontram-se definidas na
            Constituição, em seu Título IV, Capítulo I – Do Poder Legislativo.
            As regras específicas de tramitação de projetos em cada Casa
            Legislativa estão dispostas nos regimentos internos.
          </p>
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="O que são proprosições?"
          title="O que são proprosições?"
        >
          <p>
            Proposição é toda matéria sujeita à deliberação da Câmara. Apesar
            dessa ampla definição, os tipos de proposição considerados
            principais, visto que originam as normas descritas no art. 59 da
            Constituição Federal, são: Propostas de Emenda à Constituição – Lei
            Orgânica (PEC), Projetos de Lei Complementar (PLP), Projetos de Lei
            Ordinária (PL), Projetos de Decreto Legislativo (PDC) e Projetos de
            Resolução (PRC). Há ainda mais tipos de proposição apreciados pela
            Câmara, tais como: pareceres, emendas, propostas de fiscalização de
            controle, indicações, etc.
          </p>
        </AccordionItem>
      </Accordion>
    </GridContent>
  );
}
