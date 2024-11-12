import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/react";
import Link from "next/link";

const DividerY = () => {
  return <div className="h-full w-[2px] bg-[#06624d]"></div>;
};
export function UserAction() {
  return (
    <div className="flex sm:flex-row flex-col border-[#06624d] border-2 rounded-tl-lg rounded-tr-lg">
      <Link href="/ouvidoria" className="cursor-pointer sm:h-36 h-12 w-64 bg-[#06624d] rounded-tl-md p-5 flex justify-start items-center">
        <div className="flex flex-col w-36 h-16 p-0">
          <Image
            alt="Ouvidoria"
            src="/ouvidoria.png"
            width={40}
            height={40}
            className="p-0 m-0"
          />
          <span className="text-white font-normal text-base">Ouvidoria</span>
        </div>
      </Link>
      <DividerY />
      <Link
        href="/esic"
        className="cursor-pointer sm:h-36 h-12 w-64 p-5 flex justify-start items-center"
      >
        <div className="flex flex-col w-36 h-16 p-0">
          <Image
            alt="Acesso a informação"
            src="/esic.png"
            width={40}
            height={40}
            className="p-0 m-0"
          />
          <span className="text-white font-normal text-base">E-sic</span>
        </div>
      </Link>
      <DividerY />
      <div className="cursor-pointer sm:h-36 h-12 w-64 p-5 flex justify-start items-center">
        <div className="flex flex-col w-36 h-16 p-0">
          <Image
            alt="Acesso a informação"
            src="/infos.png"
            width={35}
            height={35}
            className="cursor-pointer p-0 m-0"
          />
          <span className="text-white font-normal text-base">
            Acesso a informação
          </span>
        </div>
      </div>
      <DividerY />
      <div className=" cursor-pointer sm:h-36 h-12 w-64 p-5 flex justify-start items-center">
        <div className="flex flex-col w-36 h-16 p-0">
          <Image
            alt="Fale com parlamentar"
            src="/parlamentar.png"
            width={40}
            height={40}
            className="cursor-pointer p-0 m-0"
          />
          <span className="text-white font-normal text-base">
            Fale com parlamentar
          </span>
        </div>
      </div>
    </div>
  );
}
