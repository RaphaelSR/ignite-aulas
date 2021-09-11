const { response } = require('express');
const express = require('express');

const app = express();

// localhost:3333

app.get("/", (request, response) => {
    return response.json({message: "Hello World!"});
})

app.listen(3333, () => {console.log('API Started on localhost:3333')});