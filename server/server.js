const express = require("express");
const app = express();
const cors = require("cors");
const Pool = require("pg").Pool;
app.use(cors());
app.use(express.json());

const pool = new Pool({
  user: "alexjora",
  password: "UAMtEmwuCqY3fCUl6VCD8Ez5XECeY6tM",
  host: "dpg-ck04eg7hdsdc73ccqak0-a.oregon-postgres.render.com",
  port: 5432,
  database: "videos_uhgx",
  ssl: {
    rejectUnauthorized: false,
  },
});
app.get("/api/test-db-connection", (req, res) => {
  pool
    .query("SELECT 1")
    .then(() => {
      console.log("Database connection successful!");
      res.status(200).json({ message: "Database connection successful!" });
    })
    .catch((err) => {
      console.error("Database connection failed:", err.message);
      res.status(500).json({ message: "Database connection failed!" });
    });
});
//get all videos

app.get("/api/videos", (req, res) => {
  pool
    .query("SELECT * FROM videos")
    .then((allVideos) => res.json(allVideos.rows))
    .catch((err) => {
      console.err(err.message);
      res.status(500).json(err);
    });
});

//get one video by id

app.get("/api/videos/:videoId", (req, res) => {
  const videoId = parseInt(req.params.videoId);
  pool
    .query("SELECT * FROM videos WHERE id = $1", [videoId])
    .then((video) => res.json(video.rows))
    .catch((err) => {
      console.log(err.message);
      res.status(500).json(err);
    });
});

//post a video

app.post("/api/videos", (req, res) => {
  const newTitle = req.body.title;
  const newUrl = req.body.url;
  const newRating = req.body.rating;

  if (!Number.isInteger(newRating) || newRating < 0) {
    return res.status(400).send("Rating should be a positive integer.");
  }

  pool
    .query("SELECT * FROM videos WHERE title=$1", [newTitle])
    .then((result) => {
      if (result.rows.length > 0) {
        return res
          .status(400)
          .send("A video with the same title already exists!");
      } else {
        const query =
          "INSERT INTO videos (title, url, rating) VALUES ($1, $2, $3)";
        pool
          .query(query, [newTitle, newUrl, newRating])
          .then(() => res.send("Video created!"))
          .catch((error) => {
            console.error(error);
            res.status(500).json(error);
          });
      }
    });
});

//delete a video by id

app.delete("/api/videos/:videoId", (req, res) => {
  const { videoId } = req.params;
  pool
    .query("DELETE FROM videos WHERE id = $1", [videoId])
    .then(() => res.send(`Video with id ${videoId} deleted!`))
    .catch((err) => {
      console.log(err.message);
      res.status(500).json(err);
    });
});
// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: "Something went wrong on the server" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
