import { Spin } from "antd";
import { useEffect, useState } from "react";

const VimeoPlayer = ({ videoId }) => {
  const [videoUrl, setVideoUrl] = useState("");

  useEffect(() => {
    const fetchVimeoUrl = async () => {
      const response = await fetch(`https://api.vimeo.com/videos/${videoId}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_VIMEO_TOKEN}`,
        },
      });
      const data = await response.json();

      setVideoUrl(data.player_embed_url + "&title=0&byline=0&portrait=0");
    };

    fetchVimeoUrl();
  }, [videoId]);

  if (!videoUrl)
    return (
      <div className="flex justify-center h-[10rem] items-center">
        <Spin size="large" />
      </div>
    );

  return (
    <iframe
      src={videoUrl}
      frameBorder="0"
      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
      className="w-full aspect-[7/4] rounded-[16px]"
      title="My Video Upload"
    ></iframe>
  );
};

export default VimeoPlayer;
