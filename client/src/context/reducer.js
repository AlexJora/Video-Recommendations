export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return {
        ...state,
        videos: action.payload,
      };

    case "SORT_VIDEOS":
      const direction = action.payload.direction;
      const sortedVideos = [...state.videos].sort((a, b) => {
        if (a.rating < b.rating) return direction === "ascending" ? -1 : 1;
        if (a.rating > b.rating) return direction === "ascending" ? 1 : -1;
        return 0;
      });
      return {
        ...state,
        videos: sortedVideos,
      };

    case "GET_VIDEO":
      return {
        ...state,
        oneVideo: action.payload,
      };

    case "SENDING_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "REQUEST_FINISHED":
      return {
        ...state,
        loading: false,
      };

    case "DELETE_VIDEO":
      return {
        ...state,
        videos: state.videos.filter((oneVid) => oneVid.id !== action.payload),
      };

    case "ADD_VIDEO":
      return {
        ...state,
        videos: [...state.videos, action.payload],
      };

    case "SEARCH_VIDEO":
      return {
        ...state,
        videos: state.videos.filter((video) =>
          video.title.toLowerCase().includes(action.payload)
        ),
      };
    default:
      return state;
  }
};
