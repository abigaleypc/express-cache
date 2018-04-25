const express = require('express')
const app = express()
var serveStatic = require('serve-static')

app.use('/public', express.static('public', {
  maxAge: '1d',
  setHeaders: setCustomCacheControl
}))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

function setCustomCacheControl (res, path) {
  if (serveStatic.mime.lookup(path) === 'text/html') {
    // Custom Cache-Control for HTML files
    res.setHeader('Cache-Control', 'public, max-age=1000')
  }
}
