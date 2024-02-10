const http = require("node:http");
const fs = require("node:fs");

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event

server.on("request", (request, res) => {
  if (request.url === "/") {
    fs.readFile("page/home.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (request.url === "/about") {
    fs.readFile("page/about.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (request.url === "/create-file") {
    const data = "<h1>This is test file</h1>";
    fs.writeFile("temp/test.html", data, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write('file is created');
      res.end();
    });
  } else {
    fs.readFile("page/404.html", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Internal Server Error");
        return;
      }
      res.writeHead(404, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000);
