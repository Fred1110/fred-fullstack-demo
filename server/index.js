const { syncAndSeed, models: {User}} = require('./db');
const express = require('express');
const { static } = express;
const path = require('path');
const { useReducer } = require('react');

const app = express();

app.use('/public', static(path.join(__dirname, '../public')));

app.get('/', (req, res, next)=> res.sendFile(path.join(__dirname, '../index.html')));

app.get('/api/users', async(req, res, next)=>{
  try {
    res.send(await User.findAll());
  } catch (error) {
    next(error)
  }
});

const init = async()=>{
  try {
    await syncAndSeed();
    const port = process.env.PORT || 3000;
    app.listen(port, ()=> console.log(`listening on port ${port}`))
  } catch (error) {
    console.log(error);
  }
};


init();
