$(document).ready(function() {

let todayDate = $('#currentDay');

let textbox = [
  $('#textbox1'),
  $('#textbox2'),
  $('#textbox3'),
  $('#textbox4'),
  $('#textbox5'),
  $('#textbox6'), 
  $('#textbox7'),
  $('#textbox8'),
  $('#textbox9')
];

let scheduleTime = [
  $('#9am').text(), 
  $('#10am').text(), 
  $('#11am').text(), 
  $('#12nn').text(), 
  $('#1pm').text(), 
  $('#2pm').text(), 
  $('#3pm').text(), 
  $('#4pm').text(), 
  $('#5pm').text() ]

  let button = $(".saveBtn")

  console.log(button)


displayDate()
function displayDate() {
    let rightNow = moment().format('dddd, MMMM Do YYYY');
    todayDate.text(rightNow);
  }

colorTimeblocks ()
function colorTimeblocks (){
  let currentTime = moment().format('HH:00');
  for (index=0; index<scheduleTime.length; index++){  

    console.log(scheduleTime[index])
    console.log(currentTime)

    if ( currentTime.valueOf() > scheduleTime[index].valueOf() ) {
      textbox[index].removeClass("present")
      textbox[index].addClass("past")
    } else if ( currentTime < scheduleTime[index] ) {
      textbox[index].addClass("future")
    } else {
      textbox[index].removeClass("future")
      textbox[index].addClass("present")
    }
  }
}

// let saveButtons = document.querySelector("button")
// let myEvent = document.querySelector(".description")
// let myEvents = []

// function renderEvent() {
//   // Clear todoList element and update todoCountSpan
//   // myEvent.innerHTML = "";
  
//   // Render a new p for each timeblock
//   for (var b = 0; b < myEvents.length; b++) {
//     let schedule = myEvent[b];

//     let p = document.createElement("p");
//     p.textContent = schedule;
//     p.setAttribute("data-index", b);
//     myEvent.appendChild(p);
//   }
// }

// function init() {
//   // Get stored todos from localStorage
//   // Parsing the JSON string to an object
//   let stored = JSON.parse(localStorage.getItem("Event"));

//   // If my Event were retrieved from localStorage, update the myEvents array to it
//   if (stored !== null) {
//     myEvents = stored;
//   }

//   // Render todos to the DOM
//   renderEvent();
// }

// function storeEvent() {
//   // Stringify and set "todos" key in localStorage to todos array
//   localStorage.setItem("Event", JSON.stringify(myEvents));
// }

// // When save button is clicked...
// for (a=0; a<saveButtons.length; a++){

// saveButtons.addEventListener("click", function(e) {
//   e.preventDefault();
//   let eventText = myEvent.value.trim();

//   // Return from function early if submitted todoText is blank
//   if (eventText === "") {
//     return;
//   }

//   // Add new event to myEvents array, clear the input
//   myEvents.push(eventText);
//   myEvent.value = "";

//   // Store updated todos in localStorage, re-render the list
//   storeEvent();
//   renderEvent();

// })

// }



var myEvent = document.querySelector(".description");
var myEvents = [];

init();

function renderEvents() {
  
  // Render a new p for each timeblock
  for (var a = 0; a < myEvents.length; a++) {
    let schedule = myEvents[i];

    let p = document.createElement("p");
    p.textContent = schedule;
    p.setAttribute("data-index", a);

    myEvent.appendChild(p);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storeEvents = JSON.parse(localStorage.getItem("myEvents"));

  // If myEvents were retrieved from localStorage, update the myEvents array to it
  if (storeEvents !== null) {
    myEvents = storeEvents;
  }

  // Render myEvents to the DOM
  renderEvents();
}


function store() {

  // Stringify and set "myEvents" key in localStorage to myEvents array
  localStorage.setItem("myEvents", JSON.stringify(myEvents));
}  
// When button is clicked...

for (var b = 0; b < button.length; b++) {
  button.on("click", function(e) {
  e.preventDefault();

  let eventText= myEvent.value.trim();

  // Return from function early if submitted eventTextis blank
  if (eventText=== "") {
    return;
  }

  // Add new eventText to myEvents array, clear the input
  myEvents.push(eventText);
  myEvent.value = "";
  })
  // Store updated myEvents in localStorage, re-render the list
  store();
  renderEvents();
}

})
