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

async function getSingleProduct(id: number) {
  return await Product.find({id: id});
}

async function getAllProduct(query: Object,limit: number) {
  return await Product.find(query).limit(limit);
}

// async function paginitaion(page:number, size:number) {
//   return await Product.find({})
//     .limit(size)
//     .skip(size * (page - 1))
// }

// async function categories(category: string, limit: number) {
//   return await Product.find({category: category}).limit(limit);
// }


export default {newProduct, getSingleProduct, getAllProduct};