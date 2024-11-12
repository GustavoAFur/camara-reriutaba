import { Input } from "@nextui-org/input";
import { FiSearch } from "react-icons/fi";
export function HeroContent() {
  return (
    <div className="flex justify-between gap-4 w-full px-28">
      <div className="flex flex-col gap-4 w-[50%]">
        <h1 className="text-5xl text-white font-bold">
          Transparência: tenha a informação que precisa.
        </h1>
        <p className="text-lg text-white block mb-[-10px]">Procure por algo</p>
        <div className="w-[70%]">
          <Input
            size="md"
            type=""
            placeholder="Ex: Contratos, agendas, notícias..."
            endContent={<FiSearch className="text-gray-400" />}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 w-[50%] px-16 text-white"></div>
    </div>
  );
}
