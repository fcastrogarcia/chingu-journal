const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const keys = require("./config/keys");

//routers
const users = require("./routes/api/users");
const posts = require("./routes/api/posts");
//authorization middleware
const authorization = require("./routes/api/authorization");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

//db config
const db = keys.MONGO_URI;
//db connection
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("db connected succesfully"))
  .catch(err => console.log(err));

//routes
app.use("/api/users", users);
app.use("/api/posts", authorization, posts);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname + "client/build/index.html"));
  });
}

const PORT = keys.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
