const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  res.send('Category get root route');
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  res.send('Category get root :id route');
});

router.post('/', (req, res) => {
  // create a new category
  res.send('Category post root route');
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  res.send('Category put root :id route');
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  res.send('Category delete route');
});

module.exports = router;
