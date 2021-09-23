var express = require('express');
const animalcontroller = require('./controller/animalcontroller');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    animalcontroller.getAllAnimal({}, (err, foundAnimal) => {
      if (err) {
        res
        .status(500)
        .json({ message: "something went wrong!",
      error: err.message});
      } else {
        res.json({ messgae: "success", foundAnimal });
      }
    });
  });



router.post("/create-animal", (req, res) => {
  animalcontroller.createAnimal(req.body, (err, savedAnimal) => {
    if (err) {
      res
      .status(500)
      .json({ message: "something went wrong!",
    error: err.message});
    } else {
      res.json({ messgae: "success", savedAnimal });
    }
  });
});

router.delete("/delete-by-id/:id", function(req, res){
  animalcontroller.deleteAnimal(req.params.id, function(err, deletedAnimal){
  if (err) {
    res
    .status(500)
    .json({ message: "something went wrong!",
  error: err.message});
  } else {
    res.json({ messgae: "success", deletedAnimal });
  }
})
});
router.put("/update-by-id/:id", function(req, res){
  animalcontroller.updateAnimalById(req.params.id, req.body, function(err, updatedAnimal){
  if (err) {
    res
    .status(500)
    .json({ message: "something went wrong!",
  error: err.message});
  } else {
    res.json({ message: "success", updatedAnimal });
  }
})
});


module.exports = router;