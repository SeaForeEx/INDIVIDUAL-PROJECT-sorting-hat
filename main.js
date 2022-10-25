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
});

// Lets everything render
const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  } 

// Adds First Year Students to Randomly Generated House

function addFirstYearToArray() {
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

  const object = {
    id: firstYearsArray.length + 1,
    name: document.getElementById("fyname").value,
    house: newHouse
  }
  firstYearsArray.push(object);
  firstYearsOnDom(firstYearsArray);
  console.log(firstYearsArray);
  
 
}

const firstYearsOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title fy-name">${student.name}</h5>
      <p class="card-text fy-house">${student.house}</p>
      <button class="btn btn-primary no-yard-time">No Yard Time Fool!</button>
    </div>
    </div>
    `;
  }
  renderToDom("#cellBlockOne", domString);
}

// D BLOCK SHIZZ

document.querySelector("#no-yard-time").addEventListener("click", () => {
  

  const object = {
    id: dBlockArray.length + 1,
    name: document.getElementById("name").value,
    house: "AZZkaban"
  }
  dBlockArray.push(object);
  dBlocksOnDom(dBlockArray);
  console.log(dBlockArray);
  
});

const dBlocksOnDom = (array) => {
  let domString = "";
  for (const student of array) {
    domString += `
    <div class="card" style="width: 18rem;">
      <div class="card-body">
      <h5 class="card-title db-name">${student.name}</h5>
      <p class="card-text db-house">${student.house}</p>
      </div>
    </div>
    `;
  }
  renderToDom("#dBlock", domString);
}

// NO YARD TIME FOOL!












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













  
