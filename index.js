const express = require('express'),
  app = express();
app.listen(9866, () => {
  console.log('dirty site is ready.....')
})
app.use(express.static('./'));
app.get('/download/', (req, res) => {
  var id = res.query.id;
  var file = res.query.file;
  console.log(id);
});