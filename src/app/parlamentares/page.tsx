"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/breadcrumbs";

import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";
import { GridContent } from "../_components/GridContent";
export default function ParlamentaresPage() {
  const parlamentares = [
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
      id: "iqwiqwiquwuwy",
    },
  ];

  return (
    <GridContent>
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem>Parlamentares</BreadcrumbItem>
      </Breadcrumbs>
      <div className="w-full grid grid-cols-4 gap-6">
        {parlamentares.map((parlamentar, index) => (
          <Link href={`/parlamentares/${parlamentar.id}/parlamentar`}>
            <Card shadow="none" key={index}>
              <CardBody className="overflow-visible p-0">
                <Image
                  shadow="sm"
                  radius="lg"
                  width={200}
                  height={200}
                  alt={"luizin"}
                  className="w-full object-cover h-[140px]"
                  src="/luizin.jpeg"
                />
              </CardBody>
              <CardFooter className="text-small justify-between flex flex-col items-start">
                <b>{parlamentar.nome}</b>
                <p className="text-default-500">{parlamentar.partido}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </GridContent>
  );
}
