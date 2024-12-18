import { Input } from "@nextui-org/input";
import Image from "next/image";
import { FiSearch } from "react-icons/fi";
export function HeroContent() {
  return (
    <div className="flex justify-center items-center gap-4 w-full h-auto sm:px-28 px-20 py-20">
      <div className="flex flex-col gap-4 sm:w-[50%]">
        <h1 className="sm:text-5xl text-4xl text-white font-bold">
          Transparência: tenha a informação que precisa.
        </h1>
        <p className="text-xs font-light text-white shadow-sm">
          Procure por algo:
        </p>

        <Input
          size="md"
          type=""
          placeholder="Ex: Contratos, agendas, notícias..."
          endContent={<FiSearch className="text-gray-400" />}
        />
      </div>
    </div>
  );
}
