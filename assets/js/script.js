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

function displayDate() {
    let rightNow = moment().format('dddd, MMMM Do YYYY');
    todayDate.text(rightNow);
  }
displayDate()


let saveButtons =[
  $("#button1"),
  $("#button2"),
  $("#button3"),
  $("#button4"),
  $("#button5"),
  $("#button6"),
  $("#button7"),
  $("#button8"),
  $("#button9")
]

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













})