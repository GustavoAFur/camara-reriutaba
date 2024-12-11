import { Link2, LucideIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  iconUrl: string;
  url: string;
  info: string;
}

export function LinksTransparency({ title, iconUrl, url, info }: Props) {
  return (
    <Link
      replace={true}
      href={url}
      className="cursor-pointer relative w-full h-[120px] rounded-lg overflow-hidden p-5 flex flex-col justify-between"
    >
      <Image
        src={"/links-bg.png"}
        alt="Banner Receitas"
        fill
        className="absolute object-cover -z-10"
      />
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-2 py-1 px-3 rounded-full bg-white">
          {iconUrl !== "" && (
            <Image src={`/${iconUrl}`} alt={title} width={16} height={16} />
          )}
          <h1 className="uppercase text-xs font-medium">{title}</h1>
        </div>
        <Link2 size={22} className="text-white -rotate-45 font-bold" />
      </div>

      <p className="text-white text-xs font-normal">{info}</p>
    </Link>
  );
}
