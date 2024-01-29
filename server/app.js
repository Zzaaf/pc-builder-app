const express = require('express');
const serverConfig = require('./config/serverConfig');

const app = express();
const PORT = 3000;

// config
serverConfig(app);

app.listen(PORT, () => console.log(`Server started at ${PORT} port`));
