
import Link from "next/link";
import { News } from "./News"
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import { FiChevronRight } from "react-icons/fi";

export function Warnings() {
  return(
    <div className="w-full bg-[#daf2e5] sm:px-10 sm:py-10 py-6 px-2">
      <h1 className="text-3xl text-[#024c3d] pb-10 font-semibold">Notícias</h1>
      {/* inicio da div de noticias */}
      <div className="w-full flex items-center gap-12 sm:flex-row flex-col ">
        <News />
        <News />
        <News />
        <News />
      </div>

      <div className="w-full flex items-center justify-center py-4">
        <Link href="/noticias" className="text-[#024c3d] text-lg font-semibold flex items-center gap-3">
          Ver todas as Notícias
          <FiChevronRight />
        </Link>
      </div>
      
    </div>
  )
}