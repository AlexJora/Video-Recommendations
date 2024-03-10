import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
function LikeIcon({ handleLikeClick }) {
  return (
    <button
      aria-label="like button"
      onClick={() => handleLikeClick()}
      style={{ backgroundColor: "transparent", color: "white", border: "none" }}
    >
      <FontAwesomeIcon icon={faThumbsUp} />
    </button>
  );
}

export default LikeIcon;
