const { response, request } = require('express');
const express = require('express');
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

const customers = [];


app.post("/account", (request, response) => {
    const {cpf, name} = request.body;

    const customerAlreadyExistis = customers.some((costumer) => costumer.cpf === cpf)

    if(customerAlreadyExistis){
        return response.status(400).json({error: "Costumer already exists! "});
    }

    customers.push({
        cpf,
        name,
        id: uuidv4(),
        statement: []
    });

    return response.status(201).send(customers);
})

app.get("/statement", (request, response) => {
    const { cpf } = request.headers;
    const customer = customers.find(costumer => costumer.cpf === cpf);

    if(!customer){
        return response.status(400).json({error: "Costumer not found"});
    }

    return response.json(customer.statement);
})

app.listen(3333, () => {console.log('API Started on localhost:3333')});