'use strict';
//array to store the objects
Merch.allmerch = [];

//constructor that makes objects
function Merch(name, filepath){
  this.name = name;
  this.filepath = filepath;
  this.timesSeen = 0;
  this.timesChoosen = 0;
  Merch.allmerch.push(this);

}
//makes new product instances
new Merch('Bag', 'img/bag.jpg');
new Merch('Banana', 'img/banana.jpg');
new Merch('Bathroom', 'img/bathroom.jpg');
new Merch('Boots', 'img/boots.jpg');
new Merch('Breakfast', 'img/breakfast.jpg');
new Merch('Bubblegum', 'img/bubblegum.jpg');
new Merch('Chair', 'img/chair.jpg');
new Merch('Cthulhu', 'img/cthulhu.jpg');
new Merch('Dog-duck', 'img/dog-duck.jpg');
new Merch('Dragon', 'img/dragon.jpg');
new Merch('Pen', 'img/pen.jpg');
new Merch('Pet-sweep', 'img/pet-sweep.jpg');
new Merch('Scissors', 'img/scissors.jpg');
new Merch('Shark', 'img/shark.jpg');
new Merch('Sweep', 'img/sweep.png');
new Merch('Unicorn', 'img/unicorn.jpg');
new Merch('Usb', 'img/usb.gif');
new Merch('Water-can', 'img/water-can.jpg');
new Merch('Wine-glass', 'img/wine-glass.jpg');

//listener, something to be clicked...events!
var event1 = document.getElementById('allImages');
event1.addEventListener('click', all3Images);
// var event2 = document.getElementById('allImages');
// event2.addEventListener('click', image2Pic);
// var event3 = document.getElementById('allImages');
// event3.addEventListener('click', image3Pic);

//randomly display 1 of the product images
function randommerch() {
  return Math.floor(Math.random() * Merch.allmerch.length);
}
randommerch();
console.log(randommerch);

function all3Images(e) {
  // console.log('image 1 pic');
  // console.log(e.target);
  var allimages = randommerch();
  var allEl = document.getElementById('allImages');
  allEl.src = Merch.allmerch[allimages].filepath;
  Merch.allmerch[allimages].timesSeen++;
}
all3Images();
// notes for tonight on what I need to do: create a function that will generate first and second pictures without duplicating the same image twice(some sort of validation)
function generateImages() {
  var img1 = Merch.allmerch;
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
