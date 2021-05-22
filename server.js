const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const routes = require("./routes")


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reelJunkiesDB",
 {
  useUnifiedTopology: true,
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useFindAndModify: false 
}
);

app.use(routes);

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/public/index.html"));
//   //                                          ^ /build/
// });


// app.use(require("./routes/index.js"));

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});