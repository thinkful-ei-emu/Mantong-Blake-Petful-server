const {cats, dogs} = require('./petRouter.js');

function main(){
  const cat1 = 
  {
    imageURL:'https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Fluffy',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  };
  cats.enqueue(cat1);
  const cat2 = 
  {
    imageURL:'https://www.pexels.com/photo/animal-pet-cute-kitten-45201/', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Miao',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  };
  cats.enqueue(cat2);
  const cat3 = 
  {
    imageURL:'https://www.pexels.com/photo/grey-and-white-short-fur-cat-104827/', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Mapple',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  };
  cats.enqueue(cat3);
  const cat4 = 
  {
    imageURL:'https://www.pexels.com/photo/photo-of-gray-and-white-tabby-kitten-sitting-on-sofa-2194261/', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Baobei',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  };
  cats.enqueue(cat4);
  const cat5 = 
  {
    imageURL:'https://www.pexels.com/photo/selective-focus-photography-of-orange-tabby-cat-1170986/', 
    imageDescription: 'Orange bengal cat with black stripes lounging on concrete.',
    name: 'Pretty',
    sex: 'Female',
    age: 2,
    breed: 'Bengal',
    story: 'Thrown on the street'
  };
  cats.enqueue(cat5);
  const dog1 = 
  {
    imageURL: 'http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Zeus',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  };
  dogs.enqueue(dog1);
  const dog2 = 
  {
    imageURL: 'https://www.pexels.com/photo/adorable-animal-breed-canine-356378/',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Eleven',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  };
  dogs.enqueue(dog2);
  const dog3 = 
  {
    imageURL: 'https://www.pexels.com/photo/adorable-blur-breed-close-up-406014/',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Little',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  };
  dogs.enqueue(dog3);
  const dog4 = 
  {
    imageURL: 'https://www.pexels.com/photo/black-and-brown-short-haired-puppy-in-cup-39317/',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Big',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  };
  dogs.enqueue(dog4);
  const dog5 = 
  {
    imageURL: 'https://www.pexels.com/photo/beagle-puppy-1345191/',
    imageDescription: 'A smiling golden-brown golden retreiver listening to music.',
    name: 'Wangcai',
    sex: 'Male',
    age: 3,
    breed: 'Golden Retriever',
    story: 'Owner Passed away'
  };
  dogs.enqueue(dog5);
}

module.exports = {main};