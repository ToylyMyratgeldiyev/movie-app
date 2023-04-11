const mongoose = require("mongoose");
const schema = mongoose.Schema;

const movieSchema = new schema({
  poster: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  country: {
    type: [String],
    required: true,
  },
  genres: {
    type: [String],
    required: true,
  },
  slogan: {
    type: String,
    required: true,
  },
  director: {
    type: [String],
    required: true,
  },
  script: {
    type: [String],
    required: true,
  },
  producer: {
    type: [String],
    required: true,
  },
  operator: {
    type: [String],
    required: true,
  },
  composer: {
    type: [String],
    required: true,
  },
  artist: {
    type: [String],
    required: true,
  },
  mounting: {
    type: [String],
    required: true,
  },
  premiereRus: {
    type: String,
    required: true,
  },
  premiereWorld: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
  time: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
