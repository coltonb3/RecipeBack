const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: String,
    time: String,
    image: String,
    allergens: [String],
    featured: Boolean
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;