import React, { useState } from "react";
import { FaSort } from "react-icons/fa";
import { useGlobalContext } from "../context/VideoContext";

function SortByRating() {
  const { handleSort } = useGlobalContext();
  const [direction, setDirection] = useState("ascending");

  const handleClick = () => {
    handleSort(direction);
    setDirection((prevDirection) =>
      prevDirection === "ascending" ? "descending" : "ascending"
    );
  };

  return (
    <div className="sort ps-5 ">
      <button
        type="button"
        className="btn btn-light btn-md"
        aria-label="sort by rating"
        onClick={handleClick}
      >
        Sort by rating 🔼🔽
      </button>
      {/* <div>
        <FaSort
          title="Sort by rating"
          style={{ color: "#fff", fontSize: "30px" }}
          onClick={handleClick}
          className="border border-light rounded"
        />
      </div> */}
    </div>
  );
}

export default SortByRating;
