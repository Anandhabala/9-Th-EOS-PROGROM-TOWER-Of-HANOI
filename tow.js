let counter = 0;

let pegs = [];
let diskArray = []; // all disk are storing this empty array.
const game = document.getElementById('game'); //get the container from html.


function plotAll(pegMap) {
  pegArray.map((peg, pegindex) => { //increment the moves using loop
    let disks = pegMap[peg]; // each disk are come in a loop 
    if (disks.length > 0) { // check the condition grater than of 0 beacuse the move are icrement.
      disks.map((disk, index) => {
        pickDisk = diskArray.filter((item) => {
          // pick out correct disk from diskArray
          return item.id == disk;
        });
        positionDisk(pickDisk[0].newdiv, disk, index, pegindex); // maximum of disk given 
      });
    }
  });
}

function positionDisk(domdiv, diskNumber, indexOnPeg, pegindex) {
  // set its position
  let pegCenter = 300 * pegindex + 100;
  let diskWidth = diskNumber * 40 + 20;
  let base = 400;
  let diskHeight = 20;

  domdiv.style.left = pegCenter - diskWidth / 2;
  domdiv.style.width = diskWidth;
  domdiv.style.top = 400 - diskHeight * indexOnPeg;
  console.log('Disk:' + diskNumber + ' at top: ' + domdiv.style.top);
  domdiv.style.height = diskHeight;
  domdiv.innerHTML = '  ' + diskNumber;
}
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

function diskFactory(id, indexOnPeg, pegNumber, type) {
  let newdiv = document.createElement('div'); // starting of disk.
  positionDisk(newdiv, id, indexOnPeg, pegNumber);
  newdiv.setAttribute('class', type); 
  newdiv.setAttribute('id', id);
  game.appendChild(newdiv);// adding the disk 
  return {
    id, //return the id and new div for the n number of used.
    newdiv,
  };
}

function pegFactory(id, indexOnPeg, pegNumber, type) {
  let newdiv = document.createElement('div');// start of disk in a function 
  newdiv.setAttribute('class', 'peg'); 
  newdiv.setAttribute('id', id);
  let pegCenter = 300 * pegNumber + 60;
  let base = 400;
  let diskHeight = 200;
  newdiv.style.left = pegCenter;
  newdiv.style.width = 20;
  newdiv.style.top = 200;
  newdiv.style.height = 200;
  game.appendChild(newdiv);// add the new div for new game .
}

function initializeDisks(pegMap) {
  let disks = pegMap[pegArray[0]]; // all the disk start from 0
  diskArray = disks.map((diskid, indexOnPeg) => {
    return diskFactory(diskid, indexOnPeg, 0, 'disk');
  });
  pegArray.map((item, pegId) => {
    pegFactory(pegId, 0, pegId, 'peg');
  });
}

function makeMove() { //moveing of disk in this function.
  if (counter == 0) { //constant the disk is only 5
    var input=document.getElementById('numDisk').value;
    initialize(input, pegMap);
    moveDisks(input, 'A', 'C', 'B');
    initializeDisks(pegHist[0]); // 0 for first disk of A in a array  
  }
  if (counter < pegHist.length) { 
    plotAll(pegHist[counter]); //get the length of disk for loop
  } else {
    alert('complete.');// the loop end moves its display complete.
  }
  counter++; // incrementing the moves of disk.
}
