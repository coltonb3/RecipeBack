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


// const corsOptions ={
//     origin:'http://localhost:3000',
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));



//drop database comment
// mongoose.connection.dropDatabase();

//=================================================


mongoose.connect(
    'mongodb://localhost:27017/recipes',
   
    () => {
      console.log('the connection with mongod is established at', 'mongodb://localhost:27017/recipes')
    }
  )
  
  db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
  db.on('disconnected', () => console.log('mongo disconnected'))



mongoose.connection.once('open', () => {
    console.log('Connected to mongodb');
});

app.listen(3000, () => {
    console.log();('listening....');
});












