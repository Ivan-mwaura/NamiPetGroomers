const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema
const CartItemSchema = new Schema({

  userEmail: { 
    type: String,
    required: true,
  },
  animalType: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: String,
    required: true,
  },
  productRating: {
    type: Number,
    required: true,
  },
  productStock: {
    type: Number,
    required: true,
  },
  productSubCategory: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
  __v: {
    type: Number,
    default: 0,
  },
}, { timestamps: true });


const CartItem = mongoose.model('CartItem', CartItemSchema);

module.exports = CartItem;
