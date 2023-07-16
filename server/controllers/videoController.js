const videos = require("../exampleresponse.json");

const idFilter = (req) => (video) => video.id === parseInt(req.params.id);

const getVideos = (req, res) => {
  res.send(videos);
};

const getVideo = (req, res) => {
  const found = videos.some(idFilter(req));

  if (found) {
    res.json(videos.filter(idFilter(req)));
  } else {
    res.status(404).json({ msg: `No video with the id of ${req.params.id}` });
  }
};

const deleteVideo = (req, res) => {
  const found = videos.some(idFilter(req));

  if (found) {
    const remainingVideos = videos.filter((video) => !idFilter(req)(video));
    res.json({ msg: "Video deleted", videos: remainingVideos });
  } else {
    res.status(404).json({ msg: `No video with the id of ${req.params.id}` });
  }
};

const postVideo = (req, res) => {
  const { title, url, rating } = req.body;

  if (!title || !url) {
    return res.status(400).json({ msg: "Please include a title and url" });
  }

  const newVideo = {
    id: videos.length,
    title,
    url,
    rating,
  };

  videos.push(newVideo);
  res.status(201).json({ msg: "Video added successfully", video: newVideo });
};

module.exports = {
  postVideo,
  getVideo,
  getVideos,
  deleteVideo,
};
