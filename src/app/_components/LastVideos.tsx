import { GridContent } from "./GridContent";

export default function LastVideos() {
  return (
    <GridContent>
      <h1 className="text-3xl text-[#024c3d] py-4 font-semibold">
        Últimos Vídeos
      </h1>
      <div className="w-full flex items-center justify-center gap-12 sm:flex-row flex-col py-5 ">
        <iframe
          className="w-full h-80 sm:w-[720px] sm:h-[420px]"
          src="https://www.youtube.com/embed/sYtMwPHtlyY?si=qtdZ9gi3z-Kd4SEO"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <div className="grid grid-cols-2 gap-4">
          <iframe
            className="w-full h-40 sm:w-[240px] sm:h-[200px]"
            src="https://www.youtube.com/embed/sYtMwPHtlyY?si=qtdZ9gi3z-Kd4SEO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <iframe
            className="w-full h-40 sm:w-[240px] sm:h-[200px]"
            src="https://www.youtube.com/embed/sYtMwPHtlyY?si=qtdZ9gi3z-Kd4SEO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <iframe
            className="w-full h-40 sm:w-[240px] sm:h-[200px]"
            src="https://www.youtube.com/embed/sYtMwPHtlyY?si=qtdZ9gi3z-Kd4SEO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
          <iframe
            className="w-full h-40 sm:w-[240px] sm:h-[200px]"
            src="https://www.youtube.com/embed/sYtMwPHtlyY?si=qtdZ9gi3z-Kd4SEO"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </div>
    </GridContent>
  );
}
