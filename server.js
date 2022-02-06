require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const subscribersRouter = require('./routes/subscribers');

mongoose.connect(process.env.DATABASE_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;

db.on('error', (err) => {console.log(err)});
db.once('open', () => console.log('Database Connected'));

app.use(express.json());

// Routes

app.use('/subscribers', subscribersRouter);

app.listen(3000, () => {
    console.log('Servidor rodando!');
});