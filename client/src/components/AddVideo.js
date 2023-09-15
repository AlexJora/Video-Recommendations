import React from "react";
import { useState } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/VideoContext";
import { useRef } from "react";
const apiUrl = process.env.REACT_APP_API_URL;
function AddVideo() {
  const [showForm, setShowForm] = useState(false);
  const { videos, dispatch } = useGlobalContext();
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [titleErr, setTitleErr] = useState({});
  const [urlErr, setUrlErr] = useState({});

  const urlValidation = (url) => {
    const regEx = /^(https?:\/\/)?[\w-]+(\.[\w-]+)+[/#?]?.*$/i;
    return regEx.test(url);
  };

  const formValidation = () => {
    const titleErr = {};
    const urlErr = {};
    let isValid = true;
    urlValidation();

    if (!title) {
      titleErr.titleMissing = "add a title";
      isValid = false;
    }

    if (!urlValidation(url)) {
      urlErr.urlWrong = "url not valid";
      isValid = false;
    }

    setUrlErr(urlErr);
    setTitleErr(titleErr);
    return isValid;
  };

  const handleHideTitleErr = () => {
    setTitleErr("");
  };
  const handleHideUrlErr = () => {
    setUrlErr("");
  };
  const titleRef = useRef(null);
  const urlRef = useRef(null);

  const handleCancel = () => {
    titleRef.current.value = "";
    urlRef.current.value = "";
  };

  //post one video
  const handleAdd = async (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      const newVideo = {
        title,
        url,
        rating: 10,
        id: videos.length + 1,
      };
      try {
        dispatch({ type: "SENDING_REQUEST" });
        const response = await axios.post(`${apiUrl}/api/videos`, newVideo);
        console.log("new video added:", newVideo);
        dispatch({ type: "ADD_VIDEO", payload: newVideo });
        const data = await response.data;
        console.log(data);
        dispatch({ type: "REQUEST_FINISHED" });
        setTitle("");
        setUrl("");
        setTitleErr({});
        setUrlErr({});
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="form-container">
      <button
        variant="outlined"
        color="secondary"
        size="large"
        onClick={() => setShowForm(!showForm)}
      >
        add video
      </button>
      <div>
        {showForm && (
          <form className="form-group" id="form">
            <div>
              <input
                className="form-control"
                ref={titleRef}
                type="text"
                id="title"
                value={title}
                placeholder="Enter title"
                onChange={(event) => setTitle(event.target.value)}
              />
              <div>
                {Object.keys(titleErr).map((key) => {
                  return (
                    <div className="title-error">
                      {titleErr[key]}
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        onClick={handleHideTitleErr}
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div>
              <input
                className="form-control"
                ref={urlRef}
                type="text"
                id="url"
                value={url}
                placeholder="Enter url"
                onChange={(event) => setUrl(event.target.value)}
              />
            </div>
            <div>
              {" "}
              {Object.keys(urlErr).map((key) => {
                return (
                  <div className="url-error">
                    {urlErr[key]}
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                      onClick={handleHideUrlErr}
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="buttons">
              <button
                variant="contained"
                aria-label="cancel added video"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <span> </span>
              <button
                variant="contained"
                type="submit"
                autoComplete="on"
                aria-label="add new video"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default AddVideo;
