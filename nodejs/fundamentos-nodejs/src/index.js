const { response, request } = require('express');
const express = require('express');
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const costumers = [];


app.post("/account", (request, response) => {
    const {cpf, name} = request.body;

    const costumerAlreadyExistis = costumers.some((costumer) => costumer.cpf === cpf)

    if(costumerAlreadyExistis){
        return response.status(400).json({error: "Costumer already exists! "});
    }

    costumers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    return response.status(201).send(costumers);
})

app.get("/account", (request, response) => {
    return response.status(200).send(costumers);
})

app.listen(3333, () => {console.log('API Started on localhost:3333')});