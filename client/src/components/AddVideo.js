import React from "react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

function AddVideo({ videos, setVideos }) {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleAdd = async (e) => {
    const id = videos.length + 1;
    const rating = 0;
    const newVideo = { title, url, id, rating };
    try {
      const response = await axios.post(`/api/videos`, newVideo);
      console.log(response);
      setTitle("");
      setUrl("");
      console.log("new video added:", newVideo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form className="form">
        <a href="#">Add video</a>
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="input-title"
            // aria-labelledby="title"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label for="url">URL</label>
          <input
            className="input"
            // aria-labelledby="url"
            type="text"
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="buttons">
          <button
            className="cancel"
            type="cancel"
            aria-label="cancel added video"
            onClick={() => setVideos(videos)}
          >
            Cancel
          </button>
          <button
            className="add"
            type="submit"
            autoComplete="on"
            aria-label="add new video"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddVideo;
