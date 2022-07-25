const express = require('express');

const router = express.Router();

let users = [
  {
    id: 1,
    username: 'John',
    email: 'john@gmail.com',
    password: 'password'

  },
  {
    id: 2,
    username: 'Mary',
    email: 'mary@gmail.com',
    password: 'marypass'

  },
  {
    id: 3,
    username: 'Jojo',
    email: 'jojo@gmail.com',
    password: 'passjo'

  }
];

router.get('/', (req, res) => {
  return res.json(users);
});

router.post('/', (req, res) => {
  const { username, email, password } = req.body;

  if(!username || !email || !password) return res.status(400).json({ error: 'Username, email e password são obrigatórios'});

  const newUser = {
    id: users.length + 1,
    username,
    email,
    password
  }
  users.push(newUser);

  return res.status(200).json(users);
});



module.exports = router;
