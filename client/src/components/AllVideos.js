import React, { useEffect } from "react";
import Video from "./Video";
import { useGlobalContext } from "../context/VideoContext";

function AllVideos() {
  const { videos, loading, fetchVideos, handleDelete } = useGlobalContext();

  useEffect(() => {
    fetchVideos?.();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="videos-container">
      {videos.map((video) => (
        <Video key={video.id} video={video} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

export default AllVideos;
