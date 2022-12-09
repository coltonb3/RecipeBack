const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Recipes = require('./models/recipe.js');
const appRouter = require("./controllers/routes.js");
const app = express();

app.use(express.json());
app.use(cors());
app.use("/", appRouter);




//drop database comment
// mongoose.connection.dropDatabase();

//=================================================

mongoose.connect('mongodb://localhost:27017/recipes')

mongoose.connection.once('open', () => {
    console.log('Connected to mongodb');
});

app.listen(3000, () => {
    console.log();('listening....');
});












