const express = require('express');

const { Theme, Quiz } = require('../db/models');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const qwizs = await Theme.findAll({
      include: Quiz,
    });
    console.log(qwizs);
    res.json(qwizs);
  } catch (err) {
    console.log(err);
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const qwiz = await Quiz.findOne({ where: { id } });
  res.json(qwiz);
});

// router.post('/', async (req, res) => {
//   const { title } = req.body;
//   const todo = await Todo.create({ title, status: false });
//   res.json(todo);
// });

// router.patch('/:id', async (req, res) => {
//   const todo = await Todo.findByPk(req.params.id);
//   await todo.update(req.body);
//   res.json(todo);
// });

// router.delete('/:id', async (req, res) => {
//   await Todo.destroy({ where: { id: req.params.id } });
//   res.sendStatus(200);
// });

module.exports = router;
