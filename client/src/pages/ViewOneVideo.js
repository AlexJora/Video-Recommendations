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
  }, [id]);

  return (
    <div className="view-video">
      <br />
      <article>
        {oneVideo.map((elem, key) => {
          return (
            <div key={elem.id}>
              <p>{elem.title}</p>
              <div style={{ height: "30rem" }}>
                <ReactPlayer
                  url={elem.url}
                  style={{ marginLeft: "10rem", marginTop: "4rem" }}
                />
              </div>
            </div>
          );
        })}
      </article>
      <Link to="/" className="btn btn-primary">
        back home
      </Link>
    </div>
  );
}
export default ViewOneVideo;
