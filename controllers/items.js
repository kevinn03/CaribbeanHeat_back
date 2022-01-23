const itemRouter = require('express').Router();

const Item = require('../models/item');
itemRouter.get('/', async (req, res) => {
  const items = await Item.find({});

  res.json(items);
});
itemRouter.get('/:id', async (req, res) => {
  const params = req.params;
  const item = await Item.findById(params.id);

  res.json(item);
});

module.exports = itemRouter;
