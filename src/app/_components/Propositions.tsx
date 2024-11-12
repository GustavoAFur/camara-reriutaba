import Link from "next/link";
import { Proposition } from "./Proposition";
import { FiChevronRight, FiChevronsRight } from "react-icons/fi";
export function Propositions() {
  return (
    <div className="w-full h-auto sm:px-10 sm:py-10 py-6 px-2">
      <h1 className="text-3xl text-[#024c3d] py-4 font-semibold">Últimas Proposições</h1>
      <div className="w-full flex items-center justify-center gap-12 sm:flex-row flex-col py-5 ">
        <Proposition/>
        <Proposition/>
        <Proposition/>
      </div>
      <div className="w-full flex items-center justify-center py-4">
        <Link href={"/proposicoes"} className="text-[#024c3d] text-lg font-semibold flex items-center gap-3">
          Ver todas as Proposições
          <FiChevronRight />
        </Link>
      </div>
    </div>
  )
}