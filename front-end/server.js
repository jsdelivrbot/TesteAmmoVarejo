var path = require('path');
var express = require('express');
const app = express();
 
app.use(express.static(__dirname + '/dist'));

app.listen(process.env.PORT || 8080);

app.get('*', (req, res) => {
  res.sendFile((__dirname + '/dist/front-end/index.html')); // load the single view file (angular will handle the page changes on the front-end)
});