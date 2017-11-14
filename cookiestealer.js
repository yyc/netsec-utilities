var express = require("express");
var app = express();

var port = process.env.PORT || 4444;

app.get("*", function(req, res, next) {
  console.log(req.headers);
  res.end("lel");
});

app.listen(4444, function() {
  console.log("listening on port 4444");
});
