// node module
const http = require("http");
const fs = require("fs");

// application configuration
const port = 5500;

// application routes
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the Home Page");
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the About Page");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is the Contact Page");
    res.end();
  } else if (req.url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (!err) {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("File write successful");
        res.end();
      } else {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("There was a server error!!");
        res.end();
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Your requested url not found!!");
    res.end();
  }
});

// listen server
server.listen(port, () => {
  console.log(`The server listen on port ${port}`);
});
