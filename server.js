// const express = require("express");
// const path = require("path");
// const routes = require('./routes');
// const app = express();
// const PORT = process.env.PORT || 3001;
// const booksApi = require("./routes/api/books");
// const mongoose = require("mongoose");

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static("public"));
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// app.use(booksApi);

// // mongo
// const mongoURL =
//   process.env.MONGODB_URI || "mongodb://localhost/googlebooklist";
// mongoose
//   .connect(mongoURL, { useNewUrlParser: true })
//   .then(() => {
//     console.log("connected to mongodb");
//   })
//   .catch(err => {
//     console.log("error connecting");
//   });

// app.listen(PORT, function() {
//   console.log(`server listening ${PORT}`);
// });

const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooklist");

// var Db = require('./models');
// app.get('/',function(req,res){
//   Db.Book.find({}).then( function(dbBook){
//    console.log(dbBook);
//   })    
// });

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
