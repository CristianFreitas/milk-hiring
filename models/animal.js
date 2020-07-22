const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let AnimalSchema = new Schema({
	hash: {type: String, required: true},
	type: {type: String, required: true, max: 100},
	name: {type: String, required: true, max: 100},
	weight: {type: Number, required: true},
	age: {type: Number, required: true}
}, { versionKey: false })

AnimalSchema.index({ 'hash': -1 });
AnimalSchema.index({ 'type': -1 });
AnimalSchema.index({ 'name': -1 });

module.exports = mongoose.model('Animal', AnimalSchema);