import React from "react";
import Header from "../components/Header";
import AllVideos from "../components/AllVideos";

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <AllVideos />
      </div>
    </>
  );
}

export default Home;
