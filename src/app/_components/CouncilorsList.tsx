import {Avatar} from "@nextui-org/avatar";
import {Divider} from "@nextui-org/react";
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
  ]

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-6 gap-6 p-4">
      {
        parlamentares.map((parlamentar, index) => {
          return(
            <div key={index} className="w-full h-full flex flex-col items-center gap-2">
              <Avatar src="/luizin.jpeg" className="w-20 h-20 text-large" />
              <p className="text-center text-black">{parlamentar.nome}</p>
              <p className="text-[#06624d] text-lg font-bold">{parlamentar.partido}</p>
            </div>
          )
        })
      }
      </div>
      <Divider/>
      <div className="w-full h-12 flex items-center justify-evenly m-0 p-2">
        <Link href="/parlamentares">
          <p className="text-[#06624d] text-lg font-extralight">Vereadores</p>
        </Link>
        <Divider orientation="vertical" />
        <Link href="/parlamentares/mesa-diretora" className="text-[#06624d] text-lg font-extralight">Mesa diretora</Link>
        <Divider orientation="vertical" />
        <Link href="/parlamentares" className="text-[#06624d] text-lg font-extralight">Galeria</Link>
      </div>    
    </div>
  )
}