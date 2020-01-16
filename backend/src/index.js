const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes.js");
const app = express();

mongoose.connect("mongodb://localhost/omnistack10", {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false,
     useCreateIndex: true,
});
mongoose.Promise = global.Promise;

app.use(express.json());
app.use(routes);

app.listen(process.env.port || 3333);
