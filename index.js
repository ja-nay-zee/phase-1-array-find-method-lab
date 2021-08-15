//mainly write arrow function when doing these !

// const superbowlWin = record.find(year => year > 1969);

// console.log()



superbowlWin = (record) => {
    const result = record.find( record => record.result === "W" );
    // return result && result.year : undefined
    return !!result ? result.year : undefined;
  }


// could write like this
// function isOdd(element, index, array) {
//     return (element % 2 === 1);
//   }
  
//   [4, 6, 8, 10].find(isOdd); //=> undefined, not found
//   [4, 5, 8, 10].find(isOdd); //=> 5
//   [4, 5, 7, 8, 10].find(isOdd); //=> 5
//   [4, 7, 5,  8, 10].find(isOdd); //=> 7

// could also write like this
// function isOdd(element) {
//     return (element % 2 === 1);
//   }