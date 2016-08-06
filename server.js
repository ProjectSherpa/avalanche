const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + '/public'));

app.post('/avalanche', function(req, res) {
  console.log('handling request with data:', req.data);
})

var listener = app.listen(process.env.PORT || 3000, function(){
  console.log('App is running on port ' + listener.address().port);
});
