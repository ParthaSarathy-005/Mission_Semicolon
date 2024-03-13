import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const connectionStr = process.env.MONGO_CONNECTION;

mongoose.connect(connectionStr, { useNewUrlParser: true })
  .then(() => console.log('connected to mongodb'))
  .catch(err => console.log(err));

mongoose.connection.on('error', err => {
  console.log(err);
});
