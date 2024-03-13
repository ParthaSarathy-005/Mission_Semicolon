import express from 'express';
import cors from 'cors';
import http from 'http';
import dotenv from 'dotenv';
import stripe from 'stripe';
import './connection.js';
import { Server } from 'socket.io';

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: '*',
  methods: ['GET', 'POST', 'PATCH', 'DELETE']
});

import User from './models/User.js';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import orderRoutes from './routes/orderRoutes.js';

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

const stripeInstance = stripe(process.env.STRIPE_SECRET);

app.post('/create-payment', async (req, res) => {
  let { amount } = req.body;
  amount = amount * 100;
  // console.log(amount);
  try {
    const paymentIntent = await stripeInstance.paymentIntents.create({
      amount,
      currency: 'usd',
      payment_method_types: ['card'],
      description: 'Software development',
      shipping: {
        name: 'Jenny Rosen',
        address: {
          line1: '510 Townsend St',
          postal_code: '98140',
          city: 'San Francisco',
          state: 'CA',
          country: 'US',
        },
      },
    });
    res.status(200).json(paymentIntent);
  } catch (e) {
    console.log(e.message);
    res.status(400).json(e.message);
  }
});

server.listen(8080, () => {
  console.log('server running at port', 8080);
});

app.set('socketio', io);
