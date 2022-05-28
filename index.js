const express = require('express'),
  app = express();

app.listen(9646, () => {
  console.log('dirty site is ready.....')
})
app.use(express.static('./'));
let imgs = require('./images.js'),
  https = require('https'),
  http = require('http');
app.get('/download/:id/:page', (req, res) => {
  var id = req.params.id;
  var file = req.params.page;
  var url = imgs[id][file-1];
  var download = http;
  if(url.startsWith('https:')) {
    download = https;
  }
  var form = url.split('.')[-1];
  res.set({
    'Content-Disposition': `attachment; filename=${id}_${file}.${form}`
  });
  download.get(url, (f) => {
    f.pipe(res);
  });
});