const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const authRouter = express.Router();

authRouter.get('/login', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

authRouter.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.sendStatus(400);
  }
  const findedUser = await User.findOne({
    where: { email },
  });
  if (findedUser === null) {
    return res.sendStatus(408);
  }

  if (!(await bcrypt.compare(password, findedUser.password))) {
    return res.sendStatus(409);
  }

  req.session.user = {
    id: findedUser.id,
    name: findedUser.name,
    email: findedUser.email,
  };

  res.json(req.session.user);
});

authRouter.get('/reg', (req, res) => {
  const initState = {};
  res.render('Layout', initState);
});

authRouter.post('/reg', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.sendStatus(400);
  }
  const findedEmail = await User.findOne({
    where: { email },
  });
  if (findedEmail) {
    return res.sendStatus(406);
  }
  const newUser = await User.create({
    name,
    email,
    password: await bcrypt.hash(password, 5),
  });
  req.session.user = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };
  res.json(req.session.user);
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

authRouter.get('/check', (req, res) => {
  if (!req.session.user) {
    res.status(401).json({ message: 'no cookie' });
    return;
  }
  res.json({ user: req.session.user });
});

module.exports = authRouter;
