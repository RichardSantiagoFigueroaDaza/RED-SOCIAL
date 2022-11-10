require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

const { SERVER_PORT, SERVER_HOST, MONGODB_URI } = process.env;

mongoose.connect(MONGODB_URI).then(() => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Escuchando en el puerto ${SERVER_HOST}:${SERVER_PORT}`);
    });
}).catch((err) => {
    console.log(err)
});

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Escuchando en el puerto ${SERVER_HOST}:${SERVER_PORT}`);
});