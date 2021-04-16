import {TRoutesInput} from '../types';
import productController from '../controllers/product.controller';


export default ({app}: TRoutesInput) => {
  app.post('/api/newproducts/', async(req, res) => {
    const myProducts = {
        id: req.body.id,
        title: req.body.title,
        image: req.body.image,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category
    };
    const pp = await productController.newProduct(myProducts);
    return res.send({pp})
  })

  app.get('/api/products/', async(req, res) => {
    await productController.getAllProduct()
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: ' + err));
  })

  app.get('/api/products/id/:id/', async(req, res) => {
    await productController.getSingleProduct(req.params.id)
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: ' + err));
  })

  app.get('/api/product/category/:category', async(req, res) => {
    await productController.categories(req.params.category)
      .then(cat => res.json(cat))
      .catch(err => res.status(400).json('Error: ' + err))
  })

}