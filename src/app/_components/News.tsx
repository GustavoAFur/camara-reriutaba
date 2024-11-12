import { Image } from "@nextui-org/react";
import { Chip } from "@nextui-org/chip";
export function News() {
  return (
    <div className="w-[280px] cursor-pointer">
      <div className="w-full h-[160px] rounded-xl overflow-hidden">
        <Image
          isZoomed
          shadow="sm"
          radius="lg"
          alt={"Notícias"}
          className="w-full h-full object-cover"
          src={"/luizin.jpeg"}
        />
      </div>
      <div className="py-4">
        {/* Tags */}
        <div className="flex gap-2">
          <Chip className="bg-[#45ad95] text-white" size="sm">
            <p className="text-[10px] font-bold">Educação</p>
          </Chip>
          <Chip className="bg-[#45ad95] text-white" size="sm">
            <p className="text-[10px] font-bold">Segurança</p>
          </Chip>
        </div>

        <div className="pt-4 flex flex-col gap-3">
          <h1 className="text-lg font-medium text-[#024c3d]">
            Combate à violência nas escolas e reforço à educação
          </h1>
          <p className="text-[#666891] font-light">
            Senado Aprova: combate à violência nas escolas e reforço à educação
            integral
          </p>
        </div>
      </div>
    </div>
  );
}
