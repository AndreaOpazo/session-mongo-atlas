import mongoose from 'mongoose';

const productsCollection = 'products';
const productsSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    max: 50,
  },
  price: {
    type: Number,
    require: true,
  },
  thumbnail: {
    type: String,
    require: true,
    max: 150,
  }
});

export const prodModel = mongoose.model(productsCollection, productsSchema);