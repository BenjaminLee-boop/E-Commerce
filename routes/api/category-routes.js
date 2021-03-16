const router = require('express').Router();
const { Category, Product } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const data = await Category.findAll({
      include: {
        model: Product,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const data = await Category.findByPk(req.params.id, {
      include: {
        model: Product,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.post('/', async (req, res) => {
  try {
    const data = await Category.create(req.body);
    res.status(200).json(data);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.put('/:id', async (req, res) => {
  try {
    const data = await Category.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(422).json(error);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const data = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(400).json(data);
  } catch (error) {
    res.status(422).json(error);
  }
});

module.exports = router;
