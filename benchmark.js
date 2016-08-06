const loadtest = require('loadtest');

var options = {
  url: 'http://10.8.24.125:5000',
  maxRequests: 100,
}

loadtest.loadTest(options, function(err, result) {
  if (err) {
    return console.error('Got an error', err);
  }
  console.log('Tests run successfully with results of:', result);
});
