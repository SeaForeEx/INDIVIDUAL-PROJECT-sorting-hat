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
document.getElementById("mainArray").hidden = true;
document.getElementById("bottomImage").hidden = true;

// Hides Sorting Chair and Shows Main School Page
document.getElementById("chairButton").addEventListener("click", () => {
  document.getElementById("sortingChair").hidden = true;
  document.getElementById("topImage").hidden = false;
  document.getElementById("congrats").hidden = false;
  document.getElementById("sortingForm").hidden = false;
  document.getElementById("bizzuttons").hidden = false;
  document.getElementById("mainArray").hidden = false;
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
      newHouse = "SnoopLionPaw";
    } else if (randomHouse === 3) {
      newHouse = "Slizzerin";
    }

// Defines user name and house as an object

  const object = {
    id: firstYearsArray.length + 1,
    name: document.getElementById("fyname").value,
    house: newHouse
  }

// Pushes object on first year array

  firstYearsArray.push(object);
  const form = document.querySelector("form");
  form.reset();

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

const cellblockone = document.querySelector("#cellBlockOne");  // changing name of element to cellblockone

// Adds event listener to "no yard time fool" button

cellblockone.addEventListener("click", (e) => {
  if (e.target.id.includes("noyard")) { // targets the id
  // block id (string), index (number) 
  // newdB (array), newdBobj (object) all undefined
  
  // targets the button with noyard as id
  // gets number from button id
  const [, burrito] = e.target.id.split("--"); //still a string
  console.log(e.target.id);
  // block id (string)
  // index (number), newdB (array), newdBobj (object) undefined

  // assigns element's id to a variable
  const index=firstYearsArray.findIndex(quesadilla => quesadilla.id === Number(burrito)); // converts burrito string id to integer, getting the right index number i'm trying to target
  console.log(index,burrito);
  console.log(firstYearsArray[index])
  // block id (string) defined 
  // index (number), newdB (array), newdBobj (object) undefined

  // assigns 1 spliced array element to a variable
  // saves spliced array element 
  // to be placed into d block array
  const newdB = firstYearsArray.splice(index, 1);
  // block id (string), index (number) defined
  // newdB (array), newdBobj (object) undefined

  // assigns spliced array object to a variable
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
