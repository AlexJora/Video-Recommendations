import React from "react";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { useGlobalContext } from "../context/VideoContext";

function ViewOneVideo(setVideos) {
  const { getOneVideo, oneVideo } = useGlobalContext();
  const { id } = useParams();

  useEffect(() => {
    getOneVideo(id);
  }, [id, getOneVideo]);

  return (
    <div className="view-video">
      <article>
        {oneVideo.map((elem, key) => {
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
