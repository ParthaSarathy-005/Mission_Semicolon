import { Schema, model } from 'mongoose';
const ProductSchema = Schema({
  name: {
    type: String,
    required: [true, "can't be blank"]
  },
  description: {
    type: String,
    required: [true, "can't be blank"]
  },
  price: {
    type: String,
    required: [true, "can't be blank"]
  },
  category: {
    type: String,
    required: [true, "can't be blank"]
  },
  pictures: {
    type: Array,
    required: true
  }
}, {minimize: false});

const Product = model('Product', ProductSchema);

export default Product;
