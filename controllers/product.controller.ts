import Product,{IProduct} from '../models/product.model';
import {CreateQuery} from 'mongoose';

async function newProduct({
  id,
  title,
  image,
  price,
  description,
  category
} : CreateQuery<IProduct>): Promise<IProduct>{
  return Product.create({
    id,
    title,
    image,
    price,
    description,
    category
  }).then((data: IProduct) => {
    return data;
  })
  .catch((error: Error) => {
    throw error;
  });
}

async function getSingleProduct(id: any) {
  return await Product.find({id: id});
}

async function getAllProduct() {
  return await Product.find();
}

async function paginitaion() {

}

async function categories(category: any) {
  return await Product.find({category: category});
}


export default {newProduct, getSingleProduct, getAllProduct, categories};