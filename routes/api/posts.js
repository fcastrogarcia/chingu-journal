const router = require("express").Router();
const Post = require("../../models/post");
const validatePosts = require("../../validation/posts");

//fetch all posts from user
router.post("/all", (req, res) => {
  const { user } = req.body;

  if (user) {
    Post.find({ user })
      .then(post => {
        res.status(200).json(post);
      })
      .catch(err => res.status(400).json(err));
  } else {
    res.json({ error: "No user provided" });
  }
});

//add new post
router.post("/new", (req, res) => {
  const { user, title, text } = req.body;
  //post validation
  const { errors, isValid } = validatePosts(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newPost = new Post({ user, title, text });
  newPost
    .save()
    .then(post => res.status(200).json(post))
    .catch(err => res.json(err));
});

//delete post
router.delete("/delete", (req, res) => {
  const { postId } = req.body;

  if (postId) {
    Post.findByIdAndDelete({ _id: postId })
      .then(post => res.status(200).json(post))
      .catch(err => res.status(400).json(err));
  } else {
    res.json({ error: "No post id provided" });
  }
});

//edit post
router.put("/edit", (req, res) => {
  const { postId, title, text } = req.body;

  if (postId) {
    Post.findByIdAndUpdate({ _id: postId }, { title, text })
      .then(post => res.status(200).json(post))
      .catch(err => res.status(400).json(err));
  } else {
    res.json({ error: "No post id provided" });
  }
});

module.exports = router;
