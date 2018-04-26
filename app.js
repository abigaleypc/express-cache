const express = require("express");
const app = express();
var serveStatic = require("serve-static");

app.use(
  "/maxage",
  express.static("public/maxage", {
    maxAge: "1d",
    setHeaders: setCustomCacheControl
  })
);

// app.get("/expires/img", function(req, res, next) {
//   console.log("------------------------------------");
//   console.log(req.url);
//   console.log("------------------------------------");
//   if (req.url.indexOf("/images/") === 0) {
//     res.setHeader("Expires", new Date(Date.now() + 2592000000).toUTCString());
//   }
//   // next();
// });
app.use("/", express.static("public", {}));


app.listen(12306, () => console.log("Example app listening on port 12306!"));

function setCustomCacheControl(res, path) {
  if (serveStatic.mime.lookup(path) === "text/html") {
    // Custom Cache-Control for HTML files
    res.setHeader("Cache-Control", "public, max-age=0");
  }
}
