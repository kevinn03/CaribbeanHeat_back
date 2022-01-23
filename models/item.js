const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const itemSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: [2, 'Minimum length is 2'],
  },
  price: {
    type: Number,
    require: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
    minlength: [2, 'Minimum length is 2'],
  },
  image: { type: String, required: true },
});

itemSchema.plugin(uniqueValidator);

itemSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Item', itemSchema);
