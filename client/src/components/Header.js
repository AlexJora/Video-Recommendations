import React from "react";
import SearchVideo from "./SearchVideo";
import AddVideo from "./AddVideo";
import SortByRating from "../buttons/SortByRating";

function Header() {
  return (
    <header>
      <h1 className="py-5 text-light">Video Recommendations</h1>
      <div className="d-flex justify-content-between pt-5">
        <SortByRating />
        <AddVideo />
        <SearchVideo />
      </div>
    </header>
  );
}

export default Header;
