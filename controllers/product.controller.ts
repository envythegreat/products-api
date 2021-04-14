import Product,{IProduct} from '../models/product.model';
import {CreateQuery} from 'mongoose';

async function newProduct({
  id,
  title,
  image,
  price,
  description,
  category
} : CreateQuery<IProduct>){
  const myproduct = new Product({ id,
    title,
    image,
    price,
    description,
    category
  })
  await myproduct.save();
}

export default {newProduct};