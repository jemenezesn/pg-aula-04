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

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const user = users.find(user => user.id === Number(id));

  if(!user) return res.status(400).json({ error: 'Usuário não encontrado'});

  users = users.map(user => user.id === Number(id) ? {id: Number(id), ...body} : user);

  return res.status(200).json(users);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const user = users.findIndex(user => user.id === Number(id));
  if(user === -1) return res.status(400).json({ error: 'Usuário não encontrado'});
  
  const deletedUser = users.splice(user, 1);
  console.log(deletedUser);

  return res.status(200).json(users);
});

module.exports = router;
