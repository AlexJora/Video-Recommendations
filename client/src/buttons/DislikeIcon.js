import React from "react";
import { AiFillDislike } from "react-icons/ai";

function DislikeIcon({ handleDislikeClick }) {
  return (
    <button
      aria-label="dislike button"
      onClick={() => handleDislikeClick()}
      style={{ backgroundColor: "transparent", color: "white", border: "none" }}
    >
      <AiFillDislike />
    </button>
  );
}
export default DislikeIcon;
