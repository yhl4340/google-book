// const db = require("../models");

// module.exports = {
//   findAll: function(req, res) {
//     db.Book.find(req.query)
//       .sort({ date: -1 })
//       .then(dbBook => res.json(dbBook))
//       .catch(err => res.status(422).json(err));
//     console.log("db", dbBook);
//   },
//   // for the saved option
//   update: function(req, res) {
//     db.Book.findOneAndUpdate({ _id: req.params.id }, req.body).then(dbModel =>
//       res.json(dbModel)
//     );
//     console.log("dbmodel", dbModel).catch(err => res.status(422).json(err));
//   },
//   delete: function(req, res) {
//     db.Book.findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };


// 
const db = require("../models");

// methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Book
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
