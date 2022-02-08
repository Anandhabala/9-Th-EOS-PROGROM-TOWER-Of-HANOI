const writeAll = (pegMap) => {
    let s = JSON.stringify(pegMap);//converting java value into object string.
    console.log(s);
    pegHist.push(JSON.parse(s));//convert the java object into string object.
  };
  const pegHist = [];//emptyarray created.
  const pegMap = { //constant pag map it s store the A,B,C
    A: [],//empty array A.
    B: [],//empty array B.
    C: [],//empty array c.
  };
  const pegArray = ['A', 'B', 'C'];//store the name name of disk.
  const updateMapAndPlot = (pegMap, from, to) => {
    try {
      let theDisk = pegMap[from].pop(); // every time the disk is move use pop operation 
      pegMap[to].push(theDisk);//add the disk in to another disk.
      writeAll(pegMap);
    } catch (e) {
      console.log('empty');//the disk is 0.its display this message. 
    }
  };

  let moves = 0; //starting  disk value is 0 is a default.
  const moveDisks = function (n, from, to, spare) {
    if (n === 1) {  //check the condition each disk have only one disk.
      updateMapAndPlot(pegMap, from, to);
      moves++; //incrementing the move.
    } else {
      moveDisks(n - 1, from, spare, to);
      updateMapAndPlot(pegMap, from, to);
      moves++;
      moveDisks(n - 1, spare, to, from);
    }
  };
  
  const missing = (from, to) => { //starting and ending we ccreate a function.
    const all = {
      A: 1,
      B: 2,
      C: 3,
    };
    let total = all[from] + all[to];
    let miss = 5 - total; //total 
    let keys = Object.keys(all); // array of key used because the missed key
    return keys[miss];
  };
  
  const initialize = (nDisks, pegMap) => {
    for (let i = nDisks; i >= 1; i--) { //incrementing the disk moves using for loop.
      pegMap['A'].push(i); // adding the disk using push .
    }
    writeAll(pegMap);
  };
