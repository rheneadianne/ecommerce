const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

//id go here 
//product_name: 'Running Sneakers',
//     price: 90.0,
//     stock: 25,
//     category_id: 5,

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then( data => {
    !data ? res.status(404).json({
      message: 'No categories found! Please try again.'
    })
    : res.json(data)
  })
  .catch( error => {
    console.error(error);
    res.status(500).json(error)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }
  })
  .then( data => {
    !data ? res.status(404).json({
      message: 'No categories found with that id! Please try again.'
    })
    : res.json(data)
  })
  .catch( error => {
    console.error(error);
    res.status(500).json(error)
  })
});

router.post('/', (req, res) => {
  // create a new category
  Category.create({
    category_name: req.body.category_name
  })
  .then(data => {
    data ? res.status(404).json({
      message: 'Category exists! Please try again'
    })
    : res.json(data)
  })
  .catch( error => {
    console.error(error);
    res.status(500).json(error)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update({
    where: {
      id: req.params.id
    }
  })
  .then( data => {
    !data ? res.status(404).json({
      message: 'No categories found with that id! Please try again.'
    })
    : res.json(data)
  })
  .catch( error => {
    console.error(error);
    res.status(500).json(error)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then( data => {
    !data ? res.status(404).json({
      message: 'No categories found with that id! Please try again.'
    })
    : res.json(data)
  })
  .catch( error => {
    console.error(error);
    res.status(500).json(error)
  })
});

module.exports = router;
