const express = require("express");
const app = express();
const cors = require("cors");
const videoRoutes = require("./routes/videoRoutes.js");

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/videos", videoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ msg: "Something went wrong on the server" });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
