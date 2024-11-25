import { Avatar } from "@nextui-org/avatar";
import { Divider } from "@nextui-org/react";
import Link from "next/link";
export function CouncilorsList() {
  const parlamentares = [
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
    {
      nome: "Luiz Cezar Vale Mesquita",
      cargo: "Vice-Presidente da Câmara",
      partido: "PSB",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-6 gap-6 p-4">
        {parlamentares.map((parlamentar, index) => {
          return (
            <div
              key={index}
              className="w-full h-full flex flex-col items-center gap-2"
            >
              <Avatar src="/luizin.jpeg" className="w-20 h-20 text-large" />
              <p className="text-center text-black">{parlamentar.nome}</p>
              <p className="text-[#06624d] text-lg font-bold">
                {parlamentar.partido}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
