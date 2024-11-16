"use client";
import Image from "next/image";
import Link from "next/link";
import { Copyright } from "./Copyright";
export function Footer() {
  return (
    <>
      <div className="w-full bg-[#06624d] grid sm:grid-cols-4 grid-cols-1 p-10">
        <div className="flex flex-col gap-8 text-white">
          <div className="flex items-center gap-4">
            <Image
              src="/LOGO-camara-1.png"
              alt="Logo"
              width={100}
              height={100}
              className="p-0 m-0"
            />
            <h1 className="text-lg font-bold">CÂMARA MUNICIPAL DE RERIUTABA</h1>
          </div>
          <p className="text-sm font-light">
            10ª Legislatura (2021 – 2024) (Atual)
          </p>
          <div>
            <h1 className="text-xs font-semibold">PRESIDENTE</h1>
            <p className="text-sm font-light">NADSON EMANUEL ABREU BRITO</p>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-white px-4">
          <div className="flex flex-col gap-2 font-light">
            <h1 className="text-lg font-bold">INSTITUCIONAL</h1>
            <Link href="/">Presidência</Link>
            <Link href="/parlamentares/mesa-diretora">Mesa Diretora</Link>
            <Link href="/parlamentares">Parlamentares</Link>
            <Link href="/">Legislação</Link>
            <Link href="/">Carta de serviços</Link>
            <Link href="/faq">Perguntas frequentes</Link>
          </div>
          <div className="flex flex-col gap-2 font-light">
            <h1 className="text-lg font-bold">ATIVIDADES LEGISLATIVA</h1>
            <Link href="/">Comissões</Link>
            <Link href="/">Proposições</Link>
            <Link href="/">Sessões Legislativa</Link>
            <Link href="/">Processo Legislativo</Link>
          </div>
          <div className="flex flex-col gap-2 font-light">
            <h1 className="text-lg font-bold">PROCURADORIA DA MULHER</h1>
            <Link href="https://vozdamulher.camarareriutaba.ce.gov.br/">
              Voz da Mulher
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-white px-4">
          <div className="flex flex-col gap-2 font-light">
            <h1 className="text-lg font-bold">TRANSPARENCIA</h1>
            <Link href="/">Lei de Acesso à Informação</Link>
            <Link href="/esic">E-SIC</Link>
            <Link href="/ouvidoria">Ouvidoria</Link>
            <Link href="/">Relatório de Gestão Fiscal</Link>
            <Link href="/">Prestação de contas</Link>
            <Link href="/">Contas da gestão</Link>
            <Link href="/">Receitas</Link>
            <Link href="/">Despesas</Link>
            <Link href="/">Diárias</Link>
            <Link href="/">Contratos</Link>
            <Link href="/">Licitações</Link>
            <Link href="/">Comissão de Licitaçãos</Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 text-white px-4">
          <div className="flex flex-col gap-2 sm:text-right font-light">
            <h1 className="text-lg font-bold">FALE CONOSCO</h1>
            <h1>(88) 9 8214-5757</h1>
            <p>contato@camarareriutaba.ce.gov.br</p>
            <p>RUA SANTO ANTÔNIO,</p>
            <p>Nº S/N CENTRO,</p>
            <p>CEP: 62.260-000.</p>
            <p>RERIUTABA-CE</p>
          </div>

          <div className="flex flex-col gap-2 sm:text-right font-light">
            <h1 className="text-lg font-bold">HORÁRIO DE FUNCIONAMENTO</h1>
            <p>08:00 ÀS 13:00</p>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
}
