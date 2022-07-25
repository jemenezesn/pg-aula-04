const express = require('express');

const router = express.Router();
let products = require('./products');

router.get('/', (req, res) => {
  return res.json(products);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  const product = products.find(product => product.id === Number(id));
  
  if(!product) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }

  return res.status(200).json(product);
});

router.post('/', (req, res) => {
  const product = req.body;

  products = [...products, {id: products.length + 1, ...product }];

  return res.status(200).json(products);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const product = products.find(product => product.id === Number(id));

  if(!product) {
    return res.status(404).json({ error: 'Produto não encontrado' });
  }


  products = products.map(prod => prod.id === Number(id) ? {id: Number(id), ...body} : prod);

  return res.status(200).json(products);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const index = products.findIndex(product => product.id === Number(id));

  if(index === -1) {
    return res.status(404).json({ error:  'Produto não encontrado' });
  }

  const deletedProduct = products.splice(index, 1);
  console.log(deletedProduct)
  return res.status(200).json(products);
});

module.exports = router;