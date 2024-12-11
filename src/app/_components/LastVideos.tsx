import { GridContent } from "./GridContent";

export default function LastVideos() {
  const videos = [
    {
      url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcamaradereriutaba%2Fvideos%2F853298066731193%2F&show_text=false&width=560&t=0",
      title: "YouTube video player",
    },
    {
      url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcamaradereriutaba%2Fvideos%2F474537161595007%2F&show_text=false&width=560&t=0",
      title: "YouTube video player",
    },
    {
      url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcamaradereriutaba%2Fvideos%2F1057328635846069%2F&show_text=false&width=560&t=0",
      title: "YouTube video player",
    },
    {
      url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcamaradereriutaba%2Fvideos%2F944499574364684%2F&show_text=false&width=560&t=0",
      title: "YouTube video player",
    },
    {
      url: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fcamaradereriutaba%2Fvideos%2F1233872247755374%2F&show_text=false&width=560&t=0",
      title: "YouTube video player",
    },
  ];

  return (
    <GridContent>
      <h1 className="text-3xl text-[#024c3d] py-4 font-semibold">
        Últimos Vídeos
      </h1>
      <div className="w-full h-80 grid grid-cols-2 gap-4 p-0">
        <iframe
          className="w-full h-full "
          src={videos[0].url}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        />
        <div className="grid grid-cols-2 gap-4">
          {videos.slice(1).map((video, index) => {
            return (
              <iframe
                key={index}
                className="w-full h-full "
                src={video.url}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
            );
          })}
        </div>
      </div>
    </GridContent>
  );
}
