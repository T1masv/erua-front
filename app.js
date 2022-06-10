const express = require('express');
const app = express();
const router = express.Router();

app.get("/" , (req, res) => {
    res.sendFile('./src/index.html',{root:__dirname});
});
app.use(express.static('src'));
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
