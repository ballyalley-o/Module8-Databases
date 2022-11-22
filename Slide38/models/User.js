const mongoose = require('mongoose')

const BloggerSchema = new mongoose.Schema({
  user_name: {
    type: String,
    unique: true,
    required: [true, "Please create a username"],
    maxlength: [20, "Username can not be more than 20 characters"],
  },
  first_name: {
    type: String,
    required: [true, "Please enter a name"],
    maxlength: [20, "Name can not be more than 20 characters"],
  },
  slug: String,
  last_name: {
    type: String,
    required: [true, "Please enter a name"],
    maxlength: [20, "Name can not be more than 20 characters"],
  },
  date_of_birth: Date,
  address: {
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  phone: {
    type: String,
    unique: true,
    maxlength: [20, "Phone number can not be longer than 20 characters"],
  },
  email: {
    type: String,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  photo: {
    type: String,
    default: "no-photo.jpg",
  },
  like: {
    type: Boolean,
    default: true,
  },
  comment: {
    type: Boolean,
    default: true,
  },

  joinedIn: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model("User", BloggerSchema )


