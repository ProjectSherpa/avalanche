var seige = require('siege');

seige()
  .host('10.8.24.125')
  .on(5000)
  .concurrent(3000)
  .for(100000).times
  .get('/')
  .attack()
