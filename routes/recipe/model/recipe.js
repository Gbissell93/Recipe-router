const mongoose = require("mongoose");


const recipeSchema = new mongoose.Schema({
   recipe: {
       type: String
   },
   price: {
       type: Number
   }
},
{
    timestamp: true,
});

module.exports = mongoose.model("recipe", recipeSchema)