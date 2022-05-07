const express = require("express");
const serveStatic = require("serve-static");

const port = process.env.PORT || 8080;
const hostname = "127.0.0.1";

const app = express();
app.use(serveStatic(__dirname + "/../dist"));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
