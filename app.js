'use strict';
//array to store the objects
Product.allProducts = [];
//make an object
function Product(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.timesSeen = 0;
  Product.allProducts.push(this);

}
//makes new product instances
new Product('bag', 'img/bag.jpg');
new Product('banana', 'img/banana.jpg');
new Product('bathroom', 'img/bathroom.jpg');
new Product('boots', 'img/boots.jpg');
new Product('breakfast', 'img/breakfast.jpg');
new Product('bubblegum', 'img/bubblegum.jpg');
new Product('chair', 'img/chair.jpg');
new Product('cthulhu', 'img/cthulhu.jpg');
new Product('dog-duck', 'img/dog-duck.jpg');
new Product('dragon', 'img/dragon.jpg');
new Product('pen', 'img/pen.jpg');
new Product('pet-sweep', 'img/pet-sweep.jpg');
new Product('scissors', 'img/scissors.jpg');
new Product('shark', 'img/shark.jpg');
new Product('sweep', 'img/sweep.png');
new Product('unicorn', 'img/unicorn.jpg');
new Product('usb', 'img/usb.gif');
new Product('water-can', 'img/water-can.jpg');
new Product('wine-glass', 'img/wine-glass.jpg');

//listener, something to be clicked...events!
var event1 = document.getElementById('allImages');
event1.addEventListener('click', all3Images);
// var event2 = document.getElementById('allImages');
// event2.addEventListener('click', image2Pic);
// var event3 = document.getElementById('allImages');
// event3.addEventListener('click', image3Pic);

//randomly display three of the products
function randomProduct() {
  return Math.floor(Math.random() * Product.allProducts.length);
}

function all3Images(e) {
  // console.log('image 1 pic');
  // console.log(e.target);
  var allimages = randomProduct();
  var allEl = document.getElementById('allImages');
  allEl.src = Product.allProducts[allimages].filepath;
  Product.allProducts[allimages].timesSeen++;
}

// notes for tonight on what I need to do: create a function that will generate first and second pictures without duplicating the same image twice(some sort of validation)
function generateImages() {
  var img1 = Product.allProducts.randomProduct;
  console.log(img1);
}
generateImages();

all3Images();
// function image2Pic(e) {
//   console.log('image 2 pic');
//   var img2Pick = randomProduct();
//   var img2El = document.getElementById('image2');
//   img2El.src = Product.allProducts[img2Pick].filepath;
//   Product.allProducts[img2Pick].timesSeen++;
// }
//
// function image3Pic(e) {
//   console.log('image 3 pic');
//   var img3Pick = randomProduct();
//   var img3El = document.getElementById('image3');
//   img3El.src = Product.allProducts[img3Pick].filepath;
//   Product.allProducts[img3Pick].timesSeen++;
// }
// // randomProduct();
// image1Pic();
// image2Pic();
// image3Pic();
