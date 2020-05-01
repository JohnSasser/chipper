const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors")
const apiRoutes = require('./routes/index')

const PORT = process.env.PORT || 3001;

const app = express();


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static("client"));

app.use(cors())

app.use(apiRoutes)


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/index.html"));
});


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/chipperdb");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
