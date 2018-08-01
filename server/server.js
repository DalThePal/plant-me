const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3006;

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/../build`));

app.listen(port, () => console.log('Listening on port 3006'));