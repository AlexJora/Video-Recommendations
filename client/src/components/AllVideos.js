import React, { useEffect, useState } from "react";
import Video from "./Video";
import SortByRating from "../buttons/SortByRating";
import { useGlobalContext } from "../context/VideoContext";

function AllVideos() {
  const { videos, loading, fetchVideos, handleDelete } = useGlobalContext();

  useEffect(() => {
    if (fetchVideos) {
      fetchVideos();
    }
  }, []);

  const [direction, setDirection] = useState("ascending");

  const sortVideos = (videos, sortBy, direction) => {
    return [...videos].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return direction === "ascending" ? -1 : 1;
      if (a[sortBy] > b[sortBy]) return direction === "ascending" ? 1 : -1;
      return 0;
    });
  };

  const handleSort = () => {
    setDirection((prevDirection) =>
      prevDirection === "ascending" ? "descending" : "ascending"
    );
  };

  const sortedVideos = sortVideos(videos, "rating", direction);

  return (
    <>
      <SortByRating handleSort={handleSort} />
      {!loading ? (
        <section className="videos-container">
          {sortedVideos.map((video, key) => (
            <Video video={video} key={video.id} handleDelete={handleDelete} />
          ))}
        </section>
      ) : (
        <div>LOADING...</div>
      )}
    </>
  );
}

export default AllVideos;
