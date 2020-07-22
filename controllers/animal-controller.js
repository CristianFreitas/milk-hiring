var Animal = require('../models/animal');
var Crypto = require('crypto');

exports.ping = function (req, res) {
	res.send('pong');
};

exports.create = function (req, res) {
	if (!req.body.name) {
		return res.json({"error": "name not found"}); 
	}

	if (!req.body.type) {
		return res.json({"error": "type not found"}); 
	}

	if (!req.body.weight) {
		return res.json({"error": "weight not found"}); 
	}

	if (!req.body.age) {
		return res.json({"error": "age not found"}); 
	}

	let animal = new Animal({
 		hash: Crypto.randomBytes(20).toString('hex'),
 		name: req.body.name,
 		type: req.body.type,
 		weight: req.body.weight,
 		age: req.body.age
 	});

 	animal.save(function (err, result) {
		if (err) {
			console.log(err)
			return next(err);
	 	}
 		res.send("Register created \n " + result)
 	})
};

exports.details = function (req, res) {
	if (!req.params.id) {
		return res.json({"error": "id not found"}); 
	}
    Animal.findOne({hash: req.params.id}, function (err, animal) {
        if (err) {
        	console.log(err)
        	return next(err);
        }
        if (!animal) {
     		return res.json("animal not found");   	
        }
        res.send(animal);
    })
};

exports.update = function (req, res) {
    Animal.findOneAndUpdate({hash: req.params.id}, {$set: req.body}, function (err, animal) {
        if (err) {
        	console.log(err)
        	return next(err);
        }
        res.send("Animal updated \n");
    });
};

exports.delete = function (req, res) {
    Animal.findOneAndRemove({hash: req.params.id}, function (err) {
         if (err) {
        	console.log(err)
        	return next(err);
        }
        res.send("Deleted successfully!");
    })
};