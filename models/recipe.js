const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    time: String,
    image: String,
    allergens: [type: String],
    featured: Boolean
});

const Recipe = mongoose.model('recipe', recipeSchema);

module.exports = Recipe;