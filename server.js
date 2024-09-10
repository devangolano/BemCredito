const next = require('next');
const { createServer } = require('http');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
let handle = app.getRequestHandler();

if (dev) {
  app.prepare().then(() => {
    createServer((req, res) => {
      handle(req, res, req.url)
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  });
} else {
  app.prepare().then(() => {
    handle(req, res, req.url)
  });
}