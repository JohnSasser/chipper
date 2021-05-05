require("dotenv").config();
const createError = require('http-errors');
let express = require("express");
const mongoose = require("mongoose");
const path = require("path");
// const cors = require("cors");
const logger = require('morgan');
// const flash = require('express-flash')
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const apiRoutes = require("./routes/apiRoutes");
const petRoutes = require("./routes/petApi");
const adminRoutes = require("./routes/adminRoutes");
const awsRoutes = require("./routes/awsRoutes");
const postRoutes = require("./routes/postRoutes");

const PORT = process.env.PORT || 3001;

const app = express();

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // console.log('using prod setting static to client/build');
} else {
  // console.log('using dev setting static to public');
  app.use(express.static(path.join(__dirname, 'public')));
}

// middleware for bodyParser;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(cors());

app.use(apiRoutes);
app.use(petRoutes);
app.use(adminRoutes);
app.use(awsRoutes);
app.use(postRoutes);

// Define all API routes before this runs
// Send every request to the React app
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI ||
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@amc1.9fj2m.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.listen(PORT, function () {
  // console.log(`🌎 ==> API server now on port ${PORT}!`);
});
