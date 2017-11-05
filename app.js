'use strict';
//array to store the objects
var allMerch = [];
var randomIndex1;
var randomIndex2;
var randomIndex3;
var previousIndex1;
var previousIndex2;
var previousIndex3;
var pageTotalClicks = 0;
var timesPicked = [];
// console.log(allMerch);

function exportImageData (arr) {
  localStorage.productImages = JSON.stringify(arr);
  console.log(exportImageData);
}

//constructor that makes objects
function Merch(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.timesSeen = 0;
  this.timesPicked = 0;
  allMerch.push(this);
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
new Merch('Tauntaun', 'img/tauntaun.jpg');
new Merch('Unicorn', 'img/unicorn.jpg');
new Merch('Usb', 'img/usb.gif');
new Merch('Water-can', 'img/water-can.jpg');
new Merch('Wine-glass', 'img/wine-glass.jpg');

if (localStorage.productImages) {
  console.log('local storage exist');
  allMerch = JSON.parse(localStorage.productImages);
}

//listener, something to be clicked...events!
var img1 = document.getElementById('image1');
img1.addEventListener('click', totalClicks1);
img1.addEventListener('click', handleClick);
var event2 = document.getElementById('image2');
event2.addEventListener('click', totalClicks2);
event2.addEventListener('click', handleClick);
var event3 = document.getElementById('image3');
event3.addEventListener('click', totalClicks3);
event3.addEventListener('click', handleClick);

function totalClicks1() {
  allMerch[randomIndex1].totalClicks++;
  pageTotalClicks++;
  makeList();
}
function totalClicks2() {
  allMerch[randomIndex2].totalClicks++;
  pageTotalClicks++;
  makeList();
}
function totalClicks3() {
  allMerch[randomIndex3].totalClicks++;
  pageTotalClicks++;
  makeList();
}
//randomly displays image1 and checks to make sure it is not duplicated
function randomImage1() {
  if (pageTotalClicks > 24){
    img1.removeEventListener('click', totalClicks1);
    img1.removeEventListener('click', handleClick);
  }
  randomIndex1 = Math.floor(Math.random() * allMerch.length);
  while (randomIndex1 === previousIndex1 || randomIndex1 === previousIndex2 || randomIndex1 === previousIndex3) {
    randomIndex1 = Math.floor(Math.random() * allMerch.length);
  }
  img1.src = allMerch[randomIndex1].filepath;
}
//randomly displays image2 and checks to make sure it is not duplicated
function randomImage2() {
  if (pageTotalClicks > 24){
    event2.removeEventListener('click', totalClicks2);
    event2.removeEventListener('click', handleClick);
  }
  randomIndex2 = Math.floor(Math.random() * allMerch.length);
  while (randomIndex2 === randomIndex1 || randomIndex2 === previousIndex1 || randomIndex2 === previousIndex2 || randomIndex2 === previousIndex3) {
    randomIndex2 = Math.floor(Math.random() * allMerch.length);}
  // allMerch[randomIndex2].timesSeen += 1;
  event2.src = allMerch[randomIndex2].filepath;
}
//randomly displays image3 and checks to make sure it is not duplicated
function randomImage3() {
  if (pageTotalClicks > 24){
    event3.removeEventListener('click', totalClicks3);
    event3.removeEventListener('click', handleClick);
  }
  randomIndex3 = Math.floor(Math.random() * allMerch.length);
  while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2 || randomIndex3 === previousIndex1 || randomIndex3 === previousIndex2 || randomIndex3 === previousIndex3) {
    randomIndex3 = Math.floor(Math.random() * allMerch.length);}
  // allMerch[randomIndex3].timesSeen += 1;
  event3.src = allMerch[randomIndex3].filepath;
}
function handleClick(event) {
  var imageName = event.target.outerHTML.slice(26).split('.')[0];

  for (var i = 0; i < allMerch.length; i++) {
    var allMerchImage = allMerch[i].name.toLowerCase();
    if (allMerchImage === imageName) {
      allMerch[i].timesPicked++;
    }
  }
  if (event.target.id === 'image1') {
    randomImage1();
  }
  if(event.target.id === 'image2') {
    randomImage2();
  }
  else if(event.target.id === 'image3') {
    randomImage3();
  }
  renderImages();
}

//execute random products
function renderImages() {
  randomImage1();
  randomImage2();
  randomImage3();
  previousIndex1 = randomIndex1;
  previousIndex2 = randomIndex2;
  previousIndex3 = randomIndex3;
}
renderImages();

function makeList() {
  if (pageTotalClicks === 25) {
    exportImageData(allMerch);
    //this holds the value for the votes of each product image
    var data = [];
    for (var i = 0; i < allMerch.length; i++) {
      data.push(allMerch[i].timesPicked);
      console.log('data pushed', allMerch[i].timesPicked);
      console.log('data array after for loop', data);
    }
    //this inputs the name for each product into the bar chart
    var productImages = [];
    for (var i = 0; i < allMerch.length; i++) {
      productImages.push(allMerch[i].name);
    }
    console.log(productImages);
    var ctx = document.getElementById('list').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: productImages,
        datasets: [{
          label: '# of Votes',
          data: data,
          backgroundColor: [
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(275, 99, 132, 0.8)',
            'rgba(74, 162, 235, 0.8)',
            'rgba(275, 206, 86, 0.8)',
            'rgba(95, 192, 192, 0.8)',
            'rgba(173, 102, 255, 0.8)',
            'rgba(275, 159, 64, 0.8)',
            'rgba(235, 99, 132, 0.8)',
            'rgba(24, 162, 235, 0.8)',
            'rgba(235, 206, 86, 0.8)',
            'rgba(55, 192, 192, 0.8)',
            'rgba(133, 102, 255, 0.8)',
            'rgba(235, 159, 64, 0.8)',
            'rgba(205, 99, 132, 0.8)',
            'rgba(154, 162, 235, 0.8)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }}

var clearLS = document.getElementById('clearStorage');
function clearLocalStorage(){
  localStorage.clear();
}
clearLS.addEventListener('click', clearLocalStorage);
