import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
function DislikeIcon({ handleDislikeClick }) {
  return (
    <button
      aria-label="dislike button"
      onClick={() => handleDislikeClick()}
      style={{ backgroundColor: "transparent", color: "white", border: "none" }}
    >
      <FontAwesomeIcon icon={faThumbsDown} />
    </button>
  );
}
export default DislikeIcon;
