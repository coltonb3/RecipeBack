const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

//============================================
//required
const Recipe = require('../models/recipe.js');
const recipeSeed = require('../models/seed.js');

//============================================
//          SEED
//============================================
// //FIRST uncomment then comment out
// Recipe.create(recipeSeed, (err, data) => {
//   if (err) console.log(err.message)
//   console.log(`added provided recipe data`)
// })

//============================================
//routes
router.post('/', (req, res)=>{
    Recipe.create(req.body, (err, createdRecipe)=>{
        res.json(createdRecipe);
    });
});













module.exports = router;