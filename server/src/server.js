const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routers = require('./routes/index.js')
const dbConfig = require('./config/index.js')
dotenv.config();
app.use(bodyParser.json());
app.use(cors())
const PORT = process.env.PORT || 3000;
dbConfig.connect()
routers(app)

app.listen(PORT, function(){
    console.log('listening on port ' ,PORT)
})