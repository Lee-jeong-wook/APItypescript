const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const home = require('./src/routes/home');


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // 모든 도메인에 대해 허용 (실제 운영환경에서는 특정 도메인만 허용)
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
// 미들웨어
app.use(express.static(`${__dirname}/src/public`))
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/', home);

module.exports = app;