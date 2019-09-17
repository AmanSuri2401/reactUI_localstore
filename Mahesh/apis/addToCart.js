const data = require('../data/data');
const Cart = require('../model/Cart');
const mongoose = require('mongoose');
const env = require('dotenv');
let products = [];

env.config();

// function to  get data from database

const addToCart = async (req, res) => {

  console.log("AddTocart called");
  try {
    mongoose.connect(process.env.DB_CON_STRING, {
      useNewUrlParser: true
    });
    let cart = [];
    product = await Products.findOne({
      id: req.body.productId
    });
    //this may need to be looped. Need to check.
    this.cart.push(product);
  } catch (err) {
    console.log("error [" + __filename + "] -> " + err);
  } finally {
    //console.log("finding finished");
    return res.json(cart);
  }
};

export default addToCart;
