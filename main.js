const firstYearsArray = [
  {
    id: 1,
    name: 'Wiz Khalifa',
    house: 'HufflePuffPuffPass'
  },
  {
    id: 2,
    name: 'Kendrick Lamar',
    house: 'GryffinDRE'
  },
  {
    id: 3,
    name: 'Slim Shady',
    house: 'SnoopLionPaw'
  },
  {
    id: 4,
    name: 'Martha Stewart',
    house: 'Slizzerin'
  }
];
const dBlockArray = [
  {
    id: 1,
    name: 'Tim Dogg',
    house: 'AZZkaban'
  },
  {
    id: 2,
    name: 'Suge Knight',
    house: 'AZZkaban'
  }
];

// Shows Sorting Chair and Hides Main School Page
document.getElementById("sortingChair").hidden = false;
document.getElementById("topImage").hidden = true;
document.getElementById("congrats").hidden = true;
document.getElementById("sortingForm").hidden = true;
document.getElementById("bizzuttons").hidden = true;
document.getElementById("fy-header").hidden = true;
document.getElementById("cellBlockOne").hidden = true;
document.getElementById("dB-header").hidden = true;
document.getElementById("dBlock").hidden = true;
document.getElementById("bottomImage").hidden = true;

// Hides Sorting Chair and Shows Main School Page
document.getElementById("chairButton").addEventListener("click", () => {
  document.getElementById("sortingChair").hidden = true;
  document.getElementById("topImage").hidden = false;
  document.getElementById("congrats").hidden = false;
  document.getElementById("sortingForm").hidden = false;
  document.getElementById("bizzuttons").hidden = false;
  document.getElementById("fy-header").hidden = false;
  document.getElementById("cellBlockOne").hidden = false;
  document.getElementById("dB-header").hidden = false;
  document.getElementById("dBlock").hidden = false;
  document.getElementById("bottomImage").hidden = false;

  document.title = "Snoop Doggy Doggwart's School of Snitchcraft and Wizzledry";

});

// Lets everything render
const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  } 

function addFirstYearToArray() {

// Picks Randomly Generated House for First Year Student

  let newHouse = "";
  randomHouse = Math.floor(Math.random()*4);
  if (randomHouse === 0) {     
      newHouse = "GryffinDRE";
    } else if (randomHouse === 1) {
      newHouse = "HufflePuffPuffPass";
    } else if (randomHouse === 2) {
      newHouse = "SnoopLionPaw"
    } else if (randomHouse === 3) {
      newHouse = "Slizzerin"
    }

// Defines user name and house as an object

  const object = {
    id: firstYearsArray.length + 1,
    name: document.getElementById("fyname").value,
    house: newHouse
  }

// Pushes object on first year array

  firstYearsArray.push(object);

// Function called within a function
// Sends this info to the next function
  firstYearsOnDom(firstYearsArray);

// Tested to see if first year array was edited
  console.log(firstYearsArray);
}

const firstYearsOnDom = (array) => {

// starts with empty string

  let domString = "";

// Turns each first year object into an HTML card

  for (const student of array) {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title fy-name">${student.name}</h5>
      <p class="card-text fy-house">${student.house}</p>
      <button id="noyard--${student.id}" class="btn btn-primary">No Yard Time Fool!</button>
    </div> 
    </div>
    `; // array split occurs at the object's id
  }

// Renders HTML cards onto the DOM

  renderToDom("#cellBlockOne", domString);
}

// Assigns query selector to a variable

const cellblockone = document.querySelector("#cellBlockOne");  // Puts content in this DIV

// Adds event listener to "no yard time fool" button

cellblockone.addEventListener("click", (e) => {
  if (e.target.id.includes("noyard")) { // targets the id
  // block id (string), index (number) 
  // newdB (array), newdBobj (object) all undefined
  
  // targets the split
  // split occurs after -- with the object's id?
  const [, id] = e.target.id.split("--");
  // block id (string), index (number),
  // newdB (array), newdBobj (object) undefined

  // assigns element's id to a variable
  const index=firstYearsArray.findIndex(e => e.id === Number(id)); // converts id to number
  // block id (string) defined 
  // index (number), newdB (array), newdBobj (object) undefined

  // assigns 1 spliced array element to a variable
  // saves spliced array element 
  // to be placed into d block array
  const newdB = firstYearsArray.splice(index, 1);
  // block id (string), index (number) defined
  // newdB (array), newdBobj (object) undefined

  // assigns spliced array object to a variable?
  // accesses first element of spliced array
  const newdBobj = newdB[0];
  // block id (string), index (number) & newdB (array) defined
  // newdBobj (object) undefined

  // pushes spliced array object to dBlock array?
  dBlockArray.push(newdBobj);
  // block id (string), index (number) 
  // newdB (array), newdBobj (object) all defined
  
  // sends info to next function
  dBlocksOnDom(dBlockArray);

  // refreshes new first year array on screen
  // takes new d block student
  // off of the first year dom
  firstYearsOnDom(firstYearsArray);

  // double checks d block array on console
  console.log(dBlockArray);
} 
});

// Turns each d block object into an HTML card

const dBlocksOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title db-name">${student.name}</h5>
      <p class="card-text db-house">"AZZkaban"</p>
      </div>
    </div>
    `;
  }

// Renders HTML cards onto the DOM

  renderToDom("#dBlock", domString);
}

const filter = (array, houseString) => {
  const typeArray = []; // Filters terms with specific house

  for (const member of array) {
    if (member.house === houseString) {
    typeArray.push(member); 
  }
} //Goes through array and adds qualifying members to array

return typeArray;
}

// Query selectors for each house filter button

const showGryf = document.querySelector(".gryf");
const showHuff = document.querySelector(".huff");
const showLion = document.querySelector(".lion");
const showSliz = document.querySelector(".slizz");
const showAllHouses = document.querySelector(".allHouses");

// Event listeners for each house filter button

showGryf.addEventListener('click', () => {
  const gryffy = filter(firstYearsArray, 'GryffinDRE');
  firstYearsOnDom(gryffy); // cat button clicked
})

showHuff.addEventListener('click', () => {
  const huffy = filter(firstYearsArray, 'HufflePuffPuffPass');
  firstYearsOnDom(huffy);
})

showLion.addEventListener('click', () => {
  const liony = filter(firstYearsArray, 'SnoopLionPaw');
  firstYearsOnDom(liony);
})

showSliz.addEventListener('click', () => {
  const slizzy = filter(firstYearsArray, 'Slizzerin');
  firstYearsOnDom(slizzy);
})

showAllHouses.addEventListener('click', () => {
  firstYearsOnDom(firstYearsArray);
});

// Random thing at the buttom of the javascript
// But it starts the whole program?
// What is event bubbling?

const startApp = () => {
  dBlocksOnDom(dBlockArray);
  firstYearsOnDom(firstYearsArray);
}

startApp(); 




























// const firstYearDiv = document.getElementById("cellBlockOne");

// for (let i=0; i<firstYearsArray.length; i++) {
  
//   const fya=firstYearsArray[i];

//   const firstYearCardString = `
//   <div class="card">
//     <h5 class="fy-name">${fya.name}</h5>
//     <p class="daHouse">${fya.house}</p>
//     <button class="btn btn-danger adopt-me" id="delete--">Expel</button>
//   </div> 
//   `;
//   fyDiv.innerHTML+=firstYearCardString;
//   renderToDom("#cellBlockOne", firstYearCardString)
// } 

// const renderToDom = (divId, htmlToRender) => {
//   const selectedDiv = document.querySelector(divId);
//   selectedDiv.innerHTML = htmlToRender;
// }

// // select/target the form on the DOM
// const form = document.querySelector('form');

// // create a function that grabs all the values from the form
// // pushes the new object to the array
// // repaints the DOM with the new pet
// const createFirstYear = (e) => {
//   e.preventDefault();
//   let randomHouse = Math.floor(Math.random()*4);
//   let newHouse = "";
//   if (randomHouse === 1) {
//     newHouse = "GryffinDRE";
//   } else if (randomHouse === 2) {
//     newHouse = "HufflePuffPuffPass";
//   } else if (randomHouse === 3) {
//     newHouse = "SnoopLionPaw"
//   } else if (randomHouse === 4) {
//     newHouse = "Slizzerin"
//   }

//   const newFirstYearObj = { //grabs the values
//     name: document.querySelector("#name").value,
//     house: newHouse
//   }

//   firstYearsArray.push(newFirstYearObj); // pushes new object
//   cardsOnDom(firstYearsArray); // refreshes DOM with new pet
//   form.reset(); // resets da form
// }

// // Add an event listener for the form submit
// // Runs the function once you click Submit

// form.addEventListener('submit', createFirstYear);

// const startApp = () => {
//   cardsOnDom(firstYearsArray);
//   events(); // ALWAYS LAST
// }

// startApp();













  
