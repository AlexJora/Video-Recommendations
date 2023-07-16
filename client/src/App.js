import React from "react";
import AddAndSearch from "./components/AddAndSearch";
import AllVideos from "./components/AllVideos";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/videos`)
      .then((res) => {
        const videos = res.data;
        console.log(videos);
        setVideos(videos);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const newData = videos.filter((elem) => elem.id !== id);
    setVideos(newData);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Recommendation</h1>
      </header>
      <AddAndSearch videos={videos} setVideos={setVideos} />
      <AllVideos videos={videos} handleDelete={handleDelete} />
    </div>
  );
}
export default App;
