import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useGlobalContext } from "../context/VideoContext";

function ViewOneVideo({ setVideos }) {
  const { getOneVideo, oneVideo } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    console.log("useEffect is running");
    if (id) {
      console.log("Calling getOneVideo with id:", id);
      getOneVideo(id);
    }
  }, [id, getOneVideo]);
  console.log("Rendering ViewOneVideo, oneVideo:", oneVideo);
  return (
    <div className="view-video">
      <article>
        {oneVideo.map((elem, key) => {
          console.log("Rendering video element with id:", elem.id);
          return (
            <div key={elem.id}>
              <p style={{ color: "#093e43" }}>{elem.title}</p>
              <div style={{ height: "25rem" }}>
                <ReactPlayer url={elem.url} style={{ margin: "auto" }} />
              </div>
            </div>
          );
        })}
      </article>
      <Link to="/">Go back</Link>
    </div>
  );
}
export default ViewOneVideo;
