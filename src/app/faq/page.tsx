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

      <Accordion
        variant="splitted"
        itemClasses={{ base: "mb-4" }}
        className="m-0"
      >
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
        <AccordionItem
          key="4"
          aria-label="Quem pode propor um Projeto de Lei?"
          title="Quem pode propor um Projeto de Lei?"
        >
          <p>
            O Projeto de lei pode ser proposto por qualquer parlamentar , de
            forma individual ou coletiva, por qualquer comissão da Câmara, pelo
            Prefeito Municipal, pelo Tribunal de Justiça, Pelo Tribunal de
            Contas do Estado e pelo Ministério Público . A Constituição ainda
            prevê a iniciativa popular de leis, permitindo aos cidadãos
            apresentar projeto de lei, desde que cumpram as exigências
            estabelecidas no §2º do art. 61.
          </p>
        </AccordionItem>
        <AccordionItem
          key="5"
          aria-label="O que é Justificativa ou Justificação de uma proposição?"
          title="O que é Justificativa ou Justificação de uma proposição?"
        >
          <p>
            É um texto que acompanha os projetos de lei e, em geral, as demais
            proposições com origem no Poder Legislativo, que visa a explicar a
            proposta e/ou expor as razões de se editar a norma.
          </p>
        </AccordionItem>
        <AccordionItem
          key="6"
          aria-label="O que é Exposição de Motivos de uma proposição?"
          title="O que é Exposição de Motivos de uma proposição?"
        >
          <p>
            É um texto que acompanha os projetos de lei e outras proposições de
            autoria do Poder Executivo com a mesma função de uma justificativa:
            explicar a proposta e/ou expor as razões de se editar a norma. Em
            geral, encontra-se no corpo da mensagem (MSG) encaminhada pelo Poder
            Executivo ao Poder Legislativo e é identificada pela sigla E.M.
          </p>
        </AccordionItem>
        <AccordionItem
          key="7"
          aria-label="Como pode ser exercida a Iniciativa Popular?"
          title="Como pode ser exercida a Iniciativa Popular?"
        >
          <p>
            A Constituição Federal de 1988, em seu art. 14, inciso III e art.
            61, § 2º, prevê a apresentação de projetos de iniciativa popular à
            Câmara dos Deputados desde que disponham sobre temas que não sejam
            de iniciativa privativa do Presidente da República e contenham a
            assinatura de, no mínimo, 1% do eleitorado nacional, originários de,
            pelo menos, cinco Estados, com não menos de 0,3% dos eleitores de
            cada um deles.
          </p>
        </AccordionItem>
        <AccordionItem
          key="8"
          aria-label="Quais os requisitos para apresentação de projeto de lei de iniciativa popular?"
          title="Quais os requisitos para apresentação de projeto de lei de iniciativa popular?"
        >
          <p>
            Além das exigências dispostas na Constituição Federal, em seu art.
            61, § 2º, a Lei 9.709 de 1998, que regulamenta o exercício da
            iniciativa popular e de outras formas de soberania popular,
            estabelece que
          </p>
        </AccordionItem>
        <AccordionItem
          key="9"
          aria-label="Como saber quando uma proposição vai ser votada em Plenário?"
          title="Como saber quando uma proposição vai ser votada em Plenário?"
        >
          <p>
            Uma proposição está pronta para ser votada em Plenário somente
            depois de ter recebido parecer de TODAS as comissões para as quais
            tenha sido distribuída pelo Presidente da Câmara. Isso significa que
            a matéria foi avaliada tecnicamente e que contém os pareceres
            necessários para orientar os parlamentares na votação. Uma exceção
            ocorre quando a matéria tramitar em regime de urgência requerida
            pelos vereadores ou pelo Poder Executivo. Nesse caso, o parecer da
            comissão pode ser dado em Plenário. A inclusão de proposições na
            pauta de votação do Plenário é disciplinada pelo Regimento Interno
            da Câmara Municipal. A organização da agenda de votações é
            atribuição do Presidente da Câmara Municipal. Não há uma data
            específica para que uma determinada proposição seja votada. No
            entanto, cabe destacar que a Câmara Municipal divulga semanalmente
            uma previsão para a pauta de votação do Plenário, no site.
          </p>
        </AccordionItem>
        <AccordionItem
          key="10"
          aria-label="Como faço para acompanhar a tramitação de uma proposição?"
          title="Como faço para acompanhar a tramitação de uma proposição?"
        >
          <p>
            A tramitação de qualquer projeto de lei ou outra proposição na
            Câmara Municipal pode ser acompanhada em detalhes no Portal da
            Câmara ou, via e-mail, por meio do serviço de acompanhamento de
            proposições, disponível no Portal.
          </p>
        </AccordionItem>
      </Accordion>
    </GridContent>
  );
}
