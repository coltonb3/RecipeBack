const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
const Recipes = require('./models/recipe.js');

const app = express();


const db = mongoose.connection

app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(methodOverride('_method'));
app.use(cors());

const appRouter = require("./controllers/routes.js");
app.use("/", appRouter);

const userController = require('./controllers/users_controller.js');
app.use(userController);

let PORT = 3000;
if(process.env.PORT){
	PORT = process.env.PORT
};


const corsOptions ={
    origin:'https://git.heroku.com/serene-dawn-88718.git',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));



//drop database comment
// mongoose.connection.dropDatabase();

//=================================================


app.listen(PORT, ()=>{
	console.log('the creature is listening...');
})

mongoose.connect('mongodb+srv://chetv18:4wceCy8iFh77mlas@records.pojunds.mongodb.net/RecipeDB?retryWrites=true&w=majority', ()=>{
	console.log('connected to mongo');
})














