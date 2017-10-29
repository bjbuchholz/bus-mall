'use strict';
//array to store the objects
merch.allmerchs = [];
//make an object
function merch(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.timesSeen = 0;
  this.timesChoosen = 0;
  merch.allmerchs.push(this);

}
//makes new product instances
new merch('bag', 'img/bag.jpg');
new merch('banana', 'img/banana.jpg');
new merch('bathroom', 'img/bathroom.jpg');
new merch('boots', 'img/boots.jpg');
new merch('breakfast', 'img/breakfast.jpg');
new merch('bubblegum', 'img/bubblegum.jpg');
new merch('chair', 'img/chair.jpg');
new merch('cthulhu', 'img/cthulhu.jpg');
new merch('dog-duck', 'img/dog-duck.jpg');
new merch('dragon', 'img/dragon.jpg');
new merch('pen', 'img/pen.jpg');
new merch('pet-sweep', 'img/pet-sweep.jpg');
new merch('scissors', 'img/scissors.jpg');
new merch('shark', 'img/shark.jpg');
new merch('sweep', 'img/sweep.png');
new merch('unicorn', 'img/unicorn.jpg');
new merch('usb', 'img/usb.gif');
new merch('water-can', 'img/water-can.jpg');
new merch('wine-glass', 'img/wine-glass.jpg');

//listener, something to be clicked...events!
var event1 = document.getElementById('allImages');
event1.addEventListener('click', all3Images);
// var event2 = document.getElementById('allImages');
// event2.addEventListener('click', image2Pic);
// var event3 = document.getElementById('allImages');
// event3.addEventListener('click', image3Pic);

//randomly display 1 of the product images
function randommerch() {
  return Math.floor(Math.random() * merch.allmerchs.length);
}
randommerch();
console.log(randommerch);

function all3Images(e) {
  // console.log('image 1 pic');
  // console.log(e.target);
  var allimages = randommerch();
  var allEl = document.getElementById('allImages');
  allEl.src = merch.allmerchs[allimages].filepath;
  merch.allmerchs[allimages].timesSeen++;
}
all3Images();
// notes for tonight on what I need to do: create a function that will generate first and second pictures without duplicating the same image twice(some sort of validation)
function generateImages() {
  var img1 = merch.allmerchs;
  console.log(img1);
}
generateImages();

all3Images();
// function image2Pic(e) {
//   console.log('image 2 pic');
//   var img2Pick = randommerch();
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
