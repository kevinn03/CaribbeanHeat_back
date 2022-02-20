const express = require('express');
const app = express();
require('dotenv').config();
const itemRouter = require('./controllers/items');
const orderRouter = require('./controllers/orders');
const cors = require('cors');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
const path = require('path');
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Mongo connection open');
}
app.use(cors());
app.use(express.json());
app.use(logger.requestLogger);
app.use(express.static('build'));
app.use('/api/items', itemRouter);
app.use('/api/orders', orderRouter);

app.get('/', (req, res) => {
  res.json('hello world');
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'), (err) => {
    if (err) {
      console.log(err);
    }
  });
});
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
