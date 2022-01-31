const express = require('express');
const app = express();
require('dotenv').config();
const itemRouter = require('./controllers/items');
const cors = require('cors');
const logger = require('./utils/logger');
const mongoose = require('mongoose');
main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Mongo connection open');
}
app.use(cors());
app.use(express.json());
app.use(logger.requestLogger);
app.get('/', (req, res) => {
  console.log('hello world');
});
app.use('/api/items', itemRouter);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
