router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    post.likes += 1;

    await post.save();

    res.json(post.likes);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});