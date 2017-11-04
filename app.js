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
console.log(allMerch);

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
new Merch('Unicorn', 'img/unicorn.jpg');
new Merch('Usb', 'img/usb.gif');
new Merch('Water-can', 'img/water-can.jpg');
new Merch('Wine-glass', 'img/wine-glass.jpg');

//listener, something to be clicked...events!
var event1 = document.getElementById('image1');
event1.addEventListener('click', totalClicks1);
event1.addEventListener('click', renderImages);
var event2 = document.getElementById('image2');
event2.addEventListener('click', totalClicks2);
event2.addEventListener('click', renderImages);
var event3 = document.getElementById('image3');
event3.addEventListener('click', totalClicks3);
event3.addEventListener('click', renderImages);

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
    event1.removeEventListener('click', totalClicks1);
    event1.removeEventListener('click', renderImages);
  }
  randomIndex1 = Math.floor(Math.random() * allMerch.length);
  while (randomIndex1 === previousIndex1 || randomIndex1 === previousIndex2 || randomIndex1 === previousIndex3) {
    randomIndex1 = Math.floor(Math.random() * allMerch.length);
  }
  allMerch[randomIndex1].timesSeen += 1;
  allMerch[randomIndex1].timesPicked += 1;
  console.log(allMerch[randomIndex1].timesPicked);
  event1.src = allMerch[randomIndex1].filepath;
}
//randomly displays image2 and checks to make sure it is not duplicated
function randomImage2() {
  if (pageTotalClicks > 24){
    event2.removeEventListener('click', totalClicks2);
    event2.removeEventListener('click', renderImages);
  }
  randomIndex2 = Math.floor(Math.random() * allMerch.length);
  while (randomIndex2 === randomIndex1 || randomIndex2 === previousIndex1 || randomIndex2 === previousIndex2 || randomIndex2 === previousIndex3) {
    randomIndex2 = Math.floor(Math.random() * allMerch.length);}
  allMerch[randomIndex2].timesSeen += 1;
  event2.src = allMerch[randomIndex2].filepath;
}
//randomly displays image3 and checks to make sure it is not duplicated
function randomImage3() {
  if (pageTotalClicks > 24){
    event3.removeEventListener('click', totalClicks3);
    event3.removeEventListener('click', renderImages);
  }
  randomIndex3 = Math.floor(Math.random() * allMerch.length);
  while (randomIndex3 === randomIndex1 || randomIndex3 === randomIndex2 || randomIndex3 === previousIndex1 || randomIndex3 === previousIndex2 || randomIndex3 === previousIndex3) {
    randomIndex3 = Math.floor(Math.random() * allMerch.length);}
  allMerch[randomIndex3].timesSeen += 1;
  event3.src = allMerch[randomIndex3].filepath;
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
    //this holds the value for the votes of each product image
    var data = [];
    for (var i = 0; i < allMerch.length; i++) {
      data.push(allMerch[i].timesPicked);
      console.log('data pushed', allMerch[i].timesPicked);
      console.log('data array after for loop', data);
    }
    //this is the name for each product
    var merchLabels = ['Bag', 'Banana', 'Bathroom', 'Boots', 'Breakfast', 'Bubblegum', 'Chair', 'Cthulhu', 'Dog-duck', 'Dragon', 'Pen', 'Pet-sweep', 'Scissors', 'Shark', 'Sweep', 'Tauntaun', 'Unicorn', 'Usb', 'Water-can',
      'Wine-glass'];
    var ctx = document.getElementById('list').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: merchLabels,
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
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)',
            'rgba(255, 206, 86, 0.8)',
            'rgba(75, 192, 192, 0.8)',
            'rgba(153, 102, 255, 0.8)',
            'rgba(255, 159, 64, 0.8)',
            'rgba(255, 99, 132, 0.8)',
            'rgba(54, 162, 235, 0.8)'
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
