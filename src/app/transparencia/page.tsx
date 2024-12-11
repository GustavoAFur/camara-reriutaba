"use client";
import Image from "next/image";
import { GridContent } from "../_components/GridContent";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";
import Check from "../_components/Check";
import { Divider } from "@nextui-org/divider";
import { FiLink, FiLink2, FiShare } from "react-icons/fi";
import { Link2 } from "lucide-react";
import {
  acessoInformacao,
  intitucional,
  leiResponsabilidade,
  transparencia,
} from "../_data/linksTransparencia";
import { LinksTransparency } from "../_components/LinksTransparency";
import { Button } from "@nextui-org/react";
export default function Transparencia() {
  return (
    <GridContent>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Transparência</BreadcrumbItem>
      </Breadcrumbs>
      <h1 className="mt-12 text-3xl text-[#024c3d] font-medium">
        Portal da Transparência
      </h1>
      <div className="w-full px-24 pt-12">
        <div className="w-full flex justify-between">
          <div className="w-[50%] space-y-6">
            <h1 className="text-5xl font-medium">
              Câmara Municipal de Reriutaba em transparência
            </h1>
            <p className="text-[#606060] text-sm font-normal">
              Uma ferramenta para garantir o atendimento à população com a
              transparência na gestão pública e atender às determinações da Lei
              de Acesso à Informação nº 12.527 e a Lei complementar Nº 101.
            </p>

            <div className="max-w-72 flex flex-col gap-2 rounded-lg bg-[#F5F5F5] p-4 text-sm">
              <div className="flex items-center gap-2">
                <Check />
                <span>Informações oficiais</span>
              </div>
              <div className="flex items-center gap-2">
                <Check />
                <span>Transparência</span>
              </div>
              <div className="flex items-center gap-2">
                <Check />
                <span>Responsabilidade</span>
              </div>
            </div>
          </div>
          <Image
            src={"/banner-receitas.png"}
            alt="Banner Receitas"
            width={380}
            height={380}
          />
        </div>

        <div className="space-y-4">
          <h1 className="mt-12 text-2xl text-[#024c3d] font-medium ">
            Lei de Responsabilidade Fiscal
          </h1>
          <span className="text-[#606060] text-sm font-light">
            Em atendimento a Lei Complementar Nº 131, de 27 de Maio de 2009
          </span>
          <div className="grid grid-cols-3 gap-4 w-full">
            {leiResponsabilidade.map((item, index) => (
              <LinksTransparency
                key={index}
                title={item.title}
                iconUrl={item.iconUrl}
                url={item.url}
                info={item.info}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="absolute w-full left-0">
            <Divider />
          </div>
        </div>

        <div className="space-y-4 pt-1">
          <h1 className="mt-12 text-2xl text-[#024c3d] font-medium ">
            Institucional
          </h1>
          <span className="text-[#606060] text-sm font-light">
            Informações relacionadas ao Município e ao Órgão
          </span>
          <div className="grid grid-cols-3 gap-4 w-full">
            {intitucional.map((item, index) => (
              <LinksTransparency
                key={index}
                title={item.title}
                iconUrl={item.iconUrl}
                url={item.url}
                info={item.info}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="absolute w-full left-0">
            <Divider />
          </div>
        </div>

        <div className="space-y-4 pt-1">
          <h1 className="mt-12 text-2xl text-[#024c3d] font-medium ">
            Transparência
          </h1>
          <span className="text-[#606060] text-sm font-light">
            Em atendimento a Lei Complementar Nº 131, de 27 de Maio de 2009
          </span>
          <div className="grid grid-cols-3 gap-4 w-full">
            {transparencia.map((item, index) => (
              <LinksTransparency
                key={index}
                title={item.title}
                iconUrl={item.iconUrl}
                url={item.url}
                info={item.info}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="absolute w-full left-0">
            <Divider />
          </div>
        </div>

        <div className="space-y-4 pt-1">
          <h1 className="mt-12 text-2xl text-[#024c3d] font-medium ">
            Acesso a Informação
          </h1>
          <span className="text-[#606060] text-sm font-light">
            Lei Nº 12.527 (Acesso a Informação)
          </span>
          <div className="grid grid-cols-3 gap-4 w-full">
            {acessoInformacao.map((item, index) => (
              <LinksTransparency
                key={index}
                title={item.title}
                iconUrl={item.iconUrl}
                url={item.url}
                info={item.info}
              />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <div className="absolute w-full left-0">
            <Divider />
          </div>
        </div>

        <div className="pt-1">
          <div className="bg-[#DCF6D4] w-full h-auto p-14 flex items-center justify-around mt-12 rounded-lg">
            <div className="w-[700px]">
              <h1 className="text-3xl text-[#024c3d] font-semibold">
                Procurando ao algo e não encontrou? Veja mais no porta do
                Governo transparente.
              </h1>
            </div>
            <Button className="flex items-center gap-2 bg-[#024c3d]">
              <span className="text-white font-semibold">Ver no portal</span>
              <Link2 size={16} className="text-white -rotate-45 font-bold" />
            </Button>
          </div>
        </div>
      </div>
    </GridContent>
  );
}
