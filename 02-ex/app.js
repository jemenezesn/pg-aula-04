const express = require('express');

const app = express();
const router = require('./router');

app.use(express.json());
app.use('/api/users', router);



app.listen(3000, () => { console.log('🔥 Server on')});