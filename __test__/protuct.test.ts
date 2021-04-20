import mongoose from 'mongoose';
import Controller from '../controllers/product.controller';

let myProducts = {
  id: 200,
  title: "T-shirt My HHhHH",
  image: "https://google.com/image.png",
  price: 69.3,
  description: "lorem epsume hhh not all hhh is hhh but big HHH is no hhh",
  category: "shirt"
}
describe('Product controller', () => {


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
  
  it('Add New Product', async () => {  
    const newProduct = await Controller.newProduct(myProducts)
    expect(newProduct.id).toEqual(myProducts.id)
  })

  it('Validate if Title is  short', async () => {
    myProducts.title = "T-shirt";
    try {
      await Controller.newProduct(myProducts)
    } catch(e) {
      expect(e.message).toBe(
        'Product validation failed: title: Product Title is  too short'
      );
    }
  })

  it('Validate if Description is  short', async () => {
    myProducts.description = "dt big HHH is no hhh";
    myProducts.title = "T-shirt My HHhHH";
    try {
      await Controller.newProduct(myProducts)
    } catch(e) {
      expect(e.message).toBe(
        'Product validation failed: description: Product Description is  too short'
      );
    }
  })

  it('Get Single Product', async () => {
    myProducts.description = "ailed: description: Product Description is  too short";
    myProducts.id = 2;
    const newProduct = await Controller.newProduct(myProducts);
    await Controller
      .getSingleProduct(myProducts.id)
      .then(res => {
        expect(newProduct.id).toEqual(res[0].id)
      })
  })

})