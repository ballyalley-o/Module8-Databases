const User = require("../models/User");

//Get All blogs
//Route GET /db/v1/blogs
exports.getBlogs = async (req, res, next) => {
  try {
    const blogs = await User.find();

    res
      .status(200)
      .json({ success: true, count: blogs.length, data: blogs });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//Get single blog
//Route GET /db/v1/blog/:id
exports.getBlog = async (req, res, next) => {
  try {
    const blogs = await User.findById(req.params.id);

    if (!blogs) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: blogs });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//Create NEW blog
//Route POST /db/v1/blog
exports.createBlog = async (req, res, next) => {
  try {
    const blogs = await User.create(req.body);

    res.status(201).json({
      success: true,
      data: blogs,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//UPDATE blog
//Route PUT /db/v1/blog/:id
exports.updateBlog = async (req, res, next) => {
  try {
    const blogs = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!blogs) {
      res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: blogs });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

//DELETE blog
//Route DELETE /db/v1/blog/:id
exports.deleteBlog= async (req, res, next) => {
  try {
    const blogs = await User.findByIdAndDelete(req.params.id);

    if (!blogs) {
      res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};
