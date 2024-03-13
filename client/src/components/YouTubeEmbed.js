import React from "react";

function YouTubeEmbed({ video }) {
  if (!video || !video.url) {
    return null;
  }

  const url = video.url.replace("watch?v=", "embed/");

  return (
    <iframe
      title={video.title}
      height={"300"}
      src={url}
      alt={`video ${video.title}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
    />
  );
}
export default YouTubeEmbed;
