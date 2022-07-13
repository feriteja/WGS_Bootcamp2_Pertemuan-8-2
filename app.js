// const http = require("http");
const fs = require("fs");
const express = require("express");
const app = express();
const port = 3000;

// const goToPage = (page, res) => {
//   fs.readFile(page, (err, data) => {
//     if (err) {
//       res.writeHead(404);
//       res.write("error:page not found");
//     } else {
//       res.write(data);
//     }
//     res.end();
//   });
// };

app.get("/", (req, res) => {
  res.send("hallo");
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./contact.html", { root: __dirname });
});

app.use("/", (req, res) => {
  res.status(404).sendFile("./index.html", { root: __dirname });
});

app.listen(port, () => {
  console.log(`your server listening on port ${port}`);
});

// http
//   .createServer((req, res) => {
//     const url = req.url;

//     res.writeHead(200, { "Content-type": "text/html" });

//     if (url === "/about") {
//       goToPage("./about.html", res);
//     } else if (url === "/contact") {
//       goToPage("./contact.html", res);
//     } else {
//       goToPage("./index.html", res);
//     }
//   })
//   .listen(3000, () => {
//     console.log("server run on port 3000");
//   });
