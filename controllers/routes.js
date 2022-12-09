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

//create post route
router.post('/', (req, res)=>{
    Recipe.create(req.body, (err, createdRecipe)=>{
        res.json(createdRecipe);
    });
});

//create index route
router.get('/', (req, res)=>{
    Recipe.find({}, (err, foundRecipe)=>{
        res.json(foundRecipe);
    });
});

//create delete route
router.delete('/:id', (req, res)=>{
    Recipe.findByIdAndRemove(req.params.id, (err, deletedRecipe)=>{
        res.json(deletedRecipe);
    });
});

//create update route
router.put('/:id', (req, res)=>{
    Recipe.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedRecipe)=>{
        res.json(updatedRecipe);
    });
});


module.exports = router;