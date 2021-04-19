import { Schema, Document, Model, model } from 'mongoose'


export interface IProduct extends Document {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category?: string;
}


const productSchema: Schema = new Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    minlength: 2
  },
  title: {
    type: String,
    required: true,
    minlength: [10, 'Product Title is  too short']
  },
  image: {
    type: String,
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    minlength: [50, 'Product Description is  too short']
  },
  category: {
    type: String,
    required: false
  }
}, {
  timestamps: true,
});

const Product: Model<IProduct> = model<IProduct>('Product', productSchema);

export default Product;