const express = require("express");
const recipeController = require('./controller/recipeController');
const router = express.Router();



//get request for recipe page
router.get("/", (req, res) => {
    recipeController.getAllrecipes({}, (err, foundRecipe) => {
        if (err) {
            res.status(500)
            .json({ message: "something went wrong!",
        error: err.message})
        } else {
            res.json({ message: "success", foundRecipe });
        }
    });
});

router.post("/add-recipe", (req, res) => {
    recipeController.addRecipe( req.body, (err, savedRecipe) => {
        if (err) {
            res.status(500)
            .json({ message: "something went wrong!",
        error: err.message})
        } else {
            res.json({ message: "success", savedRecipe });
        }
    }); 
});

router.put("/update-by-id/:id", (req, res) => {
    recipeController.updateRecipe(req.params.id, req.body, (err, updatedRecipe) => {
        if (err) {
            res.status(500)
            .json({ message: "something went wrong!",
        error: err.message})
        } else {
            res.json({ message: "success", updatedRecipe });
        }
    }); 
});

router.delete("/delete-by-id/:id", (req, res) => {
    recipeController.deleteRecipe(req.params.id, (err, deletedRecipe) => {
        if (err) {
            res.status(500)
            .json({ message: "something went wrong!",
        error: err.message})
        } else {
            res.json({ message: "success", deletedRecipe });
        }
    });
});

module.exports = router