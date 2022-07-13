const http = require("http");
const fs = require("fs");

const goToPage = (page, res) => {
  fs.readFile(page, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("error:page not found");
    } else {
      res.write(data);
    }
    res.end();
  });
};

http
  .createServer((req, res) => {
    const url = req.url;

    res.writeHead(200, { "Content-type": "text/html" });

    if (url === "/about") {
      goToPage("./about.html", res);
    } else if (url === "/contact") {
      goToPage("./contact.html", res);
    } else {
      goToPage("./index.html", res);
    }
  })
  .listen(3000, () => {
    console.log("server run on port 3000");
  });
