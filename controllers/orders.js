const orderRouter = require('express').Router();

const Order = require('../models/order');
orderRouter.get('/', async (req, res) => {
  const orders = await Order.find({});

  res.json(orders);
});
orderRouter.get('/:id', async (req, res) => {
  const params = req.params;
  const order = await Order.findById(params.id);

  res.json(order);
});

orderRouter.post('/', async (request, response) => {
  const body = request.body;

  const order = new Order({
    price: body.price,
    items: body.items,
    date: new Date(),
  });

  const result = await order.save();

  response.json(result);
});

module.exports = orderRouter;
