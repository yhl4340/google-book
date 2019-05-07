const express = require("express");
const path = require("path");
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
// const bookApi = require("./routes/api/bookApi");
// mid ware

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// mongo
const mongoose = require("mongoose");
const mongoURL =
  process.env.MONGODB_URI || "mongodb://localhost/googlebooklist";
mongoose
  .connect(mongoURL, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(err => {
    console.log("error connecting");
  });

app.use(routes);

// app.get("/api/test", (req, res) => {
//     res.send("ok")
// })


app.listen(PORT, function() {
  console.log(`server listening ${PORT}`);
});
