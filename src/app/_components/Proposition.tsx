import { Avatar, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export function Proposition() {
  return (
    <div className="max-w-96 h-auto  flex flex-col items-start gap-6 group border-[#f5f5f6] hover:border-[#06624d] border-medium rounded-lg p-7">
      <Avatar src="/luizin.jpeg" size="lg" />
      <h1 className="text-xl font-bold text-[#024c3d]">MOC Nº 11/2023</h1>
      <p className="text-medium text-[#666891] lowercase">
        14/06/2023 | A CÂMARA MUNICIPAL DE RERIUTABA – CE, ATRAVÉS DO PRESIDENTE
        NADSON EMANUEL...
      </p>
      <Link href="/proposicoes/moc-11-2023/detalhes">
        <Button
          variant="bordered"
          className="text-[#024c3d] border-[#024c3d] group-hover:bg-[#024c3d] group-hover:text-white"
        >
          Ver mais
          <FiArrowRight />
        </Button>
      </Link>
    </div>
  );
}
