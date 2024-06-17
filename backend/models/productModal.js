import mongoose from "mongoose";
const reviewSchema = mongoose.Schema({
  user:{
    // the person who is going to make the product cannot review the product
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name:{
    type: 'String',
    required: true,
  },
  rating:{
    type: 'Number',
    required: true,
  },
  comment:{
    type: 'String',
    required: true,
  }
},{
  timestamps: true,
});
const productSchema = new mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    // anytime we create anything in the database it will have a _id that is the ObjectId here and it also has its own type
    required: true,
    ref: 'User',
    // we have to specify where the object id is comming from that is User collection
  },
  name:{
    type: 'String',
    required: true,
  },
  image:{
    type: 'String',
    required: true,
  },
  brand:{
    type: 'String',
    required: true,
  },
  category:{
    type: 'String',
    required: true,
  },
  description:{
    type: 'String',
    required: true,
  },
  reviews: [reviewSchema],  //connecting the two schemas
  ratings:{
    type: 'Number',
    required: true,
    default: 0, 
  },
  numReviews:{
    type: 'Number',
    required: true,
    default: 0,
  },
  price:{
    type: 'Number',
    required: true,
    default: 0,
  },
  countInStock:{
    type: 'Number',
    required: true,
    default: 0,
  },
},{
  timestamps: true,
  // this will tell us when it was created and modified
});

const Product = mongoose.model("Product",productSchema);  
export default Product;