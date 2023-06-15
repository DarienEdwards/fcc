// The thing i've been asked to do is comment out some code.

/* The previous code was for single line comments
this one is for multi line comments */

// Next we are going to name a variable
var myName;

// Proper Camel Case Examples

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Test Typing to see if anything changes test test test

const FCC = "freeCodeCamp"; // Change this line
let fact = "is cool!"; // Change this line
fact = "is awesome!";
console.log(FCC, fact); // Change this line

// More FCC examples to make suren i'm pushing code everyday. 

const sum = 10 + 10;

/// This use to confuse me really bad
const myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
  ];
  
  const myData = myArray[2][1];

  function functionWithArgs(one, two) {
    console.log(one + two);
  }
  
  functionWithArgs(3, 16);

  function timesFive(num) {
    return num * 5;
  }
  
  const answer = timesFive(5);
  
  // Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  const outerWear = "sweater";
  
  // Only change code above this line
  return outerWear;
}

myOutfit();

// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  testEqual(10);

  // Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
      return "Not Equal";
    }
    return "Equal";
  }
  
  testNotEqual(10);

  function testElse(val) {

    let result = "";
  
    // Only change code below this line
  
   
  
    if (val > 5) {
  
      result = "Bigger than 5";
  
    } else
  
  {
  
      result = "5 or Smaller";
  
    }
  
   
  
    // Only change code above this line
  
    return result;
  
  }
  
   
  
  testElse(4);

  // The words are still strings and require quotations

 

function testSize(num) {

    // Only change code below this line
  
  if (num < 5) {
  
    return "Tiny";
  
  } else if (num < 10) {
  
    return "Small";
  
  } else if (num < 15) {
  
    return "Medium";
  
  } else if (num < 20) {
  
    return "Large";
  
  } else if (num >= 20) {
  
    return "Huge";
  
  } else {
  
    return "Change Me";
  
  }
  
    // Only change code above this line
  
  }
  
   
  
  testSize(7);
  
  const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

  function golfScore(par, strokes) {
    // Only change code below this line
  if (strokes == 1) {
    
    return "Hole-in-one!";
  
  } else if (strokes <= par - 2) {
   
    return "Eagle";
  } else if (strokes == par - 1) {
   
    return "Birdie";
  } else if (strokes == par) {
   
    return "Par";
  } else if (strokes == par + 1) {
   
    return "Bogey";
  } else if (strokes == par + 2) {
  
    return "Double Bogey";
  
  } else if (strokes >= par + 3) {
    return "Go Home!";
  } else {
    return "That's all folks!"
  }
    // Only change code above this line
  }
  
  golfScore(5, 4);

  // This one was confusing

  function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
  
  switch(val) {
    case 1:
    answer = "alpha";
    break;
     case 2:
     answer = "beta";
     break;
     case 3:
     answer = "gamma";
     break;
     case 4:
     answer = "delta";
     break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);

  function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
  
  switch(val) {
    case "a":
    answer = "apple";
    break;
    case "b":
    answer = "bird";
    break;
    case "c":
    answer = "cat";
    break;
    default:
    answer = "stuff";
    break;
  }
  
    // Only change code above this line
    return answer;
  }
  
  switchOfStuff(1);

  // multiple switch cases with no break

  function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
  
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  
  
    // Only change code above this line
    return answer;
  }
  
  sequentialSizes(1);

  function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line


  switch (val) {
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";


  }

  // Only change code above this line
  return answer;
}

chainToSwitch(7);

// Instead of else if, you can use switch, see below

function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line?
  
    /* 

      if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }

  */
  function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line
  
   switch (val) {
     case "bob":
     answer = "Marley";
     break;
     case 42:
     answer = "The Answer";
     break;
     case 1:
     answer = "There is no #1";
     break;
     case 99:
     answer = "Missed me by this much!";
     break;
     case 7:
     answer = "Ate Nine";
     break;
     case "John":
     answer = "";
     break;
     case 156:
     answer = "";
     break;
   }
  
    // Only change code above this line
    return answer;
  }
  
  chainToSwitch(7);

  // Notes on Javascript, not much to add today, working on something - Will resume tomorrow - One more day