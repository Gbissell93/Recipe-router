const Recipe = require ("../model/recipe");

module.exports = {
    getAllrecipes: (body, callback) => {
        Recipe.find(body, function(err, foundRecipe) {
            err ? callback(err, null) : callback(null, foundRecipe);
        })
    },
    addRecipe: (body, callback) => {
        const addRecipe = new Recipe(
            {
                recipe: body.recipe,
                price: body.price
            }
        );

        addRecipe.save(function(err, savedRecipe) {
            err ? callback(err, null) : callback(null, savedRecipe);
        });
    },

    updateRecipe: (id, body, callback) => {
        Recipe.findByIdAndUpdate(id,
            body, 
            {new: true},
            (err, updatedRecipe) => {
                err ? callback(err, null) : callback(null, updatedRecipe);
            });
    },
    deleteRecipe : (id, callback) => {
        Recipe.findByIdAndDelete(id, function(err, deletedRecipe) {
            err ? callback(err, null) : callback(null, deletedRecipe)
        })
    }
}


//using the current application
//create a route for recipe /api/recipe
//Basically, it is the same thing what we been doing for animal
//GET, PUT, CREATE, DELETE
//SETUP mongodb and name the database /mongodb-recipe
//In the schema it should have the following
//recipe - type String, date, price - type Number