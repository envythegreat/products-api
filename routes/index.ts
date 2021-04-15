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
    }
    await productController.newProduct(myProducts)
      .then(() => res.json('Product Added!'))
      .catch(err => res.status(400).json(`Error : ${err}`));
  })

  app.get('/api/products/', async(req, res) => {
    await productController.getAllProduct()
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: ' + err));
  })

  app.get('/api/products/:id/', async(req, res) => {
    await productController.getSingleProduct(req.params.id)
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: ' + err));
  })

  
}