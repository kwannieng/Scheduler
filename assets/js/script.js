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



$(".saveBtn").on("click", function(){

  let time = $(this).siblings(".hour").children().attr("id");
  let myEvent = $(this).siblings(".description").val();
  localStorage.setItem(time,myEvent);

})


$("#textbox1").val(localStorage.getItem("9am"))
$("#textbox2").val(localStorage.getItem("10am"))
$("#textbox3").val(localStorage.getItem("11am"))
$("#textbox4").val(localStorage.getItem("12nn"))
$("#textbox5").val(localStorage.getItem("1pm"))
$("#textbox6").val(localStorage.getItem("2pm"))
$("#textbox7").val(localStorage.getItem("3pm"))
$("#textbox8").val(localStorage.getItem("4pm"))
$("#textbox8").val(localStorage.getItem("5pm"))





})
