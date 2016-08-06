const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);

const loadtest = require('loadtest');

// app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var data = {url: 'http://10.8.24.125:5000/', maxSeconds: 20, concurrency: 20}

app.post('/avalanche', function(req, res) {
  loadtest.loadTest(data, function(err, result) {
    if (err) {
      return console.error('Got an error', err);
    }
    console.log('Tests run successfully with results of:', result);
    res.send(result);
  });
})

var listener = app.listen(process.env.PORT || 3000, function(){
  console.log('App is running on port ' + listener.address().port);
});
