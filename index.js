const express = require('express'),
  app = express();
app.listen(9866, () => {
  console.log('dirty site is ready.....')
})
app.use(express.static('./'));