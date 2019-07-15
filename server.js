const http = require('http');
const app = require('./src/app');

app.set('port', process.env.PORT || 3000);

http
  .createServer(app)
  .listen(app.get('port'), () => {
    console.log(`API running on localhost:${app.get('port')}`);
});