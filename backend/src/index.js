const express = require('express');

const app = express();

app.get('/', (request, response) => response.status(200).send('Olá, Mundo!'));

app.listen(3333, () => console.log('Server running on port 3333'));


