import React from "react";
import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import axios from "axios";
// Creating a context for managing videos
export const VideosContext = createContext();

export const useGlobalContext = () => {
  // Custom hook to access context
  return useContext(VideosContext);
};

const defaultState = {
  // Initial state of the context
  videos: [],
  oneVideo: {},
  loading: true,
  search: "",
};
// Context provider component
export const VideosContextProvider = ({ children }) => {
  // Initializing state using reducer
  const [state, dispatch] = useReducer(reducer, defaultState);
  //search videos
  function handleSearch(e) {
    e.preventDefault();
    const searchInput = e.target.value.toLowerCase();
    dispatch({ type: "SEARCH_VIDEO", payload: searchInput });
  }
  // Function to fetch all videos
  const fetchVideos = async () => {
    try {
      dispatch({ type: "SENDING_REQUEST" }); // Dispatching action to indicate start of request
      const response = await axios.get(`/api/videos`); // Fetching videos from the API
      const data = await response.data;
      dispatch({ type: "REQUEST_FINISHED" }); // Dispatching action to indicate end of request
      dispatch({ type: "GET_VIDEOS", payload: data }); // Dispatching action to store fetched videos
    } catch (error) {
      if (error.response) {
        console.log(error.response.status);
      } else {
        console.log("Request failed:", error.message);
      }
    }
  };

  // Function to sort videos
  const handleSort = (direction) => {
    dispatch({ type: "SORT_VIDEOS", payload: { direction } }); // Dispatching action to sort videos
  };

  // Function to get one video by ID
  const getOneVideo = async (id) => {
    try {
      dispatch({ type: "SENDING_REQUEST" }); // Dispatching action to indicate start of request
      const response = await axios.get(`/api/videos/${id}`); // Fetching a single video by ID
      const data = await response.data;
      dispatch({ type: "REQUEST_FINISHED" }); // Dispatching action to indicate end of request
      dispatch({ type: "GET_VIDEO", payload: data }); // Dispatching action to store fetched video
    } catch (error) {
      console.log(error.response ? error.response.status : "Unknown error");
    }
  };

  // Function to delete a video by ID
  const handleDelete = async (id) => {
    try {
      dispatch({ type: "SENDING_REQUEST" }); // Dispatching action to indicate start of request
      const response = await axios.delete(`/api/videos/${id}`); // Deleting a video by ID
      const data = await response.data;
      console.log(data);
      dispatch({ type: "REQUEST_FINISHED" }); // Dispatching action to indicate end of request
      dispatch({ type: "DELETE_VIDEO", payload: id }); // Dispatching action to delete video from state

      console.log(`Video with ID ${id} deleted`);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  // Function to post a new video
  const postVideo = async (newVideo) => {
    try {
      dispatch({ type: "SENDING_REQUEST" }); // Dispatching action to indicate start of request
      const response = await axios.post(`/api/videos`, newVideo); // Posting a new video
      const data = await response.data;
      dispatch({ type: "REQUEST_FINISHED" }); // Dispatching action to indicate end of request
      dispatch({ type: "ADD_VIDEO", payload: data }); // Dispatching action to add new video to state
      console.log("Video added successfully:", data);
    } catch (error) {
      console.log("Error adding video:", error);
    }
  };

  return (
    <VideosContext.Provider // Providing the context value to children components
      value={{
        fetchVideos,
        getOneVideo,
        handleDelete,
        handleSearch,
        handleSort,
        postVideo,
        dispatch, // Exposing the dispatch function directly
        ...state, // Exposing the state variables directly
      }}
    >
      {children} {/* Rendering children components */}
    </VideosContext.Provider>
  );
};
