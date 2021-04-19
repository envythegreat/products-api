import {TRoutesInput} from '../types';
import productController from '../controllers/product.controller';


export default ({app}: TRoutesInput) => {
  app.post('/api/newproduct/', async(req, res) => {
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

  app.get('/api/products/:category?', async(req, res) => {
    const limit = Number(req.query.limit) || 0;
    const page = Number(req.query.page) || 0;
    const query = req.params.category ? {category: req.params.category} : {}
    await productController.getAllProduct(query, limit, page)
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: ' + err));
  })

  app.get('/api/products/id/:id/', async(req, res) => {
    await productController.getSingleProduct(parseInt(req.params.id))
      .then(products => res.json(products))
      .catch(err => res.status(400).json('Error: ' + err));
  })

  // app.get('/api/products/:category/', async(req, res) => {
  //   const limit = Number(req.query.limit) || 0;
  //   await productController.categories(req.params.category, limit)
  //     .then(cat => res.json(cat))
  //     .catch(err => res.status(400).json('Error: ' + err))
  // })

}