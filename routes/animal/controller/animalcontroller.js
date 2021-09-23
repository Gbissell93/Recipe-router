const Animal = require("../model/animal")

module.exports = {
    getAllAnimal: (body, callback) => {
        Animal.find(body, function(err, foundAnimal){
            if (err) {
                callback(err, null)
            } else {
                callback(null, foundAnimal)
            }
        })
    },
    
    createAnimal: (body, callback) => {
    const createAnimal = new Animal(
        {
            animalType: body.animalType,
            animalName: body.animalName,
            animalAge: body.animalAge
        });

    createAnimal.save(function(err, savedAnimal) {
        err ? callback(err, null) : callback(null, savedAnimal);
    });
    },
    deleteAnimal: (id, callback) => {
        Animal.findByIdAndDelete(id, function(err, deletedAnimal){ 
            if (err) {
                callback(err, null)
            } else {
                callback(null, deletedAnimal)
            }
        })
    },
    updateAnimalById: (id, body, callback) => {

        Animal.findByIdAndUpdate(id, 
            body, 
            {new: true}, 
            function(err, updatedAnimal){
                if (err) {
                    callback(err, null)
                } else {
                    callback(null, updatedAnimal)
                }
        })
    }
};