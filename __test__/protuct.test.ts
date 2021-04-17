import mongoose from 'mongoose';
import Controller from '../controllers/product.controller';


describe('User controller', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI!, {
      useNewUrlParser: true, 
      useCreateIndex: true, 
      useUnifiedTopology: true
    });
  });
  afterAll(async () => {
    mongoose.connection.close();
  });
  it('Create a user', async () => {
    const myProducts = {
      id: 200,
      title: "T-shirt My HHhHH",
      image: "https://google.com/image.png",
      price: 69.3,
      description: "lorem epsume hhh not all hhh is hhh but big HHH is no hhh",
      category: "shirt"
    }
    const newProduct = await Controller.newProduct(myProducts)
    expect(newProduct.id).toEqual(myProducts.id)
  })
})