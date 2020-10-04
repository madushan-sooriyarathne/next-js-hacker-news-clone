// This file is to handle incoming service-worker.js file requests.
// If browser is requesting service-worker.js file then handler the request and send response here.
// else, Let next to handle the incoming requests.

const next = require("next");
const http = require("http");
const url = require("url");
const path = require("path");
const fs = require("fs");

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      // parse request url and get path name
      const parsedUrl = url.parse(req.url, true);
      const { pathname } = parsedUrl;

      // if the service-worker.js is requested, serve it as a static file
      if (pathname === "/service-worker.js") {
        const filepath = path.join(__dirname, ".next", pathname);

        // check if the file exists in the system
        try {
          if (fs.existsSync(filepath)) {
            console.log(`${pathname} exists in the system. Sending the file`);
            res.setHeader("content-type", "text/javascript");
            fs.createReadStream(filepath).pipe(res);
            // app.serveStatic(req, res, filepath);
          }
        } catch (error) {
          console.warn(`${pathname} does not exists in ${filepath}`);
          res.status(404).send("File not found");
        }

        // else let next handle the requests
      } else {
        handle(req, res, parsedUrl);
      }
    })
    .listen(port, () => {
      console.log(`Listening on ${port}`);
    });
});
