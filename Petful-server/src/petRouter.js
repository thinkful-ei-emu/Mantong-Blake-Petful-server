const {Queue, queuePeek, queueIsEmpty, display} = require('./queue.js');
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
    const {username} = req.body;
    if(!username){
      return res.status(400).json({message: 'missing username'});
    }
    let myUsers = display(users);
    for(let i = 0 ; i < myUsers.length; i++){
      if(myUsers[i].username === username){
        return res.status(205).json({message: 'username not unique'});
      }
    }
 
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
    const { adopt} = req.body;
    
    if(!(adopt === 'dog' || adopt === 'cat' || adopt === 'both')){
      return res.status(400).json({message: 'adopt invalid word must be dog cat or both'});
    }
    if(adopt==='dog'){
      dogs.dequeue();
      return res.status(200).json({messgae:'dog adopted'});
    }
    if(adopt==='cat'){
      cats.dequeue();
      return res.status(200).json({messgae:'cat adopted'});
    }
    if(adopt==='both'){
      dogs.dequeue();
      cats.dequeue();
      return res.status(200).json({messgae:'both cat and dog adopted'});
    }
    
  });
module.exports = {cats, dogs, petRouter};