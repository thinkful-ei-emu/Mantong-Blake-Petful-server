const {Queue, queuePeek, queueIsEmpty, display} = require('./queue.js');
const bcrypt = require('bcrypt');
const express = require('express');
const petRouter = express.Router();



const cats = new Queue;
const dogs = new Queue;
const users = new Queue;


petRouter
  .route('/cat')
  .get((req, res) => {
    if(queueIsEmpty(cats)){
      return res.status(205).json({message : 'no cats'});
    }
    return res.status(200).json(queuePeek(cats));
  });

petRouter
  .route('/cat/adopt')
  .post((req, res)=>{
    const {imageURL, imageDescription, name, sex, age, breed, story} = req.body;
    if(!(imageURL && imageDescription && name && sex && age && breed && story)){
      return res.status(404).json({message : 'missing a field'});
    }
    const newAdoption = {imageURL, imageDescription, name, sex, age, breed, story};
    cats.enqueue(newAdoption);
    return res.status(200).json({message : 'added cat to be adopted'});
  });
  
petRouter
  .route('/dog')
  .get((req, res) => {
    if(queueIsEmpty(dogs)){
      return res.status(205).json({message : 'no dogs'});
    }
    return res.status(200).json(queuePeek(dogs));
  });

petRouter
  .route('/dog/adopt')
  .post((req, res)=>{
    const {imageURL, imageDescription, name, sex, age, breed, story} = req.body;
    if(!(imageURL && imageDescription && name && sex && age && breed && story)){
      return res.status(404).json({message : 'missing a field'});
    }
    const newAdoption = {imageURL, imageDescription, name, sex, age, breed, story};
    dogs.enqueue(newAdoption);
    return res.status(200).json({message : 'added dog to be adopted'});
  });
  
petRouter
  .route('/users')
  .post((req, res)=>{
    const {username, password} = req.body;
    if(!username || !password){
      return res.status(400).json({message: 'missing username or password'});
    }
    let myUsers = display(users);
    for(let i = 0 ; i < myUsers.length; i++){
      if(myUsers[i].username === username){
        return res.status(205).json({message: 'username not unique'});
      }
    }
    bcrypt.hash(password , 10 , (err, hash) =>{
      if(err){
        console.log(err);
        return res.json(500).json('server error');
      }
      const user = {
        username, 
        password: hash,
      };
      users.enqueue(user);
      return res.status(200).json({message: 'user created'});
    });
  });

petRouter
  .route('/users')
  .get((req, res)=>{
    const myUsers = display(users);
    const usernames = [];
    if(queueIsEmpty(users)){
      return res.status(204).json({message : 'no users'});
    }
    for (let i = 0; i< myUsers.length; i++){
      usernames.push(myUsers[i].username);
    }
    return res.json(usernames);
  });

petRouter
  .route('/users/adopt')
  .post((req, res)=>{
    const {password, adopt} = req.body;
    if(!password){
      return res.status(500).json({message: 'no password provided'});
    }
    if(!(adopt === 'dog' || adopt === 'cat' || adopt === 'both')){
      return res.status(400).json({message: 'adopt invalid word must be dog cat or both'});
    }
    bcrypt.compare(password , queuePeek(users).password, (err, result)=>{
      if(err){
        return res.status(401).json({
          message: 'auth failed'
        });
      }
      if (result === true){
        if(!queueIsEmpty(dogs) && adopt === 'dog'){
          users.dequeue();
          dogs.dequeue();
          return res.status(200).json({message : 'dog adopted'});
        }
        if(!queueIsEmpty(cats) && adopt === 'cat'){
          users.dequeue();
          cats.dequeue();
          return res.status(200).json({message : 'cat adopted'});
        }
        if(!queueIsEmpty(cats) && !queueIsEmpty(dogs) && adopt === 'both'){
          users.dequeue();
          dogs.dequeue();
          cats.dequeue();
          return res.status(200).json({message : 'cat and dog adopted'});
        }
        return res.status(500).json({
          message: 'missing requested animal(s)'
        });
      }

      return res.status(401).json({
        message: 'bad password'
      });

    });
  });
module.exports = {cats, dogs, petRouter};