Window.onload = function () {
  colourTimeBlocks();
  timeNineAm();
  timeTenAm();
  timeElevenAm();
  timeTwelveAm();
  timeOnePm();
  timeTwopm();
  timeThreePm();
  timeFourPm();
  timeFivePm();
};

// display current day on top of the screen
const currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

const currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// display seven day time blocks with colour coding to indicate past , present and future
// within each timeblock we require a text input box for each timeblock/day
// each timeblock should contain a save button to save any data inputted into the text box
// when i save a timeblock the content should be saved to local storage
const presentTime = new Date().getHours();
console.log(presentTime);
const colourTimeBlocks = () => {
  console.log("time");
  if (presentTime > 9) {
    $("#comment9am").addClass("past");
  } else if (presentTime >= 9 && presentTime < 10) {
    $("#comment9am").addClass("present");
  } else if (presentTime < 9) {
    $("#comment9am").addClass("future");
  }
  if (presentTime > 10) {
    $("#comment10am").addClass("past");
  } else if (presentTime >= 10 && presentTime < 11) {
    $("#comment10am").addClass("present");
  } else if (presentTime < 10) {
    $("#comment10am").addClass("future");
  }
  if (presentTime > 11) {
    $("#comment11am").addClass("past");
  } else if (presentTime >= 11 && presentTime < 12) {
    $("#comment11am").addClass("present");
  } else if (presentTime < 11) {
    $("#comment11am").addClass("future");
  }
  if (presentTime > 12) {
    $("#comment12pm").addClass("past");
  } else if (presentTime >= 12 && presentTime < 13) {
    $("#comment12pm").addClass("present");
  } else if (presentTime < 12) {
    $("#comment12pm").addClass("future");
  }
  if (presentTime > 13) {
    $("#comment1pm").addClass("past");
  } else if (presentTime >= 13 && presentTime < 14) {
    $("#comment1pm").addClass("present");
  } else if (presentTime < 13) {
    $("#comment1pm").addClass("future");
  }
  if (presentTime > 14) {
    $("#comment2pm").addClass("past");
  } else if (presentTime >= 14 && presentTime < 15) {
    $("#comment2pm").addClass("present");
  } else if (presentTime < 14) {
    $("#comment2pm").addClass("future");
  }
  if (presentTime > 15) {
    $("#comment3pm").addClass("past");
  } else if (presentTime >= 15 && presentTime < 16) {
    $("#comment3pm").addClass("present");
  } else if (presentTime < 15) {
    $("#comment3pm").addClass("future");
  }
  if (presentTime > 16) {
    $("#comment4pm").addClass("past");
  } else if (presentTime >= 16 && presentTime < 17) {
    $("#comment4pm").addClass("present");
  } else if (presentTime < 16) {
    $("#comment4pm").addClass("future");
  }
  if (presentTime > 17) {
    $("#comment5pm").addClass("past");
  } else if (presentTime >= 17 && presentTime < 18) {
    $("#comment5pm").addClass("present");
  } else if (presentTime < 17) {
    $("#comment5pm").addClass("future");
  }
};
colourTimeBlocks()
const input_9am = document.querySelector("#comment9am");
const save_button_9am = document.querySelector("#button9am");

save_button_9am.addEventListener("click", function (event) {
  localStorage.setItem("9am", input_9am.value);
});
const input_10am = document.querySelector("#comment10am");
const save_button_10am = document.querySelector("#button10am");

save_button_10am.addEventListener("click", function (event) {
  localStorage.setItem("10am", input_10am.value);
});
const input_11am = document.querySelector("#comment11am");
const save_button_11am = document.querySelector("#button11am");

save_button_11am.addEventListener("click", function (event) {
  localStorage.setItem("11am", input_11am.value);
});
const input_12pm = document.querySelector("#comment12pm");
const save_button_12pm = document.querySelector("#button12pm");

save_button_12pm.addEventListener("click", function (event) {
  localStorage.setItem("12pm", input_12pm.value);
});
const input_13pm = document.querySelector("#comment13pm");
const save_button_13pm = document.querySelector("#button13pm");

save_button_13pm.addEventListener("click", function (event) {
  localStorage.setItem("13pm", input_13pm.value);
});
const input_14pm = document.querySelector("#comment14pm");
const save_button_14pm = document.querySelector("#button14pm");

save_button_14pm.addEventListener("click", function (event) {
  localStorage.setItem("14pm", input_14pm.value);
});
const input_15pm = document.querySelector("#comment15pm");
const save_button_15pm = document.querySelector("#button15pm");

save_button_15pm.addEventListener("click", function (event) {
  localStorage.setItem("15pm", input_15pm.value);
});
const input_16pm = document.querySelector("#comment16pm");
const save_button_16pm = document.querySelector("#button16pm");

save_button_16pm.addEventListener("click", function (event) {
  localStorage.setItem("16pm", input_16pm.value);
});
const input_17pm = document.querySelector("#comment17pm");
const save_button_17pm = document.querySelector("#button17pm");

save_button_17pm.addEventListener("click", function (event) {
  localStorage.setItem("17pm", input_17pm.value);
});


function iniValues() {
  const nineAm = localStorage.getItem("9am");
  input_9am.value = nineAm;
  const tenAm = localStorage.getItem("10am");
  input_10am.value = tenAm;
  const elevenAm = localStorage.getItem("11am");
  input_11am.value = elevenAm;
  const twelvePm = localStorage.getItem("12pm");
  input_12pm.value = twelvePm;
  const thirteenPm = localStorage.getItem("13pm");
  input_13pm.value = thirteenPm;
const fourteenPm = localStorage.getItem("14pm")
input_14pm.value = fourteenPm;
const fifteenPm = localStorage.getItem("15pm")
input_15pm.value = fifteenPm;
const sixteenPm = localStorage.getItem("16pm")
input_16pm.value = sixteenPm;
const seventeenPm = localStorage.getItem("17pm")
input_17pm.value = seventeenPm;
}
iniValues();

//let currentDayElement = document.getElementById('currentDay')
//var todaysDate = moment();
//console.log(todaysDate.format('dddd'))
//currentDayElement.innerHTML = todaysDate.format('dddd')
