import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import { useGlobalContext } from "../context/VideoContext";

function ViewOneVideo() {
  const { id } = useParams();
  const { getOneVideo, oneVideo } = useGlobalContext();
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!hasFetched && id && (!oneVideo || oneVideo.id !== id)) {
      getOneVideo(id);
      setHasFetched(true);
    }
  }, [id, getOneVideo, oneVideo]);
  return (
    <div className="view-video">
      <article>
        {oneVideo && (
          <div>
            <p className="pb-4 text-light fs-5">{oneVideo.title}</p>
            <div style={{ height: "25rem" }}>
              <ReactPlayer url={oneVideo.url} style={{ margin: "auto" }} />
            </div>
          </div>
        )}
      </article>
      <Link to="/" className="btn btn-secondary">
        Go back
      </Link>
    </div>
  );
}
export default ViewOneVideo;
