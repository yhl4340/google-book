
// const express = require("express");
// const db = require('../../models');
// const axios = require("axios");
// const path = require("path");
// const router = express.Router();
// // const booksController = require('../../controllers/booksController');

// //  module.exports = function (router){

// router.post("/search", (req, res) => {
//   let title = req.body.title;

//   axios
//     .get("https://www.googleapis.com/books/v1/volumes?q=", {
//       params: req.query
//     })
//     .then(({ data: { results } }) =>
//       res.json(
//         results.volumeInfo.title,
//         results.volumeInfo.authors,
//         results.volumeInfo.image.thumbnail
//       )
//     )
//     .catch(err => res.status(422).json(err));
//   console.log("q", req.query);
// });

// // get all saved
// router.get("/all", function(req, res) {
//   console.log(req);

//   db.Book.findAll()
//     .then(function(data) {
//       res.json(data);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// });

// // sav a book
// router.post("/book", function(req, res) {
//   db.Book.create(req.body)
//     .then(function(dbSavedBook) {
//       console.log("saved", dbSavedBook);
//       res.json(dbSavedBook);
//     })
//     .catch(function(err) {
//       res.json(err);
//     });
// });

// // delete
// router.delete("/delbook:id", function(req, res) {
//   db.Book.findById(req.params.id).then(function(res) {
//     res.json(res, "res");
//   });
// });

// module.exports = router;

const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;
