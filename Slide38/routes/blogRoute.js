const express = require("express");

const {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/bloggers");

const router = express.Router();

router.route("/").get(getBlogs).post(createBlog);

router
  .route("/:id")
  .get(getBlog)
  .put(updateBlog)
  .delete(deleteBlog)

module.exports = router
