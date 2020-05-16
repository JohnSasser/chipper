const router = require("express").Router();
const db = require("../models");

router.get("/api/post", function (req, res) {
  db.Post.find({})
    .then((posts) => {
      console.log(posts)
      res.status(200).json(posts);
    })
    .catch((err) => console.log(err));
});

router.post("/api/create", function (req, res) {
  let newPost = {
    title:req.body.title,
    body : req.body.body
  };
  console.log("reached/api/create")

  db.Post.insertMany(newPost, (err, result) => {
    console.log("reached inside model");
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});


module.exports = router;
