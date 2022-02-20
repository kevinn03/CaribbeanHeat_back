const mongoose = require('mongoose');
const orderSchema = mongoose.Schema({
  price: {
    type: Object,
  },
  items: [
    {
      type: Object,
    },
  ],

  date: {
    type: Date,
    required: true,
  },
});
orderSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model('Order', orderSchema);
