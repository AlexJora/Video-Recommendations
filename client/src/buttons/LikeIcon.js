import React from "react";
import { AiFillLike } from "react-icons/ai";

function LikeIcon({ handleLikeClick }) {
  return (
    <button
      aria-label="like button"
      onClick={() => handleLikeClick()}
      style={{ backgroundColor: "transparent", color: "white", border: "none" }}
    >
      <AiFillLike />
    </button>
  );
}

export default LikeIcon;
