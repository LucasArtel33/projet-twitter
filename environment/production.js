const path = require('path');

module.exports = {
  dbUrl: 'mongodb+srv://lucas:LxDpw71wXADOGYR0@cluster0-ssjff.gcp.mongodb.net/twitter?retryWrites=true&w=majority',
  cert: path.join(__dirname, ''),
  key: path.join(__dirname, ''),
  portHttp: 80,
  portHttps:443
}